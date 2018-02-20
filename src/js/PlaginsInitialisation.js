class PlaginsInitialization{
	constructor(selectors, props, type,...additionalFuncs){
		this.selectors = [];
		this.props = props;
		this.type = type;
		if(Array.isArray(selectors)){
			selectors.forEach( (element, index) => {
				this.selectors[index] = $(element);
			});

		}
		if(this.type == 'owlCarousel'){
			this.sliderInit();
		}

	}

	sliderInit(){
		this.selectors[0][this.type](this.props);
	}
}