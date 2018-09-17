// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { TextField, List } from '@material-ui/core';

export const mailFolderListItems = (
  <div>
    <ListItem >
      <ListItemText primary="This is my CV" />
    </ListItem>
    <ListItem >
      <ListItemText primary=" This drawer for login" />
    </ListItem>
    <ListItem >
      <ListItemText primary="Test" />
    </ListItem>
  </div>
);

var jackel = false;
export const otherMailFolderListItems = (
  <div>
    <List>
    <ListItem >
      <TextField
          label="Username"
          margin="normal"
        />
    </ListItem>
    <ListItem>
      <TextField 
      label ="Password"
      margin="normal"
      />

    </ListItem>
    <ListItem button onClick={() => {
      alert("Welcome")
    }}>
      <ListItemIcon>
        <AccessAlarmIcon />
      </ListItemIcon>
      <ListItemText primary="Login" />
    </ListItem>
    </List>
  </div>
);