import React, { useEffect, useMemo, useState } from "react";

const MemoHook = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [obj, setObj] = useState({
    type: "",
    availability: false,
    city: "",
    state: "",
  });

  const memoizedObj = useMemo(
    () => ({
      type: obj.type,
      availability: obj.availability,
    }),
    [obj.type, obj.availability]
  );

  useEffect(() => {
    console.log("useEffect called when obj changes");
  }, [memoizedObj]);
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "20%" }}>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setObj((pre) => ({ ...pre, type: name }))}>
        set Type
      </button>
      <button onClick={() => setObj((pre) => ({ ...pre, availability: true }))}>
        set availability
      </button>
      <input onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => setObj((pre) => ({ ...pre, city: city }))}>
        set Type
      </button>

      {`{type: ${obj.type}, availability: ${obj.availability}, city: ${obj.city}}`}
    </div>
  );
};

export default MemoHook;
