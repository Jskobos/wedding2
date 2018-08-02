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
  cardBox: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  card: {
    maxWidth: 500,
    fontFamily: 'Montserrat sans-serif',
    margin: '1em',
    maxHeight: 600,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
  },
  cardFooter: {
    height: 50,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  media: {
    height: 300,
  },
};

const links = 
  [{
    link: 'home',
    target: 'home'
  }];

const hotels = [
  {
    name: "Doubletree Hotel",
    url: "http://doubletree3.hilton.com/en/hotels/delaware/doubletree-by-hilton-hotel-wilmington-ILGCPDT/index.html",
    address: "4727 Concord Pike, Wilmington, Delaware, 19803, USA",
    photo: "doubletree.jpg",
    map: "https://goo.gl/maps/GERuFUyDcCL2",
    description: "Approximately fifteen minutes from the Carriage house. Close to several restaurants, the Concord\
      mall, and Jared's dad."
  },
  {
    name: "Crown Plaza Wilmington North",
    url: "http://www.cpwilmingtonnorth.com/",
    address: "630 Naamans Road Claymont, Delaware 19703",
    photo: "crown.jpg",
    map: "https://goo.gl/maps/Pv3rFTHkBst",
    description: "Approximately ten minutes from the Carriage House, directly off I-95, \
      and across the street from a Wawa and one of Delaware's largest liquor stores."
  },
  {
    name: "Doubletree Center City",
    url: "http://doubletree3.hilton.com/en/hotels/pennsylvania/doubletree-by-hilton-hotel-philadelphia-center-city-PHLBLDT/index.html",
    address: "237 South Broad Street, Philadelphia, Pennsylvania, 19107-5686, USA",
    photo: "center_city.jpg",
    map: "https://goo.gl/maps/TphArTYspY22",
    description: "There are no hotels in Fishtown/Northern Liberties where we live.\
    If you'd like to stay in Philadelphia, the Center City/Rittenhouse Square areas are good places to look."
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
        <CardActions className={classes.cardFooter}>
          <Button 
            size="small"
            color="primary"
            onClick={() => window.location.href = hotel.url}
          >
            More Info
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.location.href = hotel.map}
          >
            Map
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
          <div className={classes.cardBox}>
            {cards}
          </div>
        </section>
      </div>
    )
  }
}

export default withStyles(styles)(Travel);
