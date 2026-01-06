import Link from "next/link";
import {
    ArrowRight,
    CheckCircle,
    TrendUp,
    Code,
    Flag,
    RocketLaunch,
    Globe,
    Database
} from "@phosphor-icons/react/dist/ssr";
import styles from "./page.module.css";

const milestones = [
    {
        month: "1-3ヶ月",
        title: "静的サイト",
        description: "HTMLとCSSの基礎を理解し、v0とVercelを使って静的なウェブサイトを公開する",
        skills: ["HTML/CSSの基本構造", "v0でのUI生成", "Vercelへのデプロイ", "独自ドメインの設定"],
        icon: Globe,
        color: "var(--level-1)"
    },
    {
        month: "4-6ヶ月",
        title: "診断アプリ",
        description: "JavaScriptの基礎とインタラクションを学び、ユーザー入力に応じて結果を表示するアプリを作成",
        skills: ["JavaScriptの基礎", "フォーム処理", "条件分岐ロジック", "状態管理の概念"],
        icon: RocketLaunch,
        color: "var(--level-2)"
    },
    {
        month: "7-9ヶ月",
        title: "CMS連携",
        description: "外部データソースとの連携を学び、コンテンツ管理システムと接続したサイトを構築",
        skills: ["APIの基本概念", "データフェッチ", "動的ルーティング", "SEO最適化"],
        icon: Database,
        color: "var(--level-3)"
    },
    {
        month: "10-12ヶ月",
        title: "疑似SaaS",
        description: "認証、データベース、バックエンドを統合し、SaaSライクなアプリケーションを構築",
        skills: ["ユーザー認証", "データベース設計", "CRUD操作", "セキュリティ基礎"],
        icon: Flag,
        color: "var(--level-4)"
    },
];

export default function RoadmapPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroMeta}>
                            <TrendUp size={24} weight="duotone" />
                        </div>
                        <h1 className={styles.heroTitle}>1年ロードマップ</h1>
                        <p className={styles.heroDescription}>
                            静的サイト → 診断アプリ → CMS連携 → 疑似SaaS。
                            コードを書かない1年で、どこまで行けるかの実証済み成長パス。
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.contentGrid}>
                        <div className={styles.mainContent}>
                            <article className={styles.article}>
                                <h2>なぜ1年なのか</h2>
                                <p>
                                    1年という期間は、新しいスキルを習得し、実践的なプロジェクトを
                                    複数完成させるのに最適な長さです。短すぎると表面的な理解に
                                    留まり、長すぎるとモチベーションの維持が難しくなります。
                                </p>
                                <p>
                                    このロードマップは、「コードを書かない」ことを前提に、
                                    AIツールを最大限活用して実際に動くアプリケーションを
                                    作り上げることを目標としています。
                                </p>

                                <h2>四半期ごとのマイルストーン</h2>

                                <div className={styles.timeline}>
                                    {milestones.map((milestone, index) => (
                                        <div key={milestone.month} className={styles.timelineItem}>
                                            <div className={styles.timelineMarker} style={{ background: milestone.color }}>
                                                <milestone.icon size={20} weight="fill" color="white" />
                                            </div>
                                            <div className={styles.timelineContent}>
                                                <div className={styles.timelinePeriod}>{milestone.month}</div>
                                                <h3 className={styles.timelineTitle}>{milestone.title}</h3>
                                                <p className={styles.timelineDescription}>{milestone.description}</p>
                                                <div className={styles.timelineSkills}>
                                                    {milestone.skills.map((skill) => (
                                                        <span key={skill} className={styles.skillTag}>{skill}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            {index < milestones.length - 1 && (
                                                <div className={styles.timelineConnector} />
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <h2>成功のための3つの原則</h2>

                                <h3>1. 完璧を求めない</h3>
                                <p>
                                    最初から完璧なアプリを作ろうとしないこと。
                                    まずは「動くもの」を作り、そこから改善していく姿勢が重要です。
                                    80点のものを素早く作り、フィードバックを得ながら100点を目指しましょう。
                                </p>

                                <h3>2. 公開する習慣</h3>
                                <p>
                                    作ったものは必ず公開しましょう。
                                    ローカル環境だけで動かしていても、実際のユーザー体験は得られません。
                                    Vercelを使えば、数クリックで世界中からアクセス可能な状態になります。
                                </p>

                                <h3>3. コミュニティに参加する</h3>
                                <p>
                                    同じ志を持つ仲間との交流は、学習効率を大幅に高めます。
                                    社内の勉強会、Discordコミュニティ、Twitterなど、
                                    自分に合った場所で知見を共有し、刺激を受けましょう。
                                </p>

                                <div className={styles.highlightBox}>
                                    <h4>💡 継続のコツ</h4>
                                    <p>
                                        毎日30分でも構いません。継続することが最も重要です。
                                        週末に数時間まとめてやるより、毎日少しずつ触れる方が
                                        スキルの定着が早くなります。
                                    </p>
                                </div>

                                <h2>このロードマップの先へ</h2>
                                <p>
                                    1年後、あなたはコードを書かずに実用的なアプリケーションを
                                    作れるようになっています。しかし、それは終点ではなく始点です。
                                </p>
                                <ul>
                                    <li>より複雑なアプリケーションへの挑戦</li>
                                    <li>チームメンバーへのスキル共有</li>
                                    <li>組織全体のDX推進への貢献</li>
                                    <li>新しいAIツールの評価と導入</li>
                                </ul>
                                <p>
                                    このロードマップで身につけたスキルと思考法は、
                                    AIが進化し続ける限り、あなたの武器となり続けます。
                                </p>
                            </article>
                        </div>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCard}>
                                <h4 className={styles.sidebarCardTitle}>学習ポイント</h4>
                                <ul className={styles.keyPointsList}>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>四半期ごとのマイルストーン設定</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>段階的なスキルアップ</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>実践プロジェクトの完成</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>継続的な学習習慣の確立</span>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4 className={styles.sidebarCardTitle}>関連トピック</h4>
                                <div className={styles.navLinks}>
                                    <Link href="/ide-value" className={styles.navLink}>
                                        <Code size={18} weight="duotone" />
                                        <span>IDE型AIの価値</span>
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <div className={styles.ctaText}>
                            <h3>さらに深く理解する</h3>
                            <p>IDE型AIがなぜ重要なのか、その価値を理解しましょう。</p>
                        </div>
                        <Link href="/ide-value" className={styles.ctaButton}>
                            IDE型の価値を見る
                            <ArrowRight size={18} weight="bold" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
