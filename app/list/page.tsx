import Image from "next/image";

export default function List() {
  let product = ["Tomatoes", "Pasta", "Coconut"];

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
          </div>
        );
      })}
    </div>
  );
}
