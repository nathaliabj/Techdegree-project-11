import React from 'react';

let url='';
let title='';

const Photo = props => {

  if(props){
    let img = props.data;
    url=`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
    title=img.title;
  }
  return(<li> <img src={url} alt={title} /> </li>);
}

export default Photo;
