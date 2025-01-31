import React from "react";
import { useLoaderData } from "react-router-dom";

function UserInfo() {
  const data = useLoaderData();
  return (
    <div>
        <h1>data.login</h1>
    </div>
  )
}

export default UserInfo;
