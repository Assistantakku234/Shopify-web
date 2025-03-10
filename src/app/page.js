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
import QuickShopPopup from "@/components/QuickShopPopup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider, useCart } from "@/contexts/CartContext"; // Assuming you create a CartContext

function HomePageContent() { // Extracted page content to a separate component
  const { cartItems, addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleAddToCart = useCallback(
    (item) => {
      addToCart({
        title: item.title,
        selectedSize: item.selectedSize || "N/A",
        price: item.price || "N/A",
        imageUrl: item.imageUrl || "/fallback-image.jpg",
      });
      toast.success("Item added to cart");
    },
    [addToCart]
  );

  const openPopup = useCallback((product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
    setSelectedSize(null);
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  const handleAddToCartAndClose = useCallback(
    (item) => {
      handleAddToCart(item);
      closePopup();
    },
    [handleAddToCart, closePopup]
  );

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
      {selectedProduct && (
        <QuickShopPopup
          isOpen={isPopupOpen}
          onClose={closePopup}
          imageUrl={selectedProduct.imageUrl}
          title={selectedProduct.title}
          description={selectedProduct.description}
          sizes={selectedProduct.sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          addToCart={handleAddToCartAndClose}
        />
      )}
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
