import Sidebar from "../components/Sidebar";
import styles from "../page.module.css";

export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.docsLayout}>
      <Sidebar />
      <main className={styles.docsContent}>{children}</main>
    </div>
  );
}
