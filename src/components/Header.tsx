"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

import { Button } from "./Button";

export default function Header() {
  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button className="text-2xl font-extrabold transition-colors duration-300">
            {siteConfig.businessName}
          </button>
          <nav>
            <Button variant="transparent">transparente</Button>
            <Button variant="primary">primário</Button>
            <Button variant="secondary" className="text-white">
              secundário
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
