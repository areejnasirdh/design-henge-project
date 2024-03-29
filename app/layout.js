import "../public/css/globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/navbar.css";
import "../public/css/home.css";
import "../public/css/about.css";
import "../public/css/blog.css";
import "../public/css/banner.css";
import "../public/css/blog-inner.css";
import "../public/css/case-study.css";
import "../public/css/services.css";
import "../public/css/contact-us.css";
// import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactUs from "@/components/Home/ContactUs";
import Testimonials from "@/components/Home/Testimonials";
import Footer from "@/components/Home/Footer";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Design Henge",
  description: "Design henge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ContactUs />
        <Testimonials />
        <Footer />
      </body>
    </html>
  );
}
