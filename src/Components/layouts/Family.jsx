import React from 'react';
import FamilyGathering from '../assets/homepage/family-gathering-desktop.jpg';
import Elipse from '../assets/homepage/elipse.png';
import Group from '../assets/homepage/Group.png';
import Button from '../layouts/Button';
import { useNavigate } from 'react-router-dom';

const Family = () => {
    const navigate = useNavigate();
    return (
        <div className="px-4 sm:px-6 lg:px-36 flex justify-between">
            <div className="mt-20">
                <img className="absolute z-20" src={FamilyGathering} alt="" />
                <div className="z-20 absolute h-auto left-24 -mt-10
             block">
                    <img src={Group} alt="" />
                </div>
                <div className='z-10 absolute w-box1 h-64 right-20 mt-72
             block rounded-tr-3xl bg-rectangle bg-opacity-10' />
            </div>
            <div className="grid max-w-md items-center content-center h-screen text-ebonyClay">
                <div className="max-w-md p-10">
                    {/* <img src={Elipse} alt="" /> */}
                    <h1 className="text-4xl font-bold py-4">Family Gathering</h1>
                    <h2 className="">
                        We love catering for entire families. So please bring everyone along for
                        a special meal with your loved ones.
                        We’ll provide a memorable experience for all.
                    </h2>
                    <Button
                        className=" text-white mt-4 font-semibold border"
                        paddingY="py-3"
                        paddingX="px-10"
                        bgColor="bg-codGray"
                    >
                        BOOK A TABLE
                    </Button>
                    <p
                        onClick={() => navigate('/family')}
                    >FAMILY GATHERING</p>
                    <p
                        onClick={() => navigate('/special')}
                    >SPECIAL EVENTS</p>
                    <p
                        onClick={() => navigate('/social')}
                    >SOCIAL EVENTS</p>
                </div>
            </div>
        </div>
    )
}

export default Family;