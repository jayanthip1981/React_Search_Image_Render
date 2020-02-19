import React, {Component} from 'react';
import axios from 'axios';

import './App.css';
import SearchComponent from './SearchComponent/SearchComponent';
import ImageComponent from './ImageComponent/ImageComponent';

// https://pixabay.com/api/?key=14951706-ea7b12f099539ca3eecabbb11&q=yellow+flowers&image_type=photo
 class App extends Component {

  state = {
    searchValue: '',
    imageList: []
  }

  onSearchButtonClick = () => {
    const searchValue = this.state.searchValue;
    const searchUrl = 
    ` https://pixabay.com/api/?key=14951706-ea7b12f099539ca3eecabbb11&q=${searchValue}&image_type=photo`; 
    axios.get(searchUrl)
      .then((imageResponse) => {
        const imageResponseList = imageResponse.data;
        this.setState({
          imageList: imageResponseList.hits
        });
      })
      .catch(console.error)
  }

  onSearchValueChange = (event) => {
    this.setState({searchValue: event.target.value});
  } 

  showImageComponents = () => {
    const imageList = this.state.imageList;
    if(imageList.length) {
      return imageList.map( (image => {
        return (
          <ImageComponent url={image.webformatURL} key={image.id} />
        ) 
      })) 
    } else {
      return null;
    }
  }


  render() {
    return (<div className="App">
      <SearchComponent changed={this.onSearchValueChange} clicked={this.onSearchButtonClick} />
      <div className="ImgGridContainer">
        {this.showImageComponents()}
      </div>
     
    </div>
    )}
}

export default App;