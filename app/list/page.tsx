"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

type NumberType = [
  number: number[],
  setNumber: Dispatch<SetStateAction<number[]>>
];

export default function List() {
  let product = ["Tomatoes", "Pasta", "Coconut"];
  let [number, setNumber]: NumberType = useState(Array(product.length).fill(0));

  return (
    <div>
      <h2 className="title">Products</h2>
      {product.map((item, i) => {
        return (
          <div className="food" key={i}>
            <Image
              src={`/food${i}.png`}
              className="food-img"
              width="500"
              height="500"
              alt=""
            ></Image>
            <h4>{item} $40</h4>
            <span> {number[i]} </span>
            {/* plus */}
            <button
              onClick={() => {
                setNumber((prevNumber) => {
                  const newArray = [...prevNumber];
                  newArray[i]++;
                  return newArray;
                });
              }}
            >
              +
            </button>
            {/* minus */}
            <button
              onClick={() => {
                setNumber((prevNumber) => {
                  const newArray = [...prevNumber];
                  newArray[i]--;
                  return newArray;
                });
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
