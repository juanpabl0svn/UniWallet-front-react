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
      .map((movement) => <MovementCard {...movement} key={movement.id} />);
  };

  return (
    <main className="main">
      <article>
        <section>
          <div className="transaction">
            <MovementList />
          </div>
          <div className="currency">
            <span>Currency: {userData.currency}</span>
            <span>Points: {userData.points}</span>
          </div>
        </section>
        <section>
          <div className="actions">
            <button>Points</button>
            <button>Movements</button>
            <button>Loan</button>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Main;
