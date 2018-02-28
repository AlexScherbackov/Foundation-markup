class Navigator{
	static eventListning(selector, event, callback, ...props){
		
		const elem = typeof selector == 'string' ? document.querySelector(selector) : selector;
		
		elem.addEventListener(
			event,
			(event) => {
				event.preventDefault();
				callback.call(...props);
			} 
		)	
	}
	static scrollToId(element){
		
		const offset = window.pageYOffset;
		const targetElement = document.querySelector(`#${element.getAttribute('href')}`);

		if(offset < targetElement.offsetTop){
			let i = 0;
			setTimeout(function tick(){
				window.scrollTo(0,i);
				if(i<=targetElement.offsetTop){
					i+=10;
					setTimeout(tick, 1);
				}
			}, 1)
		} else {
			let i = offset;
			setTimeout(function tick(){
				window.scrollTo(0,i);
				if(i>=targetElement.offsetTop){
					i-=10;
					setTimeout(tick, 1);
				}
			}, 1)
		}
	}
}