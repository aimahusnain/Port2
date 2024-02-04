import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const WhatsUpButton = () => {
  return (
    <Link
    target='_blank'
    href='https://wa.me/03074241757'
    className="fixed bottom-0 mb-8 sm:mr-4 mr-7 right-0 rounded-full cursor-pointer bg-emerald-400 items-center justify-center flex w-10 h-10 p-2"
  > 
    <FaWhatsapp className="text-white w-full h-full" />
  </Link>
)
}

export default WhatsUpButton