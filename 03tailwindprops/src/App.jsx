import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "hitesh",
    age: 21,
  };
  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="text-3xl bg-green-400 text-black p-4 rounded-xl mb-4">
        tailwind test
      </h1>
      <Card username="chai aur code" btnText="click me" />
      <Card username="raj" />
      <Card username={myObj.username} />
    </>
  );
}

export default App;
