import Link from "next/link";
import {
    ArrowRight,
    CheckCircle,
    GitBranch,
    Toolbox,
    Lightbulb,
    Lightning,
    ArrowsClockwise,
    FlowArrow
} from "@phosphor-icons/react/dist/ssr";
import styles from "./page.module.css";

export default function WorkflowAIPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroMeta}>
                            <span className="level-badge level-badge-4">Lv4</span>
                            <GitBranch size={24} weight="duotone" />
                        </div>
                        <h1 className={styles.heroTitle}>ワークフロー型AI</h1>
                        <p className={styles.heroDescription}>
                            トリガー→入力→判断→出力→次アクション。
                            業務の流れをAIに委譲し、チームで再利用可能な型を作ります。
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
                                <h2>ワークフロー型AIとは</h2>
                                <p>
                                    Lv1〜Lv3では、人間が主導してAIに作業を依頼していました。
                                    Lv4のワークフロー型AIでは、<strong>業務の流れ自体をAIに委譲</strong>します。
                                    一定の条件が満たされたら自動で処理が走り、人間は結果の確認や
                                    例外対応に集中できるようになります。
                                </p>

                                <h2>ワークフローの5要素</h2>
                                <p>
                                    効果的なAIワークフローは、以下の5つの要素で構成されます：
                                </p>

                                <h3><Lightning size={20} /> 1. トリガー</h3>
                                <p>
                                    ワークフローを開始するきっかけです。
                                    「メールが届いたら」「フォームに回答があったら」
                                    「特定の時刻になったら」などが典型的です。
                                </p>

                                <h3><FlowArrow size={20} /> 2. 入力</h3>
                                <p>
                                    ワークフローに渡されるデータです。
                                    メールの本文、フォームの回答内容、データベースのレコードなどが該当します。
                                </p>

                                <h3><ArrowsClockwise size={20} /> 3. 判断（AI処理）</h3>
                                <p>
                                    AIが入力データを分析し、判断を行うステップです。
                                    「このメールは緊急か？」「どのカテゴリに分類すべきか？」
                                    「どのテンプレートで返信すべきか？」などを判断します。
                                </p>

                                <div className={styles.exampleBlock}>
                                    <div className={styles.exampleHeader}>例：問い合わせメールの自動分類</div>
                                    <div className={styles.exampleContent}>
                                        <pre>{`【トリガー】問い合わせフォームに送信あり
【入力】問い合わせ内容、顧客情報
【判断】AIが以下を判定
  - カテゴリ: 技術/営業/一般
  - 緊急度: 高/中/低
  - 担当部署: 開発/カスタマーサクセス/営業
【出力】Slackチャンネルに通知
【次アクション】担当者にアサイン`}</pre>
                                    </div>
                                </div>

                                <h3>4. 出力</h3>
                                <p>
                                    AIの判断結果に基づくアクションです。
                                    通知の送信、データの更新、ドキュメントの生成などが含まれます。
                                </p>

                                <h3>5. 次アクション</h3>
                                <p>
                                    人間が行うべきフォローアップや、
                                    次のワークフローへの連携を定義します。
                                </p>

                                <h2>ワークフロー自動化ツール</h2>
                                <p>
                                    以下のツールを使うことで、コードを書かずに
                                    AIを組み込んだワークフローを構築できます：
                                </p>
                                <ul>
                                    <li><strong>Zapier + ChatGPT：</strong>5000以上のアプリと連携可能</li>
                                    <li><strong>Make (旧Integromat)：</strong>複雑な条件分岐に対応</li>
                                    <li><strong>n8n：</strong>オープンソースで柔軟なカスタマイズ</li>
                                    <li><strong>Power Automate：</strong>Microsoft 365との深い連携</li>
                                </ul>

                                <div className={styles.highlightBox}>
                                    <h4><Lightbulb size={18} weight="fill" /> 始め方のコツ</h4>
                                    <p>
                                        最初から複雑なワークフローを作ろうとせず、
                                        「週次レポートの自動生成」「定型メールの下書き作成」など
                                        シンプルな繰り返し作業から始めましょう。
                                        小さな成功体験を積み重ねることが、組織全体への展開につながります。
                                    </p>
                                </div>

                                <h2>チームで再利用可能な型を作る</h2>
                                <p>
                                    個人で作成したワークフローを、チームで共有・再利用できる形に
                                    整えることがLv4の最終目標です。そのためには：
                                </p>
                                <ul>
                                    <li><strong>ドキュメント化：</strong>ワークフローの目的、使い方、注意点を記録</li>
                                    <li><strong>テンプレート化：</strong>他のメンバーが簡単にカスタマイズできる形に</li>
                                    <li><strong>フィードバック収集：</strong>実際に使ったメンバーからの改善点を収集</li>
                                    <li><strong>継続的改善：</strong>定期的に効果を測定し、ワークフローを改善</li>
                                </ul>

                                <h2>Lv5への架け橋</h2>
                                <p>
                                    Lv4で作成したワークフローが増えてくると、
                                    それらを組織全体で管理・最適化する必要が出てきます。
                                    これがLv5「チームで再利用」のステージです。
                                    Lv4での経験が、組織としてのAI活用基盤構築につながります。
                                </p>
                            </article>
                        </div>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCard}>
                                <h4 className={styles.sidebarCardTitle}>学習ポイント</h4>
                                <ul className={styles.keyPointsList}>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>ワークフローの5要素を理解する</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>ノーコードツールでの実装</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>チーム共有のためのドキュメント化</span>
                                    </li>
                                    <li className={styles.keyPoint}>
                                        <CheckCircle size={16} weight="fill" />
                                        <span>継続的な改善サイクル</span>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4 className={styles.sidebarCardTitle}>関連トピック</h4>
                                <div className={styles.navLinks}>
                                    <Link href="/tools" className={styles.navLink}>
                                        <Toolbox size={18} weight="duotone" />
                                        <span>ツール群の役割理解</span>
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
                            <h3>さらなる高みへ</h3>
                            <p>ワークフロー型AIをマスターしたら、ツール群の全体像を把握しましょう。</p>
                        </div>
                        <Link href="/tools" className={styles.ctaButton}>
                            ツール群を見る
                            <ArrowRight size={18} weight="bold" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
