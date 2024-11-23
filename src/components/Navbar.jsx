import { useState } from 'react';
import { itemsData, itemsDataRedes } from '../data/items.data';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='w-full py-6 flex items-center justify-center px-4 gap-20'>
      {/* Desktop Navbar */}
      <ul className='hidden md:flex gap-6 items-center justify-center text-lg text-light font-light'>
        {itemsData.map(item => (
          <li key={item.id} className='transition-all duration-300 hover:-translate-y-1'>
            <span
              id={item.link}
              className='cursor-pointer transition-all duration-300 hover:text-detail'
            >
              {item.title}
            </span>
          </li>
        ))}
      </ul>
      <ul className='hidden md:flex gap-12'>
        {itemsDataRedes.map((red) => (
          <li key={red.id} className='transition-all duration-300 hover:-translate-y-1'>
            <a
              href={red.link}
              target='_blank'
              id={red.link}
              className={`cursor-pointer transition-all duration-500 
                ${red.title === 'Github'
                  ? 'text-white'
                  : red.title === 'Youtube'
                    ? 'text-detail-red'
                    : 'text-detail-green'
                }
                hover:text-detail`}
            >
              <red.icon size={30} />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navbar */}
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu} className='text-white absolute top-2 left-4'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-dark py-6 px-4'>
          <ul className='flex flex-col items-center gap-6'>
            {itemsData.map(item => (
              <li key={item.id} className='transition-all duration-300 hover:-translate-y-1'>
                <span
                  id={item.link}
                  className='cursor-pointer text-light transition-all duration-300 hover:text-detail'
                >
                  {item.title}
                </span>
              </li>
            ))}
            <ul className='flex gap-6 mt-4'>
              {itemsDataRedes.map((red) => (
                <li key={red.id} className='transition-all duration-300 hover:-translate-y-1'>
                  <a
                    href={red.link}
                    target='_blank'
                    id={red.link}
                    className={`cursor-pointer transition-all duration-500 
                      ${red.title === 'Github'
                        ? 'text-white'
                        : red.title === 'Youtube'
                          ? 'text-detail-red'
                          : 'text-detail-green'
                      }
                      hover:text-detail`}
                  >
                    <red.icon size={30} />
                  </a>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      )}
    </nav>
  );
};
