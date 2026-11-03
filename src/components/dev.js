import { data } from "autoprefixer";
import React, { useEffect } from "react";

function Dev() {
  const [product, setProduct] = React.useState([]);
  const [flower, setFlower] = React.useState([
    {
      rose: "red",
      lily: "white",
      sunflower: "yellow",
    },
    {
      rose: "asda",
      lily: "assew",
      sunflower: "plant",
    },
  ]);
  const [instansi, setInstansi] = React.useState(["lemhannas", "dprd", "eselon", "kementrian", "lembaga"]);
  const [kota, setKota] = React.useState(["jakarta", "bandung", "surabaya", "medan", "makasar"]);

  const loopingForKota = () => {
    const result = [];
    for (let i = 0; i < kota.length; i++) {
      result.push(
        <tr>
          <td>{kota[i]}</td>
        </tr>,
      );
    }
    return result;
  };
  const getProduct = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h3>Product List</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          {/* <tbody>
            {product.map((item) => (
              <tr>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody> */}
          {flower.map((flo) => (
            <tr>
              <td>{flo.rose}</td>
              <td>{flo.lily}</td>
              <td>{flo.sunflower}</td>
            </tr>
          ))}
          {instansi.map((inst) => (
            <tr>
              <td>{inst}</td>
            </tr>
          ))}
          {loopingForKota()}
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default Dev;
