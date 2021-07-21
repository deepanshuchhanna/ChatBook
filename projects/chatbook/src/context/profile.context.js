/* eslint-disable no-console */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, database } from '../misc/firebase';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [profile, setProfile] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let useRef;

    const authUnsub = auth.onAuthStateChanged(authObj => {
      if (authObj) {
        useRef = database.ref(`/profiles/${authObj.uid}`);
        useRef.on('value', snap => {
          const { name, createdAt } = snap.val();

          const data = {
            name,
            createdAt,
            uid: authObj.uid,
            email: authObj.email,
          };
          setProfile(data);
          setIsLoading(false);
        });
      } else {
        if (useRef) {
          useRef.off();
        }

        setProfile(null);
        setIsLoading(false);
      }
    });

    return () => {
      authUnsub();

      if (useRef) {
        useRef.off();
      }
    };
  }, []);
  return (
    <ProfileContext.Provider value={{ isLoading, profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
