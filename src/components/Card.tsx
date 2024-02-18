import React from "react";
import { ICard } from "../types/types";

interface ICardProps {
  card: ICard;
}

function Card({ card }: ICardProps) {
  return (
    <div className="lg:w-[20vw] md:w-[30vw] w-[40vw] xl:gh-[40vw]  border rounded border-color3 p-4 hover:scale-110 duration-500 cursor-pointer bg-color2 ">
      <h2 className="text-color3 sm:text-3xl  text-base text-center pb-3">{card.name}</h2>
      <ul>
        <li className="text-color3 sm:text-xl  text-xs">Height: {card.height}</li>
        <li className="text-color3 sm:text-xl  text-xs">Mass: {card.mass}</li>
        <li className="text-color3 sm:text-xl  text-xs">Hair color: {card.hair_color}</li>
        <li className="text-color3 sm:text-xl  text-xs">Skin color: {card.skin_color}</li>
        <li className="text-color3 sm:text-xl  text-xs">Date of Birth: {card.birth_year}</li>
        <li className="text-color3 sm:text-xl  text-xs">Gender: {card.gender}</li>
      </ul>
    </div >
  );
}

export default Card;