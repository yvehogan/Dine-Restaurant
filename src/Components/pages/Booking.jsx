import React from 'react';
import Ready from '../assets/booking/hero-bg-desktop.jpg';
import Button from '../layouts/Button';

const Booking = () => {
    return (
        <>
            <div className="relative">
                <img className=" w-full h-content" src={Ready} alt="" srcset="" />
                <div className=" text-white absolute pt-3 top-8 mx-auto px-4 sm:px-6 lg:px-36">
                    <h1 className="text-2xl font-bold">dine</h1>
                    
                        <div className="w-full flex justify-between">
                            <div className="font-light mt-24 tracking-wide">
                                <div className="w-2/5">
                                <h1 className="text-5xl">Reservations</h1>
                                <p className="py-8 tracking-wider">We can’t wait to host you. If you have any special
                                    requirements please feel free to call on the phone number below.
                                    We’ll be happy to accommodate you.
                                </p>
                                </div>
                            <div className="h-auto w-96 bg-red-600">
                                <h1 className="text-2xl font-bold">dine</h1>
                                <div className="font-light mt-24 tracking-wide">
                                    <h1 className="text-5xl">Reservations</h1>
                                    <p className="py-8">We can’t wait to host you. If you have any special
                                        requirements please feel free to call on the phone number below.
                                        We’ll be happy to accommodate you.
                                    </p>
                                </div>
                            </div>
                            </div>


                        </div>

                    
                </div>
            </div>
        </>
    )
}

export default Booking;