import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Alert";
import Text from "react-bootstrap/Alert";
import "./thumb.png";
import { Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <Button
          variant="secondary"
          className="inc"
          onClick={e => this.increment(e)}
        >
          <Row>
            <Col>
              <img src={require("./thumb.png")} />
            </Col>

            <Col>
              <p className="thumbs"> {this.state.count}</p>
            </Col>
          </Row>
        </Button>
      </div>
    );
  }
}
function Question(props) {
  console.log(props.text);
  return (
    <div className="card w-75">
      <Row>
        <Col className="card-text">
          <p>{props.text}</p>
        </Col>
        {<Count />}
      </Row>
    </div>
  );
}

class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentType: "",
      questions: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleChange(event) {
    this.setState({
      studentType: event.target.value
    });
  }

  handleSend() {
    let currentQuestions = this.state.questions;
    if (this.state.studentType !== "") {
      currentQuestions.push(this.state.studentType);
    }

    this.setState({
      questions: currentQuestions,
      studentType: ""
    });
  }

  render() {
    // const questionsArr = this.state.questions.map(data => {
    //   return <p>data</p>;
    // });
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ marginTop: 10, color: "white" }}>
          <h1>Welcome to class, your Session ID is: BE23N </h1>
          <p>todays lesson is on algorithm analysis</p>
          <p>
            ask a question and your classmates and the instructor will see it
          </p>

          <div id="myForm">
            <h1>Question</h1>

            <input
              style={{ width: 500 }}
              value={this.state.studentType}
              type="text"
              onChange={this.handleChange}
              placeholder="Type message.."
              name="msg"
              required
            />
            <Button
              style={{ marginLeft: 10, marginRight: 10 }}
              variant="primary"
              onClick={this.handleSend}
            >
              Send
            </Button>
            <Button variant="primary" className="btn cancel">
              Close
            </Button>
          </div>
        </div>
        <br />
        <div>
          {this.state.questions.map(question => {
            return <Question text={question} />;
          })}
        </div>
      </div>
    );
  }
}

export default Student;
