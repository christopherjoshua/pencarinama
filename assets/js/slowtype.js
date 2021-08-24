//get component
let c__slowtype = document.querySelector('.js__slowtype');
//set minimum time to start typing
let delay = 2000;
let content_type = 'Frontend Developer'
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
		}
		, delay)	
}

slowType();