import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CostCard from "./components/CostCard";
import FormCard from "./components/FormCard";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [products, setProducts] = useState([
    {
      id: uuidv4(),
      title: "MacBook Pro",
      price: 1599,
      count: 1,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696872235281",
    },

    {
      id: uuidv4(),
      title: "iphone 15 Pro",
      price: 999,
      count: 1,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696863030449",
    },

    {
      id: uuidv4(),
      title: "Apple Watch Ultra 2",
      price: 699,
      count: 1,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-watch-ultra-2-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1698766696911",
    },
  ]);

  const addNewProduct = (item) => {
    item.id = uuidv4();
    item.img =
      "https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_11_2021APPLE500.jpg";
    setProducts([...products, item]);
  };

  const deleteById = (id) => {
    setProducts(
      products.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <div>
      <FormCard data={products} addNewProduct={addNewProduct} />

      {products.map((item) => {
        return <CostCard key={item.id} data={item} deleteById={deleteById} />;
      })}
    </div>
  );
}

export default App;
