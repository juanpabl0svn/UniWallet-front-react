import React from "react";
const MovementCard = ({ type, amount, from, date }) => {
  return (
    <section className={`card ${type ? "green" : "red"}`}>
      <div className="info">
        <p>{date}</p>
        <p>{from}</p>
      </div>
      <h1>
        {type ? "+" : "-"} {amount.toLocaleString("en-US", {style:"currency", currency:"USD"})}
      </h1>
    </section>
  );
};

export default MovementCard;
