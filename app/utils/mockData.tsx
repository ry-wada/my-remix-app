import { IMAGEパス } from "lib/config";

export interface Article {
  id: number;
  date: string;
  title: string;
  image: string;
}

const baseArticles = [
  {
    id: 1,
    date: "2024.1.1",
    title: "記事１",
  },
  {
    id: 2,
    date: "2024.1.1",
    title: "記事２",
  },
  {
    id: 3,
    date: "2024.1.1",
    title: "記事３",
  },
  {
    id: 4,
    date: "2024.1.1",
    title: "記事４",
  },
  {
    id: 5,
    date: "2024.1.1",
    title: "記事５",
  },
  {
    id: 6,
    date: "2024.1.1",
    title: "記事６",
  },
];

export const articlesWithImages: Article[] = baseArticles.map((article) => ({
  ...article,
  image: `${IMAGEパス}/${article.title}.png`,
}));

export const articles: Article[] = [...articlesWithImages];
