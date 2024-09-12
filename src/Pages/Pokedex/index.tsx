import { useEffect, useState } from "react";
import Card from "../../Component/card";

interface Pokemon {
  id: number;
  name: string;
  abilities: any[];
  stats: any[];
  sprite: string;
  gif: string;
  types: any[];
  nickname: string;
}

const PokedexPage = () => {
  const [data, setData] = useState<Pokemon[]>([]);

  useEffect(() => {
    const pokedex = JSON.parse(localStorage.getItem("pokedex") || "[]");
    console.log("🚀 ~ useEffect ~ pokedex:", pokedex);
    setData(pokedex);
  }, []);

  const handleDelete = (nickname: string) => {
	const updatedPokedex = data.filter(pokemon => pokemon.nickname !== nickname);
    console.log("🚀 ~ handleDelete ~ updatedPokedex:", updatedPokedex)
    setData(updatedPokedex);
    localStorage.setItem("pokedex", JSON.stringify(updatedPokedex));
  }

  return (
    <div className="border-2 border-white w-full h-full overflow-y-auto">
      <div className="gap-3 grid grid-cols-2 grid-flow-row auto-rows-max p-6">
        {data.map((item, i) => {
          return (
            <div className="relative" key={i}>
              <button
                className="top-0 right-4 absolute font-bold text-xl"
                onClick={() => handleDelete(item.nickname)}
              >
                x
              </button>
              <Card link={``} imgSrc={item.sprite} name={item.name} nickname={item.nickname} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokedexPage;
