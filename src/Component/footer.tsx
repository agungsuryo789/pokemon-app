import { Link } from 'react-router-dom';
import home from '../assets/home-icon.svg'
import pokeball from '../assets/pokeball-icon.svg'

const Footer = () => {
  return (
    <footer className="bottom-0 z-50 sticky flex flex-row justify-between items-center border-2 border-white bg-black py-4 w-full text-center text-white">
      <Link to="/" className="flex flex-col mx-2 my-2 font-bold text-xl basis-1/2">
		<img src={home} alt="" className='m-auto w-10' />
		<span>Home</span>
	  </Link>
	  <Link to="/pokedex" className="flex flex-col mx-2 my-2 font-bold text-xl basis-1/2">
		<img src={pokeball} alt="" className='m-auto w-10' />
		<span>PokeDeck</span>
	  </Link>
    </footer>
  );
};

export default Footer;
