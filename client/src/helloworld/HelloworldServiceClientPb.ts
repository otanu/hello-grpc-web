/**
 * @fileoverview gRPC-Web generated client stub for helloworld
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';
import {
  HelloReply,
  HelloRequest} from './helloworld_pb';

export class GreeterClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: {};
  options_: { [s: string]: {}; };

  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSayHello = new grpcWeb.AbstractClientBase.MethodInfo(
    HelloReply,
    (request: HelloRequest) => {
      return request.serializeBinary();
    },
    HelloReply.deserializeBinary
  );

  sayHello(
    request: HelloRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: HelloReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/helloworld.Greeter/SayHello',
      request,
      metadata,
      this.methodInfoSayHello,
      callback);
  }

}

