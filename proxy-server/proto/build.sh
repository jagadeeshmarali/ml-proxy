#!/bin/bash

PROTO_DIR=./proto

# Generate JavaScript code
npx run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./proto \
    --grpc_out=./proto \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./proto \
    proto/*.proto

# Generate TypeScript code (d.ts)
npx run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=./proto \
    -I ./proto \
    proto/*.proto