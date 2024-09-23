import React from 'react'
import Image from 'next/image'
export default function About() {
  return (
    <>
    <div className='flex justify-center items-center bg-gray-400 m-1'>
      <div className='h-[300px] '>
        <Image src="/hammer.png" alt="about" width={300} height={500}/>
      </div>
    </div>

<div className="bg-gray-500 text-white p-4 md:p-8 lg:p-12 m-1">
<section className="mb-8">
  <h2 className="text-3xl font-bold mb-4 text-center">About</h2>
  <div className="w-12 h-1 bg-white mx-auto mb-4"></div>
  <p className="text-center max-w-3xl mx-auto">
    In 2015 2 of Sohan FC players decided to part ways with the club and start a new club and so formed the Hammers Football Club.
    Originally planned as an 11 aside football Club the Hammers later on introduced a futsal and a shorter side of 6, 7 and 5 aside format teams
    aswell.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-3xl font-bold mb-4 text-center">Teams</h2>
  <div className="w-12 h-1 bg-white mx-auto mb-4"></div>
  <p className="text-center max-w-3xl mx-auto">
    The Hammers Football team currently constitutes of a Mens 11 aside team and Mens futsal team.
    By the end of Ramzan 2021 Hammers plan on launching a Mens junior and Female Senior Team aswell with the initiative of promoting football
    through all age groups and genders.
  </p>
</section>

<section>
  <h2 className="text-3xl font-bold mb-4 text-center">Founding Members</h2>
  <div className="w-12 h-1 bg-white mx-auto mb-4"></div>
  <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
    <div className="mb-4 md:mb-0 text-center">
      <Image
        src="/shamu.png?height=150&width=150&text=Hasham+Abbas"
        alt="Hasham Abbas"
        width={150}
        height={150}
        className="rounded-full mb-2"
      />
      <h3 className="text-xl font-bold">HASHAM ABBAS</h3>
      <p>CAPTAIN MENS SENIOR</p>
    </div>
    <div className="text-center">
      <Image
        src="/arslan.jpg?height=150&width=150&text=Malik+Shafiq"
        alt="Arslan Rehman"
        width={150}
        height={150}
        className="rounded-full mb-2"
      />
      <h3 className="text-xl font-bold">Muhammad Arslan</h3>
      <p>MENS SENIOR</p>
    </div>
  </div>
</section>
</div>
</>
  )
}
