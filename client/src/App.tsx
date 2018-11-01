import * as React from "react";
import "./App.css";

import { HelloRequest } from "./helloworld/helloworld_pb";
import { GreeterClient } from "./helloworld/HelloworldServiceClientPb";

interface IState {
  inputText: string;
  message: string;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      inputText: "World",
      message: ""
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  public onClick() {
    const request = new HelloRequest();
    request.setName(this.state.inputText);

    const client = new GreeterClient("http://localhost:8080", {}, {});
    client.sayHello(request, {}, (err, ret) => {
      if (err || ret === null) {
        throw err;
      }
      this.setState({ message: ret.getMessage() });
    });
  }

  public onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputText: e.target.value });
  }

  public render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.onChange}
        />
        <button onClick={this.onClick}>Send</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
