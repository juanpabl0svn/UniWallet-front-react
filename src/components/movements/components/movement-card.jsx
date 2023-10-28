import React from "react";
const MovementCard = ({ type, amount, from, to ,date}) => {
  return (
    <section className={`card ${type ? "green" : "red"}`}>
      <div>
        <p>{date.toDateString()}</p>
        <p>{from}</p>
      </div>
      <h1>
        {type ? "+" : "-"} {amount}
      </h1>
    </section>
  );
};

export default MovementCard;
