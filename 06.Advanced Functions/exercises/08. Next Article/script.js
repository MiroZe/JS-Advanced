function getArticleGenerator(articles) {
  let parent = document.querySelector("#content");
  let allSentences = articles.slice();

  return () => {
    if (allSentences.length > 0) {
      let article = document.createElement("article");
      article.textContent = allSentences.shift();
      parent.appendChild(article);
    }
  };
}
