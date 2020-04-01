import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    userState: [
      {username: 'User name', password: 'Password'},
      {username: 'User name2', password: 'Password2'},
      {username: 'User name3', password: 'Password3'}
    ]
  }

  userNameChangeHandler = (event) => {
    this.setState( {
      userState: [
        {username: event.target.value, password: 'Changed password'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput/>
        <UserOutput
          username={this.state.userState[0].username}
          password={this.state.userState[0].password}
        />
        <UserOutput
          username={this.state.userState[1].username}
          click={this.userNameChangeHandler.bind(this, 'Yoyya!')}
        />
        <UserOutput
          password={this.state.userState[2].password}
          click={this.userNameChangeHandler.bind(this, 'Yoyya!')}
        />
      </div>
    );
  }

}

export default App;
