const [imgBig, imgSmall, opacity, padding] = [
	
	document.querySelector('.imgBig img'),
	document.querySelectorAll('.imgSmall img'),
	0.6,
	'2px',
];
imgSmall[0].style.opacity = opacity;
imgSmall.forEach(img=>img.addEventListener('click', imgClick));

function imgClick(e){
	imgSmall.forEach(img=>{
		img.style.opacity=1;
		img.style.padding=0;

	});

	imgBig.src = e.target.src;
	imgBig.classList.add('fade-in');
	setTimeout(()=>imgBig.classList.remove('fade-in'),500)
	e.target.style.opacity = opacity;
	e.target.style.padding = padding;
}