console.log('start');
let searchInput = "";
let loadCounter = 0;
$('.search-btn').on('click', e=>{
  searchInput = $('.search-input').val();
  const xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${ApiKey}&limit=10`);
  xhr.done(data=>{
    console.log(data);
    $('.container').html('');
    data.data.forEach(item=>{
      const gifUrl = item.images.fixed_width.url;
      const $img = $('<img>').attr('src', gifUrl);
      $('.container').append($img);
      loadCounter = 10;
    })
  });
})
let loadFinish = true;
$(window).on("scroll", e=>{
	const scrollHeight = $(document).height();
	const scrollPosition = $(window).height() + $(window).scrollTop();

	if ((scrollHeight - scrollPosition) / scrollHeight === 0 && loadFinish) {
    // when scroll to bottom of the page
    loadFinish = false;
    const xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${ApiKey}&offset=${loadCounter}&limit=10`);
    xhr.done(data=>{
      console.log(data);
      data.data.forEach(item=>{
        const gifUrl = item.images.fixed_width.url;
        const $img = $('<img>').attr('src', gifUrl);
        $('.container').append($img);
        loadCounter += 10;
        loadFinish = true;
      })
    });
	}
})
