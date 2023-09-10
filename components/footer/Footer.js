"use client";

import React from "react";
import Container from "../Container";
import Damnsruz from "./damnsruz/Damnsruz";
import CustomerCare from "./customerCare/CustomerCare";
import NewsLetter from "./newsLetter/NewsLetter";
import TermsServices from "./terms-services/TermsServices";
import SocialIcons from "./socialmedia/Icons";


export default function Footer() {
  return (
    <>
      <div className="bg-orange-100/25 relative py-16 lg:pt-24 text-amber-700/75 text-lg ">
        <Container>
        <div className="absolute -top-6 flex justify-center items-center left-[45%] lg:left-[47%]  ">
          <h1 className="text-6xl font-PlayfairDisplay line-through font-black text-black ">
            D 
          </h1>
        </div>
     
     <div className="md:flex md:shrink-0 md:justify-between">

          <div className="md:w-[50%]">
          <div className="flex justify-evenly md:justify-between sm:justify-around">

              <Damnsruz />
              <CustomerCare />
            </div>
          </div>

            <div >
              <NewsLetter />
            </div>
     </div>

          <div>
            <TermsServices />
          </div>

          <div>
            <SocialIcons />
          </div>

          <span className="">
            <hr className="w-[100px] m-auto mt-10 h-[2px] bg-slate-300 lg:w-[100px] lg:mt-10 lg:m-auto lg:h-[2px] lg:bg-slate-300" />
          </span>
        </Container>
      </div>
    </>
  );
}
