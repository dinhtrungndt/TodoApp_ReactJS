import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "../AddComponent";

class MyComponent extends React.Component {
  // key: value
  state = {
    arrJobs: [
      {
        id: "abcJob1",
        title: "Developer",
        salary: "500",
      },
      {
        id: "abcJob2",
        title: "Tester",
        salary: "400",
      },
      {
        id: "abcJob3",
        title: "Project Manager",
        salary: "300",
      },
      {
        id: "abcJob4",
        title: "Project Manager",
        salary: "1000",
      },
    ],
  };

  render() {
    // let name = "Nguyễn Đình Trưng";
    console.log(">>> Call render: ", this.state);
    return (
      <>
        <AddComponent />

        <ChildComponent arrJobs={this.state.arrJobs} />
        {/* <ChildComponent name={"child two"} />
        <ChildComponent name={"child three"} /> */}
      </>
    );
  }
}

export default MyComponent;
