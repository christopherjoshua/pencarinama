let c__year = document.querySelector('.js__automate-year');
let c__copy = document.querySelector('.js__automate-copy');

if(c__year != null)
{
	c__year.innerHTML = (new Date()).getFullYear() - 2015;
}
if(c__copy != null)
{
	c__copy.innerHTML = "2021-" + (new Date()).getFullYear();
}
