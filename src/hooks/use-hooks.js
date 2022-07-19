//
import { useState, useCallback } from "react";
//
const useHttp = (applyData) => {
  // const [newData, setNewData] = useState(null);
  const [loading, setNewLoading] = useState(true);
  const [error, setNewError] = useState(null);
  //
  const httpRequest = useCallback(
    async (httpRequestObject) => {
      try {
        setNewLoading(true);
        const response = await fetch(httpRequestObject.url, {
          method: httpRequestObject.method ? "POST" : "GET",
          body: httpRequestObject.body
            ? JSON.stringify(httpRequestObject.body)
            : null,
          headers: httpRequestObject.headers ? httpRequestObject.headers : {},
        });
        console.log("response!");
        if (!response.ok) {
          throw new Error("some thing is Wrong!");
        }
        const data = await response.json();
        applyData(data);
      } catch (e) {
        setNewError(e.message);
      }
      setNewLoading(false);
      // I add this stateful logic for sending button stylation.
      setTimeout(() => {
        if (httpRequestObject.method === "POST") {
          setNewLoading(true);
        }
      }, 400);
      //
    },
    [applyData]
  );

  return { loading, error, httpRequest };
};
//
export default useHttp;

//
