import React from 'react'
import Image from 'next/image'

export default function BlogSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16" id='blog'>
            <h2 className="text-3xl mb-12">Últimas publicaciones</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* First Card */}
                <article className="flex flex-col">
                    <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                        <Image
                            src="/placeholder1.jpg"
                            alt="Blog post image"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-medium leading-tight mt-2 mb-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </h3>
                </article>

                {/* Second Card */}
                <article className="flex flex-col">
                    <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                        <Image
                            src="/placeholder1.jpg"
                            alt="Blog post image"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-medium leading-tight mt-2 mb-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </h3>
                </article>
                {/* Third Card */}
                <article className="flex flex-col">
                    <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                        <Image
                            src="/placeholder3.jpg"
                            alt="Blog post image"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-medium leading-tight mt-2 mb-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </h3>
                </article>
            </div>
        </section>
    )
}