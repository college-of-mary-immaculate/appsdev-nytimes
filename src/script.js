// TODO: enable this and remove line 5
// const API_URL =
// 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key={token}';



const TopNews = document.getElementById('top-stories');

import { getTopNews } from "./utils";

const updateContainer = (data) => {
  TopNews.innerHTML = '';
  (data.results || []).forEach((news) => {
    const newsContainer = document.createElement('div');
    newsContainer.setAttribute('class', 'article');
    newsContainer.innerHTML = `
      <h2>${news?.title}</h2>
      ${news?.abstract}
    `;

    TopNews.appendChild(newsContainer);
  });
};

(async () => {
  const data = await getTopNews();
  updateContainer(data);
})();
