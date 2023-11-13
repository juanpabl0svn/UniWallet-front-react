import React from "react";
import Swal from "sweetalert2";
import { useUserContext } from "../../../context";

const Article = ({ image, price, priceInPoints, name }) => {
  const { userData } = useUserContext();

  function handleClick() {
    Swal.fire({
      title: `¿Quieres comprar el(la) ${name} ?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Dinero",
      denyButtonText: `Puntos`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if (userData.currency >= price) {
          Swal.fire("Comprado con dinero!", "", "success");
        } else {
          Swal.fire("No te alcanza con el dinero!", "", "error");
        }
      } else if (result.isDenied) {
        if (userData.points >= priceInPoints) {
          Swal.fire("Comprado con puntos", "", "success");
        } else {
          Swal.fire("No te alcanza con tus puntos!", "", "error");
        }
      }
    });
  }

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
          <button onClick={handleClick}>Buy</button>
        </div>
      </section>
    </article>
  );
};

export default Article;
