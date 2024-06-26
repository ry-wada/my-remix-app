import React from "react";

interface ArticleCardProps {
  article: {
    id: number;
    date: string;
    title: string;
    image: string;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-gray-600">{article.date}</p>
        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
      </div>
    </div>
  );
};

export default ArticleCard;
