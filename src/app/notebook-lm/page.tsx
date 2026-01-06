import Link from "next/link";
import {
    ArrowRight,
    CheckCircle,
    BookOpen,
    Presentation,
    Lightbulb,
    Files,
    Table
} from "@phosphor-icons/react/dist/ssr";
import styles from "./page.module.css";

export default function NotebookLMPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroMeta}>
                            <span className="level-badge level-badge-2">Lv2</span>
                            <BookOpen size={24} weight="duotone" />
                        </div>
                        <h1 className={styles.heroTitle}>NotebookLM</h1>
                        <p className={styles.heroDescription}>
                            「読む・まとめる」をAIに外注。
                            複数資料を前提知識として論点抽出・比較表生成を行います。
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
                                <h2>NotebookLMとは</h2>
                                <p>
                                    NotebookLMはGoogleが提供するAIベースのノートブックツールです。
                                    複数のドキュメントをアップロードし、それらを「前提知識」として
                                    AIに質問や分析を行わせることができます。
                                </p>
                                <p>
                                    チャット型AIとの大きな違いは、<strong>あなたが提供した資料のみを
                                        情報源として回答する</strong>点です。これにより、ハルシネーション
                                    （AIが事実と異なる情報を生成すること）のリスクを大幅に減らせます。
                                </p>

                                <h2>NotebookLMの基本的な使い方</h2>
                                <h3>1. ソースの追加</h3>
                                <p>
                                    まず、分析したい資料をNotebookLMにアップロードします。
                                    対応形式は以下の通りです：
                                </p>
                                <ul>
                                    <li>PDF、テキストファイル</li>
                                    <li>Google ドキュメント、スライド</li>
                                    <li>ウェブサイトURL</li>
                                    <li>YouTube動画（文字起こし）</li>
                                </ul>

                                <h3>2. 質問と対話</h3>
                                <p>
                                    資料をアップロードしたら、チャット形式で質問できます。
                                    NotebookLMは回答の根拠となる箇所を引用付きで示してくれるため、
                                    情報の確認が容易です。
                                </p>

                                <div className={styles.highlightBox}>
                                    <h4><Lightbulb size={18} weight="fill" /> 活用のコツ</h4>
                                    <p>
                                        「この資料群から〇〇について要約して」だけでなく、
                                        「AとBの資料で異なる見解がある部分を挙げて」のように
                                        複数資料の横断分析を依頼すると、より価値ある発見が得られます。
                                    </p>
                                </div>

                                <h2>実践的な活用シーン</h2>

                                <h3><Files size={20} /> 論点抽出</h3>
                                <p>
                                    長い議事録や報告書から、重要な論点を抽出させます。
                                    「この会議録から意思決定が必要な項目を抽出して」と依頼すれば、
                                    膨大な文章を効率的に処理できます。
                                </p>

                                <div className={styles.exampleBlock}>
                                    <div className={styles.exampleHeader}>プロンプト例：論点抽出</div>
                                    <div className={styles.exampleContent}>
                                        <pre>{`この3つの会議録から、以下を抽出してください：
1. 決定事項
2. 未解決の課題
3. 次回までのアクションアイテム

それぞれ箇条書きで、関連する会議の日付も記載してください。`}</pre>
                                    </div>
                                </div>

                                <h3><Table size={20} /> 比較表生成</h3>
                                <p>
                                    競合分析や製品比較など、複数の対象を比較する表を自動生成させます。
                                    資料から情報を抽出し、見やすい表形式にまとめてくれます。
                                </p>

                                <div className={styles.exampleBlock}>
                                    <div className={styles.exampleHeader}>プロンプト例：比較表生成</div>
                                    <div className={styles.exampleContent}>
                                        <pre>{`アップロードした3社の製品資料を比較して、
以下の観点で表にまとめてください：

| 項目 | A社 | B社 | C社 |
|------|-----|-----|-----|
| 価格 |     |     |     |
| 機能 |     |     |     |
| サポート |   |     |     |
| 導入実績 |   |     |     |`}</pre>
                                    </div>
                                </div>

                                <h2>Audio Overviewの活用</h2>
                                <p>
                                    NotebookLMには「Audio Overview」という機能があり、
                                    資料の内容をポッドキャスト形式の音声で聞くことができます。
                                    移動中や作業中に資料の内容を確認したい場合に便利です。
                                </p>

                                <h2>Lv1との組み合わせ</h2>
                                <p>
                                    NotebookLMで整理した情報を、チャット型AIでさらに加工することで、
                                    より高品質な成果物を効率的に作成できます。
                                    例えば、NotebookLMで抽出した論点をChatGPTで文章化したり、
                                    比較表をベースにプレゼン資料の骨子を作成したりできます。
                                </p>
                            </article>
                        </div>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCard}>
                                <h4 className={styles.sidebarCardTitle}>学習ポイント</h4>
                                <ul className={styles.keyPointsList}>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>NotebookLMの基本操作をマスターする</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>複数資料の横断分析テクニック</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>論点抽出と比較表生成の実践</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>Lv1スキルとの組み合わせ</span>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4 className={styles.sidebarCardTitle}>次のモジュール</h4>
                                <div className={styles.navLinks}>
                                    <Link href="/slide-generation" className={styles.navLink}>
                                        <Presentation size={18} weight="duotone" />
                                        <span>Lv3: スライド自動生成</span>
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
                            <p>資料活用をマスターしたら、スライド自動生成で成果物づくりを効率化しましょう。</p>
                        </div>
                        <Link href="/slide-generation" className={styles.ctaButton}>
                            Lv3: スライド生成へ
                            <ArrowRight size={18} weight="bold" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
