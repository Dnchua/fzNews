var title_href = 'header-'+location.href.split('3001/').pop();
$('.'+title_href).addClass('active');
$('.news-list').on('click',function () {
    window.location.href = location.href + 'news';
})