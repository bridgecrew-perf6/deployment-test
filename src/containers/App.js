import React, { Component } from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h2>Loading..</h2>
    ) : (
      <div className="tc">
        <h1>RoboFriends111</h1>
        <Searchbox searchchange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}
export default App;
