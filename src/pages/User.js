import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  useEffect(() => {
    const unsub = axios.CancelToken.source();
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cancelToken: unsub.token,
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("cancled");
        }
      });

    return () => {
      unsub.cancel();
    };
  }, [id]);

  return (
    <div>
      <h1>{user?.title}</h1>
    </div>
  );
};

export default User;
