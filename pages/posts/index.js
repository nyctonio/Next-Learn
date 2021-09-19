import React from "react";

export default function index({ posts }) {
  return (
    <div>
      <h1>hello</h1>
      {posts.map((post) => (
        <div>
          <h1>
            {post.id} {post.title}
          </h1>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
};
