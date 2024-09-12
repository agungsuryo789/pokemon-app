import { Link } from "react-router-dom";

interface CardProps {
  link?: string;
  imgSrc: string,
  name: string,
  nickname: string
}
const Card: React.FC<CardProps> = ({link, imgSrc, name, nickname}) => {
  return (
    <div className="flex flex-col border-4 dark:border-white shadow-black shadow-lg border-black rounded-2xl h-full">
      <Link to={link || ''} className="flex flex-col justify-between items-center h-full">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <img
            className="w-auto h-full"
            src={imgSrc}
            alt="pokemon-image"
			loading="lazy"
          />
          <div className="bg-black py-2 rounded-b-lg dark:rounded-b-xl w-full font-arcade font-bold text-center text-white text-xs uppercase tracking-widest">
            <p>{name}</p>
            {nickname === '' ? null : <p>"{nickname}"</p>}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
