import React, { useState, useEffect, useMemo, useCallback } from "react";

import useHttp from "../../hooks/use-hooks";

import styles from "./Users.module.css";

const Users = () => {
  const [usersArray, setNewUsersArray] = useState([]);
  //
  const applyDataHandler = useCallback((newData) => {
    setNewUsersArray([]);
    for (const key in newData) {
      setNewUsersArray((prevSate) => [...prevSate, newData[key]]);
    }
  }, []);
  //
  const httpRequestObject = useMemo(() => {
    return {
      url: "https://normal-form-130f3-default-rtdb.firebaseio.com/usersData.json",
    };
  }, []);
  //
  const { loading, error, httpRequest } = useHttp(applyDataHandler);
  //
  const getDataHandler = useCallback(() => {
    console.log("getDataHandler!");
    httpRequest(httpRequestObject);
  }, [httpRequest, httpRequestObject]);
  //

  useEffect(() => {
    getDataHandler();
  }, [getDataHandler]);

  return (
    <div className={styles.users}>
      <div>
        <p>
          Note: <br />
          the data which appear in this part is loading automatically, but if
          you adding new data from the first adding form, you must click to
          below button.
        </p>
        <button onClick={getDataHandler}>Get Data from Firebase</button>
      </div>
      {loading && !error && <h4>loading .......</h4>}
      {error && <h4>{error}</h4>}
      <div className={styles.list}>
        {usersArray.map((user) => (
          <div key={Math.random()}>
            <h3>{user.userName}</h3>
            <ul>
              {user.skills.map((skill) => (
                <li key={skill + Math.random()}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
