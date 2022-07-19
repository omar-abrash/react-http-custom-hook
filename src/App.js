import React from "react";

import AddUser from "./components/AddUser/AddUser";
import Users from "./components/Users/Users";

import useHttp from "./hooks/use-hooks";

function App() {
  //
  const { loading, error, httpRequest } = useHttp();

  const addUserHandler = (newUser) => {
    const httpRequestObject = {
      url: "https://normal-form-130f3-default-rtdb.firebaseio.com/usersData.json",
      method: "POST",
      body: newUser,
      headers: {
        "Content-Type": "application/json",
      },
    };
    httpRequest(httpRequestObject);
  };

  return (
    <React.Fragment>
      <AddUser afterAddUser={addUserHandler} sendingState={[loading, error]} />
      <Users />
    </React.Fragment>
  );
}

export default App;
