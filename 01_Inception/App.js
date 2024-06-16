const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//To get nested html struture like below
// <div id="parent">
//   <div id="child">
//     <h1></h1>
//   </div>
// </div>;

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm an h1 tag")
  )
);

root.render(parent);

//To get nested and sibling elements
// <div id="parent">
//   <div id="child">
//     <h1 id="heading"></h1>
//     <h2 id="subHeading"></h2>
//   </div>
// </div>;
const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading", key: "1" }, "I'm a h1 tag"),
    React.createElement("h2", { id: "subHeading", key: "2" }, "I'm a h2 tag"),
  ])
);

root.render(parent1);

//To get siblings with nested childs
// <div id="parent1">
//   <div id="child">
//     <h1 id="heading"></h1>
//     <h2 id="subHeading"></h2>
//   </div>
//   <div id="child2">
//     <h1 id="heading"></h1>
//     <h2 id="subHeading"></h2>
//   </div>
// </div>;
const parent2 = React.createElement("div", { id: "parent", key: "parent1" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement(
      "h1",
      { id: "heading", key: "heading1" },
      "I'm an h1 element"
    ),
    React.createElement(
      "h2",
      { id: "subHeading", key: "subHeading" },
      "I'm an h2 element"
    ),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement(
      "h1",
      { id: "heading", key: "heading2" },
      "I'm an h1 element"
    ),
    React.createElement(
      "h2",
      { id: "subHeading", key: "subHeading2" },
      "I'm an h2 element"
    ),
  ]),
]);

root.render(parent2);
console.log(parent2);

//But this becomes tidious to write this code for every element thats gets added in future, So to avoid this we use jsx.
