import React from "react";
import { useRouteError } from "react-router-dom";
import somethingwrong from "../assets/images/errorBoundary.png";

const ErrorBoundary: React.FC = () => {
  const error = useRouteError();

  if (error)
    return (
      <div className="flex justify-center items-center w-full min-h-[70vh]">
        <div className="text-center ">
          <div className="flex justify-center items-center">
            <div className="w-44 h-44">
              <img
                src={somethingwrong}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <h1 className="font-semibold text-lg">Oop something went wrong !</h1>
          <p>Sorry for the 
          inconvenience please try again.</p>
        </div>
      </div>
    );
  return null;
};

export default ErrorBoundary;