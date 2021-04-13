import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likeUser, deleteUser } from '../../../actions/users';
import useStyles from './styles';


const User = ({ user, setCurrentId }) => {
   
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={user.photo } title={user.username} />
            <div className={classes.overlay}>
                <Typography variant="h6">{user.username}</Typography>
                <Typography variant="body2">{moment(user.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(user._id)}><MoreHorizIcon fontSize="default" /></Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{user.gender}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{user.dob}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{user.news}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likeUser(user._id))}><ThumbUpAltIcon fontSize="small" /> Like {user.likeCount} </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deleteUser(user._id))}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>
        </Card>
    );
}

export default User;