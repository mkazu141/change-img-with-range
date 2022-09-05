// リアルタイムに取得
let range = document.querySelector(`input[name='range']`);
var morphing_img = new Array("images/img1.png","images/img2.png");

range.addEventListener(`input`, function () {
	document.querySelector(`#output`).innerHTML = `Value : ${range.value}`;
    document.querySelector('#img').src = morphing_img[range.value]
});

