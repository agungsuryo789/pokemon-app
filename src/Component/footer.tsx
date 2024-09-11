const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-between text-center sticky bottom-0 w-full py-4 border-2 border-white bg-black text-white">
      <a href="/" className="basis-1/2 mx-2 my-2 font-bold text-xl">Home</a>
	  <a href="/pokedex" className="basis-1/2 mx-2 my-2 font-bold text-xl">PokeDeck</a>
    </footer>
  );
};

export default Footer;
