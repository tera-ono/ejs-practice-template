/*******************************************
スライダー
*******************************************/
const swiper = new Swiper('.swiper', {
  // Optional parameters

  /* --- スライド方向: 横 --- */
  direction: 'horizontal',

  /* ---  ループするか --- */
  loop: true,

  /* --- スライドスピード --- */
  speed: 1000,

  /* --- マウスホイールやタッチパッドに対応させる --- */
 mousewheel: {
   /* --- スライドの移動方向とホイールの動かす方向が合っている場合のみ動かす --- */
		forceToAxis: true,

    /* --- ホイールのスクロール方向にスライドが移動する。 --- */
		invert: false,
	},

  /* --- キーボードの矢印でもスライド可能 --- */
	keyboard: true,

  /* --- スライドが切り替わるときのアニメーション --- */
  effect: 'fade',

  /* ---  自動再生 --- */
  autoplay : {
    // 次のスライドまでの時間
    delay: 4000,
   //操作されたら自動再生を止める:true  止めない:false
    disableOnInteraction: false,
  },

  
  
});