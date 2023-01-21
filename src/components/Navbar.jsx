import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const hanleNav = () => setNav(!nav);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#fff');
        setTextColor('#111');
      } else {
        setColor('transparent');
        setTextColor('#fff');
      }
    };

    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 transition ease-in duration-300"
    >
      <div
        style={{ color: `${textColor}` }}
        className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white"
      >
        <Link href="/">
          <span className="text-4xl font-bold">Capture</span>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/portfolio">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={hanleNav} className="block sm:hidden z-10 cursor-pointer">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <ul
          style={{ color: `${textColor}` }}
          className={
            nav
              ? 'sm:hidden absolute inset-0 flex justify-center items-center w-full h-screen flex-col bg-black/95 gap-12'
              : 'sm:hidden absolute inset-0 left-[-100%] flex justify-center items-center w-full h-screen flex-col bg-black/95 gap-12'
          }
        >
          <li className="text-4xl hover:text-gray-500">
            <Link href="/">Home</Link>
          </li>
          <li className="text-4xl hover:text-gray-500">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="text-4xl hover:text-gray-500">
            <Link href="/portfolio">Work</Link>
          </li>
          <li className="text-4xl hover:text-gray-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
