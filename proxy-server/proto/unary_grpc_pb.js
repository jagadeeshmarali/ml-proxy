// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var unary_pb = require('./unary_pb.js');

function serialize_unary_Message(arg) {
  if (!(arg instanceof unary_pb.Message)) {
    throw new Error('Expected argument of type unary.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_unary_Message(buffer_arg) {
  return unary_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_unary_MessageResponse(arg) {
  if (!(arg instanceof unary_pb.MessageResponse)) {
    throw new Error('Expected argument of type unary.MessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_unary_MessageResponse(buffer_arg) {
  return unary_pb.MessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UnaryService = exports.UnaryService = {
  // A simple RPC.
//
// Obtains the MessageResponse at a given position.
getServerResponse: {
    path: '/unary.Unary/GetServerResponse',
    requestStream: false,
    responseStream: false,
    requestType: unary_pb.Message,
    responseType: unary_pb.MessageResponse,
    requestSerialize: serialize_unary_Message,
    requestDeserialize: deserialize_unary_Message,
    responseSerialize: serialize_unary_MessageResponse,
    responseDeserialize: deserialize_unary_MessageResponse,
  },
};

exports.UnaryClient = grpc.makeGenericClientConstructor(UnaryService);
