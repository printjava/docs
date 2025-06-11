import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className={styles.docsLayout}>
      <Sidebar />
      <main className={styles.docsContent}>
        <h1>Welcome to the Documentation</h1>
        <p>Select a topic from the sidebar to get started.</p>
      </main>
    </div>
  );
}
