"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import classNames from 'classnames';
import Navbar from '../components/Navbar';

const Stagethird: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <div className="bgj mai" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <Navbar />

            <center>
                <h1 className="head1 text-2xl font-medium md:mt-32  lg:mt-40">What&apos;s your goal with Franchain?</h1>
                <p className="head2 text-1xl mt-1">No wrong answers here. And it doesn&apos;t matter if you change your mind later.</p>
                <br /><br />
                <div className="flex flex-wrap justify-center">
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className={classNames("card p-4 md:p-10 ", { "border-blue-400": hoveredCard === index })}
                            style={{ borderColor: hoveredCard === index ? 'blue' : 'gray', height: 'auto', width: '100%', maxWidth: '400px', margin: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '8px', textAlign: 'center' }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex items-center justify-between w-full">
                                <Image
                                    src="/image.png"
                                    alt="image"
                                    className="hidden md:block"
                                    width={60}
                                    height={60}
                                />
                                <p className="font-semibold text-md md:text-lg lg:text-lg mx-2 md:mx-10">Reduce failed payments</p>
                                <input type="checkbox" className="w-4 h-4 md:w-6 md:h-6" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-auto w-full">
                    <button className="button1 text-white mt-5 hidden sm:flex md:flex lg:flex  py-2 text-sm" type="submit">Continue</button>
                </div>
            </center>

            <div className="foot" style={{ backgroundColor: 'rgba(248, 248, 251, 1)', textAlign: 'left', padding: '10px 0', position: 'absolute', bottom: 0, left: 0, width: '100%' }}>

                <p className="copyright1 mt-1 ml-4 text-md font-dm" style={{ marginTop: 'auto', marginLeft: '5px', marginRight: '5px', textAlign: 'left', fontSize: '17px', maxWidth: '100%', overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', hyphens: 'auto' }}>
                    Franchain is a financial technology company, not a bank. Banking services are provided by trusted regulated banking partners including but not limited to JP Morgan, Barclays and Credit Suisse.
                </p>
                <p className="font-bold m-2 ml-4 copyright2">
                    Need A Help? <span className="ml-3 one">Back to dashboard</span> <span className="ml-3 two">Terms</span> <span className="ml-3">Privacy policy</span> <span className="ml-3">Sign out and continue later</span>
                </p>
                <div>
                    <div className="mt-auto w-full bg-box ">
                        <button className="buttonn text-white text-center mt-5 w-full py-6 text-md ml-2 mr-2" type="submit"><p className='text-but text-center '>Continue</p></button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Stagethird;

