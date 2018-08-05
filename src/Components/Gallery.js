import React from 'react';
import Img from './Photo';

const PhotoBox = props =>{
  const response = props;
  let imgs;
  if (props){
    imgs = response.data.map(img => <Img data={img} key={img.id}/> );
  }
  return (
    <div className="img-container">
      <ul>
        {imgs}
      </ul>
    </div>
  );
}
export default PhotoBox;
