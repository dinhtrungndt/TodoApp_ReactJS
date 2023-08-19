import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  // Buoi 1

  //   handleOnChangetitleJob = (event) => {
  //     this.setState({
  //       title: event.target.value,
  //     });
  //   };

  //   handleClick = () => {
  //     alert("Hello " + this.state.title);
  //   };

  //   Buoi 2
  handleClick = (event) => {
    event.preventDefault();
    // alert("Hello " + this.state.title);
    console.log(">>> Call handleClick: ", this.state);
  };

  handletitleJob = (event) => {
    this.setState({
      title: event.target.value,
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
            value={this.state.title}
            type="text"
            onChange={(event) => this.handleOnChangetitleJob(event)}
          />
          <div classtitleJob="lasttitleJob">
            {console.log("MyComponent.js: ", this.state.title)}
            Hello my component {this.state.title}
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
          <label htmlFor="title">Job's title: </label>
          <input
            value={this.state.title}
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
