import React from "react";
import Chai from "./Chai";
/* 
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
 */
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);
function MyApp() {
  const username = "react";
  return (
    <div>
      <h1>Custom App | chai aur {username} </h1>
    </div>
  );
}

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit google",
  anotherElement
);
function App() {
  //return reactElement;
  return <MyApp />;
  //return anotherElement;
  // <>
  //   <h1>chai aur react with vite</h1>
  //   <Chai />
  // </>
}

export default App;
