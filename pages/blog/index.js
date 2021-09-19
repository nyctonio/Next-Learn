import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default Blog = ({ users }) => {
  const [data, setdata] = useState("hello");
  useEffect(() => {
    async function getdata() {
      const temp = await fetch("https://jsonplaceholder.typicode.com/todos");
      const res = await temp.json();
      console.log(res[0]);
    }
    getdata();
    return;
  }, []);
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  const handleTrue = () => {
    setdata(!data);
  };
  console.log(data);

  return (
    <div>
      <h1>Blog</h1>
      <button onClick={handleClick}> click</button>
      <button onClick={handleTrue}>click</button>
      <h1>{data ? "true" : "false"}</h1>
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await data.json();
  console.log(response);
  return {
    props: {
      users: response,
    },
  };
}
