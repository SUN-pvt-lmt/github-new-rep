import React, { Component } from 'react';
import RestService from '../../shared/service';

class Home extends Component {

  constructor(props) {
    super(props);
    this.restService = new RestService();
    this.state = {
      count: 10,
      item: [],
      persons: [],
    };
  }

  componentDidMount = async () => {
    const res = await this.restService.getItem('https://jsonplaceholder.typicode.com/users');
    const persons = res.data;
    this.setState({ persons });
    console.log('********************' + res.data);
  };

  getItems = async () => {
    const res = await this.restService.getItem('https://jsonplaceholder.typicode.com/todos/1');
    const item = res.data;
    this.setState({ item });
    console.log('********************' + res);
  };

  render() {
    return (
    <div className="grid-container" >
      { this.state.item.userId}
      <div className="grid-item">Home11{this.state.count}</div>
      <button onClick={this.getItems} id="getItems">
        Get Items
      </button>
      <ul>
        { this.state.persons.map((person, i)=> <li key={i}>{person.name}</li>)}
      </ul>
    </div>
    );
  }
}
export default Home;
