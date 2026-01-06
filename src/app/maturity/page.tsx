import Link from "next/link";
import {
    ArrowRight,
    ChatCircle,
    BookOpen,
    Presentation,
    GitBranch,
    Users,
    CheckCircle,
    Target
} from "@phosphor-icons/react/dist/ssr";
import styles from "./page.module.css";

const levels = [
    {
        level: 1,
        title: "チャットで質問する",
        subtitle: "プロンプトの型を理解",
        description: "AIへの質問の仕方を学び、検索の代替としてAIを活用する段階。役割・制約・出力形式を明確にした効果的なプロンプト作成を習得します。",
        skills: [
            "プロンプトの基本構造（役割・制約・出力形式）",
            "対話による情報の収束",
            "AIの限界と適切な使い分け",
            "ファクトチェックの習慣化"
        ],
        icon: ChatCircle,
        href: "/chat-ai",
        color: "var(--level-1)"
    },
    {
        level: 2,
        title: "資料・調査を任せる",
        subtitle: "NotebookLM・要約・比較",
        description: "複数の資料をAIに読み込ませ、要約・比較・論点抽出を自動化する段階。「読む・まとめる」作業をAIに外注します。",
        skills: [
            "NotebookLMの活用",
            "複数資料の横断分析",
            "比較表の自動生成",
            "論点抽出と整理"
        ],
        icon: BookOpen,
        href: "/notebook-lm",
        color: "var(--level-2)"
    },
    {
        level: 3,
        title: "成果物を自動生成",
        subtitle: "スライド・文書生成",
        description: "AIを使ってスライドや文書などの成果物を自動生成する段階。構成→ストーリー→見出しの流れでAIと協働し、編集に集中します。",
        skills: [
            "構成設計の自動化",
            "ストーリーライン生成",
            "スライド見出しの一括生成",
            "編集・校正への集中"
        ],
        icon: Presentation,
        href: "/slide-generation",
        color: "var(--level-3)"
    },
    {
        level: 4,
        title: "手順をAIに覚えさせる",
        subtitle: "ワークフロー化",
        description: "繰り返し行う業務の手順をAIに記憶させ、ワークフローとして自動化する段階。トリガー→入力→判断→出力→次アクションの流れを設計します。",
        skills: [
            "業務フローの分解",
            "トリガー設計",
            "判断ロジックの明文化",
            "チーム共有可能な型の作成"
        ],
        icon: GitBranch,
        href: "/workflow-ai",
        color: "var(--level-4)"
    },
    {
        level: 5,
        title: "チームで再利用",
        subtitle: "業務テンプレ化",
        description: "個人で作成したワークフローをチーム全体で共有・再利用する段階。組織としてのAI活用基盤を構築します。",
        skills: [
            "テンプレートの標準化",
            "ナレッジベースの構築",
            "チーム間の知見共有",
            "継続的な改善サイクル"
        ],
        icon: Users,
        href: "#",
        color: "var(--level-5)",
        locked: true
    },
];

export default function MaturityPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>AI活用成熟度モデル</h1>
                        <p className={styles.heroDescription}>
                            研修の全体像を把握し、Lv1からLv4（入口）への到達を目指しましょう。
                            各レベルで習得すべきスキルと、次のレベルへの道筋を明確にします。
                        </p>
                    </div>
                </div>
            </section>

            {/* Target Range */}
            <section className={styles.targetSection}>
                <div className={styles.container}>
                    <div className={styles.targetCard}>
                        <div className={styles.targetIcon}>
                            <Target size={24} weight="duotone" />
                        </div>
                        <div className={styles.targetContent}>
                            <h3 className={styles.targetTitle}>この研修の対象範囲</h3>
                            <p className={styles.targetDescription}>
                                Lv1〜Lv4の入口までをカバーします。Lv5は組織全体での取り組みが必要なため、
                                この研修では基盤となるスキルの習得に集中します。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Levels */}
            <section className={styles.levelsSection}>
                <div className={styles.container}>
                    {levels.map((item, index) => (
                        <div
                            key={item.level}
                            className={`${styles.levelCard} ${item.locked ? styles.levelCardLocked : ""}`}
                        >
                            <div className={styles.levelSidebar} style={{ background: item.color }}>
                                <span className={styles.levelNumber}>Lv{item.level}</span>
                            </div>
                            <div className={styles.levelContent}>
                                <div className={styles.levelHeader}>
                                    <div className={styles.levelIcon}>
                                        <item.icon size={28} weight="duotone" />
                                    </div>
                                    <div>
                                        <h2 className={styles.levelTitle}>{item.title}</h2>
                                        <p className={styles.levelSubtitle}>{item.subtitle}</p>
                                    </div>
                                </div>
                                <p className={styles.levelDescription}>{item.description}</p>
                                <div className={styles.levelSkills}>
                                    <h4 className={styles.skillsTitle}>習得スキル</h4>
                                    <ul className={styles.skillsList}>
                                        {item.skills.map((skill) => (
                                            <li key={skill} className={styles.skillItem}>
                                                <CheckCircle size={16} weight="fill" style={{ color: item.color }} />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {!item.locked && (
                                    <Link href={item.href} className={styles.levelLink}>
                                        このモジュールを学ぶ
                                        <ArrowRight size={16} weight="bold" />
                                    </Link>
                                )}
                                {item.locked && (
                                    <div className={styles.levelLocked}>
                                        <span>上級者向け（Coming Soon）</span>
                                    </div>
                                )}
                            </div>
                            {index < levels.length - 1 && (
                                <div className={styles.levelConnector} />
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>準備はできましたか？</h2>
                        <p className={styles.ctaDescription}>
                            まずはLv1のチャット型AIから始めましょう。
                            基礎をしっかり固めることで、上位レベルへの移行がスムーズになります。
                        </p>
                        <Link href="/chat-ai" className={styles.ctaButton}>
                            Lv1: チャット型AIを始める
                            <ArrowRight size={18} weight="bold" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
