class Megamenu{
	constructor(menuData){
		this.data = menuData;
		this.list = $document[0].getElementById('menu-list');
		this.formMenu();
	}
	formMenu(){
		for(let i = 0; i<this.list.childNodes.length; i++){
			if(this.list.childNodes[i].hasAttribute('id')){
				const id = this.list.childNodes[i].getAttribute('id');
				const result = this.data.find((elem)=>{
					if(elem.id == id){
						return true;
					}
				});

				if(typeof result != 'undefined'){
					const wrap = this.formMenuItem(this.list.childNodes[i], result.links) ;
					this.list.childNodes[i].appendChild(wrap);
				} 
			}
		}
	}
	formMenuItem(menuItem, links){
		const list = createElement('ul', {'className': "megamenu__list"});
		links.forEach((key)=>{
			const link = createElement('a', {'className': "megamenu__link", 'href': key.link}, key.name);
			const item = createElement('li', {'className': "megamenu__item"}, link);
			list.appendChild(item);
		});
		const container = createElement('div', {'className': "container"}, list);
		const menuWrapper = createElement('div', {'className':"main-head-menu__megamenu megamenu"}, container);
		return menuWrapper;
	}

}