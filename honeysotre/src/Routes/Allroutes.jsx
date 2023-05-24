import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import PageNotFound from "../Pages/PageNotFound";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import PaymentPage from "../Pages/PaymentPage";
import Blog from "../Pages/Blog";
import AboutUs from "../Pages/AboutUsPage";
import Contact from "../Pages/Contact";
import AllProductsPage from "../Pages/AllProductsPage";
import CartPage from "../Pages/CartPage";
const Allroutes = () => {
  return (
    <Routes>
      {/* CHANGE THE ELEMETS BELOW ONLY NOT THE PATH */}

      {/* home */}
      <Route path="/" element={<LandingPage />}></Route>

      {/* about us page */}
      <Route path="/about-us" element={<AboutUs />}></Route>

      {/* blog page */}
      <Route path="/blog" element={<Blog />}></Route>

      {/* contact page */}
      <Route path="/contact" element={<Contact />}></Route>

      {/* all products list page */}
      <Route path="/products" element={<AllProductsPage />}></Route>

      {/*  single product page /  product details page */}
      <Route path="/products/:id" element={<ProductDetailsPage />}></Route>

      {/* payment page */}
      <Route path="/payment" element={<PaymentPage />}></Route>

      {/* Cart page */}
      <Route path="/cart" element={<CartPage />}></Route>

      {/* page not found page */}
      <Route path="/*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default Allroutes;
