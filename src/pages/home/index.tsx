import React from "react";
import PartnerRequest from "./components/PartnerRequest";

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


  return (
    <div className=" max-w-6xl mx-auto h-screen flex flex-col bg-gray-50">
      <PartnerRequest />
    </div>
  );
};

export default Home;
