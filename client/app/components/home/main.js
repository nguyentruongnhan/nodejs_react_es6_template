import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import User from './../../models/user'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      seconds: 0
    }
  }
  
  loadCommentsFromServer() {
    User.syncData().then((data) => {
      this.setState({
        users: data
      });
    })
  }
  getImage(search='flower'){
    this.setState({
      loading: true
    });
    let img = new Image;
    let src='https://source.unsplash.com/featured/?' + search;
    img.src = src;
    img.onload = (e)=>{
      this.setState({
        image: src,
        loading: false
      })
    } 
  }
  componentDidMount() {
    this.loadCommentsFromServer();
  }
  componentWillUnmount() {
  }
  render() {
      return (
        <div>
          <h1>This Is Home</h1> 
          <h2>List VIP MEmber: </h2> 
            {this.state.users.map(user => <h3 key={user.id}>{user.name}</h3>)}
          <Link to="/404">Default Route 404! version {this.props.config.version}</Link>
        </div>
      );
  }
}

export default Home;