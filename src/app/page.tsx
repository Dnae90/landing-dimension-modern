"use client";

import { useState, useEffect, useCallback } from "react";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import type { ArticleId } from "@/components/Header";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeArticle, setActiveArticle] = useState<ArticleId | null>(null);
  const [isArticleVisible, setIsArticleVisible] = useState(false);

  // Simulate the original "is-loading" state that clears after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenArticle = useCallback((id: ArticleId) => {
    setActiveArticle(id);
    setIsArticleVisible(true);
  }, []);

  const handleCloseArticle = useCallback(() => {
    setIsArticleVisible(false);
    // Wait for exit animation before clearing the article
    setTimeout(() => setActiveArticle(null), 350);
  }, []);

  return (
    <div className={isLoading ? "is-loading" : ""}>
      {/* Full-screen background */}
      <Background isArticleVisible={isArticleVisible} isLoading={isLoading} />

      {/* Content wrapper */}
      <div
        className="relative flex flex-col items-center justify-between min-h-screen w-full p-16 2xl:p-12 sm:p-8 xs:p-4 z-[3]"
      >
        <div className="block" aria-hidden="true" />

        <Header
          isArticleVisible={isArticleVisible}
          isLoading={isLoading}
          onOpenArticle={handleOpenArticle}
        />

        <Articles
          activeArticle={activeArticle}
          onClose={handleCloseArticle}
        />

        <Footer
          isArticleVisible={isArticleVisible}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
