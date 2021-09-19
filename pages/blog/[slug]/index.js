import React from "react";
import { useRouter } from "next/router";

export default function Slug() {
  const router = useRouter();
  const slug = router.query.slug;
  return (
    <div>
      <h1>This is the {slug} page</h1>
    </div>
  );
}
