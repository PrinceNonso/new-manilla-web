import Image from 'next/image';
import React, { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const tabs = [
  {
    label: 'Bill Payments',
    content: (
      <>
        <h2 className="text-2xl font-bold text-indigo-900 mb-2">Bill Payments</h2>
        <p className="mb-2 text-gray-600">
          Tired of juggling utility bills across multiple platforms? Say goodbye to missed bills and
          hello to financial freedom.
        </p>
        <p className="mb-3 text-gray-600 text-sm">
          With Manilla Pay, paying for everyday essentials is as easy as sending a text. Whether
          it's Hydro, water, gas, or mobile data, settle your utilities in seconds using crypto
          assets in-app or crypto debit card - anytime, anywhere.
        </p>
        <ul className="list-disc ml-5 space-y-1 text-gray-800">
          <li>
            <span className="font-bold">Electricity</span> – Pay hydro bills instantly with crypto
            or card
          </li>
          <li>
            <span className="font-bold">Water</span> – Settle city water services without queues
          </li>
          <li>
            <span className="font-bold">Gas</span> – Keep your utilities flowing
          </li>
          <li>
            <span className="font-bold">Cable TV</span> – Top up Shaw, Bell, or Rogers subscriptions
          </li>
          <li>
            <span className="font-bold">Airtime & Data</span> – For all major Canadian carriers
          </li>
        </ul>
      </>
    ),
    image: '/billsimg.png', // Change path as needed
  },
  {
    label: 'Travel & Mobility',
    content: (
      <>
        <h2 className="text-2xl font-bold text-indigo-900 mb-2">Travel & Mobility</h2>

        <p className="pb-3 text-[#121212]">Explore the world, powered by crypto.</p>
        <p className="mb-2 text-gray-600">
          Manilla Finance brings seamless travel booking to your fingertips. Through our ecosystem
          partner, Borderless Travels - an IATA accredited agency integrated with Amadeus, We
          aggregate over 400 airlines serving 3,000+ destinations globally. Book domestic and
          international flights, curated hotel stays, and airport transfers with ease using USDC,
          USDT, or crypto card. Travel smart. Spend simpler. Go borderless.
        </p>
        <ul className="list-disc ml-5 text-sm space-y-1 text-gray-800">
          <li>
            <span className="font-bold">Flight bookings</span> – Domestic & global flights with
            crypto
          </li>
          <li>
            <span className="font-bold">Hotels & Stays</span> – Curated options across Canada and
            worldwide
          </li>
          <li>
            <span className="font-bold">Airport Transfer</span> – Book crypto-powered rides ahead of
            time
          </li>
        </ul>
      </>
    ),
    image: '/walksimg.png',
  },
  {
    label: 'Business & Freelancers',
    content: (
      <>
        <h2 className="text-2xl font-bold text-indigo-900 mb-2">Business & Freelancers</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <p className="flex flex-col">
            <span>Modern Tools for the Modern Canadian Business.</span>
            <span>Accept Crypto. Get Paid. Stay Ahead.</span>
          </p>

          <p className="font-semibold">Invoice Settlement</p>

          <p>
            Whether you’re a solo freelancer or a growing enterprise, Manilla makes it easy to bill
            clients globally and get paid in crypto.
          </p>
        </div>
        <ul className="list-disc ml-5 text-sm space-y-1 text-gray-700">
          <li>
            <span className="font-bold">Branded Invoice System</span> – Generate professional
            invoices in seconds—customized with your business name, logo, and payment instructions.
          </li>
          <li>
            <span className="font-bold">Multi-Asset Support</span> – Accept top cryptocurrencies
            like USDT, USDC, ETH, and BTC from clients around the world.
          </li>
          <li>
            <span className="font-bold">Automated Conversion</span> – Choose to hold funds in crypto
            or auto-convert to CAD (coming soon) for business stability.
          </li>
          <li>
            <span className="font-bold">Real-Time Notifications</span> – Get alerted the moment
            payments hit your Manilla wallet.
          </li>
        </ul>
      </>
    ),
    image: '/dollsimg.png',
  },
  {
    label: 'Crypto Payment API',
    content: (
      <>
        <h2 className="text-2xl font-bold text-indigo-900 mb-2">Crypto Payment API</h2>
        <p className="mb-2 text-gray-600">
          Integrate crypto payments in your app or website—easy and secure. Accept a variety of
          digital assets.
        </p>
        <ul className="list-disc ml-5 space-y-1 text-gray-800">
          <li>API integration</li>
          <li>Multi-currency support</li>
          <li>Instant settlement</li>
        </ul>
      </>
    ),
    image: '/swap.png',
  },
];

export const BillPaymentsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

    return (
       <section>
    <div className="relative bg-[url('/graphic.svg')] bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row  rounded-3xl min-h-[420px] font-sans max-w-7xl mx-auto gap-4 px-8 lg:px-0">
      {/* Overlay for readability (optional dark tint) */}
      <div className="absolute inset-0 bg-blac bg-opacity-20 rounded-3xl"></div>
      {/* Sidebar */}
      <aside className="min-w-[260px] pt-8 pb-8 lg:pl-6 bg-transparent relative z-10">
        <div className="flex items-center text-xl font-semibold text-indigo-900 mb-7 ">
          <span className="w-3 h-3 rounded-full bg-black mr-2 ring-4 ring-[#FBB321] rounded-full" />{' '}
          Options
        </div>
        <nav className="flex lg:flex-col gap-4 bg-[#E2E2E263] lg:bg-transparent rounded-full py-2">
          {tabs.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(i)}
              className={`relative  flex items-center px-4 lg:px-12 py-2 lg:py-4 rounded-full font-semibold text-xs md:text-sm transition-colors duration-200
                ${
                  activeTab === i
                    ? 'bg-gradient-to-r from-indigo-800 to-indigo-600 text-white '
                    : 'lg:bg-gray-100 lg:text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              <span
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-6 p-1.5 lg:p-1  h-6 rounded-full  ${activeTab === i ? 'bg-white text-blue-1' : 'bg-primary text-white'}`}
              >
                <MdOutlineKeyboardDoubleArrowRight />
              </span>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      {/* Details */}
      <section className="flex-1 pt-8 pb-8 pr-8 relative z-10">
        <div className="flex items-center text-xl font-semibold text-indigo-900 mb-7">
          <span className="w-3 h-3 rounded-full bg-black mr-2 ring-4 ring-[#FBB321] rounded-full" />{' '}
          Details
        </div>
        <div className="flex flex-col lg:flex-row bg-white/90 backdrop-blur-sm rounded-xl p-4 bg-[#EDF8FF5E] px-6 gap-6 animate-fade-in ring-1 ring-[#0000002E]">
          {/* Content */}
          <div className="flex-1 pr-4">{tabs[activeTab].content}</div>
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-[400px] md:h-[400px] h-[300px] lg:h-[450px] lg:w-[480px]  rounded-xl overflow-hidden bg-gradient-to-bl from-blue-100 to-yellow-100 flex items-center justify-center ">
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].label}
              className="w-full h-full  object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

     
      </div>
       <div className="relative w-full h-28">
        <Image src={'/aline.png'} alt="" fill />
      </div>
      </section>
      
  );
};
