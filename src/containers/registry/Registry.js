import React, { Component } from 'react';
import Navbar from '../navbar/Navbar/Navbar';

import Button from '@material-ui/core/Button';

import './Registry.css';

const links = 
  [{
    link: 'home',
    target: 'home'
  }];

const text = {
  greeting: "",
  body: "Thanks so much for being part of our wedding! We have a small home and move frequently,\
    and so already have more kitchenware and \
    furniture than we need. We would, however, love to be able to visit family and friends in Asia \
    for our honeymoon. If you would like to give us a gift, please consider a hongbao. \
    If you would prefer to give online, please use the link below.",
  linkText: "Tendr",
  help: "What's a Hongbao?",
}

class Registry extends Component {
  render() {    
    return(
      <div className="Registry">
        <Navbar links={links} pull='pull-right' />
        <section className={"registry-info-text portrait"}>
          <p>{text.body}</p>
          <div className="linkBox">
            <Button href="https://en.wikipedia.org/wiki/Red_envelope">
              {text.help}
            </Button>
            <Button href="https://tendr.com/ciciandjaredwedding">
              {text.linkText}
            </Button>
          </div>
        </section>
      </div>
    )
  }
}

export default Registry;
