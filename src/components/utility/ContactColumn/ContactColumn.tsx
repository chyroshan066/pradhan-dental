import { memo } from "react";
import { IonIcon } from "../IonIcon";
import { CONTACTS } from "@/constants/contact-links";
import styles from "./ContactColumn.module.css";

export const ContactColumn = memo(() => (
    <>
        <li className={styles.footerItem}>
            <div className={styles.itemIcon}>
                <IonIcon name="location-outline" />
            </div>
            <a
                href="https://www.google.com/maps/place/PRADHAN+DENTAL+CLINIC,+BIRTAMOD/@26.6293108,87.9799011,17z/data=!3m1!4b1!4m6!3m5!1s0x39e5bbb66f9d1f9b:0x97812a81ba3bf007!8m2!3d26.629306!4d87.982476!16s%2Fg%2F11tnt61800?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                className="footer-link"
                target="_blank"
            >
                <address className={styles.itemText}>
                    Near Aduwa Khola Bridge <br />
                    Birtamode, Jhapa, Nepal
                </address>
            </a>
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
                    className="footer-link"
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
                className="footer-link"
            >
                pradhandental.btm@gmail.com
            </a>
        </li>
    </>
));

ContactColumn.displayName = "ContactColumn";