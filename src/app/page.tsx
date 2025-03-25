"use client";
import { PT_Serif } from "next/font/google";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { useState } from "react";

// Configure PT Serif font
const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-serif",
});

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={`${ptSerif.variable}`}>
      <Hero />
      <Header initialState={isMenuOpen} toggleMenuFunction={toggleMenu} />
    </div>
  );
} 

// "use client";
// import { Header } from "@/components/Header";
// import { Hero } from "@/components/Hero";

// // import "@fortawesome/fontawesome-free/css/all.min.css";
// import { useState } from "react";
// export default function Page() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <Hero />
//       <Header initialState={isMenuOpen} toggleMenuFunction={toggleMenu} />
//     </>
//   );
// }
