import Image from "next/image";
import { memo } from "react";
import styles from "./About.module.css";

export const About = memo(() => (
    <section
        className={`section ${styles.about}`}
        id="about"
        aria-label="about"
    >
        <div className={`custom-container ${styles.customContainer}`}>

            <figure className={styles.aboutBanner}>
                <Image
                    src="/images/about-banner.webp"
                    width={470}
                    height={538}
                    loading="lazy"
                    alt="about banner"
                    className="w-fill"
                />
            </figure>

            <div>
                <p className="section-subtitle">About Us</p>
                <h2 className="h2 section-title">We Care For Your Dental Health</h2>
                <p className={`section-text ${styles.sectionText1}`}>
                    Welcome to <b>Pradhan Dental Clinic</b>, your trusted <b>best dental clinic in Birtamode</b> located at Aduwa Khola, Birtamode, Jhapa, Nepal. As the premier choice for <b>dental in Birtamode</b> , we operate with the motto <i>“Professional Dentist, Advanced Technology and Affordable Price”</i>, committed to providing high-quality <b>dental care in Nepal</b> for every smile.
                </p>
                <p className="section-text">
                    Our team of experienced dentists at this leading <b>dental clinic in Birtamode</b> offers a full range of treatments including <b>dental implants, braces, cosmetic dentistry, root canal, teeth whitening, orthodontics, gum treatment, oral surgery,</b> and <b>tooth extraction.</b> We also specialize in <b>pediatric dentistry,</b> ensuring gentle care for children, as well as <b>family dentist services in Birtamode</b> for all ages.
                </p>
                <p className={`section-text ${styles.sectionText1}`}>
                    At <b>Pradhan Dental Nepal</b>, recognized as the <b>best dental in Birtamode,</b> we combine modern technology with compassionate care to make treatments comfortable and accessible. Whether you need a routine <b>dental checkup in Birtamode, emergency dental care,</b> or advanced solutions for restoring your smile, our clinic ensures the best outcomes at an <b>affordable price.</b>
                </p>
                <p className="section-text">
                    Choose <b>Pradhan Dental</b> for the <b>best dentist in Birtamode,</b> where healthy smiles begin with expert care and a personal touch at the most trusted <b>dental clinic in Birtamode.</b>
                </p>

            </div>
        </div>
    </section>
));

About.displayName = "About";