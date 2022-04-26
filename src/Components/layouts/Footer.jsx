import React from 'react';

const Footer = () => {
  return (
      <div className="bg-codGray flex justify-between py-12 h-auto text-white px-4 sm:px-6 lg:px-36">
        <div>
              <h1 className="text-2xl font-bold">dine</h1>
        </div>

        <div className=" font-extralight">
            <p>MARTHWAITE. SEDBERGH</p>
            <p>CUMBRIA</p>
            <p>+00 44 123 4567</p>
        </div>

          <div>
              <p>OPEN TIMES</p>
              <p>MON - FRI: 09:00 AM - 10:00 PM</p>
              <p>SAT - SUN: 09:00 AM - 11:30PM </p>
          </div>
    </div>
  )
}

export default Footer