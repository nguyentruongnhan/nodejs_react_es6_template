import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Layout extends Component {
   constructor(props) {
    super(props);
    this.state = {
      image: ""
    }
  }
  getImage() {
    var search = arguments.length <= 0 || arguments[0] === undefined ? 'flower' : arguments[0];
    var _this = this;
    var img = new Image();
    var src = 'https://source.unsplash.com/featured/?' + search;
    img.src = src;
    img.onload = function (e) {
      _this.setState({
        image: src
      });
    };
  }
  componentDidMount() {
    this.getImage();
    this.search = this._search.bind(this)
    this.interval = setInterval(this._tick.bind(this), 10000);
  }
  componentWillUnmount() {
      clearInterval(this.interval);
  }
  _tick() {
    let number = Math.floor(Math.random() * 6) + 1;
    this.getImage(number%2==0 ? 'rose' : 'flower');
  }
  _search(e) {
    e.preventDefault();
    this.getImage(this.refs.search.value);
  }
  render() {
    var style = {
      'backgroundImage': 'url(' + this.state.image + ')',
      'color': "#ff1122",
      'height': window.innerHeight,
      'text-align': 'center',
      'margin':'auto'
    };
    return (
      <div style={style}>
        <header>
        </header>
        <div>{this.props.children}</div>
        <div>
          <form onSubmit={this.search}>
            <input ref="search" />
          </form>
        </div>
        <footer>
          <p>
            This is a demo version {this.props.config.version} with <strong>React</strong> and <strong>Express</strong>.
          </p>
        </footer>
      </div>
    );
  }
}

export default Layout;
