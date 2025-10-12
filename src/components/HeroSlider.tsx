"use client";

import { memo, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

interface HeroSliderProps {
    slides: string[];
    autoPlayInterval?: number;
}

export const HeroSlider = memo(({
    slides,
    autoPlayInterval = 5000
}: HeroSliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    // Auto-play functionality
    useEffect(() => {
        if (slides.length <= 1) return;

        const interval = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(interval);
    }, [nextSlide, autoPlayInterval, slides.length]);

    // If no slides, return null
    if (!slides || slides.length === 0) {
        return (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                <span className="text-warm-orange-brown">No images available</span>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
            {/* Slides Container */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentSlide
                            ? "opacity-100"
                            : "opacity-0 z-0 pointer-events-none"
                            }`}
                    >
                        <div className="w-full h-full relative">
                            <Image
                                src={slide}
                                fill
                                alt={`Dental clinic slide ${index + 1}`}
                                className="object-cover"
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            {slides.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-15 h-15 lg:w-20 lg:h-20 bg-[var(--bright-amber)] rounded-full shadow-lg flex items-center justify-center transition-all duration-200"
                        aria-label="Previous slide"
                    >
                        <CaretLeftIcon
                            size={20}
                            color="#fff"
                        />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-15 h-15 lg:w-20 lg:h-20 bg-[var(--bright-amber)] rounded-full shadow-lg flex items-center justify-center transition-all duration-200"
                        aria-label="Next slide"
                    >
                        <CaretRightIcon
                            size={20}
                            color="#fff"
                        />
                    </button>
                </>
            )}

            {/* Dots Indicator */}
            {slides.length > 1 && (
                <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? "bg-deep-golden-orange scale-125"
                                : "bg-white/90 hover:bg-white"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
});

HeroSlider.displayName = "HeroSlider";