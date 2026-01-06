import Link from "next/link";
import {
    ArrowRight,
    Trophy,
    Users,
    RocketLaunch,
    ChartLineUp,
    Star,
    Quotes
} from "@phosphor-icons/react/dist/ssr";
import styles from "./page.module.css";

const stats = [
    { value: "500+", label: "研修受講者", icon: Users },
    { value: "95%", label: "満足度", icon: Star },
    { value: "120+", label: "実践プロジェクト", icon: RocketLaunch },
    { value: "40%", label: "業務効率化", icon: ChartLineUp },
];

const testimonials = [
    {
        quote: "AIを『使える』から『使いこなせる』に変わった実感があります。特にNotebookLMでの資料分析は、以前の5倍以上のスピードで処理できるようになりました。",
        author: "営業企画部 田中さん",
        role: "入社5年目"
    },
    {
        quote: "コードが書けなくても、v0とVercelを使って社内ツールのプロトタイプを作れるようになりました。エンジニアに依頼する前に、自分でアイデアを形にできるのは大きな変化です。",
        author: "マーケティング部 佐藤さん",
        role: "入社3年目"
    },
    {
        quote: "ワークフロー型AIの研修後、チーム全体で週5時間以上の工数削減に成功。定型作業を自動化できたおかげで、戦略的な業務に集中できるようになりました。",
        author: "人事部 鈴木さん",
        role: "マネージャー"
    },
];

const caseStudies = [
    {
        title: "営業レポート自動生成システム",
        description: "Salesforceのデータを自動取得し、週次レポートをNotebookLMで分析、スライドを自動生成するワークフローを構築。月間20時間の工数削減を実現。",
        tags: ["Lv4", "ワークフロー", "営業部門"]
    },
    {
        title: "社内FAQ チャットボット",
        description: "社内規程やマニュアルをNotebookLMに読み込ませ、新入社員向けのFAQシステムを構築。問い合わせ対応の負荷を60%削減。",
        tags: ["Lv2", "NotebookLM", "人事部門"]
    },
    {
        title: "顧客提案資料テンプレート",
        description: "業界別・課題別の提案資料テンプレートをAIで生成し、営業チーム全体で共有。資料作成時間を平均50%短縮。",
        tags: ["Lv3", "スライド生成", "営業部門"]
    },
];

export default function ResultsPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroMeta}>
                            <Trophy size={24} weight="duotone" />
                        </div>
                        <h1 className={styles.heroTitle}>研修実績</h1>
                        <p className={styles.heroDescription}>
                            この研修を通じて、多くの社員がAI活用スキルを身につけ、
                            業務改善を実現しています。
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className={styles.statsSection}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        {stats.map((stat) => (
                            <div key={stat.label} className={styles.statCard}>
                                <div className={styles.statIcon}>
                                    <stat.icon size={28} weight="duotone" />
                                </div>
                                <div className={styles.statValue}>{stat.value}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <article className={styles.article}>
                        <h2>受講者の声</h2>
                        <div className={styles.testimonialGrid}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className={styles.testimonialCard}>
                                    <div className={styles.testimonialQuote}>
                                        <Quotes size={24} weight="fill" className={styles.quoteIcon} />
                                        <p>{testimonial.quote}</p>
                                    </div>
                                    <div className={styles.testimonialAuthor}>
                                        <div className={styles.authorAvatar}>
                                            {testimonial.author.charAt(testimonial.author.length - 3)}
                                        </div>
                                        <div>
                                            <div className={styles.authorName}>{testimonial.author}</div>
                                            <div className={styles.authorRole}>{testimonial.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2>導入事例</h2>
                        <p>
                            研修で学んだスキルを活かし、実際の業務で成果を上げた事例を紹介します。
                        </p>
                        <div className={styles.caseStudyGrid}>
                            {caseStudies.map((study, index) => (
                                <div key={index} className={styles.caseStudyCard}>
                                    <h3 className={styles.caseStudyTitle}>{study.title}</h3>
                                    <p className={styles.caseStudyDescription}>{study.description}</p>
                                    <div className={styles.caseStudyTags}>
                                        {study.tags.map((tag) => (
                                            <span key={tag} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2>研修の特徴</h2>
                        <ul>
                            <li><strong>実践重視：</strong>講義だけでなく、実際に手を動かすワークショップ形式</li>
                            <li><strong>段階的カリキュラム：</strong>Lv1からLv4まで、確実にスキルアップ</li>
                            <li><strong>フォローアップ：</strong>研修後も質問できるサポート体制</li>
                            <li><strong>コミュニティ：</strong>受講者同士の情報交換の場を提供</li>
                        </ul>

                        <div className={styles.highlightBox}>
                            <h4>📊 効果測定</h4>
                            <p>
                                研修効果は定量的に測定しています。
                                受講前後のスキルテスト、業務効率の変化、
                                プロジェクト成果などを総合的に評価し、
                                継続的なカリキュラム改善に活かしています。
                            </p>
                        </div>

                        <h2>今後の展望</h2>
                        <p>
                            AI技術は急速に進化しており、研修内容も常にアップデートしています。
                            2026年後半には、以下のようなコンテンツの追加を予定しています：
                        </p>
                        <ul>
                            <li>AIエージェントの活用（複数AIの協調）</li>
                            <li>ローカルLLMの活用（セキュリティ重視の環境向け）</li>
                            <li>マルチモーダルAIの活用（画像・音声・動画）</li>
                            <li>組織全体でのAIガバナンス</li>
                        </ul>
                    </article>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <div className={styles.ctaText}>
                            <h3>研修を始めましょう</h3>
                            <p>あなたもAI活用スキルを身につけ、業務改善を実現しませんか？</p>
                        </div>
                        <Link href="/maturity" className={styles.ctaButton}>
                            研修を始める
                            <ArrowRight size={18} weight="bold" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
