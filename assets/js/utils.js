
let c__button = document.querySelector('.js__header-button');
let c__herobutton = document.querySelector('.js__hero-link');
let c__closezoombutton = document.querySelector('.js__slider-zoom-close');
let c__sidecontent = document.querySelector('.header-sidebar-content');
let c__sideitem = document.querySelectorAll('.js__sidebar-item');
let c__tabitem = document.querySelectorAll('.js__tab-item');
let c__year = document.querySelector('.js__automate-year');
let c__copy = document.querySelector('.js__automate-copy');
let c__prevbutton = document.querySelector('.js__slider-prev');
let c__nextbutton = document.querySelector('.js__slider-next');
let c__slidercontainer = document.querySelector('.js__slider-container');
let c__sliderzoom = document.querySelectorAll('.js__slider-item');
let c__sliderindex = 0;

let c__resetfocus = null;

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
					? (c__sliderzoom.length - 1)
					: c__sliderindex+dir > (c__sliderzoom.length - 1)
						? 0
						: c__sliderindex+dir ;
	let next_obj = document.querySelector(`[attr-slider-index="${next_index}"]`);
	current_obj.classList.remove('js__active');
	current_obj.querySelector('img').setAttribute('tabindex', -1);
	current_obj.querySelector('p').setAttribute('tabindex', -1);
	current_obj.setAttribute('tabindex', -1);

	next_obj.classList.add('js__active');
	next_obj.querySelector('img').setAttribute('tabindex', 0);
	next_obj.querySelector('p').setAttribute('tabindex', 0);
	next_obj.setAttribute('tabindex', 0);

	c__sliderindex = next_index;

	c__slidercontainer.scrollTo(next_obj.offsetLeft,0);
}

triggerZoom = (item) => {
	if(item.getAttribute("attr-slider-ignore") != "")
	{
		return;
	}
	let overlay = document.querySelector('.slider-image-overlay');
	if(!item)
	{
		overlay.classList.remove('js__active');
		c__closezoombutton.setAttribute('tabindex', -1);
		if(c__resetfocus)
		{
			c__resetfocus.focus();
		}
		return;
	}
	c__resetfocus = item;
	overlay.classList.add('js__active');	
	let zoomObj = document.querySelector('.slider-image-zoom');
	zoomObj.setAttribute('src', item.getAttribute('attr-slider-src'))
	zoomObj.setAttribute('alt', item.getAttribute('attr-slider-alt'))
	c__closezoombutton.setAttribute('tabindex', 0);
	c__closezoombutton.focus();
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
c__copy.innerHTML = "2021-" + (new Date()).getFullYear();

c__prevbutton.addEventListener('click', () => {updateSliderItem(-1)}, false)
c__nextbutton.addEventListener('click', () => {updateSliderItem(1)}, false)

c__sliderzoom.forEach( (i) => {
	i.addEventListener('click', () => {triggerZoom(i)}, false)
	i.addEventListener('keyup', (e) => {
		if(e.keyCode === 32 || e.keyCode===13)
		{
			e.preventDefault();
			triggerZoom(i);
		}
	})
})

c__closezoombutton.addEventListener('click', () => {triggerZoom(false)}, false)