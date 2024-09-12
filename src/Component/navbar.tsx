import { Link } from 'react-router-dom';
import pokeballLogo from '../assets/pokeball-icon-color.svg'

const Navbar = () => {
  return (
    <div className="top-0 z-50 sticky border-2 border-white bg-black py-4 w-full text-center text-white">
      <Link to="/">
		<img src={pokeballLogo} alt="logo" className='m-auto w-12' />
	  </Link>
    </div>
  );
};

export default Navbar;
