import React, { FC } from 'react';

type Props = {
  isModalOpen: boolean;
  handleModal: () => void;
};

const HumbuggerMenu: FC<Props> = ({ isModalOpen, handleModal }) => {
  return (
    <button onClick={handleModal} className="w-28px h-28px relative">
      <span
        className={`absolute left-5px top-7px w-18px h-2px bg-primary-dark rounded duration-500 transition-all ${
          isModalOpen && 'bg-primary-white rotate-45 top-14px'
        }`}
      />
      <span
        className={`absolute left-5px top-13px w-18px h-2px bg-primary-dark rounded duration-500 transition-all ${
          isModalOpen && 'bg-primary-white opacity-0'
        }`}
      />
      <span
        className={`absolute left-5px bottom-7px w-18px h-2px bg-primary-dark rounded duration-500 transition-all ${
          isModalOpen && 'bg-primary-white -rotate-45 bottom-12px'
        }`}
      />
    </button>
  );
};

export default HumbuggerMenu;
