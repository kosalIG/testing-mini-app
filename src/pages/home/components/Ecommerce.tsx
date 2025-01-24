import { Button } from "antd";
import React, { useEffect, useState } from "react";
import Item from "./Item";

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        close: () => void;
        setBackgroundColor: (color: string) => void;
        hideHeader: () => void;
        setTitle: (title: string) => void;
        initDataUnsafe: any; // Or a more specific type based on your use case
      };
    };
  }
}


const Home: React.FC = () => {
  const generateRandomData = () => {
    const items = [
      { name: "Burger", image: "https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png" },
      { name: "Pasta", image: "https://png.pngtree.com/png-clipart/20240320/original/pngtree-spaghetti-italian-pasta-with-tomato-sauce-png-image_14637602.png" },
 
    ];
    return Array.from({ length: 100 }, () => {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      return {
        id: Date.now() + Math.random(),
        name: randomItem.name,
        url: randomItem.image,
        price: +(Math.random() * 20 + 5).toFixed(2),
      }
    });
  };
  const [listProduct] = useState(() => generateRandomData());

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      // Initialize the Telegram Web App SDK
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  const handleCloseApp = () => {
    // Close the Web App (optional, depending on your use case)
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.close();
    }
  };

  return (
    <div className=" max-w-6xl mx-auto h-screen flex flex-col bg-gray-50">
      <div className="flex-1 overflow-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-center">
          {listProduct.map((x) => (
            <Item {...x} key={x.id} />
          ))}
        </div>
      </div>
      <div className="bg-gray-100 px-8 pt-2 pb-6 border-t border-gray-200">
        <Button onClick={handleCloseApp} variant="solid" color="pink" size="large" className="w-full">
          VIEW ORDER
        </Button>
      </div>
    </div>
  );
};

export default Home;
