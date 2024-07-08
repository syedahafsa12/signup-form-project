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
            <button className="buttonn text-white text-center mt-5 w-full py-6 text-md ml-2 mr-2" type="submit"><p className='text-center ml-44'>Continue</p></button>
            </div>
            </div>
            </div>
           
            
        </div>
    );
}

export default Stagethird;

// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { CSSProperties } from 'react';
// import classNames from 'classnames';
// import Navbar from '../components/Navbar';

// const Stagethird: React.FC = () => {
//     const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//     const styles = {
//         foot: {
//             backgroundColor: 'rgba(248, 248, 251, 1)',
//             textAlign: 'left',
//             padding: '10px 0',
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             width: '100%',
//         } as CSSProperties,
//         loginContainer: {
//             display: 'flex',
//             alignItems: 'flex-start',
//             marginLeft: 'auto',
//         } as CSSProperties,
//         loginText: {
//             color: 'black',
//             fontSize: '12px',
//             textDecoration: 'none',
//             display: 'flex',
//             alignItems: 'center',
//         } as CSSProperties,
//         arrow: {
//             marginLeft: '8px',
//             transition: 'transform 0.2s ease',
//         } as CSSProperties,
//         cardContainer: {
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'center',
//         } as CSSProperties,
//         card: {
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//             borderRadius: '8px',
//             padding: '16px',
//             textAlign: 'center' as 'center',
//             margin: '10px',
//             width: 'calc(100% - 20px)', // Full width with margin
//             height: '130px', // Adjust the height as needed
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             border: '1px solid gray', // Default border color
//             transition: 'border-color 0.3s ease',
//             maxWidth: '400px', // Max width to ensure cards don't stretch excessively
//         } as CSSProperties,
//         image: {
//             width: '70px',
//             height: '70px',
//             marginLeft: '10px', // Margin left for the image
//             display:'none',
//         } as CSSProperties,
//         checkboxContainer: {
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             flexDirection: 'column', // Column direction for mobile view
//             marginTop: '10px', // Margin top for mobile layout
//         } as CSSProperties,
//         checkbox: {
//             width: '20px',
//             height: '20px',
//             marginBottom: '5px', // Margin bottom for the checkbox
//         } as CSSProperties,
//         footer: {
//             marginTop: 'auto', // Push footer to bottom
//             backgroundColor: 'rgba(248, 248, 251, 1)',
//             textAlign: 'center',
//             padding: '10px 0',
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             width: '100%',
//         } as CSSProperties,
//         copyright1: {
//             marginTop: 'auto',
//             marginLeft: '5',
//             marginRight: '5',
//             textAlign: 'left',
//             fontSize: '17px',
//             fontFamily: '"DM Sans", sans-serif',
//             maxWidth: '100%',
//             overflowWrap: 'break-word',
//             wordWrap: 'break-word',
//             wordBreak: 'break-word',
//             hyphens: 'auto',
//         } as CSSProperties,
//     };

//     const handleMouseEnter = (index: number) => {
//         setHoveredCard(index);
//     };

//     const handleMouseLeave = () => {
//         setHoveredCard(null);
//     };

//     return (
//         <div className='bgj mai' style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
//             <Navbar />

//             <center>
//                 <h1 className='head1 text-2xl font-medium'>What&apos;s your goal with Franchain?</h1>
//                 <p className='head2 text-1xl mt-1'>No wrong answers here. And it doesn&apos;t matter if you change your mind later.</p>
//                 <br /><br />
//                 <div className="hidden md:flex" style={styles.cardContainer}>
//                     {[...Array(6)].map((_, index) => (
//                         <div
//                             key={index}
//                             className={classNames("card  img p-10", { "border-blue-400": hoveredCard === index })}
//                             style={{ ...styles.card, borderColor: hoveredCard === index ? 'blue' : 'gray' }}
//                             onMouseEnter={() => handleMouseEnter(index)}
//                             onMouseLeave={handleMouseLeave}
//                         >
//                             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }} className='image-boxx'>
//                                 <Image
//                                     src="/image.png"
//                                     alt='image'
//                                     className='image-box'
//                                     width={60}
//                                     height={60}
//                                     style={styles.image}
//                                 />
//                                 <p className='font-semibold text-1xl' style={{ margin: '0 10px' }}>Reduce failed payments</p>
//                                 <input type="checkbox" style={styles.checkbox} />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div style={styles.footer}>
//                     <button className="button1 text-white w-full md:w-fit py-2 text-sm" type="submit">Continue</button>
//                 </div>

//             </center>

//             <div className="foot" style={styles.foot}>
//                 <p className='copyright1 mt-1 ml-4 text-md font-dm' style={styles.copyright1}>
//                     Franchain is a financial technology company, not a bank. Banking services are provided by trusted regulated banking partners including but not limited to JP Morgan, Barclays and Credit Suisse.
//                 </p>
//                 <p className='font-bold m-2 ml-4 copyright2'>
//                     Need A Help? <span className='ml-3'>Back to dashboard</span> <span className='ml-3'>Terms</span> <span className='ml-3'>Privacy policy</span> <span className='ml-3'>Sign out and continue later</span>
//                 </p>
//             </div>

//         </div>
//     );
// }

// export default Stagethird;
// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { CSSProperties } from 'react';
// import classNames from 'classnames';
// import Navbar from '../components/Navbar';

// const Stagethird: React.FC = () => {
//     const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//     const styles = {
//         foot: {
//             backgroundColor: 'rgba(248, 248, 251, 1)',
//             textAlign: 'left',
//             padding: '10px 0',
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             width: '100%',
//         } as CSSProperties,
//         loginContainer: {
//             display: 'flex',
//             alignItems: 'flex-start',
//             marginLeft: 'auto',
//         } as CSSProperties,
//         loginText: {
//             color: 'black',
//             fontSize: '12px',
//             textDecoration: 'none',
//             display: 'flex',
//             alignItems: 'center',
//         } as CSSProperties,
//         arrow: {
//             marginLeft: '8px',
//             transition: 'transform 0.2s ease',
//         } as CSSProperties,
//         cardContainer: {
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'center',
//         } as CSSProperties,
//         card: {
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//             borderRadius: '8px',
//             padding: '16px',
//             textAlign: 'center' as 'center',
//             margin: '10px',
//             width: 'calc(100% - 20px)', // Full width with margin
//             height: '130px', // Adjust the height as needed
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             border: '1px solid gray', // Default border color
//             transition: 'border-color 0.3s ease',
//             maxWidth: '400px', // Max width to ensure cards don't stretch excessively
//         } as CSSProperties,
//         image: {
//             width: '70px',
//             height: '70px',
//             marginLeft: '10px', // Margin left for the image
//         } as CSSProperties,
//         checkboxContainer: {
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             flexDirection: 'column', // Column direction for mobile view
//             marginTop: '10px', // Margin top for mobile layout
//         } as CSSProperties,
//         checkbox: {
//             width: '20px',
//             height: '20px',
//             marginBottom: '5px', // Margin bottom for the checkbox
//         } as CSSProperties,
//         footer: {
//             marginTop: 'auto', // Push footer to bottom
//             backgroundColor: 'rgba(248, 248, 251, 1)',
//             textAlign: 'center',
//             padding: '10px 0',
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             width: '100%',
//         } as CSSProperties,
//     };

//     const handleMouseEnter = (index: number) => {
//         setHoveredCard(index);
//     };

//     const handleMouseLeave = () => {
//         setHoveredCard(null);
//     };

//     return (
//         <div className='bgj mai' style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
//             <Navbar />

//             <center>
//                 <h1 className='head1 text-2xl font-medium'>What&apos;s your goal with Franchain?</h1>
//                 <p className='head2 text-1xl mt-1'>No wrong answers here. And it doesn&apos;t matter if you change your mind later.</p>
//                 <br /><br />
//                 <div className="hidden md:flex" style={styles.cardContainer}>
//                     {[...Array(6)].map((_, index) => (
//                         <div
//                             key={index}
//                             className={classNames("card img p-10", { "border-blue-400": hoveredCard === index })}
//                             style={{ ...styles.card, borderColor: hoveredCard === index ? 'blue' : 'gray' }}
//                             onMouseEnter={() => handleMouseEnter(index)}
//                             onMouseLeave={handleMouseLeave}
//                         >
//                             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//                                 <Image
//                                     src="/image.png"
//                                     alt='image'
//                                     width={60}
//                                     height={60}
//                                     style={styles.image}
//                                 />
//                                 <p className='font-semibold text-1xl' style={{ margin: '0 10px' }}>Reduce failed payments</p>
//                                 <input type="checkbox" style={styles.checkbox} />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div style={styles.footer}>
//                     <button className="button1 text-white w-full md:w-fit py-2 text-sm" type="submit">Continue</button>
//                 </div>

//             </center>

//             <div className="foot" style={styles.foot}>
//                 <p className='copyright1 mt-1 ml-4 text-md font-dm'>
//                     Franchain is a financial technology company, not a bank. Banking services are provided by trusted regulated banking partners including but not <br /> limited to JP Morgan, Barclays and Credit Suisse.
//                 </p>
//                 <p className='font-bold m-2 ml-4 copyright2'>
//                     Need A Help? <span className='ml-3'>Back to dashboard</span> <span className='ml-3'>Terms</span> <span className='ml-3'>Privacy policy</span> <span className='ml-3'>Sign out and continue later</span>
//                 </p>
//             </div>

//         </div>
//     );
// }

// export default Stagethird;




// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { CSSProperties } from 'react';
// import classNames from 'classnames';
// import Navbar from '../components/Navbar';

// const Stagethird: React.FC = () => {
//     const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//     const styles = {
//         foot: {
//             backgroundColor: 'rgba(248, 248, 251, 1)',
//             textAlign: 'left',
//             padding: '10px 0',
//         } as CSSProperties,
//         loginContainer: {
//             display: 'flex',
//             alignItems: 'flex-start',
//             marginLeft: 'auto',
//         } as CSSProperties,
//         loginText: {
//             color: 'black',
//             fontSize: '12px',
//             textDecoration: 'none',
//             display: 'flex',
//             alignItems: 'center',
//         } as CSSProperties,
//         arrow: {
//             marginLeft: '8px',
//             transition: 'transform 0.2s ease',
//         } as CSSProperties,
//         cardContainer: {
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'center',
//         } as CSSProperties,
//         card: {
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//             borderRadius: '8px',
//             padding: '16px',
//             textAlign: 'center' as 'center',
//             margin: '10px',
//             width: 'calc(100% - 20px)', // Full width with margin
//             height: '130px', // Adjust the height as needed
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             border: '1px solid gray', // Default border color
//             transition: 'border-color 0.3s ease',
//             maxWidth: '400px', // Max width to ensure cards don't stretch excessively
//         } as CSSProperties,
//         image: {
//             width: '70px',
//             height: '70px',
//             marginLeft: '10px', // Margin left for the image
//         } as CSSProperties,
//         checkboxContainer: {
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             flexDirection: 'column', // Column direction for mobile view
//             marginTop: '10px', // Margin top for mobile layout
//         } as CSSProperties,
//         checkbox: {
//             width: '20px',
//             height: '20px',
//             marginBottom: '5px', // Margin bottom for the checkbox
//         } as CSSProperties,
//         footer: {
//             marginTop: '20px',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             textAlign: 'center',
//         } as CSSProperties,
//     };

//     const handleMouseEnter = (index: number) => {
//         setHoveredCard(index);
//     };

//     const handleMouseLeave = () => {
//         setHoveredCard(null);
//     };

//     return (
//         <div className='bgj mai '>
//             <Navbar />

//             <center>
//                 <h1 className='head1 text-2xl font-medium'>What&apos;s your goal with Franchain?</h1>
//                 <p className=' head2 text-1xl mt-1'>No wrong answers here. And it doesn&apos;t matter if you change your mind later.</p>
//                 <br /><br />
//                 <div className="hidden md:flex" style={styles.cardContainer}>
//                     {[...Array(6)].map((_, index) => (
//                         <div
//                             key={index}
//                             className={classNames("card img p-10", { "border-blue-400": hoveredCard === index })}
//                             style={{ ...styles.card, borderColor: hoveredCard === index ? 'blue' : 'gray' }}
//                             onMouseEnter={() => handleMouseEnter(index)}
//                             onMouseLeave={handleMouseLeave}
//                         >
//                             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//                                 <Image
//                                     src="/image.png"
//                                     alt='image'
//                                     width={60}
//                                     height={60}
//                                     style={styles.image}
//                                 />
//                                 <p className='font-semibold text-1xl' style={{ margin: '0 10px' }}>Reduce failed payments</p>
//                                 <input type="checkbox" style={styles.checkbox} />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div style={styles.footer}>
//                     <button className="button1  text-white w-full md:w-fit py-2 text-sm " type="submit">Continue</button>
//                 </div>

//             </center>
//             <div className="foot">
//                 <p className='copyright1 mt-1 ml-4 text-md font-dm'>
//                     Franchain is a financial technology company, not a bank. Banking services are provided by trusted regulated banking partners including but not <br /> limited to JP Morgan, Barclays and Credit Suisse.
//                 </p>
//                 <p className='font-bold m-2 ml-4 copyright2'>
//                     Need A Help? <span className='ml-3'>Back to dashboard</span> <span className='ml-3'>Terms</span> <span className='ml-3'>Privacy policy</span> <span className='ml-3'>Sign out and continue later</span>
//                 </p>
//             </div>

//         </div>
//     );
// }

// export default Stagethird;



// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import classNames from 'classnames';
// import Navbar from '../components/Navbar';

// const Stagethird: React.FC = () => {
//     const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//     const handleMouseEnter = (index: number) => {
//         setHoveredCard(index);
//     };

//     const handleMouseLeave = () => {
//         setHoveredCard(null);
//     };

//     return (
//         <div className="bgj main">
//             <Navbar />
//             <div className="content">
//                 <center>
//                     <h1 className="head1 text-2xl font-medium">What&apos;s your goal with Franchain?</h1>
//                     <p className="head2 text-1xl mt-1">No wrong answers here. And it doesn&apos;t matter if you change your mind later.</p>
//                     <br /><br />
//                     <div className="card-container">
//                         {[...Array(6)].map((_, index) => (
//                             <div
//                                 key={index}
//                                 className={classNames("card img p-10", { "border-blue-400": hoveredCard === index })}
//                                 onMouseEnter={() => handleMouseEnter(index)}
//                                 onMouseLeave={handleMouseLeave}
//                             >
//                                 <div className="card-content">
//                                     <p className='font-semibold text-1xl'>Reduce failed payments</p>
//                                     <input type="checkbox" className="checkbox" />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="footer">
//                         <button className="button1 text-white w-full md:w-fit py-2 text-sm" type="submit">Continue</button>
//                     </div>
//                 </center>
//             </div>
//             <div className="footer">
//                 <p className='copyright1 mt-1 ml-4 text-md font-dm'>
//                     Franchain is a financial technology company, not a bank. Banking services are provided by trusted regulated banking partners including but not limited to JP Morgan, Barclays and Credit Suisse.
//                 </p>
//                 <p className='font-bold m-2 ml-4 copyright2'>
//                     Need A Help? <span>Back to dashboard</span> <span>Terms</span> <span>Privacy policy</span> <span>Sign out and continue later</span>
//                 </p>
//             </div>
//             <style jsx>{`
//                 .main {
//                     display: flex;
//                     flex-direction: column;
//                     min-height: 100vh;
//                     background-color: rgba(248, 248, 251, 1);
//                 }
//                 .content {
//                     flex: 1;
//                 }
//                 .head1 {
//                     margin-top: 150px;
//                 }
//                 .card-container {
//                     display: grid;
//                     gap: 10px;
//                 }
//                 .card {
//                     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//                     border-radius: 8px;
//                     padding: 16px;
//                     text-align: center;
//                     border: 1px solid gray;
//                     transition: border-color 0.3s ease;
//                 }
//                 .card-content {
//                     display: flex;
//                     align-items: center;
//                     justify-content: space-around;
//                     width: 100%;
//                 }
//                 .checkbox {
//                     width: 20px;
//                     height: 20px;
//                 }

//                 .footer {
//                     background-color: rgba(248, 248, 251, 1);
//                     text-align: center;
//                     padding: 10px 0;
//                 }
//                 @media (max-width: 600px) {
//                     .head1 {
//                         margin-top: 20px;
//                     }
//                     .card-container {
//                         grid-template-columns: 1fr;
//                     }
//                     .card {
//                         width: calc(100% - 20px);
//                     }
//                 }
//                 @media (min-width: 601px) and (max-width: 1024px) {
//                     .head1 {
//                         margin-top: 80px;
//                     }
//                     .card-container {
//                         grid-template-columns: 1fr 1fr;
//                     }
//                     .card {
//                         width: calc(50% - 20px);
//                     }
//                 }
//                 @media (min-width: 1025px) {
//                     .head1 {
//                         margin-top: 150px;
//                     }
//                     .card-container {
//                         grid-template-columns: 1fr 1fr 1fr;
//                     }
//                     .card {
//                         width: calc(33.33% - 20px);
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// }

// export default Stagethird;