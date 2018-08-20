NODE_BIN = ./node_modules/.bin
PARCEL = $(NODE_BIN)/parcel
BUILD_DIR = ./build

all: clean build_client build_server

build_client:
	$(PARCEL) build \
		--out-dir $(BUILD_DIR) \
		./client/index.pug

build_server:
	mkdir -p $(BUILD_DIR)
	go build -x -v -o $(BUILD_DIR)/server src/main.go

# Devserver
server:
	$(PARCEL) --open \
		--port 8080 \
		--out-dir $(BUILD_DIR) \
		./client/index.pug

clean:
	rm -rf ./cache
	rm -rf $(BUILD_DIR)

.PHONY: clean server build_client build_server
