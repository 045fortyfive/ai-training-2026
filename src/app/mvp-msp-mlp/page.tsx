'use client';

import React, { useState } from 'react';
import {
    Heart,
    CheckCircle,
    DollarSign,
    Users,
    TrendingUp,
    Zap,
    ShieldCheck,
    ArrowRight,
    Info,
    Layers,
    Star
} from 'lucide-react';
import styles from './page.module.css';

export default function MvpMspMlpPage() {
    const [activeTab, setActiveTab] = useState('comparison');

    const concepts = [
        {
            id: 'mvp',
            name: 'MVP',
            fullName: 'Minimum Viable Product',
            focus: 'Viable (成り立つか)',
            color: 'slate',
            icon: <CheckCircle className={styles.conceptIcon} />,
            description: '「実用最小限のプロダクト」。仮説検証を目的とし、学習量を最大化することに焦点を当てます。',
            metrics: '学習量・検証回数',
            risk: '誰にも使われない'
        },
        {
            id: 'msp',
            name: 'MSP',
            fullName: 'Minimum Sellable Product',
            focus: 'Sellable (売れるか)',
            color: 'emerald',
            icon: <DollarSign className={styles.conceptIcon} />,
            description: '「販売最小限のプロダクト」。初期売上を目的とし、顧客が対価を払う価値があるかに焦点を当てます。',
            metrics: '売上・契約数',
            risk: '売れない・収益化失敗'
        },
        {
            id: 'mlp',
            name: 'MLP',
            fullName: 'Minimum Lovable Product',
            focus: 'Lovable (愛されるか)',
            color: 'rose',
            icon: <Heart className={styles.conceptIcon} />,
            description: '「愛着最小限のプロダクト」。熱量・ファン化を目的とし、ユーザーが自ら薦めたくなる体験に焦点を当てます。',
            metrics: '継続率・推薦(NPS)',
            risk: 'スケールしない'
        }
    ];

    const comparisonData = [
        { label: '主目的', mvp: '仮説検証', msp: '初期売上', mlp: '熱量・愛着' },
        { label: '成功指標', mvp: '学習量', msp: '支払い発生', mlp: '継続・推薦' },
        { label: 'ユーザー', mvp: '早期テスター', msp: '顧客', mlp: '初期ファン' },
        { label: '投資先', mvp: '機能最小化', msp: '品質・価格', mlp: 'UX / 体験' },
        { label: '合言葉', mvp: '機能するか？', msp: '買うか？', mlp: '好きか？' },
    ];

    return (
        <div className={styles.pageContainer}>
            <div className={styles.maxWidth}>
                {/* Header */}
                <header className={styles.header}>
                    <h2 className={styles.mainTitle}>
                        MVP / MSP / MLP
                    </h2>
                    <p className={styles.subtitle}>
                        プロダクトの性質に合わせて、最初の北極星をどこに置くかを定義します。
                    </p>
                </header>

                {/* Concept Cards */}
                <div className={styles.conceptGrid}>
                    {concepts.map((c) => (
                        <div key={c.id} className={`${styles.conceptCard} ${styles[`concept${c.color.charAt(0).toUpperCase() + c.color.slice(1)}`]}`}>
                            <div className={styles.iconWrapper}>
                                {c.icon}
                            </div>
                            <h2 className={styles.conceptName}>{c.name}</h2>
                            <p className={styles.conceptFullName}>{c.fullName}</p>
                            <p className={styles.conceptFocus}>{c.focus}</p>
                            <p className={styles.conceptDescription}>{c.description}</p>
                            <div className={styles.conceptMeta}>
                                <div className={styles.metaRow}>
                                    <span className={styles.metaLabel}>指標:</span>
                                    <span className={styles.metaValue}>{c.metrics}</span>
                                </div>
                                <div className={styles.metaRow}>
                                    <span className={styles.metaLabel}>リスク:</span>
                                    <span className={`${styles.metaValue} ${styles.riskValue}`}>{c.risk}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tabs for detailed sections */}
                <div className={styles.tabsContainer}>
                    <div className={styles.tabButtons}>
                        <button
                            onClick={() => setActiveTab('comparison')}
                            className={`${styles.tabButton} ${activeTab === 'comparison' ? styles.tabButtonActive : ''}`}
                        >
                            <Layers className={styles.tabIcon} /> 比較マトリクス
                        </button>
                        <button
                            onClick={() => setActiveTab('context')}
                            className={`${styles.tabButton} ${activeTab === 'context' ? styles.tabButtonActive : ''}`}
                        >
                            <Zap className={styles.tabIcon} /> 戦略的使い分け
                        </button>
                    </div>

                    <div className={styles.tabContent}>
                        {activeTab === 'comparison' ? (
                            <div className={styles.tableWrapper}>
                                <table className={styles.comparisonTable}>
                                    <thead>
                                        <tr>
                                            <th className={styles.tableHeaderLabel}>観点</th>
                                            <th className={styles.tableHeaderMvp}>MVP</th>
                                            <th className={styles.tableHeaderMsp}>MSP</th>
                                            <th className={styles.tableHeaderMlp}>MLP</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comparisonData.map((row, idx) => (
                                            <tr key={idx} className={styles.tableRow}>
                                                <td className={styles.tableLabel}>{row.label}</td>
                                                <td className={styles.tableCellMvp}>{row.mvp}</td>
                                                <td className={styles.tableCellMsp}>{row.msp}</td>
                                                <td className={styles.tableCellMlp}>{row.mlp}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className={styles.strategyContent}>
                                {/* Strategy Flows */}
                                <div className={styles.strategyGrid}>
                                    <div className={styles.strategyCardB2B}>
                                        <h3 className={styles.strategyTitle}>
                                            <ShieldCheck className={styles.strategyIcon} /> B2B / 業務SaaS
                                        </h3>
                                        <div className={styles.flowContainer}>
                                            <div className={styles.flowBox}>MVP</div>
                                            <ArrowRight className={styles.flowArrow} />
                                            <div className={`${styles.flowBox} ${styles.flowBoxHighlight} ${styles.flowBoxMsp}`}>MSP</div>
                                        </div>
                                        <p className={styles.strategyDescription}>
                                            「業務上の課題が解決され、コストに見合うか」が最優先。まずは経済合理性を証明する。
                                        </p>
                                    </div>

                                    <div className={styles.strategyCardConsumer}>
                                        <h3 className={styles.strategyTitle}>
                                            <Star className={`${styles.strategyIcon} ${styles.starFilled}`} /> Consumer / AI / 個人開発
                                        </h3>
                                        <div className={styles.flowContainer}>
                                            <div className={styles.flowBox}>MVP</div>
                                            <ArrowRight className={styles.flowArrow} />
                                            <div className={`${styles.flowBox} ${styles.flowBoxHighlight} ${styles.flowBoxMlp}`}>MLP</div>
                                            <ArrowRight className={styles.flowArrow} />
                                            <div className={`${styles.flowBox} ${styles.flowBoxMsp}`}>MSP</div>
                                        </div>
                                        <p className={styles.strategyDescription}>
                                            機能差がすぐ埋まる市場では「また使いたい」という感情価値が差別化の源泉。
                                        </p>
                                    </div>
                                </div>

                                {/* Key Insights */}
                                <div className={styles.insightsSection}>
                                    <div className={styles.insightsContent}>
                                        <h3 className={styles.insightsTitle}>
                                            <Info className={styles.insightsIcon} /> Core Principles
                                        </h3>
                                        <div className={styles.insightsGrid}>
                                            <div className={styles.principlesColumn}>
                                                <div className={styles.principleItem}>
                                                    <div className={`${styles.principleNumber} ${styles.principleNumberBlue}`}>1</div>
                                                    <div>
                                                        <p className={styles.principleTitle}>MVP is about Learning</p>
                                                        <p className={styles.principleSubtitle}>仮説を学ぶための最小構成</p>
                                                    </div>
                                                </div>
                                                <div className={styles.principleItem}>
                                                    <div className={`${styles.principleNumber} ${styles.principleNumberRose}`}>2</div>
                                                    <div>
                                                        <p className={styles.principleTitle}>MLP is about Caring</p>
                                                        <p className={styles.principleSubtitle}>ユーザーに寄り添い、愛されるための最小構成</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.quoteBox}>
                                                <p className={styles.quoteText}>
                                                    "We didn't start with an MVP. We started with something people loved."
                                                </p>
                                                <p className={styles.quoteAuthor}>— Brian Chesky (Airbnb CEO)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.insightsGlow}></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Conclusion Footer */}
                <div className={styles.conclusionFooter}>
                    <p className={styles.conclusionLabel}>まとめの一言</p>
                    <div className={styles.conclusionText}>
                        <span className={styles.conclusionMvp}>MVP: 成り立つか？</span>
                        <span className={styles.conclusionSeparator}>/</span>
                        <span className={styles.conclusionMsp}>MSP: 売れるか？</span>
                        <span className={styles.conclusionSeparator}>/</span>
                        <span className={styles.conclusionMlp}>MLP: 愛されるか？</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
