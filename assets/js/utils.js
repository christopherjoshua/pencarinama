
let c__button = document.querySelector('.js__header-button');
let c__herobutton = document.querySelector('.js__hero-link');
let c__sidecontent = document.querySelector('.header-sidebar-content');
let c__sideitem = document.querySelectorAll('.js__sidebar-item');
let c__tabitem = document.querySelectorAll('.js__tab-item');
let c__year = document.querySelector('.js__automate-year');
let c__prevbutton = document.querySelector('.js__slider-prev');
let c__nextbutton = document.querySelector('.js__slider-next');
let c__sliderindex = 0;

triggerModal = () => {
	if(c__sidecontent.classList.contains('js__active')) {
		c__sidecontent.classList.remove('js__active')
		c__button.classList.remove('js__active')
		c__sideitem.forEach( i => {
			i.setAttribute('tabindex', -1)
		})
	}
	else {
		c__sidecontent.classList.add('js__active')
		c__button.classList.add('js__active')
		c__sideitem.forEach( i => {
			i.setAttribute('tabindex', 0)
		})
	}
}
updateFocus = (o) => {
	let anchor_name = o;
	// console.log(document.querySelector(`[attr-anchor="${anchor_name}"]`))
	if(document.querySelector(`[attr-anchor="${anchor_name}"]`))
	{
		let anchor_obj = document.querySelector(`[attr-anchor="${anchor_name}"]`);
		anchor_obj.setAttribute('tabindex', '0');
		anchor_obj.focus();
		setTimeout( () => {
			anchor_obj.setAttribute('tabindex', '-1');
		}, 100)
	}
}

updateSliderItem = (dir) => {
	let current_obj = document.querySelector(`[attr-slider-index="${c__sliderindex}"]`);
	let next_index = c__sliderindex+dir < 0 
					? 1 
					: c__sliderindex+dir > 1 
						? 0
						: c__sliderindex+dir ;
	let next_obj = document.querySelector(`[attr-slider-index="${next_index}"]`);
	console.log(current_obj);
	console.log(next_obj);
	current_obj.classList.remove('js__active');
	current_obj.querySelector('img').setAttribute('tabindex', -1);
	current_obj.querySelector('p').setAttribute('tabindex', -1);

	next_obj.classList.add('js__active');
	next_obj.querySelector('img').setAttribute('tabindex', -1);
	next_obj.querySelector('p').setAttribute('tabindex', -1);

	c__sliderindex = next_index;
}

c__button.addEventListener('click', triggerModal, false );
c__sideitem.forEach( i => {
	i.addEventListener('click', triggerModal, false)
	i.addEventListener('click', () => {updateFocus(i.getAttribute('attr-anchor-name'))}, false)
})
c__tabitem.forEach( i => {
	i.addEventListener('click', () => {updateFocus(i.getAttribute('attr-anchor-name'))}, false)
})
c__herobutton.addEventListener('click', () => {updateFocus('works')}, false)	

c__year.innerHTML = (new Date()).getFullYear() - 2015;

c__prevbutton.addEventListener('click', () => {updateSliderItem(-1)}, false)
c__nextbutton.addEventListener('click', () => {updateSliderItem(1)}, false)
