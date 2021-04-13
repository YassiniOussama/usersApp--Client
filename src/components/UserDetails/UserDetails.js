import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, FormLabel } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './style';
import { getUser, deleteUser } from '../../actions/users';
import { Link } from 'react-router-dom';

const UserDetails = ({ match, setCurrentId }) => {


  const classes = useStyles();
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(async () => {
    fetchUser();
  }, [dispatch]);

  const fetchUser = async () => {
    setUser(await dispatch(getUser(match.params.id)));
  }

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={user.photo} title={user.username} />
      <div className={classes.overlay}>
        <Typography variant="h6">{user.username}</Typography>
        <Typography variant="body2">{moment(user.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Link style={{ color: 'white' }} size="small" to={`/update/${match.params.id}`} > <MoreHorizIcon fontSize="small" /> </Link>
      </div>
      <div className={classes.details}>
        <Typography className={classes.title} color="textSecondary" gutterBottom variant="h5" component="h2">Gender:</Typography>
        <Typography className={classes.title} gutterBottom variant="h6" component="h2">{user.gender}</Typography>
      </div>
      <div className={classes.details}>
        <Typography className={classes.title} color="textSecondary" gutterBottom variant="h5" component="h2">Date Of Birth:</Typography>
        <Typography className={classes.title} gutterBottom variant="h6" component="h2">{
          moment(user.dob).format('ddd - MMMM - YYYY')
        }</Typography>
      </div>
      <div className={classes.details}>
        <Typography className={classes.title} color="textSecondary" gutterBottom variant="h5" component="h2">Mail:</Typography>
        <Typography className={classes.title} gutterBottom variant="h6" component="h2">{user.email}</Typography>
      </div>
      <div className={classes.details}>
        <Typography className={classes.title} color="textSecondary" gutterBottom variant="h5" component="h2">News</Typography>
        <Typography className={classes.title} gutterBottom variant="h6" component="h2">{user.news === "true" ? "Oui" : "Non"}</Typography>
      </div>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deleteUser(user._id))}>
          <Link to={`/users`} className={classes.btnDelete}><DeleteIcon fontSize="large" /> Delete</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserDetails;