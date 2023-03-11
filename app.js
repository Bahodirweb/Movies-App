const search = document.querySelector(".search-input");
maincontent = document.querySelector(".main-content");

const GetMovies = async () => {
  const request = await fetch(
    `http://www.omdbapi.com/?apikey=77d01f6c&s=${search.value}`
  );
  const response = await request.json();
  movies = response.Search;

  movies.map((item) => {
    const card = createElement(
      "div",
      "card",

      `<img src="${item.Poster}">
                <h4>${item.Title}</h4>
                <p>${item.Year}</p>
                <p>${item.Type}</p>
                
                `
    );
    maincontent.appendChild(card);
  });
};
search.addEventListener("change", (e) => {
  maincontent.innerHTML = "";
  GetMovies(e.target.value);
});
