import { SocialLinkType } from "@/types";
import { IonIcon } from "../IonIcon";
import { memo } from "react";
import styles from "./SocialLink.module.css";
import { cn } from "@/utils/clsx";

export const SocialLink = memo(({
    href, name, className
}: SocialLinkType) => (
    <li>
        <a
            href={href}
            className={cn(styles.socialLink, className)}
            target="_blank"
        >
            <IonIcon name={name} />
        </a>
    </li>
));

SocialLink.displayName = "SocialLink";