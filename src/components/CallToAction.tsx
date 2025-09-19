import Image from "next/image";
import { memo } from "react";
import { Button } from "./utility/Button/Button";

export const CallToAction = memo(() => (
    <section
        className="section cta lg:mt-70 mt-40"
        aria-label="cta"
    >
        <div className="custom-container">

            <figure className="cta-banner relative h-166 overflow-hidden bg-light-warm-beige flex items-center justify-center">
                {/* MODIFIED: Changed from fill to intrinsic sizing with object-contain to preserve aspect ratio */}
                <Image
                    src="/images/cta-banner.webp"
                    width={800} // Add appropriate width based on your image
                    height={400} // Add appropriate height based on your image  
                    loading="lazy"
                    alt="cta banner"
                    className="object-contain max-h-full max-w-full"
                    priority={false}
                />
            </figure>

            <div className="cta-content">
                <p className="section-subtitle">Book Dental Appointment</p>
                <h2 className="h2 section-title">We Are open And Welcoming Patients</h2>

                <Button
                    btnLink={"#contact"}
                    btnText={"Book appointment"}
                />
            </div>
        </div>
    </section>
));

CallToAction.displayName = "CallToAction";