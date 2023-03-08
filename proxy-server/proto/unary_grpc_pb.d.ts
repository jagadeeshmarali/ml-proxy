// package: unary
// file: unary.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as unary_pb from "./unary_pb";

interface IUnaryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getServerResponse: IUnaryService_IGetServerResponse;
}

interface IUnaryService_IGetServerResponse extends grpc.MethodDefinition<unary_pb.Message, unary_pb.MessageResponse> {
    path: "/unary.Unary/GetServerResponse";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<unary_pb.Message>;
    requestDeserialize: grpc.deserialize<unary_pb.Message>;
    responseSerialize: grpc.serialize<unary_pb.MessageResponse>;
    responseDeserialize: grpc.deserialize<unary_pb.MessageResponse>;
}

export const UnaryService: IUnaryService;

export interface IUnaryServer extends grpc.UntypedServiceImplementation {
    getServerResponse: grpc.handleUnaryCall<unary_pb.Message, unary_pb.MessageResponse>;
}

export interface IUnaryClient {
    getServerResponse(request: unary_pb.Message, callback: (error: grpc.ServiceError | null, response: unary_pb.MessageResponse) => void): grpc.ClientUnaryCall;
    getServerResponse(request: unary_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: unary_pb.MessageResponse) => void): grpc.ClientUnaryCall;
    getServerResponse(request: unary_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: unary_pb.MessageResponse) => void): grpc.ClientUnaryCall;
}

export class UnaryClient extends grpc.Client implements IUnaryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getServerResponse(request: unary_pb.Message, callback: (error: grpc.ServiceError | null, response: unary_pb.MessageResponse) => void): grpc.ClientUnaryCall;
    public getServerResponse(request: unary_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: unary_pb.MessageResponse) => void): grpc.ClientUnaryCall;
    public getServerResponse(request: unary_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: unary_pb.MessageResponse) => void): grpc.ClientUnaryCall;
}
