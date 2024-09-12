import Card from "../../Component/card";

const PokedexPage = () => {
  const elements = [1, 2, 3, 4];
  return (
    <div className="border-2 border-white w-full h-full overflow-y-auto">
      <div className="gap-3 grid grid-cols-2 grid-flow-row auto-rows-max p-6">
        {elements.map((i) => {
          return (
            <div className="relative" key={i}>
              <button className="top-0 right-4 absolute font-bold text-xl" onClick={() => alert('test delete')}>
                x
              </button>
              <Card
                link={``}
                imgSrc="https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F025.webp&w=384&q=75"
                name="Pikachu"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokedexPage;
