import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Radio, RadioGroup, FormLabel, FormControlLabel } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import moment from 'moment';
import useStyles from './styles';
import { getUser, createUser, updateUser } from '../../actions/users';
import { useHistory } from "react-router-dom";

const Form = ({ match }) => {

  const dispatch = useDispatch();
  const classes = useStyles();
  const [user, setUser] = useState({ username: '', gender: '', dob: '', news: '', email: '', photo: '' });
  let history = useHistory();
  
  useEffect(async () => {
    fetchUser();
  }, [dispatch]);

  const fetchUser = async () => {
    setUser(await dispatch(getUser(match.params.id)));
  }

  const clear = () => {
    setUser({ username: '', gender: '', dob: '', news: '', email: '', photo: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user._id === 0) {
      dispatch(createUser(user));
      clear();
    } else {
      dispatch(updateUser(user._id, user));
      history.push(`/user/details/${match.params.id}`);
    }
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6">{user._id ? `Editing "${user.username}"` : 'Creating a Memory'}</Typography>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <TextField name="username" variant="outlined" label={"Username"} fullWidth value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
        <div className={classes.grpRadioBttn}>
          <FormLabel variant="outlined" component="legend">Gender</FormLabel>
          <RadioGroup name="gender" className={classes.radioBttn} variant="outlined" aria-label="gender" value={user.gender} onChange={(e) => setUser({ ...user, gender: e.target.value })}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </div>
        <TextField name="dob" variant="outlined" type="date" className={classes.textField} fullWidth value={moment(user.dob).format("YYYY-MM-DD")} onChange={(e) => setUser({ ...user, dob: e.target.value })} />
        <div className={classes.grpRadioBttn}>
          <FormLabel component="legend">News</FormLabel>
          <RadioGroup name="news" className={classes.radioBttn} variant="outlined" aria-label="news" value={user.news} onChange={(e) => setUser({ ...user, news: e.target.value })}>
            <FormControlLabel value="true" control={<Radio />} label="Oui" />
            <FormControlLabel value="false" control={<Radio />} label="non" />
          </RadioGroup>
        </div>
        <TextField name="email" variant="outlined" label={"Email"} fullWidth value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setUser({ ...user, photo: base64 })} />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
}

export default Form;