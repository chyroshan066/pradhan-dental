import { SERVICES } from "@/constants";
import { Services } from "@/types";
import Image from "next/image";
import { memo } from "react";
import { TitleHeader } from "../utility/TitleHeader";
import styles from "./Service.module.css";

const ServiceCard = memo(({
    imgSrc, name, text, href, idStr
}: Services) => (
    <li id={idStr}>
        <div className={styles.serviceCard}>
            <div className={styles.cardIcon}>
                <Image
                    src={imgSrc}
                    width={100}
                    height={100}
                    loading="lazy"
                    alt="service icon"
                    className="w-fill"
                />
            </div>
            <div>
                <h3 className={`h3 ${styles.cardTitle}`}>{name}</h3>
                <p className={`card-text ${styles.cardText}`}>{text}</p>
            </div>
        </div>
    </li>
));

ServiceCard.displayName = "ServiceCard";

export const Service = memo(() => (
    <section
        className={`section -mt-50 lg:-mt-40 ${styles.service}`}
        id="service"
        aria-label="service"
    >
        <div className="custom-container">

            <div className={styles.sectionTitle}>
                <TitleHeader
                    title={"Our Services"}
                    subTitle={"What We Provide"}
                />
            </div>

            <ul className={styles.serviceList}>

                {SERVICES
                    .filter(service => service.id != null && service.id <= 3)
                    .map((service) => (
                        <ServiceCard
                            key={service.id ? service.id : service.href}
                            imgSrc={service.imgSrc}
                            name={service.name}
                            text={service.text}
                            href={service.href}
                            idStr={service.idStr}
                        />
                    ))
                }

                <li className={styles.serviceBanner}>
                    <figure>
                        <Image
                            src="/images/service-banner.webp"
                            width={409}
                            height={467}
                            loading="lazy"
                            alt="service banner"
                            className="w-fill"
                        />
                    </figure>
                </li>

                {SERVICES
                    .filter(service => service.id != null && service.id > 3 && service.id <= 6)
                    .map((service) => (
                        <ServiceCard
                            key={service.id ? service.id : service.href}
                            imgSrc={service.imgSrc}
                            name={service.name}
                            text={service.text}
                            href={service.href}
                            idStr={service.idStr}
                        />
                    ))
                }

                {SERVICES
                    .filter(service => service.id != null && service.id > 6 && service.id <= 9)
                    .map((service) => (
                        <ServiceCard
                            key={service.id ? service.id : service.href}
                            imgSrc={service.imgSrc}
                            name={service.name}
                            text={service.text}
                            href={service.href}
                            idStr={service.idStr}
                        />
                    ))
                }

                {SERVICES
                    .filter(service => service.id != null && service.id > 9 && service.id <= 12)
                    .map((service) => (
                        <ServiceCard
                            key={service.id ? service.id : service.href}
                            imgSrc={service.imgSrc}
                            name={service.name}
                            text={service.text}
                            href={service.href}
                            idStr={service.idStr}
                        />
                    ))
                }

                {SERVICES
                    .filter(service => service.id != null && service.id > 12)
                    .map((service) => (
                        <ServiceCard
                            key={service.id ? service.id : service.href}
                            imgSrc={service.imgSrc}
                            name={service.name}
                            text={service.text}
                            href={service.href}
                            idStr={service.idStr}
                        />
                    ))
                }

            </ul>
        </div>
    </section>
));

Service.displayName = "Service";