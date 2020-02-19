import React from 'react';

import './ImageComponent.css';

const ImageComponent = (props) => {
  return (
    <div className="ImgGrid">
      <img src={props.url} className="ImageItem" alt="PhotoImage" />
    </div>
  );
}

export default ImageComponent;