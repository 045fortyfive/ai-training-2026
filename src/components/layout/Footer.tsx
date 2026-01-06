import Link from "next/link";
import { Brain } from "@phosphor-icons/react/dist/ssr";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoIcon}>
                            <Brain weight="duotone" size={20} />
                        </div>
                        <span>AI研修 2026</span>
                    </Link>
                    <p className={styles.copyright}>
                        © 2026 AI活用研修. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
