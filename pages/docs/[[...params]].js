import React from "react";
import { useRouter } from "next/router";

export default function Doc() {
  const router = useRouter();
  // here we set the initial value of params = []
  const { params = [] } = router.query;
  console.log(params);
  return (
    <div>
      <h1>all routes</h1>
    </div>
  );
}
