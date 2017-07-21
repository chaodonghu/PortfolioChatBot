import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';

export default class Hobbies extends Component {
  render() {
    console.log(this.openLightBox)
    console.log(Gallery)
    return (
      <Gallery photos={PHOTO_SET} onClickPhoto={this.openLightBox}/>
    );
  }
}

const PHOTO_SET = [
  {
    src: 'http://www.billboard.com/files/media/drake-hotline-bling-video-still-2015-billbaord-650.jpg',
    // srcset: [
    //   'http://example.com/example/img1_1024.jpg 1024w',
    //   'http://example.com/example/img1_800.jpg 800w',
    //   'http://example.com/example/img1_500.jpg 500w',
    //   'http://example.com/example/img1_320.jpg 320w',
    // ],
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 650,
    height: 430,
    alt: 'image 1',
  },
  // {
  //   src: 'http://example.com/example/img2.jpg',
  //   srcset: [
  //     'http://example.com/example/img2_1024.jpg 1024w',
  //     'http://example.com/example/img2_800.jpg 800w',
  //     'http://example.com/example/img2_500.jpg 500w',
  //     'http://example.com/example/img2_320.jpg 320w',
  //   ],
  //   sizes:[
  //     '(min-width: 480px) 50vw',
  //     '(min-width: 1024px) 33.3vw',
  //     '100vw'
  //   ],
  //   width: 600,
  //   height: 600,
  //   alt: 'image 2',
  // }
];
