import React from "react";

interface PokemonTypeBadgeProps {
  type: string;
}

const PokemonType: React.FC<PokemonTypeBadgeProps> = ({ type }) => {
  const typeColors: { [key: string]: string } = {
    grass: "green",
    fire: "red",
    water: "blue",
    electric: "yellow",
    ground: "brown",
    rock: "gray",
    fairy: "pink",
    poison: "purple",
    bug: "lightgreen",
    dragon: "orange",
    ghost: "purple",
    steel: "silver",
    ice: "lightblue",
    fighting: "darkred",
    normal: "beige",
    flying: "lightgray",
    psychic: "magenta",
    dark: "black",
    unknown: "gray",
    shadow: "black",
  };

  const backgroundColor = typeColors[type.toLowerCase()] || "gray";

  return (
    <span
      style={{
        display: "inline-block",
        padding: "5px 10px",
        borderRadius: "5px",
        backgroundColor: backgroundColor,
        color: `${
          backgroundColor === "gray" || backgroundColor === "beige"
            ? "black"
            : "white"
        }`,
        fontWeight: "bold",
        textTransform: "capitalize",
        margin: "2px",
      }}
    >
      {type}
    </span>
  );
};

export default PokemonType;
