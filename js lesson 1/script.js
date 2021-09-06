const number0Films = +prompt('Сколько Фильмов вы уже посмотрели?', '');
const personalMovieDB = {
  count: number0Films,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних фильмов?', ''),
      b = prompt('Насколько оцените его?', ''),
      c = prompt('Один из последних фильмов?', ''),
      d = prompt('Насколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
