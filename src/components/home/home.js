import React, { Component } from 'react';
import RestService from '../../shared/service';

class Home extends Component {

  constructor(props) {
    super(props);
    this.restService = new RestService();
    this.state = { count: 10, items: null, user: {} };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.id + 'this is wisthout:', this.state.count);
  }

  handleClick1 = () => {
    console.log(this.state.count);
  };

  getItems = async () => {
    const urlapi = 'AccountCode';
    console.log(urlapi);
  };

  render() {
    return (
    <div className="grid-container" >
      <div className="grid-item">Home11{this.state.count}</div>

      <button onClick={e=>this.handleClick(e)} id="handleClick">
          Click me without
        </button>

      <button onClick={this.handleClick1} id="handleClick1">
        Click me with
      </button>

      <button onClick={this.getItems} id="getItems">
        Get Items
      </button>
      <p></p>
    </div>
    );
  }
}
export default Home;
