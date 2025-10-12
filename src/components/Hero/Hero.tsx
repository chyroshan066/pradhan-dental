"use client";

import { memo } from "react";
import styles from "./Hero.module.css";
import { Button } from "../utility/Button/Button";
import { ContactColumn } from "../utility/ContactColumn/ContactColumn";
import { SocialIcon } from "../utility/SocialIcon/SocialIcon";
import { HeroSlider } from "../HeroSlider";

const HEROSLIDES: string[] = [
    "/images/hero-banner.webp",
    "/images/media/images/g1.webp",
    "/images/media/images/g2.webp",
    "/images/media/images/g3.webp",
    "/images/media/images/g5.webp",
    "/images/cta-banner.webp",
    "/images/media/images/g4.webp",
    "/images/media/images/g9.webp",
    "/images/media/images/g6.webp",
    "/images/media/images/g10.webp",
    "/images/media/images/g11.webp",
];

export const Hero = memo(() => (
    <section
        className={`section ${styles.hero}`}
        id="home"
        style={{ "backgroundImage": "url('/images/hero-bg.svg')" } as React.CSSProperties}
        aria-label="hero"
    >
        <div className={`custom-container ${styles.customContainer}`}>
            <div className={styles.heroContent}>
                <p className="section-subtitle">Welcome To Pradhan Dental Clinic</p>
                <h1 className={`h25 ${styles.heroTitle}`}>We Are The Best Dental Service Provider In Town</h1>
                <p className="text-[var(--warm-beige_50] mb-10 leading-[1.45] text-[length:var(--fontSize-6)]">
                    Transforming smiles with precision, care, and cutting-edge technology. Experience dentistry that exceeds expectations.
                </p>

                <ContactColumn />
                <SocialIcon
                    className="justify-start"
                    linkClassName="text-[var(--deep-golden-orange)] mt-5"
                />

                <div className="inline-block w-full md:w-auto mt-10">
                    <Button
                        btnLink={"/#contact"}
                        btnText={"Book Appointment"}
                    />
                </div>
            </div>

            <figure className={styles.heroBanner}>
                <HeroSlider slides={HEROSLIDES} />
            </figure>
        </div>
    </section>
));

Hero.displayName = "Hero";