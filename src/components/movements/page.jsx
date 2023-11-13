import "./movements.css";
import { useUserContext } from "../../context";
import MovementCard from "./components/movement-card";



const Movements = () => {
  const { userData } = useUserContext();

  return (
    <main className="movements">
      <article>
        <aside>
          <h1 className="title">Movimientos</h1>
          {[...userData.movements].reverse().map((movement) => (
            <MovementCard key={crypto.randomUUID()} {...movement} />
          ))}
        </aside>
      </article>
    </main>
  );
};

export default Movements;
