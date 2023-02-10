import React from 'react';
import Link from 'next/link';
import { HeaderComponent } from '@/styles/HeaderComponent';
const Header = () => {
  return (
    <HeaderComponent>
      <div>
        <h1>
          <Link href='/'>Poetry</Link>
        </h1>
      </div>
      <article>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/genre'>genre</Link>
          </li>
        </ul>
      </article>
    </HeaderComponent>
  );
};

export default Header;
