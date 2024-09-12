import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PokemonType from "../../Component/pokemonType";
import Bar from "../../Component/bar";

interface Pokemon {
  id: number;
  name: string;
  abilities: any[];
  stats: any[];
  sprite: string;
  gif: string;
  types: any[];
}

const Detail = () => {
  const { id } = useParams();

  const [data, setData] = useState<Pokemon>({
    id: 0,
    name: "",
    abilities: [],
    stats: [],
    sprite: "",
    gif: "",
    types: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData({
          id: data.id,
          name: data.name,
          abilities: data.abilities,
          stats: data.stats,
          sprite: data.sprites.other.dream_world.front_default,
          gif: data.sprites.other.showdown.front_default,
          types: data.types,
        });
      } catch (err: unknown) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-between items-center border-2 border-white p-4 w-full h-full tracking-widest overflow-auto">
      <div className="relative flex flex-col justify-center items-center">
        <p className="top-0 absolute font-bold text-xl">
          {data.name.toUpperCase()}
        </p>
        <img src={data.sprite} alt={data.name} className="mx-2 w-52 h-56" />
        <div className="bottom-0 absolute flex flex-row">
          {data.types &&
            data.types.map((item, i) => (
              <PokemonType key={i} type={item.type.name} />
            ))}
        </div>
      </div>
      <div className="flex flex-row justify-between min-w-full">
        <div className="border-4 bg-white drop-shadow-lg mx-1 p-2 border-black rounded w-full h-full text-black">
          {data.stats.map((data, i) => (
            <div key={i}>
              <p className="my-1 text-sm">{data.stat.name}</p>
              <Bar progress={data.base_stat} />
            </div>
          ))}
        </div>
        <div className="border-4 bg-white drop-shadow-lg mx-1 p-2 border-black rounded w-full h-full text-black overflow-y-auto">
          <h3 className="font-bold text-center text-xl">Abilities</h3>
          <ul className="list-disc list-inside">
            {data.abilities.map((data, i) => (
              <li key={i}>{data.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <a
        href={`/catch/${id}`}
        className="border-2 border-white bg-orange-500 hover:bg-orange-700 my-2 py-4 rounded w-full text-center"
      >
        Catch!
      </a>
    </div>
  );
};

export default Detail;
