import React, { useState } from "react";
import ReactDOM from "react-dom";

function Avatar({ id = Math.random(), rounded = false, size = "32" }) {
  const [disable, setDisable] = useState(false);

  const borderRadius = rounded ? "9999px" : "0px";

  const style = {
    borderRadius,
    height: `${size}px`,
    opacity: disable ? ".5" : "1"
  };

  const src = `https://api.adorable.io/avatars/${id}`;
  return <img onClick={() => setDisable(!disable)} src={src} style={style} />;
}

ReactDOM.render(
  <div>
    <Avatar rounded id={1} size={150} />
    <Avatar rounded size={100} />
    <Avatar />
    <Avatar size={100} />
  </div>,
  document.getElementById("app")
);
