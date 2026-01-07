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
                    <Link href="/mvp-msp-mlp" className={styles.navLink}>戦略</Link>
                    <Link href="/business-plan" className={styles.navLink}>事業計画書</Link>
                    <Link href="/business-plan-template" className={styles.navLink}>事業計画書テンプレート</Link>
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
                        <Link href="/mvp-msp-mlp" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                            戦略
                        </Link>
                        <Link href="/business-plan" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                            事業計画書
                        </Link>
                        <Link href="/business-plan-template" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                            事業計画書テンプレート
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
