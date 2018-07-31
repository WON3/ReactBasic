import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import SocialFeedList from './Components/social_feed_list';
import Stories from './Components/stories';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      num : 10,
      text: 'Josh',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let headers = [];
    for (let i = 0; i < this.state.num; i++){
      if(i % 2 === 0){
        headers.push(<Header/>)
      }
    }
    return (
      <div className="App">
        {headers}
        <SocialFeedList/>
        <Stories/>
        <input name="text" onChange={this.handleChange} value={this.state.text}/>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
