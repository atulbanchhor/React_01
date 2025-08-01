/*
<div id="parent">
    <div id="child">
    <h1>i am a tag h1</h1>
    <h2>i am a tag h2</h2>
    </div>

    <div id="child1">
    <h1>i am a tag h1</h1>
    <h2>i am a tag h2</h2>
    </div>
<div>
*/

const heading = React.createElement(
  "h1",
  { id: "heading", className: "headinG" },
  "Hello, Bhai sahab! from React!"
);

const parent = React.createElement([
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am the child tag of parent tag"),
    React.createElement("h1", {}, "i am the child tag of parent tag"),
  ]),
  
  
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "i am the child1 tag of parent tag"),
    React.createElement("h1", {}, "i am the child1 tag of parent tag"),
  ]),
]);

console.log(heading);       //object form of heading
console.log(parent);        //object form of parent

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent);
