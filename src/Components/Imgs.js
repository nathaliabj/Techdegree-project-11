import React, { Component } from 'react';
import PhotoBox from './Gallery';
import NoImgs from './NoPhoto';
import Loading from './Loading';
import apiKey from './Config';
import axios from 'axios';

class Photos extends Component {
  constructor(){
    super();
    this.state ={
      imgsArr : [],
      loading: true
    };
  }
  componentDidMount(){
    this.Search(this.props.term);
  }

  componentWillReceiveProps = (nextProps) => {
    const searchStr = this.props.term;
    const newSearchStr = nextProps.term;
    if(searchStr !== newSearchStr) {
      this.setState({loading: true});
       this.Search(newSearchStr);
     }
  }

  Search = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&safe_search=1&tags=${query}&per_page=30&format=json&nojsoncallback=1`)
    .then (response => { this.setState({imgsArr: response.data.photos.photo, loading: false}); console.log(this.state); })
    .catch (error => {alert(error);})
  }

  render() {

    if (this.state.loading){
      return( <Loading/> );

    }else if(this.state.imgsArr.length ===0){
      return( <NoImgs/> );
    }
    return (
      <div className="container">
       <h2>{this.props.term} </h2>
       <PhotoBox data={this.state.imgsArr} />
      </div>
    );
  }// render ends

} //extend component ends

export default Photos;
