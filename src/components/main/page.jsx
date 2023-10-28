import "./main.css";

const Main = () => {
  return (
    <main className="main">
      <article>
        <section>
          <div className="transaction">
            <span>last transactions (less than 3)</span>
            <span>last transactions (less than 3)</span>
            <span>last transactions (less than 3)</span>
          </div>
          <div className="currency">
            <span>Currency</span>
          </div>
        </section>
        <section>
          <div className="actions">
            <button>points</button>
            <button>Movements</button>
            <button>loan</button>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Main;
