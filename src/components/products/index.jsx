import React, { Component } from "react";
import Form from "./form";
import List from "./list";

export default class index extends Component {
  render() {
    return (
      <div>
        <div>
          <Form />
        </div>
        <div>
          <List />
        </div>
      </div>
    );
  }
}
