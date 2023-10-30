import React from "react";

const Article = ({ image, price, priceInPoints, name }) => {
  return (
    <article>
      <img src={image} alt="" />
      <section>
        <div>
          <strong>{name.toUpperCase()}</strong>
          <p>
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <p>{priceInPoints.toLocaleString()}</p>
        </div>
        <div>
          <button>Buy</button>
        </div>
      </section>
    </article>
  );
};

export default Article;
