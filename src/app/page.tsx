"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "./page.module.css";
import { RowBlock } from "./RowItem";
import { Footer } from "./footer";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <main className={styles.main}>
      <QueryClientProvider client={queryClient}>
        <RowBlock adjective="big" color="red" classes="code" keyName="1" />
        <Footer />
      </QueryClientProvider>
    </main>
  );
}
