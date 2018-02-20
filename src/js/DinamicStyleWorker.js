
class DinamicStyleWorker{
	static elementClassToggle(elemEventId,  elementTargetId, className){
		document.querySelector(`#${elemEventId}`).classList.toggle(className);
		document.querySelector(`#${elementTargetId}`).classList.toggle(className);
	}

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
	
		const targetElement = document.querySelector(`#${element.getAttribute('href')}`);

		if(window.pageYOffset < targetElement.offsetTop){
			let i = 0;
			setTimeout(function tick(){
				window.scrollTo(0,i);
				if(i<=targetElement.offsetTop){
					i+=10;
					setTimeout(tick, 1);
				}
			}, 1)
		} else {
			let i = window.pageYOffset;
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


