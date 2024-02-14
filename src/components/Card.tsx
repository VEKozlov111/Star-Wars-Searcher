import React from "react";
import { ICard } from "../types/types";

interface ICardProps {
  card: ICard;
}

function Card({ card }: ICardProps) {
  return (
    <div className="max-w-xs border rounded border-color3 p-4 hover:scale-110 duration-500 cursor-pointer">
      <img src={card.thumbnail} className="rounded" alt="" />
      <ul>
        <li className="text-color3">- Title: {card.title}</li>
        <li className="text-color3">- Description: {card.description}</li>
        <li className="text-color3">- Brand: {card.brand}</li>
        <li className="text-color3">- Category: {card.category}</li>
      </ul>
    </div>
  );
}

export default Card;