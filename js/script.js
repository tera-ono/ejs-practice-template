/* --- aos.js スクロールアニメーション --- */
AOS.init({
  /* --- 一度のみの発火 --- */
  offset: 100,
  once: true,
});

jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  /* --- ドロワーメニュー --- */
  $('.js-mobile-menu').on('click', function() {
    $(this).toggleClass('is-open');
    $('.js-drawer').toggleClass('is-open');
    $('.js-header').toggleClass('is-open');
    /* --- 背景スクロール禁止&解除 --- */
    $('body').toggleClass('is-open');
  });

  $('.js-drawer-link').on('click', function() {
    $('.js-drawer').removeClass('is-open');
    $('.js-mobile-menu').removeClass('is-open');
    $('.js-header').removeClass('is-open');
    /* --- 背景スクロール禁止&解除 --- */
    $('body').removeClass('is-open');
  });

  /* --- トップへ戻るボタン --- */
  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  /* --- スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動) --- */
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });


  /* スクロールしてMVが見えなくなった所でヘッダーが固定して追従する
  ===================================================*/
  let header = $('.js-header');
  let header_height = header.innerHeight();
  let mv_height = $('.js-mv').innerHeight();
  let target = header_height + mv_height;
  var headNav = $("header");
	//scrollだけだと読み込み時困るのでloadも追加
	$(window).on('load scroll', function () {
		//現在の位置がtarget以上かつ、クラスfixedが付与されていない時
		if($(this).scrollTop() > target && header.hasClass('fixed') == false) {
			//headerの高さ分上(マイナス)に設定
			header.css({"top": -(header_height)});
			//クラスfixedを付与
			header.addClass('fixed');
			//位置を0に設定し、アニメーションのスピードを指定
			header.animate({"top": 0},600);
		}
		//現在の位置がtarget以下かつ、クラスfixedが付与されている時にfixedを外す
		else if($(this).scrollTop() < target && header.hasClass('fixed') == true){
			header.removeClass('fixed');
		}
  });

});

