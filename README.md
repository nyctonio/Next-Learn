# Next

```javascript
import Link from "next/link";

<Link href="/route" replace>
  <a>route</a>
</Link>;
```

## Navigation Programitically

```javascript
import React from "react";
import { useRouter } from "next/router";

export default function Blog() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Blog</h1>
      <button onClick={handleClick}> click</button>
    </div>
  );
}
```

## Custom 404 Page

```javasript
create a 404.js page in the pages folder
```

## pages is a special folder in next.js with avaiblity of geStaticProps which only runs on server side

we can do backend stuff in the getStaticProps we can use api keys too as getStaticProps never runs in client
side

getStaticProps should return an object with key props which also should be a an object

getStaticProps runs only build time

## in getStaticPaths fallback may be true false or 'blocking'

in false -
the unknown paths will give 404

in true
the unknown paths will load at run time we have to specify here the fallback condition

in 'blocking'
everything is same as true but here we will have an loading instead of fallback conditions

# Stale Data problem and build time problem

Sol-(ISR) Incremental static regeneration

generate in every 10 seconds revalidate

```javascript
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
    revalidate: 10,
  };
};
```

but this will also not solve this issue completely

so for that we have (SSR)

# Server Side Rendering

# Catch all and optional catch all

[...name] [[...name]]
will give 404 will not give 404
