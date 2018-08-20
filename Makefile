NODE_BIN = ./node_modules/.bin
PARCEL = $(NODE_BIN)/parcel
BUILD_DIR = ./build

all: clean build

build:
	$(PARCEL) build \
		--out-dir $(BUILD_DIR) \
		./client/index.pug

server:
	$(PARCEL) --open \
		--port 8080 \
		--out-dir $(BUILD_DIR) \
		./client/index.pug

clean:
	rm -rf ./cache
	rm -rf $(BUILD_DIR)


.PHONY: clean server
