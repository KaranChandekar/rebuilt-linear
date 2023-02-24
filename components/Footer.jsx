import Link from 'next/link';
import Container from './Container';
import Github from './icons/Github';
import Logo from './icons/Logo';
import Slack from './icons/Slack';
import Twitter from './icons/Twitter';

const footerLinks = [
  {
    title: 'Product',
    links: [
      {
        title: 'Features',
        href: '#',
      },
      {
        title: 'Integrations',
        href: '#',
      },
      {
        title: 'Pricing',
        href: '#',
      },
      {
        title: 'Changelog',
        href: '#',
      },
      {
        title: 'Docs',
        href: '#',
      },
      {
        title: 'Linear Method',
        href: '#',
      },
      {
        title: 'Download',
        href: '#',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        title: 'About us',
        href: '#',
      },
      {
        title: 'Blog',
        href: '#',
      },
      {
        title: 'Careers',
        href: '#',
      },
      {
        title: 'Customers',
        href: '#',
      },
      {
        title: 'Brands',
        href: '#',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        title: 'Community',
        href: '#',
      },
      {
        title: 'Contact',
        href: '#',
      },
      {
        title: 'DPA',
        href: '#',
      },
      {
        title: 'Terms of service',
        href: '#',
      },
    ],
  },
  {
    title: 'Developers',
    links: [
      {
        title: 'API',
        href: '#',
      },
      {
        title: 'Status',
        href: '#',
      },
      {
        title: 'Github',
        href: '#',
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-transparent-white py-[5.6rem] mt-12 text-sm">
      <Container className="flex flex-col justify-between lg:flex-row">
        <div>
          <div className="flex flex-row justify-between h-full lg:flex-col">
            <div className="flex items-center transition-colors duration-300 cursor-pointer text-grey hover:text-white">
              <Logo className="w-4 h-4 mr-2" /> Linear - Designed worldwide
            </div>
            <div className="flex mt-auto space-x-5 [&_a]:transition-colors [&_a]:duration-300 [&_a]:cursor-pointer text-grey [&_a:hover]:text-white">
              <Link href="#">
                <Twitter />
              </Link>
              <Link href="#">
                <Github />
              </Link>
              <Link href="#">
                <Slack />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          {footerLinks.map((column) => {
            return (
              <div className="lg:min-w-[18rem] min-w-[50%] mt-10 lg:mt-0">
                <h3 className="mb-3 font-medium">{column.title}</h3>
                <ul>
                  {column.links.map((link) => {
                    return (
                      <li
                        className="[&_a]:last:mb-0 [&_a]:duration-300 [&_a]:transition-colors [&_a:hover]:text-white"
                        key={link.title}
                      >
                        <Link className="block mb-3 text-grey" href={link.href}>
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
