import Image from "next/image";
import { memo } from "react";
import { IonIcon } from "../utility/IonIcon";
import { DentistType } from "@/types";
import { DENTISTS } from "@/constants";
import { TitleHeader } from "../utility/TitleHeader";
import styles from "./Dentist.module.css";

const DentistCard = memo(({
    imgSrc, name, ionIcon, position
}: DentistType) => (
    <li className={styles.scrollbarItem}>
        <div className={styles.doctorCard}>
            <div
                className={`img-holder ${styles.cardBanner}`}
                style={{ "--width": "460", "--height": "500" } as React.CSSProperties}
            >
                <Image
                    src={imgSrc}
                    width={460}
                    height={500}
                    loading="lazy"
                    alt={name}
                    className="img-cover"
                />
            </div>
            <h3 className="h3">
                <a
                    href="#"
                    className={styles.cardTitle}
                >
                    {name}
                </a>
            </h3>
            <p className={styles.cardSubtitle}>{position}</p>
            <ul className={styles.cardSocialList}>

                {ionIcon?.map((icon, index) => (
                    <li key={index}>
                        <a
                            href={icon.ionIconLink}
                            className={styles.cardSocialLink}
                        >
                            <IonIcon name={icon.ionIconName}></IonIcon>
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    </li>
));

DentistCard.displayName = "DoctorCard";

export const Dentist = memo(() => (
    <section
        className={`section ${styles.doctor}`}
        aria-label="doctor"
    >
        <div className="custom-container">

            <TitleHeader
                title={"Our Doctor"}
                subTitle={"Best Expert Dentist"}
            />

            <ul className={styles.hasScrollbar}>

                {DENTISTS.map((dentist, index) => (
                    <DentistCard
                        key={index}
                        imgSrc={dentist.imgSrc}
                        name={dentist.name}
                        ionIcon={dentist.ionIcon}
                        position={dentist.position}
                    />
                ))}

            </ul>
        </div>
    </section>
));

Dentist.displayName = "Dentist";