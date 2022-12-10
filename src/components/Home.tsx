import React from "react";
import arrow from '../assets/arrow2.png';
type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="flex-col justify-center items-center">
      <div className="w-[300px] md:w-[500px] h-full space-y-16 flex-col justify-center items-center backdrop-blur-md saturate-150 rounded-md drop-shadow-2xl">
        <div className="h-44 w-full text-white  flex justify-center items-center text-2xl md:text-3xl  font-bold italic">
          Voice Control Dictionary
        </div>
      </div>
      <div className="w-48 h-48 md:w-52 md:h-52 flex justify-center items-center  absolute ml-9 md:ml-[360px]">
        <img
          src={arrow}
          alt=""
          className="w-full  h-full"
        />
      </div>
    </div>
  );
};
export default Home;
