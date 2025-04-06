"use client"
import "@/app/globals.css"

import React from "react"

import NavBar from "@/app/components/NavBar"
import Header from "@/app/header"
import About from "@/app/about"
import Plans from "@/app/plans"
import Footer from "@/app/footer"
import Faqs from "@/app/faqs"

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col px-4 gap-20 lg:px-52">
        <Header />
        <About />
        <Plans />
        <Faqs />
      </main>
      <Footer />
    </div >
  );
}
