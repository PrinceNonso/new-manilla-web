import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  const socials = [
    {
      icon: '/FaTelegramPlane.svg',
      link: '',
    },
    {
      icon: '/Vector.svg',
      link: '',
    },
    {
      icon: '/AiFillInstagram.svg',
      link: '',
    },

    {
      icon: '/BsTwitterX.svg',
      link: '',
    },
    {
      icon: '/FaLinkedinIn.svg',
      link: '',
    },
  ];

  return (
    <footer className="bg-[#222] text-gray-300 rounded-xl pb-2 pt-8 px-4 md:px-12 mx-6 md:mx-12">
      {/* Newsletter Section */}
      <div className="relative w-12 h-12 md:w-16 md:h-16">
        {/* Envelope Icon */}

        <Image src={'/footerImg.png'} alt="" fill />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start py-8 gap-8">
        <div className="flex flex-col md:w-1/2">
          <h3 className="font-light text-white text-2xl mb-1">Get our weekly</h3>
          <h2 className="font-extrabold bg-gradient-to-r from-[#AA7414] to-[#FBCF21] bg-clip-text text-transparent text-2xl md:text-3xl lg:text-5xl tracking-wider mb-2">
            NEWSLETTER
          </h2>
          <p className="mb-2 text-gray-400  md:max-w-md ">
            Get weekly updates on the newest stories, and tips right <br className='hidden lg:block'/> in your mailbox:{' '}
            <span className="text-white font-bold">Subscribe now!</span>
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="md:w-1/2 w-full flex flex-col gap-3">
          <span className="mb-2">Stay up to date with our newsletters</span>
          <form className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="email"
              className="flex-1 py-3 px-4 rounded-full bg-[#393939] text-gray-100 focus:outline-none"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="py-3 cursor-pointer px-8 rounded-full bg-yellow-400 text-gray-900 font-semibold transition hover:bg-yellow-500"
            >
              Subscribe
            </button>
          </form>
          <small className="text-xs text-gray-400 mt-2">
            By submitting your email address, you agree to receive occasional marketing messages
            from Manilla, from which you can unsubscribe at any time. For more information, please
            see our{' '}
            <a href="#" className="underline text-gray-200">
              privacy policy
            </a>
            .
          </small>
        </div>
      </div>

      {/* Lower Footer Section */}
      <div className="bg-[#292929] rounded-xl flex flex-col  items-center md:items-start justify-between mt-6 py-6 px-6">
        {/* Logo and Brand */}
        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4">
          <div className="relative w-44 h-20  flex items-center gap-2">
            <Image src={'/manilla-white.svg'} alt="" fill />
          </div>
          {/* Navigation */}
          <div className="flex gap-7 text-white text-sm font-semibold transition-all duration-300 ease-linear  ml-6">
            <a href="#" className="hover:underline transition-all duration-300 ease-linear">
              Products
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>

          <div className="flex gap-6">
            {socials.map((s, i) => (
              <div key={i} className="">
                <div className="relative w-4 h-4 md:h-5 md:h-5 lg:w-6 lg:h-6">
                  <Image src={s.icon} alt="" fill />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row  justify-between items-center w-full mt-4 lg:mt-0 border-t border-t-gray-500 pt-3">
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-xs md:text-sm text-gray-400 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
          {/* Copyright */}
          <div className="text-xs md:text-sm  text-gray-400 md:text-right mt-2">
            © Manilla Finance 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
