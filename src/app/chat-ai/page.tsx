import Link from "next/link";
import {
    ArrowRight,
    CheckCircle,
    ChatCircle,
    BookOpen,
    Lightbulb,
    Warning
} from "@phosphor-icons/react/dist/ssr";
import styles from "./page.module.css";

export default function ChatAIPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroMeta}>
                            <span className="level-badge level-badge-1">Lv1</span>
                            <ChatCircle size={24} weight="duotone" />
                        </div>
                        <h1 className={styles.heroTitle}>チャット型AI</h1>
                        <p className={styles.heroDescription}>
                            「検索の代替」から「思考の相棒」へ。
                            役割・制約・出力形式を分離して対話で収束させる技術を習得します。
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
                                <h2>なぜチャット型AIから始めるのか</h2>
                                <p>
                                    AIツールの中でも最も基本的で、かつ最も重要なのがチャット型AIです。
                                    ChatGPT、Claude、Geminiなど、対話型のAIを使いこなすことで、
                                    その後のすべてのAI活用の土台が築かれます。
                                </p>
                                <p>
                                    多くの人がAIを「検索の代わり」として使っていますが、
                                    それではAIの真の力を引き出すことはできません。
                                    AIは「思考の相棒」として、あなたのアイデアを整理し、
                                    新しい視点を提供し、成果物の質を高めるパートナーになれるのです。
                                </p>

                                <h2>プロンプトの基本構造</h2>
                                <p>
                                    効果的なプロンプトには3つの要素があります：
                                    <strong>役割（Role）</strong>、<strong>制約（Constraints）</strong>、
                                    <strong>出力形式（Output Format）</strong>です。
                                </p>

                                <h3>1. 役割（Role）</h3>
                                <p>
                                    AIにどのような立場で回答してほしいかを明確にします。
                                    「あなたは経験豊富なマーケティングコンサルタントです」のように、
                                    専門性と視点を定義します。
                                </p>

                                <div className={styles.exampleBlock}>
                                    <div className={styles.exampleHeader}>例：役割の設定</div>
                                    <div className={styles.exampleContent}>
                                        <pre>{`あなたは10年以上の経験を持つUXデザイナーです。
ユーザビリティとアクセシビリティの観点から
フィードバックを提供してください。`}</pre>
                                    </div>
                                </div>

                                <h3>2. 制約（Constraints）</h3>
                                <p>
                                    回答の範囲や条件を設定します。
                                    「500文字以内で」「専門用語を避けて」「日本の法規制を考慮して」など、
                                    具体的な制約を設けることで、より使える回答を得られます。
                                </p>

                                <h3>3. 出力形式（Output Format）</h3>
                                <p>
                                    回答の形式を指定します。
                                    「箇条書きで」「表形式で」「マークダウンで」など、
                                    後から使いやすい形式を最初から指定しましょう。
                                </p>

                                <div className={styles.highlightBox}>
                                    <h4><Lightbulb size={18} weight="fill" /> ポイント</h4>
                                    <p>
                                        最初から完璧なプロンプトを書く必要はありません。
                                        対話を通じて徐々に収束させていくのがコツです。
                                        「もう少し具体的に」「別の視点で」と追加で指示することで、
                                        より良い回答を引き出せます。
                                    </p>
                                </div>

                                <h2>対話で収束させる技術</h2>
                                <p>
                                    チャット型AIの真価は「対話」にあります。
                                    一度の質問で完璧な回答を得ようとせず、
                                    数回のやり取りで理想の回答に近づけていきましょう。
                                </p>
                                <ol>
                                    <li><strong>まず広く聞く：</strong>「〇〇について教えて」で概要を把握</li>
                                    <li><strong>深掘りする：</strong>気になった点を掘り下げる質問</li>
                                    <li><strong>具体化する：</strong>自分のケースに当てはめた質問</li>
                                    <li><strong>確認する：</strong>理解が正しいか確認する質問</li>
                                </ol>

                                <h2>AIの限界を理解する</h2>
                                <div className={styles.warningBox}>
                                    <h4><Warning size={18} weight="fill" /> 注意</h4>
                                    <p>
                                        AIは「もっともらしい嘘」をつくことがあります（ハルシネーション）。
                                        特に具体的な数字、固有名詞、最新情報については必ず事実確認を行いましょう。
                                        AIの回答を鵜呑みにせず、クリティカルに評価する習慣をつけることが重要です。
                                    </p>
                                </div>

                                <h2>実践演習</h2>
                                <p>
                                    以下のシナリオで実際にチャット型AIを使ってみましょう：
                                </p>
                                <ul>
                                    <li>来週のチームミーティングのアジェンダを作成する</li>
                                    <li>顧客向けメールの文面をブラッシュアップする</li>
                                    <li>複雑な概念を簡単に説明する比喩を考える</li>
                                    <li>業務改善のアイデアをブレインストーミングする</li>
                                </ul>
                            </article>
                        </div>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCard}>
                                <h4 className={styles.sidebarCardTitle}>学習ポイント</h4>
                                <ul className={styles.keyPointsList}>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>役割・制約・出力形式の3要素を理解する</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>対話で回答を収束させるテクニック</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>AIの限界とファクトチェックの重要性</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>実践を通じた習慣化</span>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4 className={styles.sidebarCardTitle}>次のモジュール</h4>
                                <div className={styles.navLinks}>
                                    <Link href="/notebook-lm" className={styles.navLink}>
                                        <BookOpen size={18} weight="duotone" />
                                        <span>Lv2: NotebookLM</span>
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
                            <h3>次のレベルへ進む</h3>
                            <p>チャット型AIをマスターしたら、NotebookLMで資料活用のスキルを身につけましょう。</p>
                        </div>
                        <Link href="/notebook-lm" className={styles.ctaButton}>
                            Lv2: NotebookLMへ
                            <ArrowRight size={18} weight="bold" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
