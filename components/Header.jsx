'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './Button';
import Container from './Container';
import Hamburger from './icons/Hamburger';
import Logo from './icons/Logo';

const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-[12px] z-10">
      <Container className="flex border-b h-navigation-height border-transparent-white">
        <Link href="/" className="flex items-center text-md">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-2" /> Linear
        </Link>

        <nav
          className={classNames(
            'fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none',
            hamburgerMenuIsOpen
              ? 'translate-x-0 opacity-100'
              : 'translate-x-[-100vw] opacity-0'
          )}
        >
          <ul
            className={classNames(
              'flex h-full flex-col md:flex-row md:items-center [&_li]:mx-8 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none',
              'ease-in [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:text-sm [&_a]:md:transition-colors [&_a:hover]:text-grey',
              hamburgerMenuIsOpen && '[&_a]:translate-y-0'
            )}
          >
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Customers</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Changelog</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Integrations</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Company</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center h-full ml-auto">
          <Link className="mr-6 text-sm" href="#">
            Log in
          </Link>
          <Button href="#">Sign up</Button>
        </div>

        <button
          className="ml-6 md:hidden"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <Hamburger />
        </button>
      </Container>
    </header>
  );
};
export default Header;
