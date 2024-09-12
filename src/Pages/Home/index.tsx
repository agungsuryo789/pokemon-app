import { useEffect, useState, useRef } from "react";

import Card from "../../Component/card";

interface Pokemon {
  id: number;
  name: string;
  url: string;
  image: string;
}

const Home = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon");
  }, []);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const res =
        data.results.length > 0
          ? data.results.map((data: any) => {
              const url = data.url;
              const idMatch = url.match(/pokemon\/(\d+)\/$/);
              const id = idMatch ? parseInt(idMatch[1], 10) : null;
              return {
                id: id,
                name: data.name,
                url: data.url,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
              };
            })
          : [];
      setData(res);
      setPrevPage(data.previous === null ? "" : data.previous);
      setNextPage(data.next === null ? "" : data.next);
    } catch (err: unknown) {
      console.log(err);
    }
  };

  const handleFetchMoreData = (param: string) => {
    switch (param) {
      case "prev":
        fetchData(prevPage);
        containerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      case "next":
        fetchData(nextPage);
        containerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="border-2 border-white w-full h-full overflow-y-auto">
        <div
          ref={containerRef}
          className="gap-3 grid grid-cols-2 grid-flow-row auto-rows-max p-6"
        >
          {data.length > 0 &&
            data.map((item, i) => {
              return (
                <Card
                  key={i}
                  link={`/detail/${item.name}`}
                  imgSrc={item.image}
                  name={item.name}
                />
              );
            })}
          {prevPage !== "" ? (
            <button
              onClick={() => handleFetchMoreData("prev")}
              className="border-2 border-white bg-black p-2 rounded-xl text-white"
            >
              Prev
            </button>
          ) : (
            ""
          )}
          {nextPage !== "" ? (
            <button
              onClick={() => handleFetchMoreData("next")}
              className="border-2 border-white bg-black p-2 rounded-xl text-white"
            >
              Next
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
