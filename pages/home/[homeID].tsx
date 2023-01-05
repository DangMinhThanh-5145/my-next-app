import { useRouter } from "next/router";
import React from "react";

export interface HomeIDProps {}

const HomeID = (props: HomeIDProps) => {
  const route = useRouter();
  return (
    <div>
      <h1>This is home ID Page</h1>
      <p>Post: {JSON.stringify(route.query)}</p>
    </div>
  );
};

export default HomeID;
