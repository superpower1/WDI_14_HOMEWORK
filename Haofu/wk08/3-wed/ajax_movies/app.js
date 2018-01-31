$('.search-btn').on('click', e=>{
  const searchVal = $('.search-input').val();
  const options = {
    url: `http://www.omdbapi.com/?apikey=${omdb_key}&s=${searchVal}`,
    method: 'get'
  }
  $('.movies').html('');
  $.ajax(options).done(res=>{
    console.log(res.Search);
    res.Search.forEach(movie=>{
      const $h2 = $('<h2>').text(movie.Title);
      const $a = $('<a>').attr({
        href: `./movie.html?i=${movie.imdbID}`,
        target: "_blank"
      }).append($h2);
      $('.movies').append($a);
    })
  })
})
