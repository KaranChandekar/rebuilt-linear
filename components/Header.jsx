import Link from 'next/link';
import { Button } from './Button';
import Container from './Container';
import Logo from './icons/Logo';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-[12px]">
      <Container className="flex h-[var(--navigation-height)] border-b border-white-a08">
        <Link href="/" className="flex items-center text-md">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-2" /> Linear
        </Link>

        <nav className="h-full">
          <ul className="flex items-center h-full [&_a]:text-sm [&_li]:ml-6 [&_a:hover]:text-grey [&_a]:transition-colors">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li>
              <Link href="#">Customers</Link>
            </li>
            <li>
              <Link href="#">Changelog</Link>
            </li>
            <li>
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

        <div className="flex items-center ml-auto">
          <Link className="mr-6 text-sm" href="#">
            Log in
          </Link>
          <Button href="#" variant="primary">
            Sign up
          </Button>
        </div>
      </Container>
    </header>
  );
};
export default Header;
