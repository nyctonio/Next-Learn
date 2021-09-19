import { useRouter } from "next/router";

export default ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>...loading</h1>;
  }

  return (
    <div>
      hello
      <h1>
        {post.id} {post.title}
      </h1>
    </div>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  // if we try to access more than 100 pages we need to show 404 page
  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
};
