import { memo } from "react";
import { NAVLINKS, SERVICES, SOCIALLINKS } from "@/constants";
import { Link, Services } from "@/types";
import { IonIcon } from "../utility/IonIcon";
import { SocialLink } from "../utility/SocialLink";
import styles from "./Footer.module.css";
import { CONTACTS } from "@/constants/contact-links";

interface FooterColumn {
    footerListTitle: string;
    list: Link[] | Services[];
}

const FOOTERCOLUMN: FooterColumn[] = [
    {
        footerListTitle: "Other Links",
        list: NAVLINKS,
    },
    {
        footerListTitle: "Our Services",
        list: SERVICES,
    },
];

const FooterColumn = memo(({
    footerListTitle, list
}: FooterColumn) => (
    <ul className={styles.footerList}>
        <li>
            <p className={styles.footerListTitle}>{footerListTitle}</p>
        </li>

        {list.map((link, index) => (
            <li key={index}>
                <a
                    href={link.href?.includes("#") ? link.href : `#${link.href}`}
                    className={styles.footerLink}
                >
                    <IonIcon name="add-outline" />
                    <span className={styles.span}>{link.name}</span>
                </a>
            </li>
        ))}

    </ul>
));

FooterColumn.displayName = "FooterColumn";

export const Footer = memo(() => (
    <footer className={styles.footer}>
        <div className={`${styles.section} ${styles.footerTop}`}>
            <div className={`${styles.customContainer} ${styles.customContainer}`}>
                <div className={styles.footerBrand}>
                    <a
                        href="#"
                        className={`${styles.logo}`}
                    >
                        Pradhan Dental
                    </a>
                    <p className={styles.footerText}>
                        Your trusted <strong>dental clinic in Birtamode</strong> for <strong>dental implants</strong>, <strong>braces</strong>, <strong>cosmetic dentistry</strong>, <strong>root canal</strong>, <strong>teeth whitening</strong>, <strong>orthodontics</strong>, and <strong>family dental care</strong> at an affordable price. Visit <strong>Pradhan Dental Nepal</strong> for healthy smiles.
                    </p>

                    <div className={styles.schedule}>
                        <div className={styles.scheduleIcon}>
                            <IonIcon name="time-outline" />
                        </div>
                        <span className={styles.span}>
                            Sunday - Friday:<br />
                            9:00 AM - 5:00 PM
                        </span>
                    </div>

                </div>

                {FOOTERCOLUMN.map((column, index) => (
                    <FooterColumn
                        key={index}
                        footerListTitle={column.footerListTitle}
                        list={column.list}
                    />
                ))}

                <ul className={styles.footerList}>
                    <li>
                        <p className={styles.footerListTitle}>Contact Us</p>
                    </li>

                    <li className={styles.footerItem}>
                        <div className={styles.itemIcon}>
                            <IonIcon name="location-outline" />
                        </div>
                        <address className={styles.itemText}>
                            Near Aduwa Khola Bridge hunch <br />
                            Birtamode, Jhapa, Nepal
                        </address>
                    </li>

                    {CONTACTS.map((contact, index) => (
                        <li
                            key={index}
                            className={styles.footerItem}
                        >
                            <div className={styles.itemIcon}>
                                <IonIcon name={contact.ionIcon} />
                            </div>
                            <a
                                href={contact.href}
                                className={styles.footerLink}
                                target="_blank"
                            >
                                {contact.textNumber}
                            </a>
                        </li>
                    ))}

                    <li className={styles.footerItem}>
                        <div className={styles.itemIcon}>
                            <IonIcon name="mail-outline" />
                        </div>
                        <a
                            href="mailto:pradhandental.btm@gmail.com"
                            className={styles.footerLink}
                        >
                            pradhandental.btm@gmail.com
                        </a>
                    </li>

                </ul>
            </div>
        </div>

        <div className={styles.footerBottom}>
            <div className={styles.customContainer}>
                <p className={styles.copyright}>
                    &copy; 2025 All Rights Reserved by Pradhan Dental Clinic.
                </p>
                <ul className={styles.socialList}>
                    {SOCIALLINKS.map((link, index) => (
                        <SocialLink
                            key={index}
                            href={link.href}
                            name={link.name}
                        />
                    ))}
                </ul>
            </div>
        </div>
    </footer>
));


Footer.displayName = "Footer";