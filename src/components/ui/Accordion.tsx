"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import styles from "./Accordion.module.css";

export interface AccordionItem {
    id: string;
    title: string;
    badge?: string;
    icon?: React.ReactNode;
    content: React.ReactNode;
    defaultOpen?: boolean;
}

interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = true }: AccordionProps) {
    const [openItems, setOpenItems] = useState<Set<string>>(
        new Set(items.filter((item) => item.defaultOpen).map((item) => item.id))
    );

    const toggleItem = (id: string) => {
        setOpenItems((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                if (!allowMultiple) {
                    newSet.clear();
                }
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <div className={styles.accordion}>
            {items.map((item) => {
                const isOpen = openItems.has(item.id);
                return (
                    <div key={item.id} id={item.id} className={styles.accordionItem}>
                        <button
                            className={`${styles.accordionHeader} ${isOpen ? styles.open : ""}`}
                            onClick={() => toggleItem(item.id)}
                            aria-expanded={isOpen}
                            aria-controls={`${item.id}-content`}
                        >
                            <div className={styles.headerLeft}>
                                {item.icon && <div className={styles.icon}>{item.icon}</div>}
                                <div className={styles.headerText}>
                                    {item.badge && <span className={styles.badge}>{item.badge}</span>}
                                    <h2 className={styles.title}>{item.title}</h2>
                                </div>
                            </div>
                            <CaretDown
                                size={24}
                                weight="bold"
                                className={`${styles.caret} ${isOpen ? styles.caretOpen : ""}`}
                            />
                        </button>
                        <div
                            id={`${item.id}-content`}
                            className={`${styles.accordionContent} ${isOpen ? styles.contentOpen : ""}`}
                            aria-hidden={!isOpen}
                        >
                            <div className={styles.contentInner}>{item.content}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
