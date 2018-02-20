class GoogleMaps{
	constructor(id, props, markers){
		this.GMap = new google.maps.Map(document.querySelector(id),{
			center: {
				lat: +props.center.lat,
				lng: +props.center.lng
			},
			zoom: props.zoom,
			scrollwheel: props.scrollwheel,
			mapTypeId: props.mapTypeId
		});
		this.markers = markers;
		this.geocoder = new google.maps.Geocoder();
	
		this.markers.forEach( (element, i) => {
			this.createMarker(this.markers[i])
		});
		
	}

	get map(){
		return this.GMap;
	}

	createMarker(marker){
		this.geocoder.geocode({
			'address': marker.adress,
			'partialmatch': true
		}, 
			(results, status)=>{
				if (status == 'OK' && results.length > 0) {
					const markerPosition = results[0].geometry.location;
					const markerMap = new google.maps.Marker({
						position: markerPosition,
						map: this.GMap,
						icon: marker.icon,
						title: marker.name,
					});
					if (marker.link){
						google.maps.event.addListener(markerMap, 'click', function() {
							window.open(marker.link, '_blank');
						}); 
					}
				}
			}
		)
	}
}

