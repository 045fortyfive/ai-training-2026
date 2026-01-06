"use client";

import { useState } from "react";
import {
    CaretLeft,
    CaretRight,
    ArrowsOut,
    X
} from "@phosphor-icons/react";
import styles from "./PDFSlideshow.module.css";

interface Theme {
    id: string;
    name: string;
    pdfUrl: string;
}

interface PDFSlideshowProps {
    themes: Theme[];
}

export default function PDFSlideshow({ themes }: PDFSlideshowProps) {
    const [activeTheme, setActiveTheme] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const currentTheme = themes[activeTheme];

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    return (
        <>
            <div className={styles.container}>
                {/* Theme Tabs */}
                {themes.length > 1 && (
                    <div className={styles.tabs}>
                        {themes.map((theme, index) => (
                            <button
                                key={theme.id}
                                className={`${styles.tab} ${index === activeTheme ? styles.tabActive : ''}`}
                                onClick={() => setActiveTheme(index)}
                            >
                                {theme.name}
                            </button>
                        ))}
                    </div>
                )}

                {/* PDF Viewer */}
                <div className={styles.viewer}>
                    <div className={styles.viewerHeader}>
                        <span className={styles.themeName}>{currentTheme.name}</span>
                        <button
                            className={styles.fullscreenBtn}
                            onClick={toggleFullscreen}
                            title="フルスクリーン"
                        >
                            <ArrowsOut size={20} weight="bold" />
                        </button>
                    </div>

                    <div className={styles.pdfContainer}>
                        <iframe
                            src={`${currentTheme.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                            className={styles.pdfFrame}
                            title={currentTheme.name}
                        />
                    </div>

                    <div className={styles.viewerFooter}>
                        <p className={styles.hint}>
                            ↓ スクロールでページ移動 / フルスクリーンで拡大表示
                        </p>
                    </div>
                </div>
            </div>

            {/* Fullscreen Modal */}
            {isFullscreen && (
                <div className={styles.fullscreenModal} onClick={toggleFullscreen}>
                    <button
                        className={styles.closeBtn}
                        onClick={toggleFullscreen}
                    >
                        <X size={24} weight="bold" />
                    </button>
                    <div
                        className={styles.fullscreenContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={`${currentTheme.pdfUrl}#toolbar=1&navpanes=0`}
                            className={styles.fullscreenFrame}
                            title={currentTheme.name}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
