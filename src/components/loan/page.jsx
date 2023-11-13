import "./loan.css";
import Swal from "sweetalert2";
import { updateUserData } from "../../services/firebase";
import { useUserContext } from "../../context";

const Loan = () => {
  const { userData } = useUserContext();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const reason = formData.get("reason");
    const amount = formData.get("amount");
    if (reason === "malgastar" || reason === "malgastarla")
      return Swal.fire({
        title: "Upss!!",
        icon: "error",
        text: "No prestamos si es para malgastarlos",
      });

    updateUserData(userData.email, amount)
      .then(() =>
        Swal.fire({
          title: "Prestamo aprovado",
          icon: "success",
          text: "Su prestamo fue aprovado y ya se encuentra disponible",
        })
      )
      .catch(() =>
        Swal.fire({ title: "Upss!", text: "Algo salió mal", icon: "error" })
      );
  }

  return (
    <main className="loan">
      <h1>Loan</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="reason">Motivo*</label>
          <textarea name="reason" id='reason' required />
        </div>

        <div>
          <label htmlFor="number">Cantidad*</label>
          <input
            type="number"
            id="number"
            name="amount"
            inputMode="numeric"
            placeholder="$10.000 - $150.000"
            pattern="\d*"
            min={10000}
            max={150000}
            required
          />
        </div>

        <input type="submit" value="Solicitar credito" />
      </form>
    </main>
  );
};

export default Loan;
