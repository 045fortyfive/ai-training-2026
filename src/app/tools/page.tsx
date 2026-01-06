import Link from "next/link";
import {
    ArrowRight,
    CheckCircle,
    Toolbox,
    Code,
    Cloud,
    Database,
    GitBranch,
    Sparkle,
    PaintBrush,
    Terminal
} from "@phosphor-icons/react/dist/ssr";
import styles from "./page.module.css";

const tools = [
    {
        name: "Claude / ChatGPT",
        category: "思考の相棒",
        description: "アイデア出し、文章作成、コードレビュー、複雑な問題の分析など、思考を拡張するパートナー",
        useCase: "構想段階、文章作成、問題解決",
        icon: Sparkle,
        color: "#8b5cf6"
    },
    {
        name: "Cursor",
        category: "コード編集",
        description: "AIを組み込んだコードエディタ。コードの生成、説明、リファクタリングをエディタ内で完結",
        useCase: "コーディング、デバッグ、リファクタリング",
        icon: Terminal,
        color: "#3b82f6"
    },
    {
        name: "v0",
        category: "UI生成",
        description: "テキストからUIコンポーネントを生成。デザインのプロトタイプを素早く作成",
        useCase: "UIデザイン、プロトタイプ、コンポーネント生成",
        icon: PaintBrush,
        color: "#22c55e"
    },
    {
        name: "Vercel",
        category: "デプロイ",
        description: "ウェブアプリケーションの自動デプロイ。GitHubと連携して継続的デプロイを実現",
        useCase: "本番公開、プレビュー環境、ドメイン管理",
        icon: Cloud,
        color: "#f59e0b"
    },
    {
        name: "Supabase",
        category: "バックエンド",
        description: "PostgreSQLベースのBaaS。認証、データベース、ストレージをオールインワンで提供",
        useCase: "データ保存、ユーザー認証、API構築",
        icon: Database,
        color: "#10b981"
    },
    {
        name: "GitHub",
        category: "バージョン管理",
        description: "コードのバージョン管理とコラボレーション。Copilotによるコード補完も利用可能",
        useCase: "コード管理、チーム協業、CI/CD",
        icon: GitBranch,
        color: "#6366f1"
    },
];

export default function ToolsPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroMeta}>
                            <Toolbox size={24} weight="duotone" />
                        </div>
                        <h1 className={styles.heroTitle}>ツール群の役割理解</h1>
                        <p className={styles.heroDescription}>
                            v0, Claude, Cursor, Vercel, Supabase, GitHub...
                            各ツールの「どこで使うか」を理解し、適切に使い分けます。
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
                                <h2>ツールエコシステムの全体像</h2>
                                <p>
                                    AIツールは日々進化し、新しいものが次々と登場します。
                                    すべてを使いこなす必要はありません。重要なのは、
                                    <strong>各ツールの役割を理解し、適切な場面で適切なツールを選択する</strong>
                                    ことです。
                                </p>
                                <p>
                                    以下のツール群は、「コードを書かない開発」を実現するための
                                    代表的な組み合わせです。それぞれの役割を見ていきましょう。
                                </p>

                                <h2>主要ツールマップ</h2>

                                {tools.map((tool) => (
                                    <div key={tool.name} className={styles.toolCard}>
                                        <div className={styles.toolHeader}>
                                            <div className={styles.toolIcon} style={{ background: tool.color }}>
                                                <tool.icon size={24} weight="fill" color="white" />
                                            </div>
                                            <div>
                                                <h3 className={styles.toolName}>{tool.name}</h3>
                                                <span className={styles.toolCategory}>{tool.category}</span>
                                            </div>
                                        </div>
                                        <p className={styles.toolDescription}>{tool.description}</p>
                                        <div className={styles.toolUseCase}>
                                            <strong>活用場面：</strong>{tool.useCase}
                                        </div>
                                    </div>
                                ))}

                                <h2>ツール選択の考え方</h2>
                                <p>
                                    「このツールを使えばすべて解決」という魔法のツールは存在しません。
                                    以下の観点でツールを選択しましょう：
                                </p>
                                <ul>
                                    <li><strong>作業フェーズ：</strong>構想→設計→実装→デプロイのどの段階か</li>
                                    <li><strong>成果物の種類：</strong>文章、コード、デザイン、データなど</li>
                                    <li><strong>チームとの共有：</strong>個人作業かチームコラボレーションか</li>
                                    <li><strong>継続性：</strong>一度きりの作業か継続的なメンテナンスが必要か</li>
                                </ul>

                                <h2>ツールの連携パターン</h2>
                                <p>
                                    ツールは単体で使うより、連携させることで真価を発揮します。
                                    典型的な連携パターンを紹介します：
                                </p>

                                <div className={styles.exampleBlock}>
                                    <div className={styles.exampleHeader}>例：Webアプリ開発フロー</div>
                                    <div className={styles.exampleContent}>
                                        <pre>{`1. Claude: 要件整理、設計方針の相談
2. v0: UIコンポーネントのプロトタイプ生成
3. Cursor: コードの実装、デバッグ
4. GitHub: コードのバージョン管理
5. Supabase: データベース、認証の設定
6. Vercel: 本番環境へのデプロイ`}</pre>
                                    </div>
                                </div>

                                <h2>新しいツールの学び方</h2>
                                <p>
                                    新しいツールが登場したとき、すぐに飛びつく必要はありません。
                                    以下の問いを自分に投げかけてみてください：
                                </p>
                                <ul>
                                    <li>現在のワークフローのどの部分を改善できるか？</li>
                                    <li>既存のツールでは本当にできないことか？</li>
                                    <li>学習コストに見合うリターンがあるか？</li>
                                    <li>チームで共有・標準化できるか？</li>
                                </ul>
                            </article>
                        </div>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCard}>
                                <h4 className={styles.sidebarCardTitle}>学習ポイント</h4>
                                <ul className={styles.keyPointsList}>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>各ツールの役割と得意分野</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>作業フェーズに応じた選択</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>ツール連携のパターン</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>新ツールの評価方法</span>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4 className={styles.sidebarCardTitle}>関連トピック</h4>
                                <div className={styles.navLinks}>
                                    <Link href="/roadmap" className={styles.navLink}>
                                        <Code size={18} weight="duotone" />
                                        <span>1年ロードマップ</span>
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
                            <h3>次のステップ</h3>
                            <p>ツールの全体像を把握したら、1年間の成長ロードマップを確認しましょう。</p>
                        </div>
                        <Link href="/roadmap" className={styles.ctaButton}>
                            ロードマップを見る
                            <ArrowRight size={18} weight="bold" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
