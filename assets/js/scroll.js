let js__header = document.querySelector('.header-content');
document.addEventListener('scroll', () => {
	debounce(followScroll, 100);
})
debounce = (method, delay) => {
    clearTimeout(method.timeout);
    method.timeout= setTimeout(function(){
        method();
    }, delay);
}
followScroll = () => {
	if(window.scrollY > 30 && !(js__header.classList.contains('scrolled'))) {
		js__header.classList.add('scrolled');
	}
	else if(window.scrollY <= 10) {
		js__header.classList.remove('scrolled');
	}
}