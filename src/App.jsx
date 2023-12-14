import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CostCard from "./components/CostCard";
import FormCard from "./components/FormCard";

function App() {
  const products = [
    {
      id: Math.random(),
      title: "MacBook Pro",
      price: 1599,
      count: 1,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696872235281",
    },

    {
      id: Math.random(),
      title: "iphone 15 Pro",
      price: 999,
      count: 1,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696863030449",
    },

    {
      id: Math.random(),
      title: "Apple Watch Ultra 2",
      price: 699,
      count: 1,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-watch-ultra-2-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1698766696911",
    },
  ];

  return (
    <div>
      <FormCard data={products} />

      {products.map((item) => {
        return <CostCard key={item.id} data={item} />;
      })}
    </div>
  );
}

export default App;
