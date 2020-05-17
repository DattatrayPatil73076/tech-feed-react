import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import Articles from "./Articles";

export class Form extends Component {
  state = {
    str2: "",
    visible: false,
  };

  hadleChannge = (event) => {
    this.setState({ str2: event.target.value });
  };

  validate = () => {
    if (this.state.str2 === "") {
      return false;
    }
    return true;
  };

  hadleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState({ str2: this.state.str2, visible: true });
    }
  };

  render() {
    return (
      <div>
        {this.state.visible ? (
          <div>
            <h3>Result For "{this.state.str2}"</h3>
            <Button
              style={{ margin: 15 }}
              variant="contained"
              color="primary"
              href="https://tech-feed-articles.web.app"
            >
              Serch Another Tag
            </Button>
            <Articles str1={this.state.str2} />
          </div>
        ) : (
          <div>
            {" "}
            <form onSubmit={this.hadleSubmit} noValidate align="center">
              <TextField
                id="category"
                value={this.state.str2}
                required
                style={{ marginBottom: 30 }}
                label="Search Category"
                onChange={this.hadleChannge}
              />
              <Button
                type="submit"
                style={{ margin: 15 }}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </form>
          </div>
        )}
        {this.state.visible ? null : <Articles str1={""} />}
      </div>
    );
  }
}

export default Form;
