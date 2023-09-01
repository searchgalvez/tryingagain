const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const headlineDiv = document.createElement("div");
  headlineDiv.classList.add("author");
  headlineDiv.textContent = `${article.headline}`;
  cardDiv.appendChild(headlineDiv);

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");
  cardDiv.appendChild(authorDiv);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  authorDiv.appendChild(imgContainer);

  const img = document.createElement("img");
  img.src = `${article.authorPhoto}`;
  imgContainer.appendChild(img);

  const authorNameSpan = document.createElement("span");
  authorNameSpan.textContent = `By ${article.authorName}`;
  authorDiv.appendChild(authorNameSpan);

  cardDiv.addEventListener("click", console.log(headlineDiv));

  return cardDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const card = document.querySelector(res);
  axios.get(`https://lambda-times-api.herokuapp.com/articles`).then((event) => {
    const array = Object.keys(event.data.articles);
    card.append(Card(array));
    console.log(array);
    array.forEach((array) => {
      event.data.articles[array].forEach((finetuned) => {
        document.querySelector(res).append(Card(finetuned));
      });
    });
  });
};

export { Card, cardAppender };
