"use client";

import MainHeader from "../../../components/shared/Header";
import Footer from "../../../components/shared/Footer";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SessionProvider>
        <MainHeader />
        <main>{children}</main>
        <Footer
          name="Vishal Sharma"
          email="sharmavs9205@gmail.com"
          phone="+91 7303876390"
        />
      </SessionProvider>
    </>
  );
}
