import React from 'react';
import { MdOutlineClose } from 'react-icons/md';

type Props = { handleCloseInstructions: () => void };

const GameInstructions = ({ handleCloseInstructions }: Props) => {
  return (
    <div className="h-[330px] text-center bg-zinc-100 relative">
      <div className="flex justify-end pr-4 md:pr-40 absolute right-0 top-7">
        <MdOutlineClose
          size={25}
          onClick={handleCloseInstructions}
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-center items-center h-full">
        <div>
          <h1 className="text-xl md:text-3xl md font-bold ">
            Game Instructions
          </h1>
          <div className="text-gray-500 px-4 md:px-40">
            Click a card, it will flip over revealing its value. When you click
            the next card, its value is revealed and then compared against the
            other face up card. If they are equal, both cards disappear. If they
            are different, the cards will flip back down. Give it a try!
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInstructions;
