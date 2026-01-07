"use client";

import { useState } from "react";
import {
    FileText,
    Download,
    FloppyDisk,
    Plus,
    Trash,
    CheckCircle,
    Sparkle,
    Target,
    ChartBar,
    Users,
    TrendUp,
    CurrencyDollar,
    Lightbulb,
    ShieldCheck,
    Flag,
    Strategy,
    UserCircle
} from "@phosphor-icons/react";
import styles from "./page.module.css";

interface FormData {
    executiveSummary: {
        mission: string;
        vision: string;
        businessOverview: string;
        keySuccessFactors: string[];
    };
    businessOverview: {
        businessContent: string;
        valueProposition: string;
        businessModel: string;
        pricing: string;
        cac: string;
        ltv: string;
    };
    marketAnalysis: {
        targetMarket: string;
        persona: string;
        customerPainPoints: string;
        tam: string;
        sam: string;
        som: string;
        marketGrowth: string;
        growthDrivers: string[];
    };
    competitiveAnalysis: {
        competitors: Array<{
            name: string;
            strength: string;
            weakness: string;
        }>;
        advantages: Array<{
            title: string;
            description: string;
        }>;
    };
    marketingStrategy: {
        onlineMarketing: string;
        offlineMarketing: string;
        salesChannels: string;
        monthlyNewCustomers: string;
        conversionRate: string;
        cac: string;
    };
    organization: {
        teamMembers: Array<{
            role: string;
            name: string;
            bio: string;
        }>;
        advisors: string;
    };
    financialPlan: {
        revenueYear1: string;
        revenueYear2: string;
        revenueYear3: string;
        cogsYear1: string;
        cogsYear2: string;
        cogsYear3: string;
        sgaYear1: string;
        sgaYear2: string;
        sgaYear3: string;
        fundingAmount: string;
        fundingMethod: string;
        valuation: string;
        developmentPercent: string;
        marketingPercent: string;
        personnelPercent: string;
        workingCapitalPercent: string;
    };
    riskAnalysis: {
        risks: Array<{
            title: string;
            risk: string;
            mitigation: string;
        }>;
    };
    milestones: {
        shortTerm: string;
        mediumTerm: string;
        longTerm: string;
    };
}

const initialFormData: FormData = {
    executiveSummary: {
        mission: "",
        vision: "",
        businessOverview: "",
        keySuccessFactors: [""]
    },
    businessOverview: {
        businessContent: "",
        valueProposition: "",
        businessModel: "",
        pricing: "",
        cac: "",
        ltv: ""
    },
    marketAnalysis: {
        targetMarket: "",
        persona: "",
        customerPainPoints: "",
        tam: "",
        sam: "",
        som: "",
        marketGrowth: "",
        growthDrivers: [""]
    },
    competitiveAnalysis: {
        competitors: [{ name: "", strength: "", weakness: "" }],
        advantages: [{ title: "", description: "" }]
    },
    marketingStrategy: {
        onlineMarketing: "",
        offlineMarketing: "",
        salesChannels: "",
        monthlyNewCustomers: "",
        conversionRate: "",
        cac: ""
    },
    organization: {
        teamMembers: [{ role: "", name: "", bio: "" }],
        advisors: ""
    },
    financialPlan: {
        revenueYear1: "",
        revenueYear2: "",
        revenueYear3: "",
        cogsYear1: "",
        cogsYear2: "",
        cogsYear3: "",
        sgaYear1: "",
        sgaYear2: "",
        sgaYear3: "",
        fundingAmount: "",
        fundingMethod: "",
        valuation: "",
        developmentPercent: "",
        marketingPercent: "",
        personnelPercent: "",
        workingCapitalPercent: ""
    },
    riskAnalysis: {
        risks: [{ title: "", risk: "", mitigation: "" }]
    },
    milestones: {
        shortTerm: "",
        mediumTerm: "",
        longTerm: ""
    }
};

export default function BusinessPlanTemplatePage() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [activeSection, setActiveSection] = useState<string>("executive-summary");

    const updateField = (section: keyof FormData, field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const addArrayItem = (section: keyof FormData, field: string, defaultItem: any) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: [...(prev[section] as any)[field], defaultItem]
            }
        }));
    };

    const removeArrayItem = (section: keyof FormData, field: string, index: number) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: (prev[section] as any)[field].filter((_: any, i: number) => i !== index)
            }
        }));
    };

    const updateArrayItem = (section: keyof FormData, field: string, index: number, updates: any) => {
        setFormData(prev => {
            const array = [...(prev[section] as any)[field]];
            array[index] = { ...array[index], ...updates };
            return {
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: array
                }
            };
        });
    };

    const handleSave = () => {
        const dataStr = JSON.stringify(formData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'business-plan-data.json';
        link.click();
        URL.revokeObjectURL(url);
    };

    const handleExportPDF = () => {
        // PDFエクスポート機能（実装は後で追加可能）
        alert('PDFエクスポート機能は今後実装予定です。現在はJSON形式で保存できます。');
    };

    const sections = [
        { id: "executive-summary", label: "エグゼクティブサマリー", icon: Sparkle },
        { id: "business-overview", label: "事業概要", icon: Target },
        { id: "market-analysis", label: "市場分析", icon: ChartBar },
        { id: "competitive-analysis", label: "競合分析", icon: Strategy },
        { id: "marketing-strategy", label: "マーケティング戦略", icon: TrendUp },
        { id: "organization", label: "組織体制", icon: Users },
        { id: "financial-plan", label: "財務計画", icon: CurrencyDollar },
        { id: "risk-analysis", label: "リスク分析", icon: ShieldCheck },
        { id: "milestones", label: "マイルストーン", icon: Flag }
    ];

    return (
        <div className={styles.page}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.headerLeft}>
                        <div className={styles.headerIcon}>
                            <FileText size={32} weight="duotone" />
                        </div>
                        <div>
                            <h1 className={styles.headerTitle}>事業計画書 雛形</h1>
                            <p className={styles.headerSubtitle}>各セクションを入力して、あなたの事業計画書を作成しましょう</p>
                        </div>
                    </div>
                    <div className={styles.headerActions}>
                        <button onClick={handleSave} className={styles.saveButton}>
                            <FloppyDisk size={20} weight="bold" />
                            保存
                        </button>
                        <button onClick={handleExportPDF} className={styles.exportButton}>
                            <Download size={20} weight="bold" />
                            PDF出力
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                {/* Sidebar Navigation */}
                <aside className={styles.sidebar}>
                    <nav className={styles.nav}>
                        {sections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => {
                                        setActiveSection(section.id);
                                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className={`${styles.navItem} ${activeSection === section.id ? styles.navItemActive : ''}`}
                                >
                                    <Icon size={20} weight="duotone" />
                                    <span>{section.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className={styles.main}>
                    {/* 1. Executive Summary */}
                    <section id="executive-summary" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIcon}>
                                <Sparkle size={32} weight="duotone" />
                            </div>
                            <div>
                                <span className={styles.sectionTag}>Section 1</span>
                                <h2 className={styles.sectionTitle}>エグゼクティブサマリー</h2>
                                <p className={styles.sectionSubtitle}>事業の全体像を簡潔に伝える、最も重要なセクションです</p>
                            </div>
                        </div>

                        <div className={styles.formCard}>
                            <div className={styles.guidanceBox}>
                                <Lightbulb size={20} weight="duotone" />
                                <p>投資家や関係者が最初に読む部分です。事業の核心、解決する課題、独自性、市場機会を1〜2ページで簡潔にまとめましょう。</p>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>ミッション</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={3}
                                    placeholder="私たちは〇〇を通じて、△△という課題を解決します。"
                                    value={formData.executiveSummary.mission}
                                    onChange={(e) => updateField('executiveSummary', 'mission', e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>ビジョン</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={3}
                                    placeholder="3年後には、□□□という状態を実現し、業界のリーダーとなります。"
                                    value={formData.executiveSummary.vision}
                                    onChange={(e) => updateField('executiveSummary', 'vision', e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>事業概要</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={5}
                                    placeholder="本事業は、【ターゲット顧客】に対して【提供価値】を提供するサービスです。【独自技術/アプローチ】により、従来の【既存ソリューション】と比較して【差別化ポイント】を実現します。"
                                    value={formData.executiveSummary.businessOverview}
                                    onChange={(e) => updateField('executiveSummary', 'businessOverview', e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>主要な成功要因</label>
                                {formData.executiveSummary.keySuccessFactors.map((factor, index) => (
                                    <div key={index} className={styles.arrayItem}>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            placeholder="例: 強力なチーム構成と専門知識"
                                            value={factor}
                                            onChange={(e) => {
                                                const newFactors = [...formData.executiveSummary.keySuccessFactors];
                                                newFactors[index] = e.target.value;
                                                updateField('executiveSummary', 'keySuccessFactors', newFactors);
                                            }}
                                        />
                                        {formData.executiveSummary.keySuccessFactors.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeArrayItem('executiveSummary', 'keySuccessFactors', index)}
                                                className={styles.removeButton}
                                            >
                                                <Trash size={18} />
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => addArrayItem('executiveSummary', 'keySuccessFactors', '')}
                                    className={styles.addButton}
                                >
                                    <Plus size={18} />
                                    項目を追加
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* 2. Business Overview */}
                    <section id="business-overview" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIcon}>
                                <Target size={32} weight="duotone" />
                            </div>
                            <div>
                                <span className={styles.sectionTag}>Section 2</span>
                                <h2 className={styles.sectionTitle}>事業概要</h2>
                                <p className={styles.sectionSubtitle}>提供する価値とビジネスモデルを詳しく説明します</p>
                            </div>
                        </div>

                        <div className={styles.formCard}>
                            <div className={styles.guidanceBox}>
                                <Lightbulb size={20} weight="duotone" />
                                <p>具体的な製品・サービス内容、顧客が得られる価値、収益モデルを明確に記述します。「誰に」「何を」「どのように」提供するかを詳細に説明しましょう。</p>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>事業内容</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={6}
                                    placeholder="【製品/サービス名】は、【具体的な機能・特徴】を持つ【カテゴリー】です。主な機能として、以下を提供します..."
                                    value={formData.businessOverview.businessContent}
                                    onChange={(e) => updateField('businessOverview', 'businessContent', e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>提供する価値</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={5}
                                    placeholder="顧客は本サービスを利用することで、以下の価値を得られます..."
                                    value={formData.businessOverview.valueProposition}
                                    onChange={(e) => updateField('businessOverview', 'valueProposition', e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>ビジネスモデル</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={3}
                                    placeholder="収益モデル: サブスクリプション/従量課金/ライセンス販売など"
                                    value={formData.businessOverview.businessModel}
                                    onChange={(e) => updateField('businessOverview', 'businessModel', e.target.value)}
                                />
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>価格設定</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        placeholder="例: 月額9,800円、年額98,000円"
                                        value={formData.businessOverview.pricing}
                                        onChange={(e) => updateField('businessOverview', 'pricing', e.target.value)}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>顧客獲得単価 (CAC)</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        placeholder="例: ¥5,000"
                                        value={formData.businessOverview.cac}
                                        onChange={(e) => updateField('businessOverview', 'cac', e.target.value)}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>顧客生涯価値 (LTV)</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        placeholder="例: ¥50,000"
                                        value={formData.businessOverview.ltv}
                                        onChange={(e) => updateField('businessOverview', 'ltv', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. Market Analysis */}
                    <section id="market-analysis" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIcon}>
                                <ChartBar size={32} weight="duotone" />
                            </div>
                            <div>
                                <span className={styles.sectionTag}>Section 3</span>
                                <h2 className={styles.sectionTitle}>市場分析</h2>
                                <p className={styles.sectionSubtitle}>ターゲット市場の規模と成長性を示します</p>
                            </div>
                        </div>

                        <div className={styles.formCard}>
                            <div className={styles.guidanceBox}>
                                <Lightbulb size={20} weight="duotone" />
                                <p>TAM（Total Addressable Market）、SAM（Serviceable Available Market）、SOM（Serviceable Obtainable Market）を明確にし、市場の成長性とトレンドを示します。</p>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>ターゲット市場</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={2}
                                    placeholder="年齢層/業種/企業規模など具体的なセグメント"
                                    value={formData.marketAnalysis.targetMarket}
                                    onChange={(e) => updateField('marketAnalysis', 'targetMarket', e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>ペルソナ</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={3}
                                    placeholder="典型的な顧客像の詳細"
                                    value={formData.marketAnalysis.persona}
                                    onChange={(e) => updateField('marketAnalysis', 'persona', e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>顧客の課題</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={3}
                                    placeholder="解決すべき具体的な課題"
                                    value={formData.marketAnalysis.customerPainPoints}
                                    onChange={(e) => updateField('marketAnalysis', 'customerPainPoints', e.target.value)}
                                />
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>TAM (総市場規模)</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        placeholder="例: ¥1,000億円"
                                        value={formData.marketAnalysis.tam}
                                        onChange={(e) => updateField('marketAnalysis', 'tam', e.target.value)}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>SAM (獲得可能市場)</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        placeholder="例: ¥100億円"
                                        value={formData.marketAnalysis.sam}
                                        onChange={(e) => updateField('marketAnalysis', 'sam', e.target.value)}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>SOM (3年後の目標)</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        placeholder="例: ¥10億円"
                                        value={formData.marketAnalysis.som}
                                        onChange={(e) => updateField('marketAnalysis', 'som', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>市場の成長性</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={3}
                                    placeholder="今後5年間で年平均成長率（CAGR）XX%で成長すると予測..."
                                    value={formData.marketAnalysis.marketGrowth}
                                    onChange={(e) => updateField('marketAnalysis', 'marketGrowth', e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>成長ドライバー</label>
                                {formData.marketAnalysis.growthDrivers.map((driver, index) => (
                                    <div key={index} className={styles.arrayItem}>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            placeholder="例: デジタル化による需要増加"
                                            value={driver}
                                            onChange={(e) => {
                                                const newDrivers = [...formData.marketAnalysis.growthDrivers];
                                                newDrivers[index] = e.target.value;
                                                updateField('marketAnalysis', 'growthDrivers', newDrivers);
                                            }}
                                        />
                                        {formData.marketAnalysis.growthDrivers.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeArrayItem('marketAnalysis', 'growthDrivers', index)}
                                                className={styles.removeButton}
                                            >
                                                <Trash size={18} />
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => addArrayItem('marketAnalysis', 'growthDrivers', '')}
                                    className={styles.addButton}
                                >
                                    <Plus size={18} />
                                    項目を追加
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* 4. Competitive Analysis */}
                    <section id="competitive-analysis" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIcon}>
                                <Strategy size={32} weight="duotone" />
                            </div>
                            <div>
                                <span className={styles.sectionTag}>Section 4</span>
                                <h2 className={styles.sectionTitle}>競合分析</h2>
                                <p className={styles.sectionSubtitle}>競合との差別化ポイントを明確にします</p>
                            </div>
                        </div>

                        <div className={styles.formCard}>
                            <div className={styles.guidanceBox}>
                                <Lightbulb size={20} weight="duotone" />
                                <p>主要な競合3〜5社を挙げ、それぞれの強み・弱みを分析します。自社の競争優位性を明確に示しましょう。</p>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>主要競合</label>
                                {formData.competitiveAnalysis.competitors.map((competitor, index) => (
                                    <div key={index} className={styles.competitorCard}>
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label className={styles.sublabel}>競合名</label>
                                                <input
                                                    type="text"
                                                    className={styles.input}
                                                    placeholder="例: 競合A社"
                                                    value={competitor.name}
                                                    onChange={(e) => updateArrayItem('competitiveAnalysis', 'competitors', index, { name: e.target.value })}
                                                />
                                            </div>
                                            {formData.competitiveAnalysis.competitors.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeArrayItem('competitiveAnalysis', 'competitors', index)}
                                                    className={styles.removeButton}
                                                >
                                                    <Trash size={18} />
                                                </button>
                                            )}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.sublabel}>強み</label>
                                            <input
                                                type="text"
                                                className={styles.input}
                                                placeholder="例: 市場シェア/ブランド力など"
                                                value={competitor.strength}
                                                onChange={(e) => updateArrayItem('competitiveAnalysis', 'competitors', index, { strength: e.target.value })}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.sublabel}>弱み</label>
                                            <input
                                                type="text"
                                                className={styles.input}
                                                placeholder="例: 価格/機能/顧客対応など"
                                                value={competitor.weakness}
                                                onChange={(e) => updateArrayItem('competitiveAnalysis', 'competitors', index, { weakness: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => addArrayItem('competitiveAnalysis', 'competitors', { name: '', strength: '', weakness: '' })}
                                    className={styles.addButton}
                                >
                                    <Plus size={18} />
                                    競合を追加
                                </button>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>競争優位性</label>
                                {formData.competitiveAnalysis.advantages.map((advantage, index) => (
                                    <div key={index} className={styles.advantageCard}>
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label className={styles.sublabel}>タイトル</label>
                                                <input
                                                    type="text"
                                                    className={styles.input}
                                                    placeholder="例: 技術的優位性"
                                                    value={advantage.title}
                                                    onChange={(e) => updateArrayItem('competitiveAnalysis', 'advantages', index, { title: e.target.value })}
                                                />
                                            </div>
                                            {formData.competitiveAnalysis.advantages.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeArrayItem('competitiveAnalysis', 'advantages', index)}
                                                    className={styles.removeButton}
                                                >
                                                    <Trash size={18} />
                                                </button>
                                            )}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.sublabel}>説明</label>
                                            <textarea
                                                className={styles.textarea}
                                                rows={2}
                                                placeholder="例: 独自技術により、競合の2倍の性能を実現"
                                                value={advantage.description}
                                                onChange={(e) => updateArrayItem('competitiveAnalysis', 'advantages', index, { description: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => addArrayItem('competitiveAnalysis', 'advantages', { title: '', description: '' })}
                                    className={styles.addButton}
                                >
                                    <Plus size={18} />
                                    優位性を追加
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* 5. Marketing Strategy */}
                    <section id="marketing-strategy" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIcon}>
                                <TrendUp size={32} weight="duotone" />
                            </div>
                            <div>
                                <span className={styles.sectionTag}>Section 5</span>
                                <h2 className={styles.sectionTitle}>マーケティング戦略</h2>
                                <p className={styles.sectionSubtitle}>顧客獲得と成長のための具体的な施策を示します</p>
                            </div>
                        </div>

                        <div className={styles.formCard}>
                            <div className={styles.guidanceBox}>
                                <Lightbulb size={20} weight="duotone" />
                                <p>顧客獲得チャネル、プロモーション戦略、販売プロセスを具体的に記述します。各施策の予算とKPIも明記しましょう。</p>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>オンラインマーケティング</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={4}
                                    placeholder="SEO/SEM、SNS広告、コンテンツマーケティングなどの具体的な施策"
                                    value={formData.marketingStrategy.onlineMarketing}
                                    onChange={(e) => updateField('marketingStrategy', 'onlineMarketing', e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>オフライン施策</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={4}
                                    placeholder="展示会・イベント、パートナーシップ、ダイレクトセールスなど"
                                    value={formData.marketingStrategy.offlineMarketing}
                                    onChange={(e) => updateField('marketingStrategy', 'offlineMarketing', e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>販売チャネル</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={3}
                                    placeholder="直販、代理店、マーケットプレイスなど"
                                    value={formData.marketingStrategy.salesChannels}
                                    onChange={(e) => updateField('marketingStrategy', 'salesChannels', e.target.value)}
                                />
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>月間新規顧客数</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        placeholder="例: 100件"
                                        value={formData.marketingStrategy.monthlyNewCustomers}
                                        onChange={(e) => updateField('marketingStrategy', 'monthlyNewCustomers', e.target.value)}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>コンバージョン率</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        placeholder="例: 2.5%"
                                        value={formData.marketingStrategy.conversionRate}
                                        onChange={(e) => updateField('marketingStrategy', 'conversionRate', e.target.value)}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>顧客獲得単価 (CAC)</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        placeholder="例: ¥5,000"
                                        value={formData.marketingStrategy.cac}
                                        onChange={(e) => updateField('marketingStrategy', 'cac', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 6. Organization */}
                    <section id="organization" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIcon}>
                                <Users size={32} weight="duotone" />
                            </div>
                            <div>
                                <span className={styles.sectionTag}>Section 6</span>
                                <h2 className={styles.sectionTitle}>組織体制</h2>
                                <p className={styles.sectionSubtitle}>チーム構成と主要メンバーの経歴を紹介します</p>
                            </div>
                        </div>

                        <div className={styles.formCard}>
                            <div className={styles.guidanceBox}>
                                <Lightbulb size={20} weight="duotone" />
                                <p>創業メンバーや主要な役員の経歴、専門性を記載します。チームの強みと、事業を成功に導く能力を示しましょう。</p>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>チームメンバー</label>
                                {formData.organization.teamMembers.map((member, index) => (
                                    <div key={index} className={styles.teamCard}>
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label className={styles.sublabel}>役職</label>
                                                <input
                                                    type="text"
                                                    className={styles.input}
                                                    placeholder="例: 代表取締役 CEO"
                                                    value={member.role}
                                                    onChange={(e) => updateArrayItem('organization', 'teamMembers', index, { role: e.target.value })}
                                                />
                                            </div>
                                            {formData.organization.teamMembers.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeArrayItem('organization', 'teamMembers', index)}
                                                    className={styles.removeButton}
                                                >
                                                    <Trash size={18} />
                                                </button>
                                            )}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.sublabel}>氏名</label>
                                            <input
                                                type="text"
                                                className={styles.input}
                                                placeholder="例: 山田 太郎"
                                                value={member.name}
                                                onChange={(e) => updateArrayItem('organization', 'teamMembers', index, { name: e.target.value })}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.sublabel}>経歴・専門性</label>
                                            <textarea
                                                className={styles.textarea}
                                                rows={3}
                                                placeholder="前職、実績、専門分野、経験年数など"
                                                value={member.bio}
                                                onChange={(e) => updateArrayItem('organization', 'teamMembers', index, { bio: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => addArrayItem('organization', 'teamMembers', { role: '', name: '', bio: '' })}
                                    className={styles.addButton}
                                >
                                    <Plus size={18} />
                                    メンバーを追加
                                </button>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>アドバイザー</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={4}
                                    placeholder="氏名、所属/専門分野、支援内容など"
                                    value={formData.organization.advisors}
                                    onChange={(e) => updateField('organization', 'advisors', e.target.value)}
                                />
                            </div>
                        </div>
                    </section>

                    {/* 7. Financial Plan */}
                    <section id="financial-plan" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIcon}>
                                <CurrencyDollar size={32} weight="duotone" />
                            </div>
                            <div>
                                <span className={styles.sectionTag}>Section 7</span>
                                <h2 className={styles.sectionTitle}>財務計画</h2>
                                <p className={styles.sectionSubtitle}>収益予測と資金計画を示します</p>
                            </div>
                        </div>

                        <div className={styles.formCard}>
                            <div className={styles.guidanceBox}>
                                <Lightbulb size={20} weight="duotone" />
                                <p>3〜5年の売上・費用・利益の予測を記載します。資金調達計画と使途も明確にしましょう。</p>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>収益予測（3年間）</label>
                                <div className={styles.financialTable}>
                                    <div className={styles.financialHeader}>
                                        <div>項目</div>
                                        <div>1年目</div>
                                        <div>2年目</div>
                                        <div>3年目</div>
                                    </div>
                                    <div className={styles.financialRow}>
                                        <div>売上高</div>
                                        <div>
                                            <input
                                                type="text"
                                                className={styles.tableInput}
                                                placeholder="¥XX百万"
                                                value={formData.financialPlan.revenueYear1}
                                                onChange={(e) => updateField('financialPlan', 'revenueYear1', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className={styles.tableInput}
                                                placeholder="¥XXX百万"
                                                value={formData.financialPlan.revenueYear2}
                                                onChange={(e) => updateField('financialPlan', 'revenueYear2', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className={styles.tableInput}
                                                placeholder="¥X,XXX百万"
                                                value={formData.financialPlan.revenueYear3}
                                                onChange={(e) => updateField('financialPlan', 'revenueYear3', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.financialRow}>
                                        <div>売上原価</div>
                                        <div>
                                            <input
                                                type="text"
                                                className={styles.tableInput}
                                                placeholder="¥XX百万"
                                                value={formData.financialPlan.cogsYear1}
                                                onChange={(e) => updateField('financialPlan', 'cogsYear1', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className={styles.tableInput}
                                                placeholder="¥XX百万"
                                                value={formData.financialPlan.cogsYear2}
                                                onChange={(e) => updateField('financialPlan', 'cogsYear2', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className={styles.tableInput}
                                                placeholder="¥XXX百万"
                                                value={formData.financialPlan.cogsYear3}
                                                onChange={(e) => updateField('financialPlan', 'cogsYear3', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.financialRow}>
                                        <div>販管費</div>
                                        <div>
                                            <input
                                                type="text"
                                                className={styles.tableInput}
                                                placeholder="¥XX百万"
                                                value={formData.financialPlan.sgaYear1}
                                                onChange={(e) => updateField('financialPlan', 'sgaYear1', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className={styles.tableInput}
                                                placeholder="¥XX百万"
                                                value={formData.financialPlan.sgaYear2}
                                                onChange={(e) => updateField('financialPlan', 'sgaYear2', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className={styles.tableInput}
                                                placeholder="¥XXX百万"
                                                value={formData.financialPlan.sgaYear3}
                                                onChange={(e) => updateField('financialPlan', 'sgaYear3', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>調達予定額</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        placeholder="例: ¥500百万円"
                                        value={formData.financialPlan.fundingAmount}
                                        onChange={(e) => updateField('financialPlan', 'fundingAmount', e.target.value)}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>調達方法</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        placeholder="例: エクイティ/デット/補助金"
                                        value={formData.financialPlan.fundingMethod}
                                        onChange={(e) => updateField('financialPlan', 'fundingMethod', e.target.value)}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>バリュエーション</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        placeholder="例: ¥5億円"
                                        value={formData.financialPlan.valuation}
                                        onChange={(e) => updateField('financialPlan', 'valuation', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>資金使途</label>
                                <div className={styles.fundingGrid}>
                                    <div className={styles.fundingCard}>
                                        <label className={styles.sublabel}>開発費 (%)</label>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            placeholder="40"
                                            value={formData.financialPlan.developmentPercent}
                                            onChange={(e) => updateField('financialPlan', 'developmentPercent', e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.fundingCard}>
                                        <label className={styles.sublabel}>マーケティング (%)</label>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            placeholder="30"
                                            value={formData.financialPlan.marketingPercent}
                                            onChange={(e) => updateField('financialPlan', 'marketingPercent', e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.fundingCard}>
                                        <label className={styles.sublabel}>人件費 (%)</label>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            placeholder="20"
                                            value={formData.financialPlan.personnelPercent}
                                            onChange={(e) => updateField('financialPlan', 'personnelPercent', e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.fundingCard}>
                                        <label className={styles.sublabel}>運転資金 (%)</label>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            placeholder="10"
                                            value={formData.financialPlan.workingCapitalPercent}
                                            onChange={(e) => updateField('financialPlan', 'workingCapitalPercent', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 8. Risk Analysis */}
                    <section id="risk-analysis" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIcon}>
                                <ShieldCheck size={32} weight="duotone" />
                            </div>
                            <div>
                                <span className={styles.sectionTag}>Section 8</span>
                                <h2 className={styles.sectionTitle}>リスク分析</h2>
                                <p className={styles.sectionSubtitle}>想定されるリスクと対策を示します</p>
                            </div>
                        </div>

                        <div className={styles.formCard}>
                            <div className={styles.guidanceBox}>
                                <Lightbulb size={20} weight="duotone" />
                                <p>事業を進める上で想定されるリスクを洗い出し、それぞれに対する具体的な対策を記載します。</p>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>リスクと対策</label>
                                {formData.riskAnalysis.risks.map((risk, index) => (
                                    <div key={index} className={styles.riskCard}>
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label className={styles.sublabel}>リスクカテゴリー</label>
                                                <input
                                                    type="text"
                                                    className={styles.input}
                                                    placeholder="例: 市場リスク"
                                                    value={risk.title}
                                                    onChange={(e) => updateArrayItem('riskAnalysis', 'risks', index, { title: e.target.value })}
                                                />
                                            </div>
                                            {formData.riskAnalysis.risks.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeArrayItem('riskAnalysis', 'risks', index)}
                                                    className={styles.removeButton}
                                                >
                                                    <Trash size={18} />
                                                </button>
                                            )}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.sublabel}>リスク内容</label>
                                            <textarea
                                                className={styles.textarea}
                                                rows={2}
                                                placeholder="例: 市場の成長が予測を下回る可能性"
                                                value={risk.risk}
                                                onChange={(e) => updateArrayItem('riskAnalysis', 'risks', index, { risk: e.target.value })}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.sublabel}>対策</label>
                                            <textarea
                                                className={styles.textarea}
                                                rows={2}
                                                placeholder="例: 複数の顧客セグメントへの展開、海外市場への進出準備"
                                                value={risk.mitigation}
                                                onChange={(e) => updateArrayItem('riskAnalysis', 'risks', index, { mitigation: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => addArrayItem('riskAnalysis', 'risks', { title: '', risk: '', mitigation: '' })}
                                    className={styles.addButton}
                                >
                                    <Plus size={18} />
                                    リスクを追加
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* 9. Milestones */}
                    <section id="milestones" className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIcon}>
                                <Flag size={32} weight="duotone" />
                            </div>
                            <div>
                                <span className={styles.sectionTag}>Section 9</span>
                                <h2 className={styles.sectionTitle}>マイルストーン</h2>
                                <p className={styles.sectionSubtitle}>短期・中期・長期の目標を設定します</p>
                            </div>
                        </div>

                        <div className={styles.formCard}>
                            <div className={styles.guidanceBox}>
                                <Lightbulb size={20} weight="duotone" />
                                <p>具体的かつ測定可能な目標を、時系列で設定します。各マイルストーンには達成指標（KPI）を明記しましょう。</p>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>短期目標（3ヶ月）</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={5}
                                    placeholder="例: MVPのリリース、初期顧客XX社の獲得、シードラウンドでの資金調達完了など"
                                    value={formData.milestones.shortTerm}
                                    onChange={(e) => updateField('milestones', 'shortTerm', e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>中期目標（1年）</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={5}
                                    placeholder="例: 正式版プロダクトのローンチ、有料顧客XXX社突破、月次売上XX百万円達成など"
                                    value={formData.milestones.mediumTerm}
                                    onChange={(e) => updateField('milestones', 'mediumTerm', e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>長期目標（3年）</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={5}
                                    placeholder="例: 業界シェアXX%の獲得、年間売上X億円突破、黒字化達成、海外展開の開始など"
                                    value={formData.milestones.longTerm}
                                    onChange={(e) => updateField('milestones', 'longTerm', e.target.value)}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className={styles.finalSection}>
                        <div className={styles.finalContent}>
                            <CheckCircle size={48} weight="duotone" className={styles.finalIcon} />
                            <h3>事業計画書の作成が完了しました</h3>
                            <p>
                                入力した内容を保存して、必要に応じてPDFとして出力できます。
                                <br />
                                各セクションを定期的に見直し、事業の成長に合わせて更新していきましょう。
                            </p>
                            <div className={styles.finalActions}>
                                <button onClick={handleSave} className={styles.finalButton}>
                                    <FloppyDisk size={20} weight="bold" />
                                    JSON形式で保存
                                </button>
                                <button onClick={handleExportPDF} className={styles.finalButton}>
                                    <Download size={20} weight="bold" />
                                    PDF出力（準備中）
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

