import './movements.css'
import { useUserContext } from '../../context';
import MovementCard from './components/movement-card';


const Movements = () => {

  const {userData} = useUserContext();



  return (
    <main className='movements'>
      <h1 className='title'>Movimientos</h1>

      <article>
        {userData.movements.reverse().map(movement => <MovementCard key={movement.id} {...movement} />)}
      </article>
      
    </main>
  );
};

export default Movements;