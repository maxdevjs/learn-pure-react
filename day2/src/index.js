import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const MediaCard = ({ title, body, imageUrl, isOpen, linksList, test }) => (
  <div>
    <h2>{title}!</h2>
    <p>{body}</p>

    <div>
      <h3>Useful links</h3>
      {linksList}
    </div>
    {isOpen && <img src={imageUrl} width="640px" />}
    {test}
  </div>
);
// {
//   <li>
//     <a href={links[0].url}>{links[0].title}</a>
//   </li>

// }
const imgUrl =
  "https://cdn-images-1.medium.com/max/1460/1*J4vy57oZS-TAWRTiQSxqEw.png";

const isOpen = true;

const links = [
  {
    title: "Components and Props",
    url: "https://reactjs.org/docs/components-and-props.html"
  },
  {
    title: "ReactJS - Props Overview",
    url: "https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm"
  },
  {
    title: "Conditional Rendering",
    url: "https://reactjs.org/docs/conditional-rendering.html"
  },
  {
    title: "8 React conditional rendering methods",
    url:
      "https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e"
  },
  {
    title: "Conditional Rendering in React",
    url: "https://hackernoon.com/conditional-rendering-on-react-57a864c2d04d"
  },
  {
    title: "Lists & Conditional Rendering",
    url:
      "https://reactjs-bot.github.io/react/docs/lists-conditional-rendering.html"
  }
];

const Body = () => {
  <div>
    Exercises for lesson 2 of
    <a href="https://daveceddia.com/pure-react-email-course/" alt="Pure React">
      <strong>"Pure React"</strong>
    </a>{" "}
    course
  </div>;
};

const listItems = links.map((item, idx) => (
  <li key={idx}>
    <a href={item.url}>{item.title}</a>
  </li>
));

const Test = () => {
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

const el = (
  <MediaCard
    title="[Pure React] Lesson 2: Make your components dynamic and reusable"
    body={Body}
    imageUrl={imgUrl}
    isOpen={isOpen ? true : false}
    linksList={<ol>{listItems}</ol>}
    test={<Test />}
  />
);

ReactDOM.render(el, document.querySelector("#root"));
