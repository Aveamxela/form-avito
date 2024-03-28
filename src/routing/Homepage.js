import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to='/form'>Ajouter une voiture</Link>
    </div>
  );
}
export default Homepage;
