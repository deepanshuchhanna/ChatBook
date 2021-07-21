/* eslint-disable import/order */
/* eslint-disable import/no-duplicates */
import React from 'react';
import { Drawer } from 'rsuite';
import { useProfile } from '../../context/profile.context';
import { Button } from 'rsuite';

const Dashboard = ({ onSignOut }) => {
  const { profile } = useProfile();
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>DashBoard</Drawer.Title>
      </Drawer.Header>

      <Drawer.Body>
        <h3> Hey, {profile.name}</h3>
      </Drawer.Body>
      <Drawer.Footer>
        <Button block color="red" onClick={onSignOut}>
          Sign Out
        </Button>
      </Drawer.Footer>
    </>
  );
};

export default Dashboard;
