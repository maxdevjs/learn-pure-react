import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function Hi() {
  return (
    <div>
      <div id="painting">
        <div id="toprow">
          <a href="https://googlecreativelab.github.io/coder-projects/projects/mondrian/">
            <div id="bigbox" className="red right" />
          </a>
          <div id="divider1" className="black right" />
          <div id="topleftcolumn" className="right">
            <div className="mediumbox" />
            <div id="divider2" className="black" />
            <div className="mediumbox" />
          </div>
        </div>

        <a href="http://daveceddia.com/courses/pure-react-email-course/lesson-1-get-something-on-the-screen/">
          <div id="divider3" className="black " />
        </a>

        <div id="bottomrow">
          <div id="bottomrightcolumn" className="right">
            <div className="bottomrightboxes blue right" />
            <div id="divider5" className="black right" />
            <a href="hhttps://reactjs.org/">
              <div className="bottomrightboxes yellow right" />
            </a>
          </div>

          <div id="divider4" className="black right" />
          <div id="bottomcentralbox" className="right" />
          <a href="https://daveceddia.com/pure-react-email-course/">
            <div id="divider4" className="black right" />
          </a>
          <div id="bottomleftbox" className="blue" />
        </div>
      </div>
    </div>
  );
}

// React stuff
const d = document.getElementById("root");
console.log(d);

ReactDOM.render(<Hi />, document.querySelector("#root"));
