/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import NavComponent from "../components/NavComponent";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <div className="">
      <NavComponent />
      <Hero />
      <Stats />
      <Features />
    </div>
  );
}
