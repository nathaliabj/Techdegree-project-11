import React, { Component } from 'react';
import { withRouter } from "react-router-dom";


class Form extends Component  {
  submitHandle = (e) =>{
    e.preventDefault ();
    let queryString = this.query.value;
    let searchVal = '/query/' + queryString;
    this.props.history.push(searchVal);
  }

  render() {
  return (
  <form className="search" onSubmit={this.submitHandle}>
    <input type="search" name="search" placeholder="Search" required ref={(input) => this.query = input}/>
    <img className="search-icon" src={require('./search-icon.png')} />
  </form>);
}// render ends

}// extends component ends
export default withRouter(Form);
