import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full overflow-auto border-2 p-4 border-white">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-center justify-center relative">
          <p className="absolute top-0 font-bold text-xl">Pikachu</p>
          <img
            src="https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F025.webp&w=384&q=75"
            alt="pokemon-detail"
            className="w-52 h-56 mx-2"
          />
          <div className="absolute bottom-0 font-bold border-2 border-white rounded p-1 my-1">
            Electric
          </div>
        </div>
        <div className="border-2 border-white rounded mx-2 min-w-52 p-2 drop-shadow-lg">
          <p className="my-4">Max CP</p>
          <p className="my-4">Attack</p>
          <p className="my-4">Defense</p>
          <p className="my-4">Stamina</p>
        </div>
      </div>
      <div className="border-2 border-white rounded h-40 overflow-y-auto w-full my-2 p-2 drop-shadow-lg">
        <h3 className="text-center font-bold text-xl">Moveset</h3>
        <ul className="list-disc list-inside">
          <li>Thuder Shock</li>
          <li>Thuder Shock</li>
          <li>Thuder Shock</li>
          <li>Thuder Shock</li>
        </ul>
      </div>
      <a
        href={`/catch/${id}`}
        className="text-center w-full border-2 border-white rounded my-2 py-4 hover:bg-green-600"
      >
        Catch!
      </a>
    </div>
  );
};

export default Detail;
