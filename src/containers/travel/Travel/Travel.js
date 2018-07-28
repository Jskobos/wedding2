import React, { Component } from 'react';
import Navbar from '../../navbar/Navbar/Navbar';
import './Travel.css';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    overflow: 'scroll',
  },
  card: {
    maxWidth: 600,
    fontFamily: 'Montserrat sans-serif',
    margin: '1em',
    maxHeight: 600,
  },
  media: {
    height: 400,
    // paddingTop: '56.25%', // 16:9
  },
};

const links = 
  [{
    link: 'home',
    target: 'home'
  }];

const hotels = [
  {
    name: "Crown Plaza Wilmington North",
    url: "http://www.cpwilmingtonnorth.com/",
    address: "630 Naamans Road Claymont, Delaware 19703",
    photo: "crown.jpg",
    description: "Approximately ten minutes from the Carriage House, directly off of I-95, \
      and across the street from one of Delaware's largest liquor stores."
  },
  {
    name: "Doubletree Hotel",
    url: "http://doubletree3.hilton.com/en/hotels/delaware/doubletree-by-hilton-hotel-wilmington-ILGCPDT/index.html",
    address: "4727 Concord Pike, Wilmington, Delaware, 19803, USA",
    photo: "doubletree.jpg",
    description: "Approximately fifteen minutes from the Carriage house, close to several restaurants, the Concord\
      mall, and Jared's dad."
  },
  {
    name: "Warwick at Rittenhouse",
    url: "www.warwickrittenhouse.com",
    address: "",
    photo: "warwick.jpg",
    description: "There aren't any hotels in Fishtown/Northern Liberties where Cici and I live.\
    If you'd like to stay in Philadelphia, the Rittenhouse Square area is a good place to look. We will\
    arrange a van/shuttle to take any guests staying in the city to and from Wilmington on Sunday \
    for the wedding. "
  }
];

class Travel extends Component {
  renderCard = (hotel) => {
    const { classes } = this.props;
    return (
      <Card key={hotel.name} className={classes.card}>
        <CardMedia
          className={classes.media}
          image={`https://d3fgbmuso50mb7.cloudfront.net/${hotel.photo}`}
          title={hotel.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
              {hotel.name}
            </Typography>
            <Typography component="p">
              {hotel.description}
            </Typography>
        </CardContent>
        <CardActions>
          <Button 
            size="small"
            color="primary"
            onClick={() => window.location.href = hotel.url}
          >
            Reserve
          </Button>
        </CardActions>
      </Card>
    )
  }

  render() {
    const { classes } = this.props;
    const cards = hotels.map((hotel) => this.renderCard(hotel) )
    return(
      <div className="Travel">
        <Navbar links={links} pull='pull-right' />
        <section className={classes.root}>
          <h1>Hotels</h1>
          {cards}
        </section>
      </div>
    )
  }
}

export default withStyles(styles)(Travel);
