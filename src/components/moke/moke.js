import React, { useState } from 'react';
import { createUser } from "../../actions/users";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';

export const Moke = ({ match }) => {

  const [userData] = useState({ username: '', gender: '', dob: '', news: '', email: '', photo: '' });
  const dispatch = useDispatch();

  const componentDidMount = async () => {
    if (match.params.numUsersToAdd > 0 && match.params.numUsersToAdd <= 100) {
      var url = 'https://api.randomuser.me/?results=' + match.params.numUsersToAdd;
      return fetch(url, {
        method: 'get',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        return res.json()
      }).then((json) => {
        for (const user of json.results) {
          console.log("dd");
          userData.username = user.name.title + " " + user.name.first + " " + user.name.last;
          userData.gender = user.gender;
          userData.dob = user.dob.date;
          userData.news = "true";
          userData.email = user.email;
          userData.photo = user.picture.large;
          dispatch(createUser(userData));
        }
      });
    }
  }

  componentDidMount();
  return (
    <>  <div style={{ marginTop: '120px' }}>
      <Typography variant="h6">
        {
          match.params.numUsersToAdd <= 1 ? " One user added"
            : match.params.numUsersToAdd > 1 ? match.params.numUsersToAdd + " users added"
              : "null"
        }
      </Typography>
      <Link to="/users">Back</Link>
    </div>
    </>
  )
}

export default Moke;