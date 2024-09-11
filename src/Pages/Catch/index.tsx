import player from "../../assets/player-pokemon-back.png";

const CatchPage = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-row w-full h-full xl:h-auto overflow-auto py-1 gap-0">
      <div className="row-span-1 flex flex-row w-full">
        <div className="flex flex-row justify-between p-4 border-2 border-b-neutral-900 basis-1/2 bg-gray-200 text-black rounded h-20">
          <p className="font-semibold text-lg">Pikachu</p>
          <span className="font-semibold text-lg">lv. 17</span>
        </div>
        <div className="basis-1/2">
          <img
            src="https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F025.webp&w=384&q=75"
            alt=""
            className="w-44 h-44 m-auto"
            loading="lazy"
          />
        </div>
      </div>
      <div className="row-span-1 flex items-end w-full relative">
        <img src={player} alt="player" className="h-60 absolute -bottom-32 xl:-bottom-24" />
      </div>
      <div className="row-span-1 grid grid-cols-2 items-end justify-between w-full text-black">
        <div className="cols-span-1 flex items-center justify-center rounded border-8 border-black bg-white text-center h-32 p-2">
          <p className="text-xl font-bold">What will you do?</p>
        </div>
        <div className="cols-span-1 flex flex-col h-32">
          <button
            type="button"
            className="p-2 border-2 border-black rounded-lg bg-red-700 h-full"
          >
            Catch
          </button>
          <button
            type="button"
            className="p-2 border-2 border-black rounded-lg bg-blue-600 h-full"
          >
            Run
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatchPage;
