import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext"; // Add cart provider to layout if used globally.

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Your E-commerce Store", // Customized title
  description: "Explore our amazing products!", // Customized description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CartProvider> {/* Wrap layout with CartProvider if cart is used globally */}
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
