import Footer from "@/components/footer/footer";
import NavbarUI from "@/components/navbar/navbar";
import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <NavbarUI />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default PublicLayout;
