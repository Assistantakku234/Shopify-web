// Parent component (Home.js)
"use client";
import React, { useState } from "react";
import CategoryGrid from "@/components/Category";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Trending from "@/components/Trending";
import TwoCards from "@/components/TwoCards";
import BestSeller from "@/components/BestSeller";
import BottomPopup from "@/components/RandomPopup";
import BlogSection from "@/components/BlogSection";
import FollowUs from "@/components/FollowUs";
import Footer from "@/components/Footer";
import QuickShopPopup from "@/components/QuickShopPopup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Imagega from "@/components/ImageGallery";





export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { 
      title: item.title, 
      selectedSize: item.selectedSize || "N/A", 
      price: item.price || "N/A", 
      imageUrl: item.imageUrl || "/fallback-image.jpg" 
    }]);
    toast.success('Item added to cart');
  };
  
  const openPopup = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
    setSelectedSize(null);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAddToCartAndClose = (item) => {
    addToCart(item);
    closePopup();
  }

  const getCartItemsForNavbar = () => {
    return cartItems;
  };

  return (
    <>

      

      <Imagega/>
      <Navbar cartItems={getCartItemsForNavbar()} />
      <Hero />
      <CategoryGrid />
      <Trending openPopup={openPopup} />
      <TwoCards />
      <BestSeller openPopup={openPopup} />
      <BlogSection />
      <FollowUs />
      <BottomPopup/>
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