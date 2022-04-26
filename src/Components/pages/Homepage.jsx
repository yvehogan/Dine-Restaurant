import React from 'react';
import Hero from "../assets/homepage/hero-bg-desktop.jpg";
import Forest from '../assets/homepage/enjoyable-place-desktop.jpg';
import Local from '../assets/homepage/locally-sourced-desktop.jpg';
import Salmon from '../assets/homepage/salmon-desktop-tablet.jpg';
import Beef from '../assets/homepage/beef-desktop-tablet.jpg';
import Mousse from '../assets/homepage/chocolate-desktop-tablet.jpg';
import Ready from '../assets/homepage/ready-bg-desktop.jpg';
import Elipse from '../assets/homepage/elipse.png'
import Group from '../assets/homepage/Group.png';
import Button from '../layouts/Button';
import Family from '../layouts/Family';
import Footer from '../layouts/Footer';


const Homepage = () => {
  return (
    <>
      <div className="relative">
        <img className=" w-full h-auto" src={Hero} alt="" srcset="" />
        <div className=" text-white absolute w-2/5 pt-3 ml-auto  top-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-36">
          <h1 className="text-2xl font-bold">dine</h1>
          <div className="font-light mt-24 tracking-wide">
            <h1 className="text-5xl">Exquisite dining since 1989</h1>
            <p className="py-8">Experience our seasonal menu in beautiful country surronudings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
            <Button
              className=" text-white mt-10 text-sm border"
              paddingY="py-3"
              paddingX="px-8"
            >
              BOOK A TABLE
            </Button>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-36 flex justify-between">
          <div className="-mt-20">
            <img className="absolute z-20 " src={Forest} alt="" />
            <div className='z-10 absolute w-box1 h-64 left-0 mt-96
             block rounded-tr-3xl bg-rectangle bg-opacity-10' />
          </div>
          <div className="grid items-center content-center h-screen text-ebonyClay">
            <div className="max-w-md p-10">
              <img src={Elipse} alt="" />
              <h1 className="text-4xl font-bold py-7">Enjoyable place for all the family</h1>
              <h2 className="">
                Our relaxed surroundings make dining with us a great experience for everyone.
                We can even arrange a tour of the farm before the meal.
              </h2>

            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-36 flex justify-between">
          <div className="grid items-center content-center h-screen text-ebonyClay">
            <div className="max-w-md p-10">
              <img src={Elipse} alt="" />
              <h1 className="text-4xl font-bold py-7">The most locally sourced food</h1>
              <h2 className="">
                All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.
              </h2>
            </div>
          </div>

          <div>
            <img className="absolute z-20" src={Local} alt="" />
            <div className="z-20 absolute right-48 mt-80 p-6
             ">
              <img src={Group} alt="" />
            </div>
            <div className='z-10 absolute w-box1 h-64 right-0 mt-96
             block rounded-tl-3xl bg-rectangle bg-opacity-10' />

          </div>
          
        </div>

        <div className="bg-codGray h-auto -mt-28">
          <div className="px-4 sm:px-6 lg:px-28 flex justify-between ">
            <div className="grid items-center content-center h-screen text-white">
              <div className="max-w-md p-10">
                <img src={Elipse} alt="" />
                <h1 className="text-4xl font-bold py-7">A few highlights from our menu</h1>
                <h2 className="">
                  We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
                  Our menu is revamped every season.
                </h2>
              </div>
            </div>

            <div className="max-w-md grid items-center content-center h-screen  text-white">
              <div className="border-b-2 border-rectangle flex  w-auto py-5">
                <img className="" src={Salmon} alt="" />

                <div className="h-0.5 w-16 mt-3 bg-beaver mr-3 font-extralight"></div>
                <div>
                  <h3 className="font-semibold">Seared Salmon Fillet</h3>
                  <p className="font-extralight">Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
                </div>
              </div>

              <div className="border-b-2 border-rectangle flex  w-auto py-5">
                <img className="" src={Beef} alt="" />

                <div className="h-0.5 w-16 mt-3 bg-beaver mr-3 font-extralight"></div>
                <div>
                  <h3 className="font-semibold">Rosemary Filet Mignon</h3>
                  <p className="font-extralight">Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
                </div>
              </div>

              <div className="border-b-2 border-rectangle flex  w-auto py-5">
                <img className="" src={Mousse} alt="" />

                <div className="h-0.5 w-16 mt-3 bg-beaver mr-3 font-extralight"></div>
                <div>
                  <h3 className="font-semibold">Summer Fruit Chocolate Mousse</h3>
                  <p className="font-extralight">Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
                </div>
              </div>


            </div>
          </div>

        </div>
        <Family />

        <div className="relative">
          <img className="object-cover w-full" src={Ready} alt="" />
          <div className="absolute top-20 px-4 sm:px-6 lg:px-36 flex justify-between w-full">
            <h2 className="text-white font-semibold text-3xl tracking-wider ">Ready to make Reservation?</h2>
            <Button
              className=" text-whitetext-sm border"
              paddingY="py-3"
              paddingX="px-12"
            >
              BOOK A TABLE
            </Button>
          </div>
        </div>

        <Footer />

      </div>

    </>
  )
}

export default Homepage