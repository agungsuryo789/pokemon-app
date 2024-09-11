interface CardProps {
  link?: string;
  imgSrc: string,
  name: string
}
const Card: React.FC<CardProps> = ({link, imgSrc, name}) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border-4 border-black shadow-lg shadow-black dark:border-white">
      <a href={link} className="flex h-full flex-col items-center justify-between">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <img
            className="w-auto h-auto"
            src={imgSrc}
            alt="pokemon-image"
            width={170}
            height={200}
			loading="lazy"
          />
          <p className="w-full rounded-b-lg bg-black py-2 text-center font-arcade text-xs font-bold uppercase tracking-widest text-white dark:rounded-b-xl">
            {name}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
