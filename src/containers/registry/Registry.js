import React, { Component } from 'react';
import Navbar from '../navbar/Navbar/Navbar';

import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

import './Registry.css';

const links = 
  [{
    link: 'home',
    target: 'home'
  }];

const text = {
  greeting: "",
  body: "Since we have a small house and move frequently, we already have more kitchenware and \
    furniture than we need. We would, however, like to be able to visit family and friends in Asia \
    for our honeymoon. If you would like to give us a gift, please consider giving a hongbao. \
    If you would prefer to give online, please use the link below.",
  linkText: "Tendr",
  help: "Hongbao?",
}

class Registry extends Component {
  render() {    
    return(
      <div className="Registry">
        <Navbar links={links} pull='pull-right' />
        <section className={"registry-info-text portrait"}>
          <p>{text.body}</p>
          <div className="linkBox">
            <Button href="#">
              {text.linkText}
            </Button>
            <Button href="#">
              {text.help}
            </Button>
          </div>
        </section>
      </div>
    )
  }
}

export default Registry;
