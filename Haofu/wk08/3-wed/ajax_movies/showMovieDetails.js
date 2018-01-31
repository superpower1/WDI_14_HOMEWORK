const searchParams = new URLSearchParams(window.location.search);
const movieId = searchParams.get('i');

const options = {
  url: `http://www.omdbapi.com/?apikey=${omdb_key}&i=${movieId}`,
  method: 'get'
}
$.ajax(options).done(res=>{
  console.log(res);
  const $h2 = $('<h2>').text(res.Title);
  const $img = $('<img>').attr('src', res.Poster);
  $('.movie').append($h2, $img);

})
