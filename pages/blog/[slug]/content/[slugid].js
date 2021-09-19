import React from "react";
import { useRouter } from "next/router";

export default function Slugid() {
  const router = useRouter();
  const { slugid, slug } = router.query;
  return (
    <div>
      <h1>
        This is the {slugid} page of the content {slug}
      </h1>
    </div>
  );
}
