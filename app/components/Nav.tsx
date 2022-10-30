import classNames from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';
import { GiBrain } from 'react-icons/gi';
import { motion } from 'framer-motion';

type Props = { handleShowHelp: () => void };

export const Nav = ({ handleShowHelp }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavHeight = () => {
    setIsOpen(!isOpen);
  };

  const renderAbout = () => {
    return (
      <motion.div
        initial={{ opacity: isOpen ? 0 : 1 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        className={`pt-4 flex transition-all transform duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* About */}
        <div className="">
          <h2 className="font-bold">About this project</h2>
          <div className="text-sm text-gray-300 pr-12">
            Paymemory is a memory game that utilizes NextJS 13, TailwindCSS for
            quick styling and Typescript.
          </div>
          <div className="mt-4">
            <span
              onClick={handleShowHelp}
              className="underline cursor-pointer hover:no-underline hover:text-gray-300 transition-all ease-in-out"
            >
              Read Instructions
            </span>
          </div>
        </div>
        {/* Contact */}
        <div>
          <div className="font-bold">Contact</div>
          <div>
            <div>
              <Link
                className="text-xs"
                href="https://github.com/jwright04/paymemory-next"
                target="_blank"
              >
                View this on github
              </Link>
            </div>
            <div>
              <Link
                className="text-xs"
                href="https://jamescwright.com"
                target="_blank"
              >
                View this on github
              </Link>
            </div>
            <div>
              <Link
                className="text-xs"
                href="mailto:me@jamescwright.com?subject=Saw your paymemory-next project"
                target="_blank"
              >
                me[at]jamescwright.com
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };
  return (
    <div
      className={classNames(
        'bg-gray-500 text-white w-full px-4 md:px-40 transition-height duration-500 ease-in-out',
        isOpen ? 'h-56' : 'h-11'
      )}
    >
      {isOpen && renderAbout()}
      <div
        className={classNames(
          'flex justify-between items-center',
          isOpen ? 'pt-5' : 'h-full'
        )}
      >
        <div className="border-solid border-white font-bold flex items-center">
          <GiBrain className="mr-1" size={30} /> Paymemory Next
        </div>
        <div className="space-y-2 cursor-pointer" onClick={toggleNavHeight}>
          <div className="w-8 h-0.5 bg-gray-100"></div>
          <div className="w-8 h-0.5 bg-gray-100"></div>
          <div className="w-8 h-0.5 bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
