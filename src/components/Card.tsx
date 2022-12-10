import React from "react";
import { data, Definition, Meaning } from "../types";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

type CardProps = {
  meaning: data[];
};

const Card: React.FC<CardProps> = ({ meaning }) => {
  const Player = (audio: any) => {
    let song = new Audio(audio);
    song.play();
  };
  return (
    <div className="flex w-screen h-screen   justify-center items-center md:p-36  flex-col space-y-8 md:space-x-8 md:flex-row md:space-y-0  pt-[36px] overflow-auto">
      {meaning &&
        meaning.map((item: data , i) => {
          return (
            <div className="flex flex-col h-max  w-80 md:w-80 md:h-[600px] break-words  backdrop-blur-2xl  hover:shadow-black  hover:shadow-xl md:transition md:ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-110 cursor-pointer overflow-auto" key={i}>
              <div className="p-7">
                <div className="flex flex-col space-y-1">
                  <div className="flex space-x-7">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                      {item.word}
                    </h5>
                    <span className="flex justify-center items-center">
                      <HiOutlineSpeakerWave
                        onClick={() => Player(item.phonetics[0].audio)}
                        color="white"
                        className="cursor-pointer"
                      />
                    </span>
                  </div>
                  <h6 className="text-gray-600">
                    {" "}
                    {item.meanings[0].partOfSpeech}
                  </h6>
                </div>
                <div className="mt-2">
                  <h2 className="text-lg text-gray-200">Meanings</h2>
                  {item.meanings.map((exp: Meaning , i) => {
                    return (
                      <div className="mt-2" key={i}>
                        {exp.definitions.map((def: Definition, i) => {
                          return (
                            <>
                              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" key={i}>
                                {def.definition}
                              </p>
                            </>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Card;
