// vim:et:sw=4

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import page from 'page';

/**
 * A simple, easy router for React.
 *
 * Usage:
 *
 *    var routes = [
 *        ['/', Home],
 *        ['/work/:slug', Project],
 *        ['/info', Info, requireLoginMiddleware],
 *        ['*', NotFound]
 *    ];
 *
 *    ReactDOM.render(<Router routes={routes} />, document.getElementById('root'));
 *
 */
export default class Router extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            component: <div />
        };
    }

    componentDidMount() {
        this.props.routes.forEach((route) => {

            let [url, Component, ...middleware] = route;

            page(url, ...middleware, (ctx) => {
                this.setState({
                    component: <Component context={ctx} params={ctx.params} querystring={ctx.querystring} />
                });
            });

        });

        page.start();
    }

    /**
     * Standard React render
     */
    render() {
        return this.state.component;
    }

    /**
     * Render to a string for server side rendering
     */
    renderToString() {
        return ReactDOMServer.renderToString(this.state.component);
    }

    /**
     * Handy function for linking componets to URLs via `onClick`.
     *
     * Usage:
     *
     *     <div onClick={Router.link('/')} />
     */
    static link(url) {
        return function() {
            page(url);
        }
    }

};
