import React, { CSSProperties } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const styles = {
        loginContainer: {
            display: 'flex',
            alignItems: 'flex-start',
            marginLeft: 'auto',
        } as CSSProperties,
        loginText: {
            color: 'black',
            fontSize: '12px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
        } as CSSProperties,
        arrow: {
            marginLeft: '8px',
            transition: 'transform 0.2s ease',
        } as CSSProperties,
        cardContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        } as CSSProperties,
        card: {
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center' as 'center',
            margin: '10px',
            width: 'calc(100% - 20px)',
            height: '130px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid gray',
            transition: 'border-color 0.3s ease',
            maxWidth: '400px',
        } as CSSProperties,
        image: {
            width: '70px',
            height: '70px',
            marginLeft: '10px',
        } as CSSProperties,
        checkboxContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginTop: '10px',
        } as CSSProperties,
        checkbox: {
            width: '20px',
            height: '20px',
            marginBottom: '5px',
        } as CSSProperties,
        footer: {
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        } as CSSProperties,
    };
    return (
        <div className='bgj flex '>
            <div className="absolute top-1 left-0 z-40 p-4 bgj ">
                <Image
                    src="/four.png"
                    alt="Logo"
                    width={16}
                    height={50}
                />
            </div>
            <div className='absolute top-0 right-0 mt-3 z-40 p-4 bgj'>
                <div style={styles.loginContainer}>
                    <Link href="/login">
                        <div style={styles.loginText}>
                            Skip to dashboard
                            <span style={styles.arrow}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-chevron-right">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
