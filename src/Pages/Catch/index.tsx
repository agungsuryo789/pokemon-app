import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import player from "../../assets/player-pokemon-back.png";
import battleBg from "../../assets/pokemon battle bg.jpg";
import Bar from "../../Component/bar";
import battleSound from "../../assets/pokemon-battle.mp3";
import caughtSound from "../../assets/pokemon-caught.mp3";

interface Pokemon {
  id: number;
  name: string;
  abilities: any[];
  stats: any[];
  sprite: string;
  gif: string;
  types: any[];
}

const CatchPage = () => {
  const [isCatch, setCatch] = useState(false);
  const [nickname, setNickname] = useState("");
  const [data, setData] = useState<Pokemon>({
    id: 0,
    name: "",
    abilities: [],
    stats: [],
    sprite: "",
    gif: "",
    types: [],
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const navigate = useNavigate();
  const { id } = useParams();

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

    audioRef.current = new Audio(battleSound);
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
      audioRef.current.play();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const playAudioCaught = () => {
    audioRef.current = new Audio(caughtSound);
    audioRef.current.volume = 0.4;
    audioRef.current.play();
  };

  const catchPokemon = () => {
    const randomChance = Math.random() * 100;
    const catchRate = Math.random() * (50 - 20) + 20;

    if (randomChance < catchRate) {
      // Success: Catch the Pokemon
      stopAudio();
      playAudioCaught();
      setCatch(!isCatch);
    } else {
      alert("You Missed!!");
    }
  };

  const addPokemonToLocalStorage = () => {
    if (nickname === "") return;

    const pokemon = { ...data, nickname: nickname };
    const caughtPokemons = JSON.parse(localStorage.getItem("pokedex") || "[]");

    const isNicknameTaken = caughtPokemons.some(
      (p: any) =>
        p.nickname && p.nickname.toLowerCase() === nickname.toLowerCase()
    );

    if (!isNicknameTaken) {
      caughtPokemons.push(pokemon);
      localStorage.setItem("pokedex", JSON.stringify(caughtPokemons));
      alert("Pokémon added!");
      setNickname("");
      navigate("/");
    } else {
      alert("Nickname is already taken, please choose a different one.");
    }
  };

  return (
    <div className="relative gap-0 grid grid-rows-3 grid-flow-row py-1 w-full h-full xl:h-auto overflow-auto">
      <img
        className="top-0 absolute w-full h-full object-cover"
        src={battleBg}
        alt=""
      />
      <div className="z-40 flex md:flex-row xl:flex-row flex-col row-span-1 w-auto xl:w-full">
        <div className="flex flex-col border-4 bg-gray-300 p-4 border-black rounded h-20 text-black basis-1/2">
          <div className="flex flex-row justify-between">
            <p className="font-semibold text-lg">{data.name.toUpperCase()}</p>
            <span className="font-semibold text-lg">lv. 1</span>
          </div>
          <Bar progress={data?.stats[0]?.base_stat || ""} />
        </div>
        <div className="basis-1/2">
          <img
            src={data.gif}
            alt=""
            className="m-auto w-44 h-44"
            loading="lazy"
          />
        </div>
      </div>

      <div className="relative z-40 flex items-end row-span-1 w-full">
        <img
          src={player}
          alt="player"
          className="-bottom-44 md:-bottom-20 xl:-bottom-20 absolute h-60"
        />
      </div>

      <div className="z-40 justify-between items-end grid grid-cols-2 row-span-1 w-full text-black">
        <div className="flex justify-center items-center border-8 bg-white p-2 border-black rounded h-32 text-center cols-span-1">
          <p className="font-bold text-xl">What will you do?</p>
        </div>
        <div className="flex flex-col h-32 cols-span-1">
          <button
            type="button"
            className="border-2 bg-red-700 p-2 border-black rounded-lg h-full"
            onClick={catchPokemon}
          >
            Catch
          </button>
          <Link to="/" className="w-full h-full">
            <button
              type="button"
              className="border-2 bg-blue-600 p-2 border-black rounded-lg w-full h-full"
            >
              Run
            </button>
          </Link>
        </div>
      </div>

      {isCatch ? (
        <div className="top-56 md:top-40 xl:top-40 left-24 md:left-28 xl:left-28 z-50 absolute border-2 border-white bg-black shadow-xl p-2 rounded font-bold text-center text-lg">
          <p>Congratulations!!!</p>
          <p>you caught pokemon.</p>
          <p>give them a nickname!</p>
          <input
            type="text"
            className="bg-white my-1 rounded text-black"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <div className="flex flex-row justify-between">
            <button
              type="button"
              onClick={addPokemonToLocalStorage}
              className="border-2 border-white bg-black mx-1 my-1 rounded-lg w-full h-full text-white basis-1/2"
            >
              Submit
            </button>
            <Link to="/" className="w-full h-full">
              <button
                type="button"
                className="border-2 border-white bg-black mx-1 my-1 rounded-lg w-full h-full text-white basis-1/2"
              >
                Let them free!!
              </button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CatchPage;
