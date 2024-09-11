import Card from "../../Component/card";

const PokedexPage = () => {
  const elements = [1, 2, 3, 4];
  return (
    <div className="h-full w-full border-2 border-white overflow-y-auto">
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-3 p-6">
        {elements.map((el, i) => {
          return (
            <Card
              key={i}
              link={`/catch/${el}`}
              imgSrc="https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F025.webp&w=384&q=75"
              name="Pikachu"
            />
          );
        })}
      </div>
    </div>
  );
};

export default PokedexPage;
