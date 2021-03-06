import React, { useState } from 'react';
import styles from './Tabs.module.css';

const Tabs = ({ tabs }) => {
    const [tabState, setTabState] = useState({
        index: 99,
        content: []
    })

    const onClickHandler = e => {
        const [, ...contentList ] = tabs[e.target.value];
        setTabState({
            index: parseInt(e.target.value),
            content: contentList
        })
    }

    const resetButton = () => {
        setTabState({
            index: 99,
            content: []
        })
    }

    return (
        <div className={styles.loader}>
            <h1>Tabs Assignment</h1>
            {tabs.map((tab, index) => {
                let buttonStyles = (index === tabState.index ? styles.activeButton : styles.inactiveButton);
                return (
                    <button className={buttonStyles} key={index} value={index} onClick={onClickHandler}>{tab[0]}</button>
                )
            })}
            <div>
                <p>{tabState.content}</p>
            </div>
            <button className={styles.inactiveButton} onClick={resetButton}>Reset</button>
        </div>
    )
}

export default Tabs;