import { SOCIALLINKS } from "@/constants";
import { memo } from "react";
import styles from "./SocialIcon.module.css";
import { SocialLink } from "../SocialLink/SocialLink";
import { cn } from "@/utils/clsx";

export const SocialIcon = memo(({
    className, linkClassName
}: {
    className: string,
    linkClassName: string
}) => (
    <ul className={cn(styles.socialList, className)}>
        {SOCIALLINKS.map((link, index) => (
            <SocialLink
                key={index}
                href={link.href}
                name={link.name}
                className={linkClassName}
            />
        ))}
    </ul>
));

SocialIcon.displayName = "SocialIcon";