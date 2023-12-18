"use client"
import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'


const mdxComponents = {
    Image
}

const RenderMdx = ({blog}) => {

    const MDXContent = useMDXComponent(blog.body.code)

  return (
    <div className='col-span-12  lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max
    prose-blockquote:bg-boo-700/20 
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-boo-700
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-li:marker:text-boo-700

    dark:prose-invert
    dark:prose-blockquote:border-pinky-500
    dark:prose-blockquote:bg-pinky-500/20a
    dark:prose-li:marker:text-pinky-500

    first-letter:text-3xl
    sm:first-letter:text-5xl
    


    '> 
        <MDXContent components={mdxComponents}/>
    </div>
  )
}

export default RenderMdx