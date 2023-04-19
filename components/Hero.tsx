import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BgCircles from './BgCircles'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function Hero({}: Props) {
  const [text, setText] = useTypewriter({
    words: ["Hey there, Rakesh here","Guy-who love's to code", "Check my stuff below"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center'>
      <BgCircles />
      <Image
        src="/cover.jpg"
        alt="Rakesh Ravula"
        width={400}
        height={400}
        className="relative rounded-full h-36 w-36 mx-auto mt-52 object-cover"
      />
      <div>
        <h2 className='text-sm uppercase text-gray pb-2 tracking-[15px]'>Full Stack Developer</h2>
        <h1 className='text-2xl lg:text-4xl font-semibold px-10'>
          <span className='mr-3 text-gray'>{text}</span>
          <Cursor cursorColor="#F7AB0A"/>
        </h1>
        <div>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experinece</button>
          </Link>
          <Link href="#Skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#Projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}