// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import Accordion from "react-bootstrap/Accordion";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

// class Teacher extends Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     datas: [
//   //       {
//   //         id: 1,
//   //         course: "CS 246",
//   //         lectures: ["Lecture 1", "Lecture 2"]
//   //       },
//   //       {
//   //         id: 2,
//   //         course: "CS 136",
//   //         lectures: ["Lecture 1", "Lecture 2", "Lecture 3"]
//   //       }
//   //     ]
//   //   };
//   // }
//   render() {
//     return (
//       <div style={{ textAlign: "center", marginTop: 100 }}>
//         <h1 style={{ color: "white" }}>Welcome Mr. Teacher</h1>
//         <br />
//         <div>
//         <Accordion>
//                 <Card>
//                   <Card.Header>
//                     <Accordion.Toggle as={Button} variant="primary" eventKey="0">
//                       {course}
//                     </Accordion.Toggle>
//                   </Card.Header>
//             {Object.keys(dict[course]).map((lecture) => {
//               return (
//                 <Accordion.Collapse eventKey="0">
//                   <Card.Body as={Button} variant="link"> {dict[course][lecture]}</Card.Body>
//                 </Accordion.Collapse>
//                   );
//                 }
//               )
//             }
//               </Card>
//               </Accordion>
//             </div>
//           );
//         }
//       )
//     }
//     <div>
//     <InputGroup className="mb-3">
//     <FormControl as={'input'} id="cname"
//       placeholder="Course Name"
//       aria-label="Course Name"
//       aria-describedby="basic-addon2"
//     />

//     <InputGroup.Append>
//       <Button variant="primary" type="submit" >Add a Course</Button>
//     </InputGroup.Append>
//   </InputGroup>
//   <Button> {document.getElementById("cname")}  </Button>
//   </div>
//   </div>
//   );
// }
// }
// export defualt Teacher;

//         {/* <Accordion>
//           <Card>
//             <Card.Header className="classHeader">
//               <Accordion.Toggle
//                 className="button"
//                 as={Button}
//                 variant="primary"
//                 eventKey="0"
//               >
//                 {this.state.datas.map((data) => {
//                   if(data.id === currentNum) {
//                     return data.course
//                   }
//                 }}
//               </Accordion.Toggle>
//             </Card.Header>
//             <Accordion.Collapse eventKey="0">
//               <div>
//                 {this.state.datas.map((data) => {
//                   if(data.id === "CS 136") {
//                     data.lectures.map(lecture => {
//                       return <Card.Body>{lecture}</Card.Body>
//                     })
//                   }
//                 })}
//               </div>
//             </Accordion.Collapse>
//             </Card.Header>
//             <Accordion.Collapse eventKey="1">
//               <div>
//               {this.state.datas.map((data) => {
//                   if(data.id === "CS 136") {
//                     data.lectures.map(lecture => {
//                       return <Card.Body>{lecture}</Card.Body>
//                     })
//                   }
//                 })}
//               </div>
//             </Accordion.Collapse>
//           </Card>
//         </Accordion> */}

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Accordion,
  Card,
  Button,
  ModalBody,
  ModalDialog,
  Modal,
  Form,
  InputGroup,
  FormControl,
  FormCheck
} from "react-bootstrap/";
import { Link } from "react-router-dom";
import { set } from "mongoose";

class Teacher extends Component {
  constructor() {
    super();
    this.state = {
      dict: [
        { id: "CS 136", lectures: ["Lecture 1", "Lecture 2"] },
        { id: "CS 246", lectures: ["Lecture 1", "Lecture 2", "Lecture 3"] }
      ],
      addCourse: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      addCourse: event.target.value
    });
  }

  handleClick() {
    let newDict = this.state.dict;
    if (this.state.addCourse !== "") {
      newDict.push({
        id: this.state.addCourse,
        lectures: []
      });
    }

    this.setState({
      dict: newDict,
      addCourse: ""
    });
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <h1 style={{ marginTop: 100, color: "white" }}>
          Welcome, Mr. Instructor
        </h1>
        {this.state.dict.map(course => {
          return (
            <div>
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="secondary"
                      eventKey="0"
                    >
                      {course.id}
                    </Accordion.Toggle>
                  </Card.Header>
                  {course.lectures.map(lecture => {
                    return (
                      <Accordion.Collapse eventKey="0">
                        <Card.Body as={Button} variant="link">
                          {lecture}
                        </Card.Body>
                      </Accordion.Collapse>
                    );
                  })}
                  <Accordion.Collapse eventKey="0">
                    <Card.Body as={Button} variant="link">
                      <Link to="/teacher/question" activeClassName="active">
                        >Create New Session
                      </Link>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          );
        })}
        <div>
          <input
            value={this.state.addCourse}
            type="text"
            onChange={this.handleChange}
            placeholder="Couese Add"
            name="msg"
            required
          />
          <Button variant="secondary" type="submit" onClick={this.handleClick}>
            Add a Course
          </Button>
        </div>
      </div>
    );
  }
}

export default Teacher;
