import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import './Gallery.css';


const imageList = ['beach-night-small.jpg', 'cici-park-small.jpg','erhai-small.jpg', 'singapore-small.jpg',
'bench-small.jpg','cliff-bar-small.jpg','falcon-small.jpg','thailand-jared-small.jpg','bridge-small.jpg',
'curry.jpg','hotpot-small.jpg','thailand-lunch-small.jpg','changde-2015-small.jpg','dali-cliff-small.jpg',
'jumping-small.jpg','tianzifang-small.jpg','changde-mountains-small.jpg','dali-small.jpg','kohlanta-small.jpg',
'changde-park-small.jpg','dali-town-small.jpg','lujiazui-small.jpg','changde-small.jpg',
'disney-castl-small.jpg','moshulu-small.jpg','cici-balloons-small.jpg','disney-hat-small.jpg','peking-small.jpg']

const BASE_URL = 'https://d3fgbmuso50mb7.cloudfront.net/';

var masonryOptions = {
    transitionDuration: 0,
    columnWidth: 80,
    gutter: 5
};

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.shuffleImages = this.shuffleImages.bind(this);
  }

  shuffleImages(imageArray) {
    // Knuth shuffle borrowed from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let currentIndex = imageArray.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = imageArray[currentIndex];
      imageArray[currentIndex] = imageArray[randomIndex];
      imageArray[randomIndex] = temporaryValue;
    }

    return imageArray;
  }

  render() {
    const images = this.shuffleImages(imageList);
    const childElements = images.map(function(element){
           return (
                <div className="image-element">
                    <img src={BASE_URL + element} />
                </div>
            );
        });

    return (
        <Masonry
            className={'gallery'}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
            options={masonryOptions}
        >
            {childElements}
        </Masonry>
      )
    }
}

export default Gallery;
