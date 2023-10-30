import "./loan.css";

const Loan = () => {
  return (
    <main className="loan">
      <h1>Loan</h1>

      <form>
        <div>
          <label htmlFor="">Motivo</label>
          <textarea required />
        </div>

        <div>
          <label htmlFor="">Cantidad</label>
          <input type="number" min={10000} max={150000} />
        </div>

        <input type="submit" value="Solicitar credito" />
      </form>
    </main>
  );
};

export default Loan;
