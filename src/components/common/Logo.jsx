import React from 'react'
import Link from 'next/link'

const Logo = () => {
    return (
        <Link href="/" className="block">
            <div className="mt-10 sm:mt-12 ml-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide select-none z-50 cursor-pointer hover:scale-105 transition-transform duration-200">
                <span className="mx-4 sm:mx-6 lg:mx-10 px-1 sm:px-2 bg-logo-fixed text-ink">E</span>
            </div>
        </Link>
    )
}

export default Logo