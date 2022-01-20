/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import * as React from 'react';
import Hero from '../components/Hero';
import NavComponent from '../components/NavComponent';
import Pricing from '../components/Pricing';
import Service from '../components/Service';

export default function Home() {
  return (
<div className="bg-[#12111A] min-h-screen text-white">
<NavComponent />  
<Hero />
<Service />
<Pricing />
 </div>
  );
}