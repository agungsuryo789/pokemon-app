import Card from "../../Component/card";

const Home = () => {
  const elements = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="h-full w-full border-2 border-white overflow-y-auto">
        <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-3 p-6">
          {elements.map((el, i) => {
            return (
              <Card
                key={i}
                link={`/detail/${el}`}
                imgSrc="https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F001.webp&w=384&q=75"
                name="Bulbasaur"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
