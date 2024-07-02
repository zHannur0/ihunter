"use client";
import { Inter } from "next/font/google";
import React from "react";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", });

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <div className={`w-full min-h-screen bg-[#f6f4f6] ${inter.variable}`}>
            <Header />
            <MainContainer>
                {children}
            </MainContainer>
        </div>
    );
};

export default RootLayout;
