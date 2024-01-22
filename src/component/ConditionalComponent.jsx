import React from "react";

function ConditionalComponent() {
  const isLoggedIn = false;
  return <div>{isLoggedIn ? <p>Welcome User</p> : <p>Please Log In</p>}</div>;
}

export default ConditionalComponent;
