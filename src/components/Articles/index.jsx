import React from "react";
import ArticleItem from "./components/ArticleItem";

function Articles() {
  return (
    <section className="w-full flex items-center justify-center pt-20 px-10 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </div>
    </section>
  );
}

export default Articles;
