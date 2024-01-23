import { useParams } from "react-router-dom";

export function OrderDetails() {
  let { orderid } = useParams();
  return (
    <div>
      <h1>{orderid}</h1>
    </div>
  );
}
