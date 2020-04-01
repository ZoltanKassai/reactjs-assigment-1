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

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    this.setState( {
      persons: [
        {username: newName, password: 'Passgdrsgord'},
        {username: 'Usasgzsver name2', password: 'Passdszgsword2'},
        {username: 'User nzdrgsame3', password: 'Passwzdgfsbfdord3'}
      ]
    })
  }

  userNameChangeHandler = (event) => {
    this.setState( {
      userState: [
        {username: 'Useyxdfdxr name', password: 'Pasxdfsword'},
        {username: 'Userxdfbdxbf name2', password: 'Pasdgfbfbsword2'},
        {username: event.target.value, password: 'Changed password'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput
          changed={this.userNameChangeHandler}
        />
        <UserOutput
          username={this.state.userState[0].username}
          password={this.state.userState[0].password}
          changed={this.userNameChangeHandler}
        />
        <UserOutput
          username={this.state.userState[1].username}
          password={this.state.userState[1].password}
          changed={this.userNameChangeHandler}
        />
        <UserOutput
          username={this.state.userState[2].username}
          password={this.state.userState[2].password}
          changed={this.userNameChangeHandler}
        />
      </div>
    );
  }

}

export default App;
