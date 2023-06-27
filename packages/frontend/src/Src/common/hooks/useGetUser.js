import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";

import { firebaseAuth } from "../../../db/firebaseDB";
import { updateUser } from "../../../redux/userSlice";

const useGetUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsub = onAuthStateChanged(firebaseAuth, (user) => {
      if (user)
        dispatch(
          updateUser({
            currentUser: {
              displayName: user.displayName,
              email: user.email,
              uid: user.uid,
              photoURL: user.photoURL,
            },
          })
        );
      else dispatch(updateUser({ currentUser: null }));
    });
    return () => {
      unsub();
    };
  }, []);
  return useSelector((state) => state.user.currentUser);
};

export default useGetUser;
