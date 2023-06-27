import React from "react";
import MessageBox from "./MessageBox";

const DisplaySearchResult = ({ users, handleOnClick }) => {
  return (
    <>
      {users.length ? (
        users.map((eachuser) => {
          return (
            <MessageBox
              userDetail={eachuser}
              key={eachuser.uid}
              handleOnClick={handleOnClick}
            />
          );
        })
      ) : (
        <>No Results to show</>
      )}
    </>
  );
};

export default DisplaySearchResult;
