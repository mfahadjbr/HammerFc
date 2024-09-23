"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";


export default function ThreeDCardDemo() {
  return (
    <>
    <div><h1 className="text-center text-4xl text-gray-600 font-semibold font-serif mt-[15px]">MEN's SENIOR</h1></div>
    
    <div className="flex flex-wrap justify-center gap-10">
    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
        SYED AHMED HASSAN
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/lodo.png'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>DOB: 18TH APRIL 1999</p>
          <h1 className="mt-2 text-gray-800">DEFENDER</h1>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          RAJA SAJJAD
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/ttl.png'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>DOB: 11TH NOVEMBER 1994</p>
          <h1 className="mt-2 text-gray-800">MID FIELDER</h1>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
         ASAD ZAMAN
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/asad.png'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>DOB: 14TH AUGUST 1998</p>
          <h1 className="mt-2 text-gray-800">FORWARD</h1>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          KHUSHBAKHT SAROSH
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/bhai.png'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>DOB: 20TH OCTOBER 1997</p>
          <h1 className="mt-2 text-gray-800">DEFENDER</h1>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          IBRHIM KHAN
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/abi.png'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>DOB: 15TH NOVEMBER 1996</p>
          <h1 className="mt-2 text-gray-800">MID FIELDER</h1>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          HASHAM  ABBASI (C)
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/shamu1.png'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>DOB: 4TH JULY 1998</p>
          <h1 className="mt-2 text-gray-800">MIDFIELDER</h1>
        </div>
      </CardBody>
    </CardContainer>


    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          FASSI ABBASI
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/not.png'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>DOB: 17th JULY 1999</p>
          <h1 className="mt-2 text-gray-800">FORWARD</h1>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          ASFAND DADAN
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/bhai1.png'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>DOB: 17th JULY 1997</p>
          <h1 className="mt-2 text-gray-800">DEFENDER</h1>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var shadow-2xl rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          hassan khan
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src='/hassan.png'
            height="1000"
            width="1000"
            className="h-80 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col mt-4">
          <p>DOB:16TH MAY 1995</p>
          <h1 className="mt-2 text-gray-800">DEFENDER</h1>
        </div>
      </CardBody>
    </CardContainer>
    </div>
    </>
  );
}