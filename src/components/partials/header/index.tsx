import IconDarkMode from '@/assets/icon/icon_darkMode.svg';
import Link from 'next/link';
import React, { useState } from 'react';
import { PAGE_URL } from 'src/constants/page-url';
import HumbuggerMenu from './humbugger';

export const Header = () => {
  const [isModalOpen, SetIsModalOpen] = useState(false);

  /** TODO: モーダル 開いた時に背景固定 */

  return (
    <>
      <header className="flex justify-between items-center w-full py-18.5px">
        <div className="md:hidden">
          <HumbuggerMenu
            isModalOpen={isModalOpen}
            handleModal={() => SetIsModalOpen(!isModalOpen)}
          />
        </div>
        <Link href={PAGE_URL.TOP}>
          <a className="block text-lg font-bold text-primary-dark leading-6">
            Shimabu IT University
          </a>
        </Link>
        <div className="flex items-center">
          <ul className="hidden md:flex md:items-center">
            <li className="mr-16px">
              <Link href={PAGE_URL.ABOUT}>
                <a className="text-lg font-bold text-primary-dark leading-6">About</a>
              </Link>
            </li>
            <li className="mr-16px">
              <Link href={PAGE_URL.BLOG}>
                <a className="text-lg font-bold text-primary-dark leading-6">Blog</a>
              </Link>
            </li>
            <li className="mr-16px">
              <Link href={PAGE_URL.PORTFOLIO}>
                <a className="text-lg font-bold text-primary-dark leading-6">Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href={PAGE_URL.CONTACT}>
                <a className="text-lg font-bold text-primary-dark leading-6">Contact</a>
              </Link>
            </li>
          </ul>
          <button className="block md:ml-16px">
            <IconDarkMode />
          </button>
        </div>
      </header>
      <div
        className={`fixed w-full h-full top-0 left-0 bg-primary-pink z-50 duration-500 transition-all ${
          isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="mt-18.5px ml-16px">
          <HumbuggerMenu
            isModalOpen={isModalOpen}
            handleModal={() => SetIsModalOpen(!isModalOpen)}
          />
        </div>
        <ul className="ml-24px mt-42.5px">
          <li className="text-primary-white text-2xl leading-9 font-bold mb-16px">
            <Link href={PAGE_URL.ABOUT}>About</Link>
          </li>
          <li className="text-primary-white text-2xl leading-9 font-bold mb-16px">
            <Link href={PAGE_URL.BLOG}>Blog</Link>
          </li>
          <li className="text-primary-white text-2xl leading-9 font-bold mb-16px">
            <Link href={PAGE_URL.PORTFOLIO}>Portfolio</Link>
          </li>
          <li className="text-primary-white text-2xl leading-9 font-bold ">
            <Link href={PAGE_URL.CONTACT}>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
