import Image from "next/image";
import { memo } from "react";
import { Button } from "../utility/Button/Button";
import styles from "./CallToAction.module.css";

export const CallToAction = memo(() => (
    <section
        className={`section ${styles.cta}`}
        aria-label="cta"
    >
        <div className={`custom-container ${styles.customContainer}`}>

            <figure className={`${styles.ctaBanner} relative h-166 overflow-hidden bg-light-warm-beige flex items-center justify-center`}>
                <Image
                    src="/images/cta-banner.webp"
                    width={800}
                    height={400}
                    loading="lazy"
                    alt="cta banner"
                    className="object-contain max-h-full max-w-full"
                    priority={false}
                />
            </figure>

            <div className={styles.ctaContent}>
                <p className={`section-subtitle ${styles.sectionSubtitle}`}>Book Dental Appointment</p>
                <h2 className={`h2 section-title ${styles.sectionTitle}`}>We Are open And Welcoming Patients</h2>

                <div className={styles.ctaBtnContainer}>
                    <Button
                        btnLink={"#contact"}
                        btnText={"Book appointment"}
                    />
                </div>

            </div>
        </div>
    </section>
));

CallToAction.displayName = "CallToAction";