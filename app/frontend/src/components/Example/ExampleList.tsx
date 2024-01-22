import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "What were the key policy measures highlighted in the Central Bank of Sri Lanka's annual report for the fiscal year 2019 to address economic challenges?",
    "Summarize the main findings or insights regarding the banking sector's performance from the latest Central Bank of Sri Lanka annual report?",
    "In the context of monetary policy, what changes or updates were outlined in the Central Bank of Sri Lanka's annual report, particularly with regard to interest rates and exchange rates?"
];

const GPT4V_EXAMPLES: string[] = [
    "Compare the impact of interest rates and GDP in financial markets.",
    "What is the expected trend for the S&P 500 index over the next five years? Compare it to the past S&P 500 performance",
    "Can you identify any correlation between oil prices and stock market trends?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
