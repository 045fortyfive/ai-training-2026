import Link from "next/link";
import {
    ArrowRight,
    CheckCircle,
    Presentation,
    GitBranch,
    Lightbulb,
    ListNumbers,
    PencilSimple
} from "@phosphor-icons/react/dist/ssr";
import styles from "./page.module.css";

export default function SlideGenerationPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroMeta}>
                            <span className="level-badge level-badge-3">Lv3</span>
                            <Presentation size={24} weight="duotone" />
                        </div>
                        <h1 className={styles.heroTitle}>スライド自動生成</h1>
                        <p className={styles.heroDescription}>
                            スライドは思考の結果であって目的ではない。
                            構成→ストーリー→見出しをAIで生成し、編集に集中します。
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
                                <h2>スライド作成の新しいアプローチ</h2>
                                <p>
                                    従来のスライド作成は、真っ白なキャンバスに向かい、
                                    一枚一枚デザインしていく作業でした。しかし、この方法は
                                    非常に時間がかかり、本質的な「伝えたいこと」を考える時間が
                                    削られがちです。
                                </p>
                                <p>
                                    AIを活用したスライド作成では、<strong>構成→ストーリー→見出し</strong>
                                    という流れでコンテンツを先に固め、デザインは最後に
                                    調整するというアプローチを取ります。
                                </p>

                                <h2>3ステップのワークフロー</h2>

                                <h3><ListNumbers size={20} /> Step 1: 構成を決める</h3>
                                <p>
                                    まず、プレゼンテーション全体の構成をAIと一緒に考えます。
                                    目的、聴衆、時間制約を明確にし、大まかな流れを決定します。
                                </p>

                                <div className={styles.exampleBlock}>
                                    <div className={styles.exampleHeader}>プロンプト例：構成設計</div>
                                    <div className={styles.exampleContent}>
                                        <pre>{`以下の条件でプレゼンの構成を考えてください：

【目的】新規プロジェクトの承認を得る
【聴衆】経営層（5名）
【時間】15分
【伝えたいこと】
- 市場機会の大きさ
- 競合優位性
- 必要投資と期待リターン

論理的で説得力のある構成を提案してください。`}</pre>
                                    </div>
                                </div>

                                <h3><PencilSimple size={20} /> Step 2: ストーリーを作る</h3>
                                <p>
                                    構成が決まったら、各セクションで伝えるメッセージを
                                    ストーリーとして練り上げます。聴衆の感情の動きを意識し、
                                    納得感のある流れを作ります。
                                </p>

                                <div className={styles.highlightBox}>
                                    <h4><Lightbulb size={18} weight="fill" /> ストーリーのコツ</h4>
                                    <p>
                                        「なぜ今なのか」「なぜ私たちなのか」「何が変わるのか」
                                        の3点を明確にすると、説得力のあるストーリーになります。
                                        AIに「この構成にストーリー性を加えて」と依頼してみましょう。
                                    </p>
                                </div>

                                <h3><Presentation size={20} /> Step 3: 見出しを生成する</h3>
                                <p>
                                    最後に、各スライドの見出しを生成します。
                                    見出しだけで内容が伝わるような、メッセージ性のある
                                    表現を心がけます。
                                </p>

                                <div className={styles.exampleBlock}>
                                    <div className={styles.exampleHeader}>プロンプト例：見出し生成</div>
                                    <div className={styles.exampleContent}>
                                        <pre>{`以下の構成で、各スライドの見出しを考えてください。
見出しは15文字以内で、そのスライドの結論を述べる形式で。

1. 導入（課題提起）
2. 市場分析
3. ソリューション
4. 競合比較
5. 投資計画
6. まとめ（行動喚起）`}</pre>
                                    </div>
                                </div>

                                <h2>AIスライド生成ツール</h2>
                                <p>
                                    最近では、テキストからスライドを自動生成するツールも
                                    増えています。以下のようなツールを活用できます：
                                </p>
                                <ul>
                                    <li><strong>Gamma：</strong>テキストから美しいスライドを自動生成</li>
                                    <li><strong>SlidesAI：</strong>Google スライドと連携</li>
                                    <li><strong>Beautiful.ai：</strong>デザインを自動調整</li>
                                    <li><strong>Tome：</strong>ストーリーテリングに特化</li>
                                </ul>

                                <h2>編集に集中する</h2>
                                <p>
                                    AIが生成した素材をベースに、人間は「編集」に集中します。
                                    具体的には以下の作業です：
                                </p>
                                <ul>
                                    <li>メッセージの精度を上げる（言い回しの調整）</li>
                                    <li>データや具体例を追加する</li>
                                    <li>ビジュアルの調整（図解、グラフなど）</li>
                                    <li>全体の一貫性をチェックする</li>
                                </ul>
                                <p>
                                    ゼロから作るのではなく、AIが生成した80点の素材を
                                    100点に仕上げるというマインドセットが重要です。
                                </p>
                            </article>
                        </div>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCard}>
                                <h4 className={styles.sidebarCardTitle}>学習ポイント</h4>
                                <ul className={styles.keyPointsList}>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>構成→ストーリー→見出しの流れ</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>AIスライド生成ツールの活用</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>編集に集中するマインドセット</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>効果的な見出しの書き方</span>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4 className={styles.sidebarCardTitle}>次のモジュール</h4>
                                <div className={styles.navLinks}>
                                    <Link href="/workflow-ai" className={styles.navLink}>
                                        <GitBranch size={18} weight="duotone" />
                                        <span>Lv4: ワークフロー型AI</span>
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
                            <p>成果物生成をマスターしたら、ワークフロー型AIで業務自動化に挑戦しましょう。</p>
                        </div>
                        <Link href="/workflow-ai" className={styles.ctaButton}>
                            Lv4: ワークフロー型へ
                            <ArrowRight size={18} weight="bold" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
