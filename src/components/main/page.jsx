import { useUserContext } from "../../context";
import MovementCard from "../movements/components/movement-card";
import "./main.css";

const Main = () => {
  async function getInfo() {
    const req = await fetch();

    if (!req.ok) return;
  
    const data = await req.json();

    console.log(data)
  }

  const { userData } = useUserContext();

  return (
    <main className="main">
      <button onClick={getInfo}>Buscar personas</button>
      <article>
        <section>
          <div className="transaction">
            {userData.movements.slice(-4, -1).map((movement) => (
              <MovementCard {...movement} key={movement.id} />
            ))}
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
