import React, { useState, useEffect } from 'react';
import ProjectCard from './projectCard';
import OpinionCard from './opinionCard';

const Carousel = ({ elements, cardType, color }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Function to determine starting index based on screen size
        const handleResize = () => {
            if (window.matchMedia('(min-width: 768px)').matches) {
                setCurrentIndex(1); // Start from 3nd item for medium and larger screens
            } else {
                setCurrentIndex(0); // Start from 1st item for smaller screens
            }
        };

        // Set initial index and add event listener for resizing
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % elements.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? elements.length - 1 : prevIndex - 1
        );
    };

    const renderCard = (element) => {
        // Conditionally render the card based on cardType
        if (cardType === 'project') {
            return <ProjectCard {...element} />;
        }
        if (cardType === 'opinion') {
            return <OpinionCard {...element} />;
        }
        return null; // Fallback for unsupported cardType
    };

    return (
        <div className="w-full max-w-[350px] md:max-w-xl">
            {/* Carousel Content */}
            <div
                className={`flex transition-transform duration-500 ease-in-out`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {elements.map((element, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full px-2 md:px-4 flex items-stretch"
                    >
                        {renderCard(element)}
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end items-center gap-x-4 md:gap-x-6 mt-10 md:mt-16 md:px-8">
                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                    className={`custom-${color}-btn !h-14 !w-14 md:!h-16 md:!w-16`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-7 md:size-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                    </svg>
                </button>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    aria-label="Next Slide"
                    className={`custom-${color}-btn !h-14 !w-14 md:!h-16 md:!w-16`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-7 md:size-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
