import React from "react";

function Football() {
  const gameName = "Football";

  return (
    <div id="container">
      <h1 className="gameHeading">
        I love {gameName}
        {gameName === "Football" ? "⚽" : "🎾"}
      </h1>
      <h1 className="showDate">
        {new Date().toLocaleString("bn-BD", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })}
      </h1>

      <label htmlFor="firstName">firstName</label>
      <input type="text" id="firstName" />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "game" },
  //   React.createElement("h1", null, "I love football.")
  // );
}

export default Football;
