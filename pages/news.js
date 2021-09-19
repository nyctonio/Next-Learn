export default ({ posts }) => {
  return (
    <div>
      <h1>
        {posts.map((post) => (
          <h1>
            {post.id} {post.title}
          </h1>
        ))}
      </h1>
    </div>
  );
};

// this is very similar to the getStaticProps but rebuild our pages on every requests
export const getServerSideProps = async (ctx) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
};
