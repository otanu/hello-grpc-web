export class HelloReply {
  constructor ();
  getMessage(): string;
  setMessage(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HelloReply;
}

export class HelloRequest {
  constructor ();
  getName(): string;
  setName(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HelloRequest;
}

