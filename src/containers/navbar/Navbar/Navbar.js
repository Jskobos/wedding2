import React, { Component } from 'react';
import NavItem from '../NavItem/NavItem.js';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './Navbar.css';

const styles = theme => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ open: true });
  }

  closeModal = () => {
    this.setState({ open: false });
  }
  render() {
    const { classes } = this.props;
    const links = []
    this.props.links.map((link,idx) => {
      links.push(<NavItem key={idx} name={link.link} target={link.target} />)
    });

    return (
      <div className="Navbar">
        <div className={"navbar-items-container " + this.props.pull}>
          {links}
          <NavItem key={'contact'} name="Contact" onClick={this.openModal} target="#" />
        </div>
        <Modal 
          open={this.state.open}
          onClose={this.closeModal}
        >
          <p className={classes.paper}>
            If you have any questions or need any help with your travel arrangements, please
            contact us by email at jaredkobos@gmail.com or phone at 302.772.8534.
          </p>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
