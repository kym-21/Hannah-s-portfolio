import type { Metadata } from 'next';
import { Cormorant_Garamond, Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
});

const accentFont = Fraunces({
  subsets: ['latin'],
  variable: '--font-accent',
});

export const metadata: Metadata = {
  title: 'Hannah Law | Legal Portfolio',
  description:
    'A legal portfolio for a law graduate with court exposure and practical experience in the legal sector.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} ${accentFont.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
