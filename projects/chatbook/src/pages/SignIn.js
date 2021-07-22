/* eslint-disable spaced-comment */

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import firebase from 'firebase/app';
import { Container, Grid, Row, Panel, Col, Button, Icon, Alert } from 'rsuite';
import { auth, database } from '../misc/firebase';

// import Col from 'rsuite/lib/Carousel';

const SignIn = () => {
  const signInWithProvider = async Provider => {
    try {
      // eslint-disable-next-line no-unused-vars
      const { additionalUserInfo, user } = await auth.signInWithPopup(Provider);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }

      Alert.success('Signed In', 4000);
    } catch (err) {
      Alert.error(err.message, 4000); //here 4000 means 4 seconds time
    }
  };

  const onFacebookSigIn = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };

  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to ChatBook</h2>
                <p>Connecting Hearts</p>
              </div>
              <div className="mt-3">
                <Button block color="blue" onClick={onFacebookSigIn}>
                  <Icon icon="facebook" />
                  Continue With Facebook
                </Button>

                <Button block color="red" onClick={onGoogleSignIn}>
                  <Icon icon="google" />
                  Continue With google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
