"use client";
import React, { useState, useCallback } from "react";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/Category";
import Trending from "@/components/Trending";
import TwoCards from "@/components/TwoCards";
import BestSeller from "@/components/BestSeller";
import BottomPopup from "@/components/RandomPopup";
import BlogSection from "@/components/BlogSection";
import FollowUs from "@/components/FollowUs";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider, useCart } from "@/contexts/CartContext"; // Assuming you create a CartContext

function HomePageContent() { // Extracted page content to a separate component
  const { cartItems, addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const openPopup = useCallback((product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
    setSelectedSize(null);
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);


  return (
    <>
      <Hero/>
      <CategoryGrid />
      <Trending openPopup={openPopup} />
      <TwoCards />
      <BestSeller openPopup={openPopup} />
      <BlogSection />
      <FollowUs />
      <BottomPopup />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default function Home() {
  return (
    <CartProvider>
      <HomePageContent />
    </CartProvider>
  );
}
