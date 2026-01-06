import Link from "next/link";
import {
    ArrowRight,
    CheckCircle,
    Code,
    Trophy,
    UsersThree,
    PencilSimple,
    Compass,
    Scales
} from "@phosphor-icons/react/dist/ssr";
import styles from "./page.module.css";

export default function IDEValuePage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroMeta}>
                            <Code size={24} weight="duotone" />
                        </div>
                        <h1 className={styles.heroTitle}>IDE型AIの価値</h1>
                        <p className={styles.heroDescription}>
                            完全自動ではなく協調型へ。
                            人間が介入する余地を残すことの重要性を理解します。
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
                                <h2>チャット型からIDE型へ</h2>
                                <p>
                                    チャット型AIは「質問→回答」という対話形式でAIを活用します。
                                    これに対し、IDE型AIは<strong>作業環境そのものにAIが組み込まれ、
                                        人間とAIが協調しながら成果物を作り上げる</strong>形式です。
                                </p>
                                <p>
                                    代表的なIDE型AIとしては、Cursor、GitHub Copilot、
                                    WindsurfなどのAI搭載エディタがあります。
                                    これらは単なる質問応答ではなく、コンテキスト（文脈）を理解した上で
                                    リアルタイムに提案や修正を行います。
                                </p>

                                <h2>なぜ「完全自動」ではないのか</h2>
                                <p>
                                    AIの能力が向上するにつれ、「AIにすべて任せればいい」という
                                    考え方も生まれています。しかし、私たちは「協調型」のアプローチを
                                    推奨します。その理由は3つあります。
                                </p>

                                <h3><Compass size={20} /> 1. 判断は人間が行う</h3>
                                <p>
                                    AIは確率的に「もっともらしい」回答を生成しますが、
                                    それが本当に正しいか、ビジネス目標に合致しているかの判断は
                                    人間が行う必要があります。完全自動化は、この判断の機会を奪います。
                                </p>

                                <h3><PencilSimple size={20} /> 2. 編集という価値</h3>
                                <p>
                                    80点の成果物を100点に仕上げる「編集」という作業は、
                                    人間の創造性と経験が最も活きる領域です。
                                    AIが生成した素材に人間が手を加えることで、
                                    より質の高いアウトプットが生まれます。
                                </p>

                                <h3><Scales size={20} /> 3. 責任の所在</h3>
                                <p>
                                    最終的な成果物に対する責任は人間が負います。
                                    AIが生成したものをそのまま使うのではなく、
                                    人間が確認・承認するプロセスを残すことで、
                                    品質と責任を担保できます。
                                </p>

                                <div className={styles.highlightBox}>
                                    <h4>💡 協調型のメリット</h4>
                                    <p>
                                        人間とAIの協調は、どちらか一方だけでは達成できない
                                        成果を生み出します。AIの速度と処理能力と、
                                        人間の判断力と創造性を組み合わせることで、
                                        最高のパフォーマンスを発揮できます。
                                    </p>
                                </div>

                                <h2>人間の新しい役割</h2>
                                <p>
                                    AI時代において、人間の役割は「実装者」から
                                    <strong>「設計者・編集者・統合者」</strong>へと変化しています。
                                </p>

                                <h3><UsersThree size={20} /> 設計者として</h3>
                                <p>
                                    何を作るか、どのような構造にするか、どのツールを組み合わせるかを
                                    設計するのは人間の仕事です。AIは指示された通りに作業しますが、
                                    そもそもの方向性を決めるのは人間です。
                                </p>

                                <h3><PencilSimple size={20} /> 編集者として</h3>
                                <p>
                                    AIが生成した素材を評価し、必要に応じて修正・改善を行います。
                                    文章、コード、デザインなど、あらゆる成果物において
                                    編集という作業が重要になります。
                                </p>

                                <h3><Compass size={20} /> 統合者として</h3>
                                <p>
                                    複数のAIツール、複数の成果物を統合し、
                                    一貫性のあるアウトプットにまとめ上げます。
                                    全体を俯瞰し、整合性を取る作業は人間にしかできません。
                                </p>

                                <h2>IDE型AIを使いこなすために</h2>
                                <p>
                                    IDE型AIを効果的に活用するためのポイントを紹介します：
                                </p>
                                <ul>
                                    <li><strong>コンテキストを与える：</strong>AIに十分な背景情報を提供する</li>
                                    <li><strong>段階的に進める：</strong>一度にすべてを任せず、ステップバイステップで</li>
                                    <li><strong>レビューを欠かさない：</strong>AIの出力を必ず確認・評価する</li>
                                    <li><strong>フィードバックする：</strong>良い点・悪い点をAIに伝えて精度を上げる</li>
                                </ul>

                                <div className={styles.warningBox}>
                                    <h4>⚠️ 注意点</h4>
                                    <p>
                                        IDE型AIは強力なツールですが、使い方を誤ると
                                        思考停止につながる危険性があります。
                                        AIの提案を鵜呑みにせず、常に批判的に評価する姿勢を忘れないでください。
                                    </p>
                                </div>

                                <h2>未来への展望</h2>
                                <p>
                                    AI技術は日進月歩で進化しています。
                                    今日の「最先端」は明日には「標準」になり、
                                    新しい可能性が次々と生まれています。
                                </p>
                                <p>
                                    しかし、どれだけAIが進化しても、
                                    「何を作るか」「なぜ作るか」「誰のために作るか」を
                                    決めるのは人間です。技術に振り回されるのではなく、
                                    技術を使いこなす側であり続けましょう。
                                </p>
                            </article>
                        </div>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCard}>
                                <h4 className={styles.sidebarCardTitle}>学習ポイント</h4>
                                <ul className={styles.keyPointsList}>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>チャット型とIDE型の違い</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>協調型アプローチの価値</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>設計者・編集者・統合者の役割</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>IDE型AIの効果的な使い方</span>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4 className={styles.sidebarCardTitle}>関連トピック</h4>
                                <div className={styles.navLinks}>
                                    <Link href="/results" className={styles.navLink}>
                                        <Trophy size={18} weight="duotone" />
                                        <span>実績を見る</span>
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
                            <h3>研修の成果を確認</h3>
                            <p>これまでの研修で生まれた実績をご覧ください。</p>
                        </div>
                        <Link href="/results" className={styles.ctaButton}>
                            実績を見る
                            <ArrowRight size={18} weight="bold" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
