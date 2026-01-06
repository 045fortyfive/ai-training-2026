"use client";

import Link from "next/link";
import { useState } from "react";
import {
    List,
    X,
    Brain
} from "@phosphor-icons/react";
import styles from "./Header.module.css";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <Brain weight="duotone" size={24} />
                    </div>
                    <span className={styles.logoText}>AI研修 2026</span>
                </Link>

                <nav className={styles.desktopNav}>
                    <Link href="#level-1" className={styles.navLink}>Lv1 チャット型</Link>
                    <Link href="#level-1-5" className={styles.navLink}>Lv1.5 プロンプト</Link>
                    <Link href="#level-2" className={styles.navLink}>Lv2 NotebookLM</Link>
                    <Link href="#level-3" className={styles.navLink}>Lv3 IDE型AI</Link>
                </nav>

                <div className={styles.actions}>
                    <Link href="#level-1" className={styles.ctaButton}>
                        研修を始める
                    </Link>
                    <button
                        className={styles.mobileMenuButton}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="メニュー"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <nav className={styles.mobileNav}>
                        <Link href="#level-1" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                            Lv1 チャット型AI
                        </Link>
                        <Link href="#level-1-5" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                            Lv1.5 プロンプト改善
                        </Link>
                        <Link href="#level-2" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                            Lv2 NotebookLM
                        </Link>
                        <Link href="#level-3" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                            Lv3 IDE型AI
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
