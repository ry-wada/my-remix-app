import { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import Sidebar from "../components/Sidebar";
import "../styles/tailwind.css";
import { Article, articles } from "~/utils/mockData";

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentArticles, setCurrentArticles] = useState<Article[]>([]);
  const articlesPerPage = 8; // 1ページあたりの記事数

  useEffect(() => {
    // 現在のページに表示する記事の範囲を計算
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    setCurrentArticles(articles.slice(indexOfFirstArticle, indexOfLastArticle));
  }, [currentPage]);

  // ページ番号を変更する関数
  const paginate = (pageNumber: number) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(articles.length / articlesPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="md:col-span-1 lg:col-span-1">
          <Sidebar />
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <ul className="flex">
              <li className="mr-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-inherit hover:bg-gray-300 rounded"
                >
                  ＜
                </button>
              </li>
              {[...Array(Math.ceil(articles.length / articlesPerPage))].map(
                (_, index) => (
                  <li key={index} className="mr-2">
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`px-3 py-1 ${
                        currentPage === index + 1
                          ? "bg-gray-300"
                          : "bg-inherit hover:bg-gray-300"
                      } rounded`}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
              <li>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={
                    currentPage === Math.ceil(articles.length / articlesPerPage)
                  }
                  className="px-3 py-1 bg-inherit hover:bg-gray-300 rounded"
                >
                  ＞
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
