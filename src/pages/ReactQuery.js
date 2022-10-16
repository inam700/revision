import React from "react";
import { useQuery } from "react-query";
import User from "../components/User";
import { getUsers } from "../queries/ReactQueries";

const ReactQuery = () => {
  const { data, error, isLoading } = useQuery("users", getUsers, {
    retry: 1,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error Occurred</div>;

  return (
    <div className="row gy-3">
      {data.map((item, index) => (
        <User user={item} key={index} />
      ))}
    </div>
  );
};

export default ReactQuery;
