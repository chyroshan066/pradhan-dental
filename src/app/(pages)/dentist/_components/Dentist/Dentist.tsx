import { IonIcon } from '@/components/utility/IonIcon';
import Link from 'next/link';
import React, { memo } from 'react';
import styles from "./Dentist.module.css";

const TRAININGS: string[] = [
    "Denatl implant",
    "Orthodontics",
];

const ABOUTTEXT: string[] = [
    "JC Dr. Mukesh Kumar Shah is a distinguished orthodontist, social leader, and entrepreneur from Jhapa, Nepal. With a deep commitment to both his profession and community service, he has played a vital role in shaping dental healthcare and youth leadership in his region.",
    "As a dedicated orthodontist, Dr. Shah runs *Pradhan Dental Clinic* in Birtamode, Jhapa, where he provides high-quality dental and orthodontic services. His clinic is known for its patient-centered approach, offering modern treatments that enhance both oral health and aesthetics."
];

export const Dentist = memo(() => {
    return (
        <main>
            {/* Hero Section*/}
            <section style={{
                background: 'linear-gradient(135deg, var(--warm-orange-brown) 0%, var(--bright-amber) 100%)',
                paddingTop: '30px',
                paddingBottom: '45px',
                marginTop: '95px'
            }}>
                <div className="custom-container">
                    <div className={`text-center ${styles.heroContent}`}>
                        <h1 className="headline-1">Meet Our Expert</h1>
                        <p className={styles.heroText}>
                            Providing exceptional dental care with years of experience and specialized training
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Dentist Profile Section */}
            <section style={{
                paddingTop: '80px',
                paddingBottom: '80px'
            }}>
                <div className="custom-container">
                    <div className={styles.dentistProfileGrid}>

                        {/* Profile Card */}
                        <div
                            className={styles.dentistCard}
                            style={{
                                background: 'linear-gradient(145deg, #ffffff 0%, #f8fffe 100%)',
                                border: '1px solid rgba(150, 211, 169, 0.2)',
                                borderRadius: '20px',
                                padding: '60px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                            {/* Decorative background element */}
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '150px',
                                height: '150px',
                                background: 'linear-gradient(135deg, var(--bright-amber), var(--deep-golden-orange))',
                                borderRadius: '50%',
                                opacity: '0.1',
                                zIndex: '1'
                            }}></div>

                            {/* Profile Image */}
                            <div
                                className={styles.dentistImageWrapper}
                                style={{
                                    position: 'relative',
                                    zIndex: '2'
                                }}>
                                <div
                                    className={`img-holder ${styles.dentistImgHolder}`}
                                    style={{
                                        "--width": 220,
                                        "--height": 220,
                                        border: '6px solid var(--bright-amber)',
                                        borderRadius: '50%',
                                        padding: '8px',
                                        background: 'white',
                                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                                        position: 'relative'
                                    } as React.CSSProperties}>
                                    <img
                                        src="/images/dentists/dentist-1.webp"
                                        alt="Dr. Ambika Sah - Dental Surgeon"
                                        className={`img-cover ${styles.dentistProfileImg}`}
                                        loading="lazy"
                                        style={{ borderRadius: '50%' }}
                                    />

                                    {/* Verified badge */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '10px',
                                        right: '10px',
                                        width: '40px',
                                        height: '40px',
                                        background: 'var(--deep-golden-orange)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '18px',
                                        border: '3px solid white',
                                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
                                    }}>
                                        ✓
                                    </div>

                                </div>
                            </div>

                            <div style={{
                                position: 'relative',
                                zIndex: '2'
                            }}>
                                <h2
                                    className={`h25 ${styles.dentistName}`}
                                    style={{
                                        marginTop: '30px',
                                        color: 'var(--warm-orange-brown)'
                                    }}>
                                    Dr. Mukesh Kumar Shah
                                </h2>
                                <h3
                                    className={styles.dentistTitle}
                                    style={{
                                        background: 'linear-gradient(135deg, var(--bright-amber), var(--deep-golden-orange))',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontSize: '1.8rem',
                                        fontWeight: '700',
                                        marginBottom: '25px'
                                    }}>
                                    Consultant Orthodontist
                                </h3>

                                <div
                                    className={styles.dentistQualificationBadge}
                                    style={{
                                        background: 'linear-gradient(135deg, var(--golden-cream), #e8f5f0)',
                                        border: '2px solid var(--bright-amber)',
                                        borderRadius: '15px',
                                        padding: '20px 30px',
                                        marginBottom: '25px',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                                    }}>
                                    <p style={{
                                        color: 'var(--deep-orange-brown)',
                                        fontWeight: '800',
                                        fontSize: '1.6rem',
                                        letterSpacing: '1px'
                                    }}>
                                        Master of Dental Surgery (MDS)
                                    </p>
                                </div>

                                <div
                                    className={styles.dentistInstitutionInfo}
                                    style={{
                                        background: 'linear-gradient(135deg, var(--deep-orange-brown), var(--warm-orange-brown))',
                                        borderRadius: '15px',
                                        padding: '25px',
                                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                                        border: '1px solid var(--bright-amber)'
                                    }}>
                                    <p
                                        className={styles.institutionText}
                                        style={{
                                            fontSize: '1.4rem',
                                            fontWeight: '600',
                                            lineHeight: '1.6',
                                            margin: '0'
                                        }}>
                                        TRIBHUVAN UNIVERSITY<br />
                                        <span style={{
                                            fontSize: '1.2rem',
                                            opacity: '0.9',
                                            fontWeight: '500',
                                            color: 'var(--golden-orange)'
                                        }}>
                                            NMC No: 20945
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* About Section */}
                        <div style={{
                            textAlign: 'left',
                            padding: '40px',
                            background: 'rgba(255, 255, 255, 0.8)',
                            borderRadius: '20px',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(150, 211, 169, 0.1)'
                        }}>
                            <h3
                                className="section-subtitle"
                                style={{
                                    color: 'var(--deep-golden-orange)',
                                    fontSize: '1.4rem',
                                    letterSpacing: '2px',
                                    marginBottom: '15px'
                                }}>
                                ABOUT
                            </h3>
                            <h2 style={{
                                color: 'var(--warm-orange-brown)',
                                fontSize: '2.8rem',
                                fontWeight: '700',
                                marginBottom: '30px',
                                lineHeight: '1.2'
                            }}>
                                Dedicated to Your Oral Health
                            </h2>

                            {ABOUTTEXT.map((text, index) => (
                                <p
                                    key={index}
                                    className={`section-text ${styles.dentistAboutText}`}
                                    style={{
                                        fontSize: '1.6rem',
                                        lineHeight: '1.8',
                                        color: 'var(--warm-orange-taupe)',
                                        marginBottom: '30px'
                                    }}>
                                    {text}
                                </p>
                            ))}

                            <p
                                className={`section-text ${styles.dentistAboutText}`}
                                style={{
                                    fontSize: '1.6rem',
                                    lineHeight: '1.8',
                                    color: 'var(--warm-orange-taupe)'
                                }}>
                                JC Dr. Mukesh Kumar Shah is a multi-faceted professional who excels in dentistry, leadership, and social service. His contributions to orthodontics, his efforts in strengthening professional networks, and his dedication to community welfare make him a respected figure in both medical and social sectors. Through his ongoing work, he continues to inspire young professionals and contribute to the overall development of Jhapa.
                            </p>

                            {/* Key highlights */}
                            <div style={{ marginTop: '40px' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    marginBottom: '15px',
                                    padding: '15px',
                                    background: 'rgba(150, 211, 169, 0.1)',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(150, 211, 169, 0.2)'
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        background: 'var(--deep-golden-orange)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '18px',
                                        flexShrink: '0'
                                    }}>
                                        🎓
                                    </div>
                                    <span style={{
                                        fontSize: '1.5rem',
                                        color: 'var(--warm-orange-brown)',
                                        fontWeight: '600'
                                    }}>
                                        TU Graduate & NMC Registered
                                    </span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    padding: '15px',
                                    background: 'rgba(150, 211, 169, 0.1)',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(150, 211, 169, 0.2)'
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        background: 'var(--deep-golden-orange)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '18px',
                                        flexShrink: '0'
                                    }}>
                                        💚
                                    </div>
                                    <span style={{
                                        fontSize: '1.5rem',
                                        color: 'var(--warm-orange-brown)',
                                        fontWeight: '600'
                                    }}>
                                        Patient-Centered Care Approach
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Training & Expertise Section */}
            <section style={{
                background: 'linear-gradient(135deg, var(--darkest-orange-brown) 0%, var(--deep-orange-brown) 100%)',
                padding: '100px 0',
                position: 'relative',
                overflow: 'hidden'
            }}>

                <div
                    className="custom-container"
                    style={{
                        position: 'relative',
                        zIndex: '2'
                    }}>
                    <div
                        className="text-center"
                        style={{ marginBottom: '80px' }}>
                        <h3
                            className="section-subtitle"
                            style={{
                                color: 'var(--bright-amber)',
                                fontSize: '1.4rem',
                                letterSpacing: '2px',
                                marginBottom: '15px'
                            }}>
                            SPECIALIZED TRAINING
                        </h3>
                        <h2
                            className="h2"
                            style={{
                                color: 'white',
                                fontSize: '3.2rem',
                                fontWeight: '700',
                                marginBottom: '25px'
                            }}>
                            Advanced Dental Expertise
                        </h2>
                        <p style={{
                            color: 'var(--golden-orange)',
                            fontSize: '1.6rem',
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}>
                            Dr. Shah has completed specialized training in various advanced dental procedures and actively participates in community health initiatives.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '40px'
                    }}>

                        {/* Training Card */}
                        <div
                            className={styles.trainingCard}
                            style={{
                                background: 'rgba(255, 255, 255, 0.95)',
                                padding: '50px',
                                borderRadius: '20px',
                                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.2)',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                border: '1px solid rgba(150, 211, 169, 0.3)',
                                backdropFilter: 'blur(10px)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>

                            {/* Gradient overlay */}
                            <div style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                right: '0',
                                height: '6px',
                                background: 'linear-gradient(90deg, var(--bright-amber), var(--deep-golden-orange))'
                            }} />

                            <div style={{
                                width: '90px',
                                height: '90px',
                                background: 'linear-gradient(135deg, var(--bright-amber), var(--deep-golden-orange))',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 30px',
                                fontSize: '36px',
                                color: 'white',
                                boxShadow: '0 15px 40px rgba(150, 211, 169, 0.4)',
                                position: 'relative'
                            }}>
                                <IonIcon name="school-outline" />

                                {/* Pulse animation ring */}
                                <div style={{
                                    position: 'absolute',
                                    width: '110px',
                                    height: '110px',
                                    border: '2px solid var(--bright-amber)',
                                    borderRadius: '50%',
                                    opacity: '0.3',
                                    animation: 'pulse 2s infinite'
                                }} />
                            </div>

                            <h4
                                className={styles.trainingCardTitle}
                                style={{
                                    color: 'var(--warm-orange-brown)',
                                    fontSize: '2.2rem',
                                    fontWeight: '700',
                                    marginBottom: '25px'
                                }}>
                                Training Completed
                            </h4>

                            <ul style={{
                                listStyle: 'none',
                                padding: '0',
                                margin: '0',
                                textAlign: 'left'
                            }}>

                                {TRAININGS.map((training, index) => (
                                    <li
                                        key={index}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: '18px',
                                            fontSize: '1.6rem',
                                            color: 'var(--warm-orange-taupe)',
                                            padding: '12px',
                                            background: 'rgba(150, 211, 169, 0.08)',
                                            borderRadius: '10px',
                                            border: '1px solid rgba(150, 211, 169, 0.2)'
                                        }}>
                                        <span style={{
                                            width: '12px',
                                            height: '12px',
                                            background: 'var(--deep-golden-orange)',
                                            borderRadius: '50%',
                                            marginRight: '18px',
                                            flexShrink: '0'
                                        }} />
                                        {training}
                                    </li>
                                ))}

                                <li
                                    className={styles.trainingItem}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '1.6rem',
                                        color: 'var(--warm-orange-taupe)',
                                        padding: '12px',
                                        background: 'rgba(150, 211, 169, 0.08)',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(150, 211, 169, 0.2)'
                                    }}>
                                    <span style={{
                                        width: '12px',
                                        height: '12px',
                                        background: 'var(--deep-golden-orange)',
                                        borderRadius: '50%',
                                        marginRight: '18px',
                                        flexShrink: '0'
                                    }}></span>
                                    Hands On Training
                                </li>
                            </ul>
                        </div>

                        {/* Community Service Card */}
                        <div
                            className={styles.trainingCard}
                            style={{
                                background: 'rgba(255, 255, 255, 0.95)',
                                padding: '50px',
                                borderRadius: '20px',
                                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.2)',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                border: '1px solid rgba(150, 211, 169, 0.3)',
                                backdropFilter: 'blur(10px)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                            {/* Gradient overlay */}
                            <div style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                right: '0',
                                height: '6px',
                                background: 'linear-gradient(90deg, var(--bright-amber), var(--deep-golden-orange))'
                            }} />

                            <div style={{
                                width: '90px',
                                height: '90px',
                                background: 'linear-gradient(135deg, var(--bright-amber), var(--deep-golden-orange))',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 30px',
                                fontSize: '36px',
                                color: 'white',
                                boxShadow: '0 15px 40px rgba(150, 211, 169, 0.4)',
                                position: 'relative'
                            }}>
                                <IonIcon name="medical-outline" />
                                {/* Pulse animation ring */}
                                <div style={{
                                    position: 'absolute',
                                    width: '110px',
                                    height: '110px',
                                    border: '2px solid var(--bright-amber)',
                                    borderRadius: '50%',
                                    opacity: '0.3',
                                    animation: 'pulse 2s infinite'
                                }}></div>
                            </div>

                            <h4
                                className={styles.trainingCardTitle}
                                style={{
                                    color: 'var(--warm-orange-brown)',
                                    fontSize: '2.2rem',
                                    fontWeight: '700',
                                    marginBottom: '25px'
                                }}>
                                Leadership & Community Service
                            </h4>

                            <div style={{
                                padding: '25px',
                                background: 'rgba(150, 211, 169, 0.08)',
                                borderRadius: '15px',
                                border: '1px solid rgba(150, 211, 169, 0.2)',
                                textAlign: 'left'
                            }}>
                                <p
                                    className={styles.communityServiceText}
                                    style={{
                                        fontSize: '1.6rem',
                                        color: 'var(--warm-orange-taupe)',
                                        lineHeight: '1.7',
                                        margin: '0'
                                    }}>
                                    Demonstrates exceptional leadership in dental healthcare as President of the Nepal Dental Association, Jhapa District, while serving as Founder President of JCI Jhapa and President-Elect of the Rotaract Club of Surunga, actively advocating for dental professional welfare and driving community development initiatives focused on youth empowerment and humanitarian service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section
                className="section dentist-cta"
                style={{
                    padding: '100px 0',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 255, 254, 0.9) 100%)',
                    position: 'relative'
                }}>
                <div className="custom-container text-center">
                    <h3
                        className="section-subtitle"
                        style={{
                            color: 'var(--deep-golden-orange)',
                            fontSize: '1.4rem',
                            letterSpacing: '2px',
                            marginBottom: '15px'
                        }}>
                        READY TO GET STARTED?
                    </h3>
                    <h2
                        className="h2"
                        style={{
                            color: 'var(--warm-orange-brown)',
                            fontSize: '3.2rem',
                            fontWeight: '700',
                            marginBottom: '25px'
                        }}>
                        Schedule Your Appointment Today
                    </h2>
                    <p
                        className="section-text"
                        style={{
                            fontSize: '1.6rem',
                            color: 'var(--warm-orange-taupe)',
                            maxWidth: '700px',
                            margin: '0 auto 50px',
                            lineHeight: '1.7'
                        }}>
                        Experience professional dental care with Dr. Mukesh Shah. Book your consultation and take the first step towards optimal oral health.
                    </p>
                    <Link
                        href="/#contact"
                        className="btn"
                        style={{
                            display: 'inline-block',
                            padding: '20px 40px',
                            fontSize: '1.6rem',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            borderRadius: '50px',
                            boxShadow: '0 15px 40px rgba(150, 211, 169, 0.4)',
                            transition: 'all 0.3s ease',
                            border: '2px solid transparent'
                        }}>
                        Book Appointment
                    </Link>
                </div>
            </section>
        </main>
    );
});

Dentist.displayName = "Dentist";