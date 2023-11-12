import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context";
import MovementCard from "../movements/components/movement-card";
import "./main.css";

const Main = () => {
  const { userData } = useUserContext();

  const MovementList = () => {
    const newList = [...userData.movements];

    if (newList.length == 0) return <p>Sin registros</p>;

    if (newList.length <= 3)
      return newList.map((movement) => (
        <MovementCard {...movement} key={crypto.randomUUID()} />
      ));

    return newList
      .slice(-4, -1)
      .map((movement) => (
        <MovementCard {...movement} key={crypto.randomUUID()} />
      ));
  };

  return (
    <main className="main">
      <article>
        <section>
          <div className="transaction">
            <MovementList />
          </div>
          <div className="currency">
            <span>
              <strong style={{ color: "white", display: "block" }}>
                Currency:
              </strong>
              <p>
                {userData.currency.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </span>
            <span>
              <strong style={{ display: "block", color: "white" }}>
                Points:
              </strong>{" "}
              <p>{userData.points}</p>
            </span>
          </div>
        </section>
        <section>
          <div className="actions">
            <Link to="/main/points">
              <button>Points</button>
            </Link>
            <Link to="/main/movements">
              <button>Movements</button>
            </Link>
            <Link to="/main/loan">
              <button>Loan</button>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Main;
