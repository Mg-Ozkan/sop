"use client";

import React from 'react';
import ContentSuggested from './components/contentSuggested'
import ContentRecent from './components/contentRecent';
import styles from "./page.module.scss";

export default function Dashboard(): JSX.Element {
    return (
        <>
            <div className={styles["content"]}>
                <ContentSuggested />
                <div className={styles["divider"]} />
                <ContentRecent />
            </div>
        </>
    );
}