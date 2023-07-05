import React from 'react';
import styles from './styles/Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.dashboardTitle}>Dashboard</h1>

      <div className={styles.dashboardSection}>
        <h2 className={styles.dashboardSectionTitle}>Welcome, User</h2>
        <p className={styles.dashboardSectionDescription}>
          Here is an overview of your fitness data:
        </p>
      </div>

      <div className={styles.dashboardSection}>
        <h3 className={styles.dashboardSectionSubtitle}>Step Count</h3>
        <p className={styles.dashboardSectionData}>Today's Steps: 10,000</p>
        <p className={styles.dashboardSectionData}>Weekly Average: 8,500</p>
      </div>

      <div className={styles.dashboardSection}>
        <h3 className={styles.dashboardSectionSubtitle}>Calories Burned</h3>
        <p className={styles.dashboardSectionData}>Today's Calories: 500</p>
        <p className={styles.dashboardSectionData}>Weekly Average: 450</p>
      </div>

      <div className={styles.dashboardSection}>
        <h3 className={styles.dashboardSectionSubtitle}>Heart Rate</h3>
        <p className={styles.dashboardSectionData}>Resting Heart Rate: 70 bpm</p>
        <p className={styles.dashboardSectionData}>Average Heart Rate: 120 bpm</p>
      </div>

      <div className={styles.dashboardSection}>
        <h3 className={styles.dashboardSectionSubtitle}>Sleep Duration</h3>
        <p className={styles.dashboardSectionData}>Last Night's Sleep: 8 hours</p>
        <p className={styles.dashboardSectionData}>Weekly Average: 7.5 hours</p>
      </div>

      <div className={styles.dashboardSection}>
        <h3 className={styles.dashboardSectionSubtitle}>Water Intake</h3>
        <p className={styles.dashboardSectionData}>Today's Water: 1.5 liters</p>
        <p className={styles.dashboardSectionData}>Daily Goal: 2 liters</p>
      </div>

    </div>
  );
};

export default Dashboard;
