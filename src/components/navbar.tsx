import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isFixed, setFixed] = useState(false);
  const [caretClicked, setCaretClicked] = useState(null);

  const handleCaretClick = (index:any) => {
    setCaretClicked((prev) => (prev === index ? null : index));
  };

  const handleFixedNavbar = () => {
    if (window.scrollY >= 60) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleFixedNavbar);
    return () => window.removeEventListener('scroll', handleFixedNavbar);
  }, []);

  const navLinks = [
    {
      id: 1,
      tag: 'Parents',
      href: '/parents',
      dropdown: [
        { label: 'Home', href: '/' },
        { label: 'Enrollment', href: '/getting_started' },
        { label: 'Events', href: '/parents/events' },
      ],
    },
    {
      id: 2,
      tag: 'Referrals',
      href: '/referrals',
      dropdown: [
        { label: 'Submit Referral', href: '/referrals/submit' },
        { label: 'Track Status', href: '/referrals/track_status' },
      ],
    },
    {
      id: 3,
      tag: 'About',
      href: '/about',
      dropdown: [
        { label: 'Our Mission', href: '/about/solutions' },
        { label: 'Our Team', href: '/about/team' },
        {label: "Contact", href: "/contact"},
        { label: 'FAQ', href: '/about/faq' },
      ],
    },
    {
      id: 4,
      tag: 'Careers',
      href: '/careers',
      dropdown: [
        { label: 'Open Positions', href: '/careers/jobs' },
        { label: 'Life at Company', href: '/careers/life_company' },
      ],
    },
  ];

  return (
    <div>
      <nav
        className={`flex items-center justify-between px-5 z-[1000] h-[100px] ${
          isFixed ? 'fixed top-0 w-full bg-white shadow-md' : ''
        }`}
      >
        {/* Logo */}
        <div>
          <img
            className='lg:w-[72px] lg:h-[80px]'
            src={logo}
            alt='Child Care Website Logo'
            aria-label='Child Care Website Logo'
          />
        </div>

        {/* Nav Links */}
        <ul className='lg:flex items-center gap-8 hidden relative'>
          {navLinks.map((link, index) => (
            <div key={link.id} className='relative'>
              <div
                className='flex gap-2 items-center justify-center cursor-pointer'
                onClick={() => handleCaretClick(index)}
              >
                <li>
                  <a>{link.tag}</a>
                </li>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={`text-[#8F36FF] transition-all duration-300 ${
                    caretClicked === index ? 'rotate-[-180deg]' : ''
                  }`}
                />
              </div>

              {/* Dropdown */}
              {caretClicked === index && (
                <ul className='absolute top-[100%] left-0 mt-2 bg-white shadow-md rounded-md py-2 z-50 min-w-[180px]'>
                  {link.dropdown.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.href}
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        onClick={() => setCaretClicked(null)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className='lg:flex hidden items-center gap-7 text-[#8F36FF]'>
          {[
            { id: 1, context: '+1 700 348 1022', href: 'tel:+1 700 348 1022' },
            { id: 2, context: 'get started', href: '/getting_started' },
          ].map((btn) => (
            <a key={btn.id} href={btn.href}>
              <button
                className={`${
                  btn.id === 2
                    ? 'border border-[#8F36FF] w-[162px] h-[44px] rounded-[40px]'
                    : ''
                }`}
              >
                {btn.context}
              </button>
            </a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className='flex flex-col gap-2 lg:hidden cursor-pointer'>
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className='min-w-[30px] min-h-[2px] bg-black'></div>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
