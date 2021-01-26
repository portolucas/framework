import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
//import profileImg from '../static/images/logo.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ImageAvatar = ({alt, img}) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Avatar alt={alt} src={img} />
    </div>
  );
}

export default ImageAvatar;