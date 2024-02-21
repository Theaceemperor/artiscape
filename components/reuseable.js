'use client'

import React from "react";
import Navigation from "./navBar";
import Footer from "./footer";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export const featuredWork = [
    {
      id: 1,
      title: 'Architecture Project',
      imageUrl: '/architecture.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Photography Series',
      imageUrl: '/photography-2.jpg',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      title: 'Makeup Artistry Showcase',
      imageUrl: '/make-up.jpg',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
];

export function PortfolioImageCard({ item, project }) {

    return (
        <div className="bg-white shadow-lg dark:bg-light-gray px-2 pt-2 pb-4">
            <Image width={500} height={500} src={item.url} alt={`${project.title + ' ' + 1} Image`} className="rounded w-auto" />
            <h2 className="font-bold text-gray-700 mt-2">{item.description}</h2>
        </div>
    )
}

export function DarkModeBtn() {
    const [darkMode, setDarkMode] = React.useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(prevMode => !prevMode);
      // Save user's preference in local storage or any other method
      // localStorage.setItem('darkMode', !darkMode);
    };
  
    return (
        <div className={darkMode ? 'dark' : ''}>
            {/* Toggle dark mode button */}
            <button onClick={toggleDarkMode} className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 rounded-md shadow-md">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
  };

export function ServiceItemCard({ serviceItem }) {

    return (
        <div className="bg-white shadow-md rounded-md p-6 mb-6">
            <h3 className="text-lg font-semibold mb-2">{serviceItem.title}</h3>
            <p className="text-gray-600 mb-2">{serviceItem.description}</p>
            <p className="text-gray-700 mb-1"><span className="font-semibold">Price:</span> {serviceItem.price}</p>
            <p className="text-gray-700"><span className="font-semibold">Duration:</span> {serviceItem.duration}</p>
        </div>
    )
}

export function PortfolioItem({ item }) {

    return (
        <Link href={`/portfolio/${item.title.toLowerCase().split(' ').join('-').toString()}`} className="group">
            <div className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition duration-300">
                <Image
                    width={500}
                    height={500}
                    src={item.imageUrl[0].url}
                    alt={`${item.title} Image`}
                    className="object-cover object-center w-full h-72 transform group-hover:scale-105 transition duration-300"
                />
            </div>
            <div className="mt-4">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.category}</p>
            </div>
        </Link>
    )
};

export function SocialMediaLinks() {

    return (
        <div className="flex space-x-4 text-2xl mt-8">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800">
                <FaXTwitter />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800">
                <FaInstagram />
            </a>
            {/* Add more social media icons as needed */}
        </div>
    )
};

export function CallToActionButton() {

    return (
        <Link href="/portfolio" className="bg-indigo-600 text-white py-2 px-6 rounded-md text-lg hover:bg-indigo-700">Explore Portfolio </Link>
    )
};

export function FeaturedWorkCard({ featuredWork }) {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image width={500} height={500} className="w-full" src={featuredWork.imageUrl} alt={`${featuredWork.title} Image`} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{featuredWork.title}</div>
                <p className="text-gray-700 text-base">{featuredWork.description}</p>
            </div>
        </div>
    )
};

export default function AppLayout({ children }) {

    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    )
};