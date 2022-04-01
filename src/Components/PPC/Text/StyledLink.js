import React from 'react';
import { Link } from 'react-router-dom';

//Subcomponents
import Colors from '../../Colors';

export const StyledLink = (props) => {
  return (
    <Link
      style={styles.styledLink}
      to={props.to}
    >
      {props.children}
    </Link>
  )
};

const styles = {
  styledLink: {
    textDecoration: 'none',
    color: `${Colors.Crimson}`
  }
};