import React from "react";

class AddComponent extends React.Component {
  state = {
    titleJob: "",
    salary: "",
  };
  // Buoi 1

  //   handleOnChangetitleJob = (event) => {
  //     this.setState({
  //       titleJob: event.target.value,
  //     });
  //   };

  //   handleClick = () => {
  //     alert("Hello " + this.state.titleJob);
  //   };

  //   Buoi 2
  handleClick = (event) => {
    event.preventDefault();
    // alert("Hello " + this.state.titleJob);
    console.log(">>> Call handleClick: ", this.state);
  };

  handletitleJob = (event) => {
    this.setState({
      titleJob: event.target.value,
    });
  };

  handleSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  render() {
    return (
      <>
        {/* Buổi 1 */}
        {/* <div classtitleJob="header">
          <input
            value={this.state.titleJob}
            type="text"
            onChange={(event) => this.handleOnChangetitleJob(event)}
          />
          <div classtitleJob="lasttitleJob">
            {console.log("MyComponent.js: ", this.state.titleJob)}
            Hello my component {this.state.titleJob}
          </div>
          <div classtitleJob="firsttitleJob">
            {console.log("Chanel : ", this.state.salary)}
            My youtube salary {this.state.salary}
          </div>
          <div classtitleJob="click">
            <button onClick={() => this.handleClick()}>Click me</button>
          </div>
        </div> */}

        {/* Buổi 2 form HTML */}
        <form>
          <label htmlFor="titleJob">Job's title: </label>
          <input
            value={this.state.titleJob}
            type="text"
            onChange={(event) => this.handletitleJob(event)}
          />{" "}
          <br />
          <label htmlFor="salary">Salary: </label>
          <input
            value={this.state.salary}
            type="text"
            onChange={(event) => this.handleSalary(event)}
          />{" "}
          <br />
          <input
            type="submit"
            value="submit"
            onClick={(event) => this.handleClick(event)}
          />
        </form>
      </>
    );
  }
}

export default AddComponent;
