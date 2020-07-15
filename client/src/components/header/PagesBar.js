import React from 'react';
import { makeStyles, Toolbar, Typography } from '@material-ui/core';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const navBarStyles = makeStyles((theme) => ({
  pagesBar: {
    backgroundColor: '#ffffff',
    overflowX: 'auto',
    justifyContent: 'space-between',
  },
  pageLink: {
    padding: theme.spacing(2),
    flexShrink: 0,
    textDecoration: 'none',
    minWidth: '6rem',
    alignContent: 'center',
    textAlign: 'center',
  },
  pageLinkFancy: {
    color: '#959c9f',
    textDecoration: 'none',
    textAlign: 'center',
    background: 'linear-gradient(currentColor, currentColor) bottom / 0 .1em no-repeat',
	  transition: '0.5s background-size',
    '&:hover': {
      color: '#00a1c0',
      backgroundSize: '100% .1em',
    },
  },
}));

function PagesBar(props) {
  const classes = navBarStyles();

  const showAdmin = () => {
    if (props.isLoggedIn)
      return (
        <Link to='/admin' className={classes.pageLink}>
          <span className={classes.pageLinkFancy}>Admin</span>
        </Link>
      );
  };

  return (
    <React.Fragment>
      <Toolbar component='nav' variant='dense' className={classes.pagesBar}>
        <Link to='/home' className={classes.pageLink}>
          <span className={classes.pageLinkFancy}>Home</span>
        </Link>
        <Link to='/symptom-checker' className={classes.pageLink}>
          <span className={classes.pageLinkFancy}>Symptom Checker</span>
        </Link>
        <Link to='/have-i-been-exposed' className={classes.pageLink}>
          <span className={classes.pageLinkFancy}>Have I been Exposed?</span>
        </Link>
        <Link to='/financial-help' className={classes.pageLink}>
          <span className={classes.pageLinkFancy}>Financial Help</span>
        </Link>
        <Link to='/reopen' className={classes.pageLink}>
          <span className={classes.pageLinkFancy}>Reopening</span>
        </Link>
        {showAdmin()}
      </Toolbar>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.website.isLoggedIn,
  };
};

export default withRouter(connect(mapStateToProps)(PagesBar));