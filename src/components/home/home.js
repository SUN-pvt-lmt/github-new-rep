import React, { Component } from 'react';
import RestService from '../../shared/service';
import axios from 'axios';

class Home extends Component {

  constructor(props) {
    super(props);
    this.restService = new RestService();
    this.state = { count: 10, items: null, persons: [] };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      });
  }

  getItems = async () => {
    const urlapi = 'AccountCode';
    console.log(urlapi);
  };

  render() {
    return (
    <div className="grid-container" >
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
