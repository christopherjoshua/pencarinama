//get component
let c__slowtype = document.querySelector('.js__slowtype');
let c__sidekick = document.querySelector('.js__sidekick');
//set minimum time to start typing
let delay = 2000;
let content_type = 'Programmer'
let index = 0;

let slowType = () => {
	setTimeout(
		() => {
			if(content_type[index])
			{
				c__slowtype.innerHTML += content_type[index];
				delay = 200;
				index += 1;
				slowType();	
			}
			else {
				c__sidekick.classList.add('js__active')
			}
		}
		, delay)	
}

slowType();