'use client'

import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Footer from '@/components/footer';
import { Button } from '@/components/button';
import { Heading } from '@/components/heading';
import { Text } from '@/components/text';
import NavBar from '@/components/navbar'


export default function Example() {


  return (
    <div className="bg-white">

      {/* Main Content */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        {/* Gradient Skew Container */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        <NavBar/>
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <Heading className="max-w-2xl text-balance text-5xl tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
            Get a Free Resume Review Live on Twitch!
            </Heading>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <Text className="text-pretty text-lg font-medium sm:text-xl/8">
                  Collaborate, ask questions, and get real-time feedback on your resume during live Twitch streams. Build a resume that gets results—completely free.
              </Text>

              {/* HeroButtons */}
              <div className="mt-10 flex items-center gap-x-6">
                <Button color="blue" href="#">Submit your Resume</Button>
                <Button >Learn more <ArrowRightIcon/></Button>
              </div>
            </div>

            {/* Hero Image TODO: Optimize this to next Image later*/}
            <img
              alt="Lee Korelitz"
              src="/images/lee-headshot-800x800.png"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 max-w transition-transform duration-200 hover:scale-105"/>
          </div>
        </div>
        <Footer/>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  )
}