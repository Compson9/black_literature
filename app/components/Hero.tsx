import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div>
            <section className="bg-white ">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-aloja tracking-tight leading-none md:text-5xl xl:text-6xl">Empower, Educate, Celebrate</h1>
                        <p className="max-w-2xl mb-6 font-aloja text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">The Black Literature Project focuses on educating, empowering, and celebrating literature created by
                            British writers of colour in education and other communities. We aim to empower
                            and educate young people through teaching Black British Literature, focusing on promoting inclusivity
                            and diversity in the curriculum. </p>
                        <a href="#" className="inline-flex items-center transition-colors duration-500 hover:bg-white hover:border hover:bg-animate-bounce justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg  bg-orange hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Donate Now!
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Image width={500} height={500}
                            className='rounded-md'
                            src="/images/hero1.jpg" alt="mockup" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
