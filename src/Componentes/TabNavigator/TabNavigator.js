import React, { useState } from "react";
import styles from "./TabNavigator.module.css";
//Tabs para as temporadas
const TabNavigator = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.tabNavigator}>
      <div className={styles.tabButtons}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${activeTab === index ? styles.active : ""
              }`}
            onClick={() => handleTabClick(index)}
          ><strong>{tab.title}</strong></button>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[activeTab].content}</div>
      
    </div>
  );
};

export default TabNavigator;
