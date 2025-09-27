import { Link } from "@/types";
import { IonIcon } from "./IonIcon";
import { memo } from "react";
import styles from "../Footer/Footer.module.css";

export const SocialLink = memo(({
    href, name
}: Link) => (
    <li>
        <a
            href={href}
            className={styles.socialLink}
            target="_blank"
        >
            <IonIcon name={name} />
        </a>
    </li>
));

SocialLink.displayName = "SocialLink";