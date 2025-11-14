"use client";

import { memo, useEffect, useState } from "react";
import { IonIcon } from "../utility/IonIcon";
import { NAVLINKS, SOCIALLINKS } from "@/constants";
import { Button } from "../utility/Button/Button";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { CONTACTS } from "@/constants/contact-links";

export const Header = memo(() => {
    const [isNavActive, setIsNavActive] = useState(false);
    const [isHeaderActive, setIsHeaderActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(prev => !prev);
    };

    const closeNav = () => {
        setIsNavActive(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setIsHeaderActive(true);
            } else {
                setIsHeaderActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${isHeaderActive ? styles.active : ''}`}>
            <div className={styles.headerTop}>
                <div className={`custom-container ${styles.customContainer}`}>
                    <ul className={styles.contactList}>
                        <li className={styles.contactItem}>
                            <IonIcon name="mail-outline" />
                            <a
                                href="mailto:pradhandental.btm@gmail.com"
                                className={styles.contactLink}
                            >
                                pradhandental.btm@gmail.com
                            </a>
                        </li>

                        {CONTACTS.map((contact, index) => (
                            <li
                                key={index}
                                className={styles.contactItem}
                            >
                                <IonIcon name={contact.ionIcon} />
                                <a
                                    href={contact.href}
                                    className={styles.contactLink}
                                    target="_blank"
                                >
                                    {contact.textNumber}
                                </a>
                            </li>
                        ))}

                    </ul>

                    <ul className={styles.socialList}>
                        {SOCIALLINKS.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className={styles.socialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IonIcon name={link.name} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div
                className={`${styles.headerBottom} ${isHeaderActive ? styles.active : ''}`}
                data-header
            >
                <div className={`custom-container ${styles.customContainer}`}>
                    <Link
                        href="/"
                        className={styles.logo}
                    >
                        <Image
                            width={120}
                            height={200}
                            src="/images/logo.webp"
                            alt="logo"
                        />
                    </Link>

                    <nav
                        className={`${styles.navbar} ${isNavActive ? styles.active : ''}`}
                        data-navbar
                    >
                        <ul className={styles.navbarList}>
                            {NAVLINKS.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className={styles.navbarLink}
                                        onClick={closeNav}
                                        data-nav-link
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Wrap the Button in a div with CSS module class */}
                    <div className={styles.headerButton}>
                        <Button
                            btnLink={"/#contact"}
                            btnText={"Book appointment"}
                        />
                    </div>

                    <button
                        className={`${styles.navToggleBtn} ${isNavActive ? styles.active : ''}`}
                        aria-label="Toggle menu"
                        onClick={toggleNav}
                        data-nav-toggler
                    >
                        <IonIcon
                            name="menu-sharp"
                            aria-hidden="true"
                            className={styles.menuIcon}
                        />
                        <IonIcon
                            name="close-sharp"
                            aria-hidden="true"
                            className={styles.closeIcon}
                        />
                    </button>
                </div>
            </div>
        </header>
    );
});

Header.displayName = "Header";