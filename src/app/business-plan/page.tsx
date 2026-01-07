"use client";

import { useEffect, useRef, useState } from "react";
import {
    Sparkle,
    Target,
    ChartBar,
    Users,
    TrendUp,
    CurrencyDollar,
    Lightbulb,
    ShieldCheck,
    Rocket,
    FileText,
    CheckCircle,
    Flag,
    Strategy,
    Buildings,
    UserCircle
} from "@phosphor-icons/react";
import styles from "./page.module.css";

// Animation hook for scroll-based animations
function useInView(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isInView };
}

export default function BusinessPlanPage() {
    const heroRef = useInView();
    const summaryRef = useInView();
    const overviewRef = useInView();
    const marketRef = useInView();
    const competitorRef = useInView();
    const marketingRef = useInView();
    const organizationRef = useInView();
    const financialRef = useInView();
    const riskRef = useInView();
    const milestoneRef = useInView();

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section
                ref={heroRef.ref}
                className={`${styles.hero} ${heroRef.isInView ? styles.visible : ''}`}
            >
                <div className={styles.heroContent}>
                    <div className={styles.heroTag}>
                        <FileText size={14} weight="fill" />
                        2026年版テンプレート
                    </div>
                    <h1 className={styles.heroTitle}>
                        事業計画書
                        <br />
                        <span className={styles.heroTitleGradient}>テンプレート</span>
                    </h1>
                    <p className={styles.heroDescription}>
                        スタートアップや新規事業の立ち上げに必要な、包括的な事業計画書の雛形です。
                        <br />
                        各セクションのガイダンスに従って、あなたのビジョンを形にしましょう。
                    </p>
                </div>
            </section>

            {/* 1. Executive Summary */}
            <section
                id="executive-summary"
                ref={summaryRef.ref}
                className={`${styles.section} ${styles.summarySection} ${summaryRef.isInView ? styles.visible : ''}`}
            >
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={`${styles.sectionIcon} ${styles.summaryIcon}`}>
                            <Sparkle size={32} weight="duotone" />
                        </div>
                        <div>
                            <span className={`${styles.sectionTag} ${styles.summaryTag}`}>Section 1</span>
                            <h2 className={styles.sectionTitle}>エグゼクティブサマリー</h2>
                            <p className={styles.sectionSubtitle}>
                                事業の全体像を簡潔に伝える、最も重要なセクションです
                            </p>
                        </div>
                    </div>

                    <div className={styles.contentCard}>
                        <div className={styles.guidanceBox}>
                            <Lightbulb size={20} weight="duotone" className={styles.guidanceIcon} />
                            <div>
                                <h4>記入ガイダンス</h4>
                                <p>
                                    投資家や関係者が最初に読む部分です。事業の核心、解決する課題、独自性、
                                    市場機会を1〜2ページで簡潔にまとめましょう。
                                </p>
                            </div>
                        </div>

                        <div className={styles.templateContent}>
                            <h3>ミッション・ビジョン</h3>
                            <div className={styles.placeholder}>
                                <p><strong>ミッション:</strong> 私たちは〇〇を通じて、△△という課題を解決します。</p>
                                <p><strong>ビジョン:</strong> 3年後には、□□□という状態を実現し、業界のリーダーとなります。</p>
                            </div>

                            <h3>事業概要</h3>
                            <div className={styles.placeholder}>
                                <p>
                                    本事業は、【ターゲット顧客】に対して【提供価値】を提供するサービスです。
                                    【独自技術/アプローチ】により、従来の【既存ソリューション】と比較して【差別化ポイント】を実現します。
                                </p>
                            </div>

                            <h3>主要な成功要因</h3>
                            <ul className={styles.checkList}>
                                <li><CheckCircle size={18} weight="fill" /> 強力なチーム構成と専門知識</li>
                                <li><CheckCircle size={18} weight="fill" /> 明確な市場ニーズと成長性</li>
                                <li><CheckCircle size={18} weight="fill" /> 独自の技術的優位性</li>
                                <li><CheckCircle size={18} weight="fill" /> スケーラブルなビジネスモデル</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Business Overview */}
            <section
                id="business-overview"
                ref={overviewRef.ref}
                className={`${styles.section} ${styles.overviewSection} ${overviewRef.isInView ? styles.visible : ''}`}
            >
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={`${styles.sectionIcon} ${styles.overviewIcon}`}>
                            <Target size={32} weight="duotone" />
                        </div>
                        <div>
                            <span className={`${styles.sectionTag} ${styles.overviewTag}`}>Section 2</span>
                            <h2 className={styles.sectionTitle}>事業概要</h2>
                            <p className={styles.sectionSubtitle}>
                                提供する価値とビジネスモデルを詳しく説明します
                            </p>
                        </div>
                    </div>

                    <div className={styles.contentCard}>
                        <div className={styles.guidanceBox}>
                            <Lightbulb size={20} weight="duotone" className={styles.guidanceIcon} />
                            <div>
                                <h4>記入ガイダンス</h4>
                                <p>
                                    具体的な製品・サービス内容、顧客が得られる価値、収益モデルを明確に記述します。
                                    「誰に」「何を」「どのように」提供するかを詳細に説明しましょう。
                                </p>
                            </div>
                        </div>

                        <div className={styles.templateContent}>
                            <h3>事業内容</h3>
                            <div className={styles.placeholder}>
                                <p>
                                    【製品/サービス名】は、【具体的な機能・特徴】を持つ【カテゴリー】です。
                                    主な機能として、以下を提供します:
                                </p>
                                <ul>
                                    <li>機能1: 【詳細説明】</li>
                                    <li>機能2: 【詳細説明】</li>
                                    <li>機能3: 【詳細説明】</li>
                                </ul>
                            </div>

                            <h3>提供する価値</h3>
                            <div className={styles.placeholder}>
                                <p>顧客は本サービスを利用することで、以下の価値を得られます:</p>
                                <ul>
                                    <li><strong>時間削減:</strong> 【具体的な数値】の時間を節約</li>
                                    <li><strong>コスト削減:</strong> 【具体的な数値】のコスト削減を実現</li>
                                    <li><strong>品質向上:</strong> 【具体的な改善内容】</li>
                                </ul>
                            </div>

                            <h3>ビジネスモデル</h3>
                            <div className={styles.placeholder}>
                                <p>
                                    <strong>収益モデル:</strong> 【サブスクリプション/従量課金/ライセンス販売など】<br />
                                    <strong>価格設定:</strong> 【具体的な価格帯とプラン】<br />
                                    <strong>顧客獲得単価(CAC):</strong> 【予測値】<br />
                                    <strong>顧客生涯価値(LTV):</strong> 【予測値】
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Market Analysis */}
            <section
                id="market-analysis"
                ref={marketRef.ref}
                className={`${styles.section} ${styles.marketSection} ${marketRef.isInView ? styles.visible : ''}`}
            >
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={`${styles.sectionIcon} ${styles.marketIcon}`}>
                            <ChartBar size={32} weight="duotone" />
                        </div>
                        <div>
                            <span className={`${styles.sectionTag} ${styles.marketTag}`}>Section 3</span>
                            <h2 className={styles.sectionTitle}>市場分析</h2>
                            <p className={styles.sectionSubtitle}>
                                ターゲット市場の規模と成長性を示します
                            </p>
                        </div>
                    </div>

                    <div className={styles.contentCard}>
                        <div className={styles.guidanceBox}>
                            <Lightbulb size={20} weight="duotone" className={styles.guidanceIcon} />
                            <div>
                                <h4>記入ガイダンス</h4>
                                <p>
                                    TAM（Total Addressable Market）、SAM（Serviceable Available Market）、
                                    SOM（Serviceable Obtainable Market）を明確にし、市場の成長性とトレンドを示します。
                                </p>
                            </div>
                        </div>

                        <div className={styles.templateContent}>
                            <h3>ターゲット市場</h3>
                            <div className={styles.placeholder}>
                                <p>
                                    <strong>主要ターゲット:</strong> 【年齢層/業種/企業規模など具体的なセグメント】<br />
                                    <strong>ペルソナ:</strong> 【典型的な顧客像の詳細】<br />
                                    <strong>顧客の課題:</strong> 【解決すべき具体的な課題】
                                </p>
                            </div>

                            <h3>市場規模</h3>
                            <div className={styles.marketSizeGrid}>
                                <div className={styles.marketSizeCard}>
                                    <div className={styles.marketSizeLabel}>TAM</div>
                                    <div className={styles.marketSizeValue}>¥XXX億円</div>
                                    <p>総市場規模</p>
                                </div>
                                <div className={styles.marketSizeCard}>
                                    <div className={styles.marketSizeLabel}>SAM</div>
                                    <div className={styles.marketSizeValue}>¥XX億円</div>
                                    <p>獲得可能市場</p>
                                </div>
                                <div className={styles.marketSizeCard}>
                                    <div className={styles.marketSizeLabel}>SOM</div>
                                    <div className={styles.marketSizeValue}>¥X億円</div>
                                    <p>3年後の目標</p>
                                </div>
                            </div>

                            <h3>市場の成長性</h3>
                            <div className={styles.placeholder}>
                                <p>
                                    当該市場は、【調査機関名】の調査によると、今後5年間で年平均成長率（CAGR）【XX%】で成長すると予測されています。
                                    主な成長ドライバーは以下の通りです:
                                </p>
                                <ul>
                                    <li>【トレンド1】による需要増加</li>
                                    <li>【規制変更/技術革新】による市場拡大</li>
                                    <li>【社会的要因】による意識の高まり</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Competitive Analysis */}
            <section
                id="competitive-analysis"
                ref={competitorRef.ref}
                className={`${styles.section} ${styles.competitorSection} ${competitorRef.isInView ? styles.visible : ''}`}
            >
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={`${styles.sectionIcon} ${styles.competitorIcon}`}>
                            <Strategy size={32} weight="duotone" />
                        </div>
                        <div>
                            <span className={`${styles.sectionTag} ${styles.competitorTag}`}>Section 4</span>
                            <h2 className={styles.sectionTitle}>競合分析</h2>
                            <p className={styles.sectionSubtitle}>
                                競合との差別化ポイントを明確にします
                            </p>
                        </div>
                    </div>

                    <div className={styles.contentCard}>
                        <div className={styles.guidanceBox}>
                            <Lightbulb size={20} weight="duotone" className={styles.guidanceIcon} />
                            <div>
                                <h4>記入ガイダンス</h4>
                                <p>
                                    主要な競合3〜5社を挙げ、それぞれの強み・弱みを分析します。
                                    自社の競争優位性を明確に示しましょう。
                                </p>
                            </div>
                        </div>

                        <div className={styles.templateContent}>
                            <h3>主要競合</h3>
                            <div className={styles.competitorTable}>
                                <div className={styles.competitorRow}>
                                    <div className={styles.competitorName}>競合A社</div>
                                    <div className={styles.competitorStrength}>強み: 【市場シェア/ブランド力など】</div>
                                    <div className={styles.competitorWeakness}>弱み: 【価格/機能/顧客対応など】</div>
                                </div>
                                <div className={styles.competitorRow}>
                                    <div className={styles.competitorName}>競合B社</div>
                                    <div className={styles.competitorStrength}>強み: 【技術力/販売網など】</div>
                                    <div className={styles.competitorWeakness}>弱み: 【柔軟性/スピードなど】</div>
                                </div>
                                <div className={styles.competitorRow}>
                                    <div className={styles.competitorName}>競合C社</div>
                                    <div className={styles.competitorStrength}>強み: 【価格競争力など】</div>
                                    <div className={styles.competitorWeakness}>弱み: 【品質/サポートなど】</div>
                                </div>
                            </div>

                            <h3>競争優位性</h3>
                            <div className={styles.advantageGrid}>
                                <div className={styles.advantageCard}>
                                    <CheckCircle size={24} weight="fill" className={styles.advantageIcon} />
                                    <h4>技術的優位性</h4>
                                    <p>【独自技術/特許/アルゴリズムなど】により、競合の【X倍】の性能を実現</p>
                                </div>
                                <div className={styles.advantageCard}>
                                    <CheckCircle size={24} weight="fill" className={styles.advantageIcon} />
                                    <h4>コスト優位性</h4>
                                    <p>【効率化/自動化】により、競合比【XX%】のコスト削減を実現</p>
                                </div>
                                <div className={styles.advantageCard}>
                                    <CheckCircle size={24} weight="fill" className={styles.advantageIcon} />
                                    <h4>顧客体験</h4>
                                    <p>【UX/サポート体制】により、業界最高水準の顧客満足度を達成</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Marketing Strategy */}
            <section
                id="marketing-strategy"
                ref={marketingRef.ref}
                className={`${styles.section} ${styles.marketingSection} ${marketingRef.isInView ? styles.visible : ''}`}
            >
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={`${styles.sectionIcon} ${styles.marketingIcon}`}>
                            <TrendUp size={32} weight="duotone" />
                        </div>
                        <div>
                            <span className={`${styles.sectionTag} ${styles.marketingTag}`}>Section 5</span>
                            <h2 className={styles.sectionTitle}>マーケティング戦略</h2>
                            <p className={styles.sectionSubtitle}>
                                顧客獲得と成長のための具体的な施策を示します
                            </p>
                        </div>
                    </div>

                    <div className={styles.contentCard}>
                        <div className={styles.guidanceBox}>
                            <Lightbulb size={20} weight="duotone" className={styles.guidanceIcon} />
                            <div>
                                <h4>記入ガイダンス</h4>
                                <p>
                                    顧客獲得チャネル、プロモーション戦略、販売プロセスを具体的に記述します。
                                    各施策の予算とKPIも明記しましょう。
                                </p>
                            </div>
                        </div>

                        <div className={styles.templateContent}>
                            <h3>顧客獲得戦略</h3>
                            <div className={styles.strategyGrid}>
                                <div className={styles.strategyCard}>
                                    <h4>オンラインマーケティング</h4>
                                    <ul>
                                        <li>SEO/SEM: 【具体的な施策】</li>
                                        <li>SNS広告: 【プラットフォームと予算】</li>
                                        <li>コンテンツマーケティング: 【戦略】</li>
                                    </ul>
                                </div>
                                <div className={styles.strategyCard}>
                                    <h4>オフライン施策</h4>
                                    <ul>
                                        <li>展示会・イベント: 【参加予定】</li>
                                        <li>パートナーシップ: 【提携先】</li>
                                        <li>ダイレクトセールス: 【体制】</li>
                                    </ul>
                                </div>
                            </div>

                            <h3>販売チャネル</h3>
                            <div className={styles.placeholder}>
                                <ul>
                                    <li><strong>直販:</strong> 【Webサイト/営業チームなど】</li>
                                    <li><strong>代理店:</strong> 【パートナー企業との連携】</li>
                                    <li><strong>マーケットプレイス:</strong> 【出店予定のプラットフォーム】</li>
                                </ul>
                            </div>

                            <h3>KPI（重要業績評価指標）</h3>
                            <div className={styles.kpiGrid}>
                                <div className={styles.kpiCard}>
                                    <div className={styles.kpiLabel}>月間新規顧客数</div>
                                    <div className={styles.kpiValue}>XXX件</div>
                                </div>
                                <div className={styles.kpiCard}>
                                    <div className={styles.kpiLabel}>コンバージョン率</div>
                                    <div className={styles.kpiValue}>X.X%</div>
                                </div>
                                <div className={styles.kpiCard}>
                                    <div className={styles.kpiLabel}>顧客獲得単価</div>
                                    <div className={styles.kpiValue}>¥X,XXX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Organization */}
            <section
                id="organization"
                ref={organizationRef.ref}
                className={`${styles.section} ${styles.organizationSection} ${organizationRef.isInView ? styles.visible : ''}`}
            >
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={`${styles.sectionIcon} ${styles.organizationIcon}`}>
                            <Users size={32} weight="duotone" />
                        </div>
                        <div>
                            <span className={`${styles.sectionTag} ${styles.organizationTag}`}>Section 6</span>
                            <h2 className={styles.sectionTitle}>組織体制</h2>
                            <p className={styles.sectionSubtitle}>
                                チーム構成と主要メンバーの経歴を紹介します
                            </p>
                        </div>
                    </div>

                    <div className={styles.contentCard}>
                        <div className={styles.guidanceBox}>
                            <Lightbulb size={20} weight="duotone" className={styles.guidanceIcon} />
                            <div>
                                <h4>記入ガイダンス</h4>
                                <p>
                                    創業メンバーや主要な役員の経歴、専門性を記載します。
                                    チームの強みと、事業を成功に導く能力を示しましょう。
                                </p>
                            </div>
                        </div>

                        <div className={styles.templateContent}>
                            <h3>チーム構成</h3>
                            <div className={styles.teamGrid}>
                                <div className={styles.teamCard}>
                                    <UserCircle size={48} weight="duotone" className={styles.teamIcon} />
                                    <h4>代表取締役 CEO</h4>
                                    <p className={styles.teamName}>【氏名】</p>
                                    <p className={styles.teamBio}>
                                        【前職】にて【実績】を達成。【専門分野】における【XX年】の経験を持つ。
                                    </p>
                                </div>
                                <div className={styles.teamCard}>
                                    <UserCircle size={48} weight="duotone" className={styles.teamIcon} />
                                    <h4>取締役 CTO</h4>
                                    <p className={styles.teamName}>【氏名】</p>
                                    <p className={styles.teamBio}>
                                        【大学/企業】にて【技術分野】の研究開発に従事。【特許/論文】の実績あり。
                                    </p>
                                </div>
                                <div className={styles.teamCard}>
                                    <UserCircle size={48} weight="duotone" className={styles.teamIcon} />
                                    <h4>取締役 CFO</h4>
                                    <p className={styles.teamName}>【氏名】</p>
                                    <p className={styles.teamBio}>
                                        【金融機関/コンサルティング】にて【XX年】の財務・経営企画経験。
                                    </p>
                                </div>
                            </div>

                            <h3>アドバイザー</h3>
                            <div className={styles.placeholder}>
                                <ul>
                                    <li><strong>【氏名】:</strong> 【所属/専門分野】- 【支援内容】</li>
                                    <li><strong>【氏名】:</strong> 【所属/専門分野】- 【支援内容】</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Financial Plan */}
            <section
                id="financial-plan"
                ref={financialRef.ref}
                className={`${styles.section} ${styles.financialSection} ${financialRef.isInView ? styles.visible : ''}`}
            >
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={`${styles.sectionIcon} ${styles.financialIcon}`}>
                            <CurrencyDollar size={32} weight="duotone" />
                        </div>
                        <div>
                            <span className={`${styles.sectionTag} ${styles.financialTag}`}>Section 7</span>
                            <h2 className={styles.sectionTitle}>財務計画</h2>
                            <p className={styles.sectionSubtitle}>
                                収益予測と資金計画を示します
                            </p>
                        </div>
                    </div>

                    <div className={styles.contentCard}>
                        <div className={styles.guidanceBox}>
                            <Lightbulb size={20} weight="duotone" className={styles.guidanceIcon} />
                            <div>
                                <h4>記入ガイダンス</h4>
                                <p>
                                    3〜5年の売上・費用・利益の予測を記載します。
                                    資金調達計画と使途も明確にしましょう。
                                </p>
                            </div>
                        </div>

                        <div className={styles.templateContent}>
                            <h3>収益予測（3年間）</h3>
                            <div className={styles.financialTable}>
                                <div className={styles.financialHeader}>
                                    <div>項目</div>
                                    <div>1年目</div>
                                    <div>2年目</div>
                                    <div>3年目</div>
                                </div>
                                <div className={styles.financialRow}>
                                    <div>売上高</div>
                                    <div>¥XX百万</div>
                                    <div>¥XXX百万</div>
                                    <div>¥X,XXX百万</div>
                                </div>
                                <div className={styles.financialRow}>
                                    <div>売上原価</div>
                                    <div>¥XX百万</div>
                                    <div>¥XX百万</div>
                                    <div>¥XXX百万</div>
                                </div>
                                <div className={styles.financialRow}>
                                    <div>販管費</div>
                                    <div>¥XX百万</div>
                                    <div>¥XX百万</div>
                                    <div>¥XXX百万</div>
                                </div>
                                <div className={`${styles.financialRow} ${styles.financialTotal}`}>
                                    <div>営業利益</div>
                                    <div>¥-XX百万</div>
                                    <div>¥XX百万</div>
                                    <div>¥XXX百万</div>
                                </div>
                            </div>

                            <h3>資金調達計画</h3>
                            <div className={styles.placeholder}>
                                <p>
                                    <strong>調達予定額:</strong> ¥XXX百万円<br />
                                    <strong>調達方法:</strong> 【エクイティ/デット/補助金など】<br />
                                    <strong>バリュエーション:</strong> ¥X億円（想定）
                                </p>
                            </div>

                            <h3>資金使途</h3>
                            <div className={styles.fundingGrid}>
                                <div className={styles.fundingCard}>
                                    <div className={styles.fundingPercent}>40%</div>
                                    <h4>開発費</h4>
                                    <p>製品開発・エンジニア採用</p>
                                </div>
                                <div className={styles.fundingCard}>
                                    <div className={styles.fundingPercent}>30%</div>
                                    <h4>マーケティング</h4>
                                    <p>広告・プロモーション</p>
                                </div>
                                <div className={styles.fundingCard}>
                                    <div className={styles.fundingPercent}>20%</div>
                                    <h4>人件費</h4>
                                    <p>営業・管理部門の採用</p>
                                </div>
                                <div className={styles.fundingCard}>
                                    <div className={styles.fundingPercent}>10%</div>
                                    <h4>運転資金</h4>
                                    <p>オフィス・設備投資</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Risk Analysis */}
            <section
                id="risk-analysis"
                ref={riskRef.ref}
                className={`${styles.section} ${styles.riskSection} ${riskRef.isInView ? styles.visible : ''}`}
            >
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={`${styles.sectionIcon} ${styles.riskIcon}`}>
                            <ShieldCheck size={32} weight="duotone" />
                        </div>
                        <div>
                            <span className={`${styles.sectionTag} ${styles.riskTag}`}>Section 8</span>
                            <h2 className={styles.sectionTitle}>リスク分析</h2>
                            <p className={styles.sectionSubtitle}>
                                想定されるリスクと対策を示します
                            </p>
                        </div>
                    </div>

                    <div className={styles.contentCard}>
                        <div className={styles.guidanceBox}>
                            <Lightbulb size={20} weight="duotone" className={styles.guidanceIcon} />
                            <div>
                                <h4>記入ガイダンス</h4>
                                <p>
                                    事業を進める上で想定されるリスクを洗い出し、
                                    それぞれに対する具体的な対策を記載します。
                                </p>
                            </div>
                        </div>

                        <div className={styles.templateContent}>
                            <div className={styles.riskGrid}>
                                <div className={styles.riskCard}>
                                    <h4>市場リスク</h4>
                                    <p className={styles.riskDescription}>
                                        <strong>リスク:</strong> 市場の成長が予測を下回る可能性<br />
                                        <strong>対策:</strong> 複数の顧客セグメントへの展開、海外市場への進出準備
                                    </p>
                                </div>
                                <div className={styles.riskCard}>
                                    <h4>競合リスク</h4>
                                    <p className={styles.riskDescription}>
                                        <strong>リスク:</strong> 大手企業の参入や競合の技術革新<br />
                                        <strong>対策:</strong> 継続的なイノベーション、特許取得、顧客ロックイン施策
                                    </p>
                                </div>
                                <div className={styles.riskCard}>
                                    <h4>技術リスク</h4>
                                    <p className={styles.riskDescription}>
                                        <strong>リスク:</strong> 開発の遅延や技術的課題の発生<br />
                                        <strong>対策:</strong> 段階的な開発計画、外部専門家の活用、代替技術の検討
                                    </p>
                                </div>
                                <div className={styles.riskCard}>
                                    <h4>財務リスク</h4>
                                    <p className={styles.riskDescription}>
                                        <strong>リスク:</strong> 資金調達の難航やキャッシュフロー悪化<br />
                                        <strong>対策:</strong> 複数の資金調達ルートの確保、コスト管理の徹底
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Milestones */}
            <section
                id="milestones"
                ref={milestoneRef.ref}
                className={`${styles.section} ${styles.milestoneSection} ${milestoneRef.isInView ? styles.visible : ''}`}
            >
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={`${styles.sectionIcon} ${styles.milestoneIcon}`}>
                            <Flag size={32} weight="duotone" />
                        </div>
                        <div>
                            <span className={`${styles.sectionTag} ${styles.milestoneTag}`}>Section 9</span>
                            <h2 className={styles.sectionTitle}>マイルストーン</h2>
                            <p className={styles.sectionSubtitle}>
                                短期・中期・長期の目標を設定します
                            </p>
                        </div>
                    </div>

                    <div className={styles.contentCard}>
                        <div className={styles.guidanceBox}>
                            <Lightbulb size={20} weight="duotone" className={styles.guidanceIcon} />
                            <div>
                                <h4>記入ガイダンス</h4>
                                <p>
                                    具体的かつ測定可能な目標を、時系列で設定します。
                                    各マイルストーンには達成指標（KPI）を明記しましょう。
                                </p>
                            </div>
                        </div>

                        <div className={styles.templateContent}>
                            <div className={styles.timelineContainer}>
                                <div className={styles.timelineItem}>
                                    <div className={styles.timelineBadge}>3ヶ月</div>
                                    <div className={styles.timelineContent}>
                                        <h4>短期目標</h4>
                                        <ul>
                                            <li>MVP（最小実行可能製品）のリリース</li>
                                            <li>初期顧客【XX社】の獲得</li>
                                            <li>シードラウンドでの資金調達完了</li>
                                            <li>コアチーム【X名】の採用完了</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.timelineItem}>
                                    <div className={styles.timelineBadge}>1年</div>
                                    <div className={styles.timelineContent}>
                                        <h4>中期目標</h4>
                                        <ul>
                                            <li>正式版プロダクトのローンチ</li>
                                            <li>有料顧客【XXX社】突破</li>
                                            <li>月次売上【XX百万円】達成</li>
                                            <li>シリーズAラウンドでの資金調達</li>
                                            <li>従業員【XX名】体制の構築</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.timelineItem}>
                                    <div className={styles.timelineBadge}>3年</div>
                                    <div className={styles.timelineContent}>
                                        <h4>長期目標</h4>
                                        <ul>
                                            <li>業界シェア【XX%】の獲得</li>
                                            <li>年間売上【X億円】突破</li>
                                            <li>黒字化達成</li>
                                            <li>海外展開の開始</li>
                                            <li>IPOまたはM&Aの検討</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className={styles.finalSection}>
                <div className={styles.container}>
                    <div className={styles.finalContent}>
                        <Rocket size={48} weight="duotone" className={styles.finalIcon} />
                        <h3>あなたのビジョンを形にしましょう</h3>
                        <p>
                            このテンプレートを活用して、投資家や関係者に伝わる事業計画書を作成してください。
                            <br />
                            各セクションを丁寧に埋めることで、事業の全体像が明確になります。
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
