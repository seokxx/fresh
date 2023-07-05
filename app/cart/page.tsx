type ItemType = {
  item: string;
};

export default function Cart() {
  let cart = ["Tomatoes", "Pasta", "coconut"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {cart.map((item, i) => {
        return (
          <div key={i}>
            <CartItem item={item} />
          </div>
        );
      })}
    </div>
  );
}

function CartItem(props: ItemType) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
