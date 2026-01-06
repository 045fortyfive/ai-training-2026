'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCcw, Flame } from 'lucide-react';
import styles from './RocketAnimation.module.css';

// 描画するすべてのパスデータ（ロケット + 雲 + 着陸機）
interface SketchElement {
    id: string;
    d: string;
    type: 'cloud' | 'rocket' | 'landing';
    isLast?: boolean;
    isLastLanding?: boolean;
}

const SKETCH_ELEMENTS: SketchElement[] = [
    // ... 既存の雲とロケットのパス ...
    { id: 'c1', d: "M 80 100 Q 90 80 110 80 Q 130 80 140 100 Q 160 100 160 120 Q 160 140 140 140 L 80 140 Q 60 140 60 120 Q 60 100 80 100", type: 'cloud' },
    { id: 'c2', d: "M 380 180 Q 390 160 410 160 Q 430 160 440 180 Q 460 180 460 200 Q 460 220 440 220 L 380 220 Q 360 220 360 200 Q 360 180 380 180", type: 'cloud' },
    { id: 'r1', d: "M 250 50 C 200 150 200 250 200 300 L 300 300 C 300 250 300 150 250 50", type: 'rocket' },
    { id: 'r2', d: "M 225 150 A 25 25 0 1 0 275 150 A 25 25 0 1 0 225 150", type: 'rocket' },
    { id: 'r3', d: "M 200 230 L 150 300 L 200 300", type: 'rocket' },
    { id: 'r4', d: "M 300 230 L 350 300 L 300 300", type: 'rocket' },
    { id: 'r5', d: "M 220 300 L 280 300 L 270 320 L 230 320 Z", type: 'rocket', isLast: true },

    // 着陸用パラシュートとカプセル
    { id: 'p1', d: "M 150 100 C 150 50 250 50 250 100", type: 'landing' }, // パラシュート本体
    { id: 'p2', d: "M 150 100 L 180 180 M 250 100 L 220 180", type: 'landing' }, // ロープ
    { id: 'p3', d: "M 180 180 C 180 210 220 210 220 180 L 200 160 Z", type: 'landing', isLastLanding: true }, // カプセル
];

// ... (COUNTDOWN_PATHS and SMOKE_PATHS remain here but omitted for brevity in replacement if not changed, but I must match target) ...

// カウントダウン数字のパス (3, 2, 1)
const COUNTDOWN_PATHS: { [key: number]: string } = {
    3: "M 230 170 C 270 170 270 200 250 200 C 270 200 270 230 230 230",
    2: "M 230 185 C 230 160 270 160 270 190 C 270 215 230 230 230 230 L 270 230",
    1: "M 240 185 L 250 175 V 230",
};

const SMOKE_PATHS = [
    "M 220 330 Q 200 360 220 390",
    "M 250 330 Q 250 370 250 400",
    "M 280 330 Q 300 360 280 390",
];

const RocketAnimation = () => {
    // 状態に 'landing' を追加
    const [status, setStatus] = useState<'drawing' | 'ready' | 'counting' | 'launching' | 'landing' | 'finished'>('drawing');
    const [countdown, setCountdown] = useState(0);
    const [key, setKey] = useState(0);

    const reset = () => {
        setStatus('drawing');
        setCountdown(0);
        setKey(prev => prev + 1);
    };

    const startCountdown = () => {
        setStatus('counting');
        setCountdown(3);
    };

    // シーケンス制御
    useEffect(() => {
        if (status === 'counting' && countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else if (status === 'counting' && countdown === 0) {
            setStatus('launching');
            // 発射後、しばらくして着陸シーケンスへ
            setTimeout(() => setStatus('landing'), 3000);
        }
    }, [status, countdown]);

    const drawVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: i * 0.4, type: "spring" as const, duration: 1.5, bounce: 0 },
                opacity: { delay: i * 0.4, duration: 0.2 }
            }
        })
    };

    const rocketMovementVariants = {
        ready: { y: 0, x: 0 },
        launching: {
            y: [0, -2, 2, -2, 2, -800], // 画面外へ飛び去る
            x: [0, 1, -1, 1, -1, 0],
            transition: {
                y: { times: [0, 0.1, 0.2, 0.3, 0.4, 1], duration: 2.5, ease: "easeIn" as const },
                x: { duration: 0.5, repeat: 4, ease: "linear" as const }
            }
        }
    };

    // 着陸のアニメーション（ゆらゆら降りてくる）
    const landingVariants = {
        hidden: { y: -300, opacity: 0, rotate: 0 },
        landing: {
            y: [-300, 400], // 上から下へ
            opacity: 1,
            rotate: [-5, 5, -5, 5, 0], // ゆらゆら揺れる
            x: [-20, 20, -20, 20, 0], // 左右にも揺れる
            transition: {
                y: { duration: 6, ease: "easeInOut" as const },
                rotate: { duration: 6, ease: "easeInOut" as const, repeat: 0 },
                x: { duration: 6, ease: "easeInOut" as const, repeat: 0 },
                opacity: { duration: 0.5 }
            }
        }
    };

    return (
        <div className={styles.container}>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={styles.card}
                style={{
                    backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
                    backgroundSize: '24px 24px'
                }}
            >
                {/* ノートのバインダー部分 */}
                <div className={styles.binder}>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className={styles.binderHole} />
                    ))}
                </div>

                {/* 描画エリア */}
                <div className={styles.drawingArea}>
                    <div className={styles.statusIndicator}>
                        <span className={`${styles.statusDot} ${status === 'ready' ? styles.statusDotReady : (status === 'launching' || status === 'counting' || status === 'landing') ? (styles.statusDotActive + ' ' + styles.animatePing) : styles.statusDotIdle}`} />
                        System: {status}
                    </div>

                    <AnimatePresence mode="wait">
                        <svg
                            key={key}
                            viewBox="0 0 500 400"
                            className={styles.svgContainer}
                        >
                            {/* 雲の描画 */}
                            {SKETCH_ELEMENTS.filter(e => e.type === 'cloud').map((path, i) => (
                                <motion.path
                                    key={path.id}
                                    d={path.d}
                                    fill="transparent"
                                    stroke="#cbd5e1"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeDasharray="4 2"
                                    variants={drawVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={i}
                                />
                            ))}

                            {/* ロケットグループ (発射で飛び去る) */}
                            <motion.g
                                variants={rocketMovementVariants}
                                animate={(status === 'launching' || status === 'landing' || status === 'finished') ? 'launching' : 'ready'}
                            >
                                {SKETCH_ELEMENTS.filter(e => e.type === 'rocket').map((path, i) => (
                                    <motion.path
                                        key={path.id}
                                        d={path.d}
                                        fill="transparent"
                                        stroke="#2563eb"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        variants={drawVariants}
                                        initial="hidden"
                                        animate="visible"
                                        custom={i + 2}
                                        onAnimationComplete={() => {
                                            if (path.isLast) setStatus('ready');
                                        }}
                                    />
                                ))}

                                {/* 煙 */}
                                {status === 'launching' && (
                                    <g>
                                        {SMOKE_PATHS.map((d, i) => (
                                            <motion.path
                                                key={`smoke-${i}`}
                                                d={d}
                                                stroke="#94a3b8"
                                                strokeWidth="1.5"
                                                strokeDasharray="3 3"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: [0, 1, 0], y: [0, 40] }}
                                                transition={{ duration: 0.4, repeat: Infinity }}
                                            />
                                        ))}
                                    </g>
                                )}
                            </motion.g>

                            {/* 着陸機グループ (launching後に登場) */}
                            <AnimatePresence>
                                {(status === 'landing' || status === 'finished') && (
                                    <motion.g
                                        initial="hidden"
                                        animate="landing"
                                        variants={landingVariants}
                                        onAnimationComplete={() => setStatus('finished')}
                                    >
                                        {SKETCH_ELEMENTS.filter(e => e.type === 'landing').map((path, i) => (
                                            <motion.path
                                                key={path.id}
                                                d={path.d}
                                                fill={path.id === 'p3' ? "#fff" : "transparent"} // カプセルは白塗り
                                                stroke={path.id.startsWith('p') ? "#ef4444" : "#2563eb"} // パラシュートは赤、他は青
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                variants={drawVariants}
                                                initial="hidden"
                                                animate="visible"
                                                custom={i} // 順番に描画
                                            />
                                        ))}
                                    </motion.g>
                                )}
                            </AnimatePresence>

                            {/* カウントダウン数字の描画 */}
                            <AnimatePresence>
                                {status === 'counting' && countdown > 0 && (
                                    <motion.path
                                        key={`count-${countdown}`}
                                        d={COUNTDOWN_PATHS[countdown]}
                                        fill="transparent"
                                        stroke="#ef4444"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0, opacity: 0, scale: 1 }}
                                        animate={{ pathLength: 1, opacity: 1, scale: 1.2 }}
                                        exit={{ opacity: 0, scale: 2, transition: { duration: 0.3 } }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    />
                                )}
                            </AnimatePresence>
                        </svg>
                    </AnimatePresence>

                    {/* インタラクションレイヤー */}
                    <div className={styles.interactionLayer}>
                        {status === 'ready' && (
                            <motion.button
                                initial={{ scale: 0, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={startCountdown}
                                className={styles.launchButton}
                            >
                                <Flame size={28} className={styles.animatePulse} />
                                LAUNCH!
                            </motion.button>
                        )}

                        {status === 'finished' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className={styles.welcomeCard}
                            >
                                <div className={styles.welcomeTitle}>WELCOME BACK! 🪂</div>
                                <p className={styles.welcomeText}>無事に帰還しました</p>
                                <button
                                    onClick={reset}
                                    className={styles.retryButton}
                                >
                                    <RefreshCcw size={20} />
                                    もう一度遊ぶ
                                </button>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* リセットボタン */}
                <button
                    onClick={reset}
                    className={styles.resetIconBtn}
                >
                    <RefreshCcw size={20} />
                </button>
            </motion.div>
        </div>
    );
};

export default RocketAnimation;
