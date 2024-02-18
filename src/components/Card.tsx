import React from "react";
import { ICard } from "../types/types";

interface ICardProps {
  card: ICard;
}

function Card({ card }: ICardProps) {
  return (
    <div className="max-w-xs border rounded border-color3 p-4 hover:scale-110 duration-500 cursor-pointer">
      <ul>
        <li className="text-color3">- Title: {card.name}</li>
        <li className="text-color3">- mass: {card.mass}</li>
        <li className="text-color3">- height: {card.height}</li>
      </ul>
    </div>
  );
}

export default Card;