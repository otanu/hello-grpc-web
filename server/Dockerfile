FROM golang:1.11.1

ENV GO111MODULE=on

WORKDIR /go/src/hello-grpc-web/server
COPY . .
RUN go get github.com/pilu/fresh
CMD ["fresh"]
EXPOSE 9090
