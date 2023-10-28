import "./main.css";

const Main = () => {
  async function getInfo() {
    const req = await fetch();

    if (!req.ok) return;
  
    const data = await req.json();

    console.log(data)
  }

  return (
    <main className="main">
      <button onClick={getInfo}>Buscar personas</button>
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
