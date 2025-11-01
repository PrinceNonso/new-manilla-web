import { useState } from 'react';
import { FaCheck, FaThLarge, FaClock, FaDollarSign, FaCircle } from 'react-icons/fa';
import { FiDollarSign } from 'react-icons/fi';
import { BiSolidCheckbox } from 'react-icons/bi';
import { MdOutlineExplore } from 'react-icons/md';
import { PiSquaresFourFill } from 'react-icons/pi';
import Image from 'next/image';

const features = [
  {
    icon: <FaCheck className="text-2xl" />,
    title: 'Canada’s first CEDEFI solution for everyday bills.',
  },
  {
    icon: <PiSquaresFourFill className="text-2xl" />,
    title: 'Utility and travel services powered by blockchain.',
  },
  {
    icon: <MdOutlineExplore className="text-2xl" />,
    title: 'Real-time transactions and zero banking red tape.',
  },
  {
    icon: <FiDollarSign className="text-2xl" />,
    title: 'Transparent fees, zero hidden charges.',
  },
  {
    icon: <BiSolidCheckbox className="text-2xl" />,
    title: 'Backed by our native Manilla Token (MNLA) - earn as you spend.',
  },
];

const WMUD = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-8 px-4 bg-white">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-bold">What Makes Us Different?</h2>
          {/* <Image src={'/heroImgs/yellopad.png'} alt="" width={80} height={80} className='translate-x-1/2' /> */}
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-center gap-6">
        {features.map((item, idx) => {
          // Determine if the current box should be "active" styling
          const active = (hoveredIdx === null && idx === 0) || hoveredIdx === idx;

          return (
            <div
              key={idx}
              className={`group lg:w-[220px] min-h-[210px] px-6 py-10 flex flex-col items-center rounded-2xl shadow-sm transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg
            border 
            ${active ? 'bg-gray-900 text-white border-transparent' : 'bg-white text-gray-900 border-gray-200'}
            `}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div
                className={`mb-4 flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300
              ${active ? 'bg-white text-gray-900' : 'bg-gray-100 text-gray-700'}
              group-hover:bg-white group-hover:text-gray-900
              `}
              >
                {item.icon}
              </div>
              <div className="text-center text-md font-medium">{item.title}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WMUD;
