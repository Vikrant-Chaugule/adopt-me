import ReactDOM from "react-dom";
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Molly",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Scotty",
//       animal: "Dog",
//       breed: "Wheaten Terrier",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Molly" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Scotty" animal="Dog" breed="Wheaten Terrier" />
    </div>
  );
};

// tell React, where to render this component
// ReactDOM.render(React.createElement(App), document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));
