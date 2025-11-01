import Image from 'next/image';
import { BillPaymentsTabs } from '../services';


// In your parent component (e.g., page.tsx)
// const billTabs: TabContent[] = [
//   {
//     title: 'Bill Payments',
//     description:
//       "Tired of juggling utility bills across multiple platforms? Say goodbye to missed bills and hello to financial freedom. With Manilla Pay, paying for everyday essentials is as easy as sending a text. Whether it's hydro, water, gas, or mobile - in seconds using crypto or debit card. Anytime, anywhere.",
//     features: [
//       'Electricity - Pay hydro bills instantly without queues or card',
//       'Gas - Keep your utilities flowing without questions',
//       'Cable TV - Top up Shaw, Bell, or Rogers subscriptions',
//       'Airtime & Data - For all major Canadian carriers',
//     ],
//     imageSrc: '/bill-payments-image.png', // Replace with your image path
//     imageAlt: 'Bill Payments Illustration',
//     buttonLabel: 'PAY NOW',
//     onButtonClick: () => console.log('Pay now clicked'),
//   },
//   {
//     title: 'Travel & Mobility',
//     description:
//       'Placeholder description for Travel & Mobility tab. Effortlessly manage your travel expenses and mobility needs with seamless crypto payments.',
//     features: [
//       'Book flights and hotels instantly',
//       'Top up transit cards',
//       'Fuel payments at stations',
//       'Ride-sharing integrations',
//     ],
//     imageSrc: '/travel-image.png',
//     imageAlt: 'Travel Illustration',
//     buttonLabel: 'EXPLORE NOW',
//   },
//   {
//     title: 'Business & Freelancers',
//     description:
//       'Placeholder for Business & Freelancers. Streamline invoicing and payments for professionals using blockchain technology.',
//     features: ['Instant invoicing', 'Crypto payroll', 'Expense tracking', 'Tax reporting tools'],
//     imageSrc: '/business-image.png',
//     imageAlt: 'Business Illustration',
//     buttonLabel: 'GET STARTED',
//   },
//   {
//     title: 'Crypto Payment API',
//     description:
//       'Integrate seamless crypto payments into your app with our robust API. Secure, fast, and developer-friendly.',
//     features: [
//       'RESTful API endpoints',
//       'Webhook support',
//       'Multi-currency',
//       'SDKs for major languages',
//     ],
//     imageSrc: '/api-image.png',
//     imageAlt: 'API Illustration',
//     buttonLabel: 'VIEW DOCS',
//   },
// ];

const OurServices = () => {
  return (
    <div className="py-16 ">
      <div className="mx-auto mt-16 max-w-7xl">
        <div className="relative ">
          <Image
            src="/netImg.svg"
            alt="Overlay Image"
            width={1000}
            height={400}
            className="w-full rounded-lg "
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center  bg-opacity-50 rounded-lg text-center text-white p-8 space-y-8">
            <div className="bg-white p-1.5 lg:p-3 px-10 rounded-full  text-blue-1 font-semibold box">
              Our Services
            </div>
            <h1 className="test text-2xl  md:text-5xl lg:max-w-4xl">
              Your Daily Essentials. One Dashboard. Powered by Crypto.
            </h1>
          </div>
        </div>
      </div>
      <BillPaymentsTabs />
    </div>
  );
};

export default OurServices;
