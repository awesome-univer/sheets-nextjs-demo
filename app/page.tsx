import Image from "next/image";
import styles from "./page.module.css";
import { Univer } from './components/index'

export default function Home() {
  return (
    <main className={styles.main}>
      <Univer />
    </main>
  );
}
