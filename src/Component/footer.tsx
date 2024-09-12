const Footer = () => {
  return (
    <footer className="bottom-0 z-50 sticky flex flex-row justify-between items-center border-2 border-white bg-black py-4 w-full text-center text-white">
      <a href="/" className="mx-2 my-2 font-bold text-xl basis-1/2">Home</a>
	  <a href="/pokedex" className="mx-2 my-2 font-bold text-xl basis-1/2">PokeDeck</a>
    </footer>
  );
};

export default Footer;
