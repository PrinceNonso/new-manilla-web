import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google'; // Import both
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // CSS var for Tailwind (optional)
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // Adjust weights as needed (Raleway supports variable)
  variable: '--font-raleway', // CSS var for Tailwind
  display: 'swap', // Graceful loading
});

export const metadata: Metadata = {
  title: 'Manilla Finance',
  description:
    'Settle Bills, the Crypto Way. Modern Utilities. Travel Services. All in One Crypto-Powered Platform.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
