import { ResLogo } from '@/utils/icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" bg-white sm:p-6 d px-20">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center">
            <ResLogo />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Resources
            </h2>
            <ul className="text-gray-600 ">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Restaurante X
                </a>
              </li>
              <li>
                <Link href="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Follow us
            </h2>
            <ul className="text-gray-600 ">
              <li className="mb-4">
                <a href="#" className="hover:underline ">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Legal
            </h2>
            <ul className="text-gray-600 ">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
