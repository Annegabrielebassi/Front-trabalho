import styles from "./page.module.css";
import header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <header />
      <h1>
        Anne Gabrielly
      </h1>
      <p className={styles.Titulo}>Girassois são legais</p>
    </div>
  );
}
