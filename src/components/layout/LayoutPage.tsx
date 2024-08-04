"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import scss from "./LayoutPage.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import PreLoaderDevX from "@/loading/Loading";

interface LayoutPageType {
  children: ReactNode;
}

const LayoutPage: FC<LayoutPageType> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={scss.Layout}>
      {loading ? (
        <>
          <PreLoaderDevX />
        </>
      ) : (
        <>
          <Header />

          <main>{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default LayoutPage;
