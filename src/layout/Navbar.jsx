/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from "../assets/logo/logo_zoom.jpeg";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

export default function Navbar() {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Cek preferensi mode gelap dari localStorage jika ada
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      document.body.classList.add('dark');
      setIsDarkMode(true);
    } else if (storedDarkMode === 'false') {
      document.body.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      // Jika tidak ada preferensi di localStorage, ikuti preferensi sistem
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
        setIsDarkMode(true);
      } else {
        document.body.classList.remove('dark');
        setIsDarkMode(false);
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
    setIsDarkMode(!isDarkMode);
  };

  const handleNavClick = (to) => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      // Pastikan scroll hanya terjadi setelah navigasi selesai
      document.getElementById(to)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setMobileToggle(false); // Menutup menu mobile setelah navigasi
    }, 300); // Memberikan delay agar navigasi selesai terlebih dahulu
  };

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-gray-200 border-gray-700 dark:bg-gray-900 shadow-lg dark:border-slate-900' : 'bg-transparent'
        } ${mobileToggle ? 'menu-open' : ''}`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between md:justify-between py-4">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="text-slate-900 dark:text-white font-bold text-xl flex items-center gap-3">
            <img src={logo} alt="" className='h-6 md:h-8  rounded-lg' />
            <h1 className="text-xl uppercase">Yogeswr</h1>
          </Link>
        </div>

        {/* Main Menu */}
        <nav className="hidden lg:flex space-x-6">
          {[
            { to: 'home', label: 'Home' },
            { to: 'project', label: 'Projects' },
            { to: 'skills', label: 'Skills' },
            { to: 'about', label: 'About Me' },
            { to: 'experience', label: 'Experience' },
          ].map((item) => (
            <button
              key={item.to}
              onClick={() => {
                handleNavClick('form')
                handleNavClick(item.to)
              }}
              className="text-slate-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-600 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle & experience Button */}
        <div className="flex items-center gap-3">
          <DarkModeSwitcher toggleDarkMode={toggleDarkMode} />
          <ScrollLink
            to="form"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              handleNavClick('form'); // Memastikan scroll ke 'form' setelah navigasi
              setMobileToggle(false); // Menutup mobile menu
            }}
            className="hidden lg:inline-block bg-blue-500 text-white px-4 py-2 rounded dark:hover:bg-blue-600 cursor-pointer"
          >
            Let&apos;s Talk
          </ScrollLink>

          <button
            className="lg:hidden text-white focus:outline-none ml-4"
            onClick={() => setMobileToggle(!mobileToggle)}
          >
            <span className="hamburger-line block w-6 h-0.5 bg-slate-900 dark:bg-white mb-1.5"></span>
            <span className="hamburger-line block w-6 h-0.5 bg-slate-900 dark:bg-white mb-1.5"></span>
            <span className="hamburger-line block w-6 h-0.5 bg-slate-900 dark:bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-gray-200 dark:bg-gray-800 transition-all duration-300 ${mobileToggle ? 'max-h-screen' : 'max-h-0'
          } overflow-hidden`}
      >
        <nav className="flex flex-col items-start space-y-4 py-4 pl-4 text-left">
          {[
            { to: 'home', label: 'Home' },
            { to: 'project', label: 'Projects' },
            { to: 'skills', label: 'Skills' },
            { to: 'about', label: 'About Me' },
            { to: 'experience', label: 'Experience' },
          ].map((item) => (
            <button
              key={item.to}
              onClick={() => handleNavClick(item.to)}
              className="text-slate-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-600 cursor-pointer w-full h-full text-left"
            >
              {item.label}
            </button>
          ))}
          <ScrollLink
            to="form"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setMobileToggle(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
          >
            Let&apos;s Talk
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
}

const DarkModeSwitcher = ({ toggleDarkMode }) => {
  return (
    <div
      className="relative cursor-pointer h-8 w-16 rounded-full overflow-hidden bg-gray-600 transition-all duration-300"
      onClick={toggleDarkMode}
    >
      <div
        className={`absolute h-full w-full transition-colors duration-500 ease-in-out ${document.body.classList.contains('dark') ? 'bg-blue-900' : 'bg-gray-300'
          }`}
      ></div>
      <span
        className={`absolute top-1/2 transform -translate-y-1/2 h-6 w-6 rounded-full bg-white shadow-md transition-all duration-300 ease-linear ${document.body.classList.contains('dark') ? 'right-1' : 'left-1'
          } flex items-center justify-center`}
      >
        {document.body.classList.contains('dark') ? (
          <IoMoon />
        ) : (
          <MdOutlineWbSunny />
        )}
      </span>
    </div>
  );
};
