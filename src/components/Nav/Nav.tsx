import './Nav.scss';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { AiOutlineMessage } from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState<string>('#');

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
        href="#experience"
      >
        <BiBook />
      </a>
      <a
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
        href="#services"
      >
        <RiServiceLine />
      </a>
      <a
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
        href="#contact"
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};
export default Nav;
