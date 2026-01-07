"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChatCircle,
  PencilSimple,
  Sparkle,
  FileText,
  Lightbulb,
  Books,
  ChartBar,
  GameController,
  MagicWand,
  Robot,
  Target,
  CheckCircle,
  Microphone,
  VideoCamera,
  Graph,
  Cards,
  ListChecks,
  ChartLine,
  Presentation,
  Table,
  Folder,
  File,
  FileCode,
  Browser,
  Rocket,
  Code,
  CursorClick,
  TerminalWindow,
  MagnifyingGlass,
  User,
  Bell,
  Gear,
  TrendUp,
  CurrencyDollar,
  Users
} from "@phosphor-icons/react";
import styles from "./page.module.css";
import PDFSlideshow from "@/components/PDFSlideshow";
import RocketAnimation from "@/components/RocketAnimation";
import Accordion from "@/components/ui/Accordion";

// NotebookLM PDFテーマ
const notebookLMThemes = [
  {
    id: "shojo",
    name: "第1テーマ: 少女漫画風",
    pdfUrl: "/pdfs/theme1_shojo.pdf"
  },
];
// Lv1のチャット型AIができること
const level1Capabilities = [
  {
    category: "文章の作成・添削",
    icon: FileText,
    description: "「ゼロから書く」ことも「今あるものを直す」ことも得意です",
    items: [
      "メール・手紙作成: ビジネスメール、謝罪文、お礼状などの作成",
      "クリエイティブ制作: 小説、詩、キャッチコピー、ブログ記事の執筆",
      "要約・リライト: 長い文章を短くまとめたり、敬語を崩したり、逆に丁寧な表現に変えたり",
      "校正・添削: 誤字脱字のチェックや、論理構成の改善案の提示"
    ]
  },
  {
    category: "情報整理と学習",
    icon: Lightbulb,
    description: "膨大な知識ベースから、必要な情報を分かりやすく整理してお伝えします",
    items: [
      "複雑な解説: 「量子コンピュータを小学生にもわかるように教えて」といった難易度調整",
      "翻訳: 多数の言語間での翻訳",
      "アイデア出し: 新商品の名前、企画の切り口、プレゼントの候補などを提案",
      "プログラミング: コードの記述、デバッグ（修正）、アルゴリズムの解説"
    ]
  },
  {
    category: "分析とデータ処理",
    icon: ChartBar,
    description: "構造化されていないデータから、特定の情報を取り出したり整理したり",
    items: [
      "表作成: テキスト情報を比較表やリストに変換",
      "データ抽出: 会議録から決定事項やネクストアクションだけを抜き出す",
      "シミュレーション: 「もし〇〇という状況だったらどうなるか」という仮定に基づく予測"
    ]
  },
  {
    category: "日常のサポート・娯楽",
    icon: GameController,
    description: "ライフスタイルに合わせた提案や、話し相手としても活用できます",
    items: [
      "プランニング: 旅行の行程表作成、献立作り、トレーニングメニューの考案",
      "相談・ロールプレイ: 面接の練習相手、悩み相談、特定のキャラクターになりきって会話",
      "クイズ・ゲーム: 謎解きや雑学クイズの出題"
    ]
  }
];

const level1UseCases = [
  { category: "ビジネス", examples: "議事録の要約、プレゼン資料の構成案、マニュアル作成" },
  { category: "学習・教育", examples: "数学の問題解説、英会話の練習、歴史の背景調査" },
  { category: "IT・開発", examples: "PythonやJavaScriptのコード作成、SQLクエリの構築" },
  { category: "プライベート", examples: "悩み相談、レシピ提案、読書感想文のヒント" }
];

// Lv1.5のプロンプト改善テクニック
const promptTechniques = [
  {
    name: "ロール・セッティング",
    description: "「あなたは世界一のマーケターです」と定義。回答の専門性と視点の鋭さが向上します。"
  },
  {
    name: "Few-shot プロンプティング",
    description: "「入力：A → 出力：B」という例題を数件与える。AIがあなたの好みのスタイルを完璧に模倣します。"
  },
  {
    name: "Chain-of-Thought",
    description: "「ステップバイステップで考えて」と指示。複雑な論理問題や計算の誤答率が劇的に下がります。"
  },
  {
    name: "制約条件の明確化",
    description: "「100文字以内」「専門用語禁止」「箇条書きで5つ」など、出力の型を厳密に制限できます。"
  },
  {
    name: "ネガティブ・プロンプト",
    description: "「〜は言わないでください」「一般的な答えは避けて」など、不要な要素をあらかじめ排除します。"
  }
];

const gemsFeatures = [
  {
    title: "役割の固定（パーソナライズ）",
    description: "「自社の広報担当」「厳しいプログラミング講師」「ユーモアのある編集者」など、特定の性格や口調、知識レベルをあらかじめ設定できます。"
  },
  {
    title: "定型業務の自動化",
    description: "「議事録を渡せば、必ず指定のフォーマット（決定事項・次回タスク・要約）で整理するGem」など、特定のワークフローを固定できます。"
  },
  {
    title: "専門知識の学習",
    description: "PDFやドキュメントなどのファイルを「知識」としてアップロードしておくことで、社内規定や専門的な技術マニュアルに基づいた回答を正確に行わせることができます。"
  }
];

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

export default function Home() {
  const heroRef = useInView();
  const levelsRef = useInView();

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section
        ref={heroRef.ref}
        className={`${styles.hero} ${heroRef.isInView ? styles.visible : ''}`}
      >
        <div className={styles.heroContent}>
          <div className={styles.heroTag}>
            <Sparkle size={14} weight="fill" />
            2026年版 社内研修
          </div>
          <h1 className={styles.heroTitle}>
            AIでできることを
            <br />
            <span className={styles.heroTitleGradient}>拡張をしよう</span>
          </h1>
          <p className={styles.heroDescription}>
            生成AIを「使う」段階から、「組み合わせて業務を再設計する」段階へ。
            <br />
            レベル別にAIの可能性を体験しましょう。
          </p>
          <div className={styles.heroActions}>
            <Link href="#level-1" className={styles.heroPrimaryBtn}>
              研修を始める
              <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
        </div>

        {/* Level Preview Cards */}
        <div className={styles.levelPreview}>
          <Link href="#level-1" className={styles.levelCard}>
            <div className={`${styles.levelBadge} ${styles.level1Badge}`}>Lv 1</div>
            <div className={styles.levelIconWrapper}>
              <ChatCircle size={32} weight="duotone" className={styles.level1Icon} />
            </div>
            <h3 className={styles.levelCardTitle}>チャット型AI</h3>
            <p className={styles.levelCardDesc}>対話で解決する</p>
          </Link>

          <Link href="#level-1-5" className={styles.levelCard}>
            <div className={`${styles.levelBadge} ${styles.level15Badge}`}>Lv 1.5</div>
            <div className={styles.levelIconWrapper}>
              <PencilSimple size={32} weight="duotone" className={styles.level15Icon} />
            </div>
            <h3 className={styles.levelCardTitle}>プロンプト改善</h3>
            <p className={styles.levelCardDesc}>指示の質を高める</p>
          </Link>

          <Link href="#level-2" className={styles.levelCard}>
            <div className={`${styles.levelBadge} ${styles.level2Badge}`}>Lv 2</div>
            <div className={styles.levelIconWrapper}>
              <Books size={32} weight="duotone" className={styles.level2Icon} />
            </div>
            <h3 className={styles.levelCardTitle}>NotebookLM</h3>
            <p className={styles.levelCardDesc}>資料を読み込ませる</p>
          </Link>

          <Link href="#level-3" className={`${styles.levelCard} ${styles.level3CardHero}`}>
            <div className={`${styles.levelBadge} ${styles.level3Badge}`}>Lv 3</div>
            <div className={styles.levelIconWrapper}>
              <Code size={32} weight="duotone" className={styles.level3IconHero} />
            </div>
            <h3 className={styles.levelCardTitle}>IDE型AI</h3>
            <p className={styles.levelCardDesc}>仕組みごと作る</p>
          </Link>
        </div>
      </section>

      {/* Levels Section with Accordion */}
      <section
        ref={levelsRef.ref}
        className={`${styles.levelsSection} ${levelsRef.isInView ? styles.visible : ''}`}
      >
        <div className={styles.container}>
          <Accordion
            items={[
              {
                id: "level-1",
                title: "チャット型AI",
                badge: "Level 1",
                icon: <ChatCircle size={32} weight="duotone" className={styles.level1Icon} />,
                defaultOpen: true,
                content: (
                  <>
                    <div className={styles.levelHeader}>
                      <div className={`${styles.levelIcon} ${styles.level1Icon}`}>
                        <ChatCircle size={32} weight="duotone" />
                      </div>
                      <div>
                        <span className={`${styles.levelTag} ${styles.level1Tag}`}>Level 1</span>
                        <h2 className={styles.levelTitle}>チャット型AI</h2>
                        <p className={styles.levelSubtitle}>
                          チャット型AIは「思考の相棒」。まずはできることの広さを知りましょう。
                        </p>
                      </div>
                    </div>

                    {/* Capabilities Grid */}
                    <div className={styles.capabilitiesGrid}>
                      {level1Capabilities.map((cap, index) => (
                        <div
                          key={cap.category}
                          className={styles.capabilityCard}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className={styles.capabilityHeader}>
                            <div className={styles.capabilityIcon}>
                              <cap.icon size={24} weight="duotone" />
                            </div>
                            <h3 className={styles.capabilityTitle}>{cap.category}</h3>
                          </div>
                          <p className={styles.capabilityDescription}>{cap.description}</p>
                          <ul className={styles.capabilityList}>
                            {cap.items.map((item) => (
                              <li key={item}>
                                <CheckCircle size={16} weight="fill" className={styles.checkIcon} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Use Cases Table */}
                    <div className={styles.useCasesSection}>
                      <h3 className={styles.useCasesTitle}>
                        <Target size={20} weight="duotone" />
                        代表的な活用例
                      </h3>
                      <div className={styles.useCasesTable}>
                        {level1UseCases.map((useCase) => (
                          <div key={useCase.category} className={styles.useCaseRow}>
                            <div className={styles.useCaseCategory}>{useCase.category}</div>
                            <div className={styles.useCaseExamples}>{useCase.examples}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ),
              },
              {
                id: "level-1-5",
                title: "プロンプト改善",
                badge: "Level 1.5",
                icon: <PencilSimple size={32} weight="duotone" className={styles.level15Icon} />,
                content: (
                  <>
                    <div className={styles.levelHeader}>
                      <div className={`${styles.levelIcon} ${styles.level15Icon}`}>
                        <PencilSimple size={32} weight="duotone" />
                      </div>
                      <div>
                        <span className={`${styles.levelTag} ${styles.level15Tag}`}>Level 1.5</span>
                        <h2 className={styles.levelTitle}>プロンプト改善</h2>
                        <p className={styles.levelSubtitle}>
                          Gems・GPTsを上手に活用し、回答の精度を劇的に向上させる
                        </p>
                      </div>
                    </div>

                    {/* Gems Features */}
                    <div className={styles.gemsSection}>
                      <div className={styles.gemsSectionHeader}>
                        <MagicWand size={24} weight="duotone" className={styles.gemsIcon} />
                        <h3>Gems（カスタムAI）で実現する「自動化と一貫性」</h3>
                      </div>
                      <p className={styles.gemsDescription}>
                        毎回長い指示（プロンプト）を入力する手間を省き、特定の役割に特化したAIを複数持つことができます。
                      </p>
                      <div className={styles.gemsGrid}>
                        {gemsFeatures.map((feature, index) => (
                          <div
                            key={feature.title}
                            className={styles.gemCard}
                            style={{ animationDelay: `${index * 0.15}s` }}
                          >
                            <Robot size={24} weight="duotone" className={styles.gemCardIcon} />
                            <h4>{feature.title}</h4>
                            <p>{feature.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Prompt Techniques */}
                    <div className={styles.techniquesSection}>
                      <div className={styles.techniquesSectionHeader}>
                        <Sparkle size={24} weight="duotone" className={styles.techniquesIcon} />
                        <h3>プロンプトの精度向上テクニック</h3>
                      </div>
                      <p className={styles.techniquesDescription}>
                        プロンプトの書き方を工夫することで、AIの思考能力を最大限に引き出し、ミス（ハルシネーション）を減らすことができます。
                      </p>
                      <div className={styles.techniquesTable}>
                        <div className={styles.techniquesTableHeader}>
                          <div>テクニック</div>
                          <div>内容とメリット</div>
                        </div>
                        {promptTechniques.map((technique, index) => (
                          <div
                            key={technique.name}
                            className={styles.techniqueRow}
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className={styles.techniqueName}>{technique.name}</div>
                            <div className={styles.techniqueDescription}>{technique.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Accuracy Improvement Visual */}
                    <div className={styles.accuracyVisual}>
                      <div className={styles.accuracyBefore}>
                        <span className={styles.accuracyLabel}>プロンプト固定前</span>
                        <div className={styles.accuracyBar}>
                          <div className={styles.accuracyFill} style={{ width: '40%' }}></div>
                        </div>
                        <span className={styles.accuracyValue}>回答精度 40%</span>
                      </div>
                      <div className={styles.accuracyArrow}>→</div>
                      <div className={styles.accuracyAfter}>
                        <span className={styles.accuracyLabel}>プロンプト固定後</span>
                        <div className={styles.accuracyBar}>
                          <div className={`${styles.accuracyFill} ${styles.accuracyFillHigh}`} style={{ width: '90%' }}></div>
                        </div>
                        <span className={styles.accuracyValue}>回答精度 90%</span>
                      </div>
                    </div>
                  </>
                ),
              },
              {
                id: "level-2",
                title: "NotebookLM",
                badge: "Level 2",
                icon: <Books size={32} weight="duotone" className={styles.level2Icon} />,
                content: (
                  <>
                    <div className={styles.levelHeader}>
                      <div className={`${styles.levelIcon} ${styles.level2Icon}`}>
                        <Books size={32} weight="duotone" />
                      </div>
                      <div>
                        <span className={`${styles.levelTag} ${styles.level2Tag}`}>Level 2</span>
                        <h2 className={styles.levelTitle}>NotebookLM</h2>
                        <p className={styles.levelSubtitle}>
                          「読む・まとめる」をAIに外注。複数資料の横断分析で新たな発見を。
                        </p>
                      </div>
                    </div>

                    {/* Core Features */}
                    <div className={styles.notebookLMCore}>
                      <h3 className={styles.notebookLMCoreTitle}>
                        <Sparkle size={20} weight="duotone" />
                        NotebookLMの基本機能
                      </h3>
                      <div className={styles.coreFeaturesList}>
                        <div className={styles.coreFeature}>
                          <CheckCircle size={20} weight="fill" className={styles.coreFeatureIcon} />
                          <div>
                            <h4>複数の資料をアップロードして横断分析</h4>
                            <p>PDF、Google ドキュメント、ウェブサイト、YouTube動画など、様々な形式の資料を一度に読み込み、横断的に分析できます。</p>
                          </div>
                        </div>
                        <div className={styles.coreFeature}>
                          <CheckCircle size={20} weight="fill" className={styles.coreFeatureIcon} />
                          <div>
                            <h4>引用付きで根拠を示した回答を取得</h4>
                            <p>AIの回答には必ず元資料の引用が付き、どの情報源から得た知見かを明確に示します。ハルシネーションのリスクを大幅に軽減。</p>
                          </div>
                        </div>
                        <div className={styles.coreFeature}>
                          <CheckCircle size={20} weight="fill" className={styles.coreFeatureIcon} />
                          <div>
                            <h4>Audio Overviewでポッドキャスト形式の音声を生成</h4>
                            <p>資料の内容を2人の会話形式で解説する音声を自動生成。移動中や作業中に「聴く」形で学習できます。</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Capabilities Grid */}
                    <div className={styles.notebookLMCapabilities}>
                      <h3 className={styles.capabilitiesGridTitle}>NotebookLMで実現できること</h3>
                      <div className={styles.capabilitiesGrid2}>
                        <div className={styles.capabilityCard2}>
                          <div className={styles.capabilityCard2Icon}>
                            <Microphone size={28} weight="duotone" />
                          </div>
                          <h4>音声解説</h4>
                          <p>資料の内容を2人の対話形式で解説。複雑な内容も聴きやすく理解できます。</p>
                        </div>

                        <div className={styles.capabilityCard2}>
                          <div className={styles.capabilityCard2Icon}>
                            <VideoCamera size={28} weight="duotone" />
                          </div>
                          <h4>動画解説</h4>
                          <p>テキストベースの資料から、視覚的な説明を含む動画コンテンツの構成案を生成。</p>
                        </div>

                        <div className={styles.capabilityCard2}>
                          <div className={styles.capabilityCard2Icon}>
                            <Graph size={28} weight="duotone" />
                          </div>
                          <h4>マインドマップ</h4>
                          <p>複雑な概念や関係性を視覚化。資料の全体像を一目で把握できます。</p>
                        </div>

                        <div className={styles.capabilityCard2}>
                          <div className={styles.capabilityCard2Icon}>
                            <FileText size={28} weight="duotone" />
                          </div>
                          <h4>レポート</h4>
                          <p>複数資料を統合した包括的なレポートを自動生成。引用元も明記されます。</p>
                        </div>

                        <div className={styles.capabilityCard2}>
                          <div className={styles.capabilityCard2Icon}>
                            <Cards size={28} weight="duotone" />
                          </div>
                          <h4>フラッシュカード</h4>
                          <p>学習用のフラッシュカードを自動生成。重要な概念の暗記に最適です。</p>
                        </div>

                        <div className={styles.capabilityCard2}>
                          <div className={styles.capabilityCard2Icon}>
                            <ListChecks size={28} weight="duotone" />
                          </div>
                          <h4>テスト</h4>
                          <p>資料の内容を基にした理解度テストを作成。学習効果を確認できます。</p>
                        </div>

                        <div className={styles.capabilityCard2}>
                          <div className={styles.capabilityCard2Icon}>
                            <ChartLine size={28} weight="duotone" />
                          </div>
                          <h4>インフォグラフィック</h4>
                          <p>データや統計を視覚的に表現。複雑な情報を分かりやすく伝えます。</p>
                        </div>

                        <div className={styles.capabilityCard2}>
                          <div className={styles.capabilityCard2Icon}>
                            <Presentation size={28} weight="duotone" />
                          </div>
                          <h4>スライド資料</h4>
                          <p>プレゼンテーション用のスライド構成を提案。重要ポイントを整理します。</p>
                        </div>

                        <div className={styles.capabilityCard2}>
                          <div className={styles.capabilityCard2Icon}>
                            <Table size={28} weight="duotone" />
                          </div>
                          <h4>Data Table</h4>
                          <p>散在する情報を構造化された表形式に整理。比較分析が容易になります。</p>
                        </div>
                      </div>
                    </div>

                    {/* PDF Slideshow (Restored) */}
                    <div className={styles.pdfSection}>
                      <h3 className={styles.capabilitiesGridTitle}>テーマ別生成例（少女漫画風など）</h3>
                      <PDFSlideshow themes={notebookLMThemes} />
                    </div>
                  </>
                ),
              },
              {
                id: "level-3",
                title: "IDE型AI（Cursor/Antigravity）",
                badge: "Level 3",
                icon: <Code size={32} weight="duotone" className={styles.level3Icon} />,
                content: (
                  <>
                    <div className={styles.levelHeader}>
                      <div className={`${styles.levelIcon} ${styles.level3Icon}`}>
                        <Code size={32} weight="duotone" />
                      </div>
                      <div>
                        <span className={`${styles.levelTag} ${styles.level3Tag}`}>Level 3</span>
                        <h2 className={styles.levelTitle}>IDE型AI（Cursor/Antigravity）</h2>
                        <p className={styles.levelSubtitle}>
                          「ファイル単位」から「プロジェクト単位」へ。<br />
                          AIがあなたの開発チームとなり、アイデアを瞬時に形にします。
                        </p>
                      </div>
                    </div>

                    <div className={styles.ideSimulationContainer}>
                      {/* Main IDE Window */}
                      <div className={styles.ideWindow}>
                        {/* Window Header */}
                        <div className={styles.ideHeader}>
                          <div className={styles.ideControls}>
                            <div className={styles.ideControl} style={{ background: '#FF5F56' }}></div>
                            <div className={styles.ideControl} style={{ background: '#FFBD2E' }}></div>
                            <div className={styles.ideControl} style={{ background: '#27C93F' }}></div>
                          </div>
                          <div className={styles.ideTitle}>Project: My-AI-Site</div>
                          <div className={styles.ideActions}>
                            <div className={styles.idePlayBtn}>▶ Run</div>
                          </div>
                        </div>

                        {/* Window Body (3-Pane Layout) */}
                        <div className={styles.ideBody}>

                          {/* 1. Left Sidebar: File Explorer */}
                          <div className={styles.ideActivityBar}>
                            <div className={styles.activityIcon}></div>
                            <div className={styles.activityIcon}></div>
                            <div className={styles.activityIcon}></div>
                          </div>
                          <div className={styles.ideSidebar}>
                            <div className={styles.sidebarSection}>EXPLORER</div>
                            <div className={styles.sidebarTree}>
                              <div className={styles.treeItem}>
                                <span className={styles.treeArrow}>▼</span>
                                <Folder size={14} weight="fill" color="#60a5fa" />
                                <span>src</span>
                              </div>
                              <div className={styles.treeChildren}>
                                <div className={styles.treeItem}>
                                  <FileCode size={14} className={styles.fileIcon} />
                                  <span>layout.tsx</span>
                                </div>
                                <div className={`${styles.treeItem} ${styles.activeFile}`}>
                                  <FileCode size={14} className={styles.fileIcon} />
                                  <span>page.module.css</span>
                                </div>
                                <div className={styles.treeItem}>
                                  <FileCode size={14} className={styles.fileIcon} />
                                  <span>globals.css</span>
                                </div>
                              </div>
                              <div className={styles.treeItem}>
                                <span className={styles.treeArrow}>▶</span>
                                <Folder size={14} weight="fill" color="#94a3b8" />
                                <span>public</span>
                              </div>
                            </div>
                          </div>

                          {/* 2. Middle: Code Editor */}
                          <div className={styles.ideMain}>
                            <div className={styles.editorTabs}>
                              <div className={`${styles.editorTab} ${styles.activeTab}`}>
                                <FileCode size={12} className={styles.fileIcon} />
                                page.module.css
                                <span className={styles.closeTab}>×</span>
                              </div>
                            </div>
                            <div className={styles.editorContent}>
                              <div className={styles.lineNumbers}>
                                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span>
                              </div>
                              <pre className={styles.codeBlock}>
                                <code>
                                  <span className={styles.cSelect}>.heroSection</span> {'{'}<br />
                                  {'  '}background: <span className={styles.cVal}>linear-gradient</span>(to bottom, #0f172a, #1e293b);<br />
                                  {'  '}color: <span className={styles.cVal}>#f8fafc</span>;<br />
                                  {'  '}font-family: <span className={styles.cVal}>var(--font-sans)</span>;<br />
                                  {'}'}<br />
                                  <br />
                                  <span className={styles.cSelect}>.title</span> {'{'}<br />
                                  {'  '}font-size: <span className={styles.cVal}>3rem</span>;<br />
                                  {'  '}font-weight: <span className={styles.cVal}>bold</span>;<br />
                                  {'}'}
                                </code>
                              </pre>
                              {/* The "Theme Changed" Overlay/State will be handled via CSS class on parent */}
                            </div>
                          </div>

                          {/* 3. Right: AI Chat */}
                          <div className={styles.ideRightPanel}>
                            <div className={styles.chatHeader}>
                              <Sparkle size={14} weight="fill" color="#818cf8" />
                              <span>AI Assistant</span>
                            </div>
                            <div className={styles.chatMessages}>
                              <div className={styles.chatMsgBot}>
                                Hi! What can I help you with?
                              </div>
                              <div className={`${styles.chatMsgUser} ${styles.userTypingAnim}`}>
                                サイトのテーマカラーをダークモードに変更して
                              </div>
                              <div className={`${styles.chatMsgBot} ${styles.botResponseAnim}`}>
                                了解しました。デザインシステム全体を更新します。
                              </div>
                            </div>
                            <div className={styles.chatInputArea}>
                              <div className={styles.chatInputPlaceholder}>Ask AI...</div>
                            </div>
                          </div>

                        </div>

                        {/* Overlay for "The Change" */}
                        <div className={styles.themeOverlay}></div>
                      </div>

                      <p className={styles.simulationCaption}>
                        実際の操作画面：自然言語で、サイト全体を作り変えることができます。
                      </p>
                    </div>

                    {/* Animation Implementation Section */}
                    <div className={styles.animationSection}>
                      <h3 className={styles.animationTitle}>アニメーションの実装</h3>
                      <p className={styles.animationSubtitle}>
                        インタラクティブなアニメーションも、AIとの対話で生成できます。
                      </p>
                      <RocketAnimation />
                    </div>

                    {/* Final CTA: Interactive Block */}
                    <div className={styles.interactiveFinale}>
                      <div className={styles.finaleContent}>
                        <Sparkle size={32} weight="fill" className={styles.finaleIcon} />
                        <h3>このサイト自体も、AIとの対話で作られました</h3>
                        <p>クリックして、開発の旅を体験する</p>
                        <button className={styles.finaleBtn} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                          Back to Top
                          <ArrowRight size={18} weight="bold" style={{ transform: 'rotate(-90deg)' }} />
                        </button>
                      </div>
                    </div>

                  </>
                ),
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
