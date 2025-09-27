'use client';

import { useState, useEffect, useRef, useCallback, memo } from 'react';
import Image from 'next/image';
import { CaretLeftIcon, CaretRightIcon, QuotesIcon, StarIcon, XIcon } from '@phosphor-icons/react';
import { createPortal } from 'react-dom';
import { Testimonial } from '@/types';
import { TESTIMONIALS } from '@/constants/testimonials';
// ADDED: Import CSS module styles
import styles from './Testimonial.module.css';

interface Statistics {
    title: string;
    subTitle: string;
}

const STATISTICS: Statistics[] = [
    {
        title: "10,000+",
        subTitle: "Happy Patients",
    },
    {
        title: "8+",
        subTitle: "Years Experience",
    },
    {
        title: "5.0★",
        subTitle: "Average Rating",
    },
]

const TestimonialModal = memo(({
    testimonial,
    isOpen,
    onClose
}: {
    testimonial: Testimonial;
    isOpen: boolean;
    onClose: () => void;
}) => {
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100"
                style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: 'var(--radius-6)',
                    border: '1px solid var(--light-peach-beige)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute flex items-center justify-center transition-colors duration-200 cursor-pointer"
                    style={{
                        top: '20px',
                        right: '20px',
                        zIndex: 10,
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--light-peach-beige)',
                        border: '1px solid var(--warm-orange-taupe)'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--warm-orange-taupe)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--light-peach-beige)';
                    }}
                    aria-label="Close modal"
                >
                    <XIcon
                        size={20}
                        style={{ color: 'var(--warm-jet)' }}
                    />
                </button>

                <div style={{ padding: '40px' }}>
                    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                        <div className="flex items-center md:items-start gap-4 md:gap-6 md:flex-col">
                            <div className="relative flex-shrink-0">
                                <Image
                                    src={testimonial.image}
                                    alt={`${testimonial.name} profile picture`}
                                    width={120}
                                    height={120}
                                    className="img-cover"
                                    style={{
                                        width: '120px',
                                        height: '120px',
                                        borderRadius: '50%',
                                        border: '4px solid var(--lavender-mist)'
                                    }}
                                    priority={false}
                                />
                            </div>
                            <div className="relative flex-shrink-0">
                                <QuotesIcon
                                    size={64}
                                    style={{
                                        color: 'var(--lavender-mist)',
                                        opacity: '0.3'
                                    }}
                                    weight="fill"
                                />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="mb-6 md:mb-8">
                                {/* Stars */}
                                <div
                                    className="flex justify-center md:justify-start"
                                    style={{ marginBlockEnd: '20px' }}
                                >
                                    {[...Array(testimonial.rating)].map((_, i: number) => (
                                        <StarIcon
                                            key={i}
                                            size={20}
                                            color="#ffd700"
                                            weight="fill"
                                            style={{
                                                marginInlineEnd: '4px'
                                            }}
                                        />
                                    ))}
                                </div>

                                <blockquote
                                    style={{
                                        color: 'var(--warm-jet)',
                                        fontSize: 'var(--fontSize-6)',
                                        fontWeight: 'var(--weight-500)',
                                        fontStyle: 'italic',
                                        lineHeight: '1.7',
                                        whiteSpace: 'pre-line'
                                    }}
                                >
                                    &quot;{testimonial.text}&quot;
                                </blockquote>
                            </div>
                            <div
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6"
                                style={{ borderTop: '1px solid var(--light-peach-beige)' }}
                            >
                                <div className="min-w-0">
                                    <h3
                                        className="font-semibold mb-1 truncate"
                                        style={{
                                            fontSize: 'var(--fontSize-4)',
                                            color: 'var(--deep-golden-orange)'
                                        }}
                                    >
                                        {testimonial.name}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: 'var(--fontSize-7)',
                                            color: 'var(--warm-orange-taupe)',
                                            opacity: '0.8'
                                        }}
                                    >
                                        {testimonial.position || 'Patient'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

TestimonialModal.displayName = 'TestimonialModal';

export const TestimonialSlider = memo(() => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
    const [isTextTruncated, setIsTextTruncated] = useState<boolean[]>([]);
    const [mounted, setMounted] = useState(false);
    const textRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        setMounted(true);
    }, []);

    const nextSlide = (): void => {
        setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevSlide = (): void => {
        setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const goToSlide = (index: number): void => {
        setCurrentSlide(index);
    };

    const checkTextTruncation = useCallback(() => {
        const truncationStatus = textRefs.current.map(ref => {
            if (ref) {
                return ref.scrollHeight > ref.clientHeight;
            }
            return false;
        });
        setIsTextTruncated(truncationStatus);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        checkTextTruncation();

        let timeoutId: NodeJS.Timeout;
        const debouncedResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkTextTruncation, 150);
        };

        window.addEventListener('resize', debouncedResize);
        return () => {
            window.removeEventListener('resize', debouncedResize);
            clearTimeout(timeoutId);
        };
    }, [checkTextTruncation, mounted]);

    const openModal = useCallback((testimonial: Testimonial) => {
        setSelectedTestimonial(testimonial);
        setIsModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedTestimonial(null);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handleMouseEnter = (): void => setIsAutoPlaying(false);
    const handleMouseLeave = (): void => setIsAutoPlaying(true);

    return (
        <>
            <section className="section">
                <div className="custom-container">

                    {/* Section Header */}
                    <div
                        className="text-center"
                        style={{ marginBlockEnd: '50px' }}
                    >
                        <h2
                            className="h2"
                            style={{ marginBlockEnd: '15px' }}
                        >
                            What Our Patients Say
                        </h2>
                        <p
                            className="section-text"
                            style={{
                                color: 'var(--warm-orange-taupe)',
                                fontSize: 'var(--fontSize-6)',
                                lineHeight: '1.7',
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                            Real experiences from real patients who trust us with their dental health
                        </p>
                    </div>

                    {/* Testimonial Slider */}
                    <div
                        className="relative overflow-hidden"
                        style={{
                            backgroundColor: 'var(--white)',
                            borderRadius: 'var(--radius-6)',
                            boxShadow: 'var(--shadow-6)'
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className="relative"
                            style={{ minHeight: '400px' }}
                        >
                            {TESTIMONIALS.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className="absolute inset-0"
                                    style={{
                                        opacity: index === currentSlide ? 1 : 0,
                                        transform: index === currentSlide ? 'translateX(0)' :
                                            index < currentSlide ? 'translateX(-100%)' : 'translateX(100%)',
                                        transition: 'all var(--transition-2)'
                                    }}
                                >
                                    <div
                                        className={`flex flex-col lg:flex-row items-center h-full ${styles.testimonialContent}`}
                                    >

                                        {/* Quote Icon */}
                                        <div
                                            className="absolute"
                                            style={{
                                                top: '25px',
                                                left: '25px',
                                                color: 'var(--lavender-mist)'
                                            }}
                                        >
                                            <QuotesIcon size={48} color="currentColor" weight="fill" />
                                        </div>

                                        {/* Patient Image */}
                                        <div
                                            className="flex-shrink-0"
                                            style={{
                                                marginBlockEnd: '25px',
                                                marginInlineEnd: '30px'
                                            }}>
                                            <div className="relative">

                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    width={80}
                                                    height={80}
                                                    className={`img-cover ${styles.patientImage}`}
                                                />

                                                <div
                                                    className="absolute"
                                                    style={{
                                                        bottom: '-8px',
                                                        right: '-8px',
                                                        backgroundImage: 'var(--gradient)',
                                                        color: 'var(--white)',
                                                        borderRadius: '50%',
                                                        padding: '8px'
                                                    }}
                                                >
                                                    <StarIcon size={16} color="currentColor" weight="fill" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Testimonial Content */}
                                        <div className="flex-1 text-center lg:text-left">
                                            {/* Stars */}
                                            <div
                                                className="flex justify-center lg:justify-start"
                                                style={{ marginBlockEnd: '20px' }}
                                            >
                                                {[...Array(testimonial.rating)].map((_, i: number) => (
                                                    <StarIcon
                                                        key={i}
                                                        size={20}
                                                        color="#ffd700"
                                                        weight="fill"
                                                        style={{
                                                            marginInlineEnd: '4px'
                                                        }}
                                                    />
                                                ))}
                                            </div>

                                            {/* Testimonial Text */}
                                            <blockquote
                                                ref={(el) => {
                                                    textRefs.current[index] = el;
                                                }}
                                                className={`card-text line-clamp-3 ${styles.testimonialText}`}
                                            >
                                                &quot;{testimonial.text}&quot;
                                            </blockquote>

                                            {/* Read More Button */}
                                            <div className="flex justify-center lg:justify-start">
                                                {isTextTruncated[index] && (
                                                    <button
                                                        onClick={() => openModal(testimonial)}
                                                        className="transition-colors duration-200 cursor-pointer -mt-5"
                                                        style={{
                                                            color: 'var(--deep-golden-orange)',
                                                            fontSize: 'var(--fontSize-7)',
                                                            fontWeight: 'var(--weight-600)',
                                                            marginBlockEnd: '10px',
                                                            background: 'none',
                                                            border: 'none'
                                                        }}
                                                        onMouseOver={(e) => {
                                                            e.currentTarget.style.color = 'var(--dark-brown-1)';
                                                        }}
                                                        onMouseOut={(e) => {
                                                            e.currentTarget.style.color = 'var(--deep-golden-orange)';
                                                        }}
                                                    >
                                                        Read More
                                                    </button>
                                                )}
                                            </div>

                                            {/* Patient Info */}
                                            <div>
                                                <h4
                                                    className="h3"
                                                    style={{
                                                        color: 'var(--dark-brown-1)',
                                                        marginBlockEnd: '5px'
                                                    }}
                                                >
                                                    {testimonial.name}
                                                </h4>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className={`absolute ${TESTIMONIALS.length === 1 ? "hidden" : "block"}`}
                            style={{
                                left: '15px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'var(--white)',
                                color: 'var(--warm-orange-taupe)',
                                borderRadius: '50%',
                                padding: '12px',
                                boxShadow: 'var(--shadow-2)',
                                transition: 'var(--transition)',
                                zIndex: 10,
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--lavender-mist)';
                                e.currentTarget.style.color = 'var(--deep-golden-orange)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--white)';
                                e.currentTarget.style.color = 'var(--warm-orange-taupe)';
                            }}
                            aria-label="Previous testimonial"
                        >
                            <CaretLeftIcon size={24} />
                        </button>

                        <button
                            onClick={nextSlide}
                            className={`absolute ${TESTIMONIALS.length === 1 ? "hidden" : "block"}`}
                            style={{
                                right: '15px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'var(--white)',
                                color: 'var(--warm-orange-taupe)',
                                borderRadius: '50%',
                                padding: '12px',
                                boxShadow: 'var(--shadow-2)',
                                transition: 'var(--transition)',
                                zIndex: 10,
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--lavender-mist)';
                                e.currentTarget.style.color = 'var(--deep-golden-orange)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--white)';
                                e.currentTarget.style.color = 'var(--warm-orange-taupe)';
                            }}
                            aria-label="Next testimonial"
                        >
                            <CaretRightIcon size={32} />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div
                        className="flex justify-center"
                        style={{ marginBlockStart: '0px', gap: '12px' }}
                    >
                        {TESTIMONIALS.map((_, index: number) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                style={{
                                    width: index === currentSlide ? '32px' : '12px',
                                    height: '12px',
                                    borderRadius: 'var(--radius-6)',
                                    backgroundColor: index === currentSlide ? 'var(--deep-golden-orange)' : 'var(--light-peach-beige)',
                                    transition: 'var(--transition)',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                                onMouseOver={(e) => {
                                    if (index !== currentSlide) {
                                        e.currentTarget.style.backgroundColor = 'var(--warm-orange-taupe)';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (index !== currentSlide) {
                                        e.currentTarget.style.backgroundColor = 'var(--light-peach-beige)';
                                    }
                                }}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    <div className={`text-center ${styles.statisticsGrid}`}>
                        {STATISTICS.map((data, index) => (
                            <div
                                key={index}
                                className={`text-center ${styles.serviceCard}`}
                            >
                                <div className={styles.statisticTitle}>
                                    {data.title}
                                </div>
                                <div className={styles.statisticSubtitle}>
                                    {data.subTitle}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal Portal */}
            {mounted && isModalOpen && selectedTestimonial && createPortal(
                <TestimonialModal
                    testimonial={selectedTestimonial}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />,
                document.body
            )}
        </>
    );
});

TestimonialSlider.displayName = "TestimonialSlider";