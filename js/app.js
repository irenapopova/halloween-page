// Show / hide main navigation

const icon = document.getElementById('hamburger-menu');
const menu = document.getElementById('nav-bar');

const toggleMenu = () => {

	if (menu.classList.contains('show')) {
		menu.classList.remove('show');
	}
	else {
		menu.classList.add('show');
	}

};
icon.addEventListener('click', toggleMenu);

// Create google map

let map, marker;

window.initMap = () => {

	const styles = [
		{
			'featureType': 'all',
			'elementType': 'labels',
			'stylers': [
				{
					'visibility': 'simplified'
				}
			]
		},
		{
			'featureType': 'all',
			'elementType': 'labels.text',
			'stylers': [
				{
					'color': '#444444'
				}
			]
		},
		{
			'featureType': 'administrative.country',
			'elementType': 'all',
			'stylers': [
				{
					'visibility': 'simplified'
				}
			]
		},
		{
			'featureType': 'administrative.country',
			'elementType': 'geometry',
			'stylers': [
				{
					'visibility': 'simplified'
				}
			]
		},
		{
			'featureType': 'administrative.province',
			'elementType': 'all',
			'stylers': [
				{
					'visibility': 'off'
				}
			]
		},
		{
			'featureType': 'administrative.locality',
			'elementType': 'all',
			'stylers': [
				{
					'visibility': 'simplified'
				},
				{
					'saturation': '-100'
				},
				{
					'lightness': '30'
				}
			]
		},
		{
			'featureType': 'administrative.neighborhood',
			'elementType': 'all',
			'stylers': [
				{
					'visibility': 'off'
				}
			]
		},
		{
			'featureType': 'administrative.land_parcel',
			'elementType': 'all',
			'stylers': [
				{
					'visibility': 'off'
				}
			]
		},
		{
			'featureType': 'landscape',
			'elementType': 'all',
			'stylers': [
				{
					'visibility': 'simplified'
				},
				{
					'gamma': '0.00'
				},
				{
					'lightness': '74'
				}
			]
		},
		{
			'featureType': 'landscape',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#ffffff'
				}
			]
		},
		{
			'featureType': 'poi',
			'elementType': 'all',
			'stylers': [
				{
					'visibility': 'off'
				}
			]
		},
		{
			'featureType': 'road',
			'elementType': 'geometry',
			'stylers': [
				{
					'visibility': 'simplified'
				},
				{
					'color': '#ff0000'
				},
				{
					'saturation': '-15'
				},
				{
					'lightness': '40'
				},
				{
					'gamma': '1.25'
				}
			]
		},
		{
			'featureType': 'road',
			'elementType': 'labels',
			'stylers': [
				{
					'visibility': 'off'
				}
			]
		},
		{
			'featureType': 'transit',
			'elementType': 'labels',
			'stylers': [
				{
					'visibility': 'simplified'
				}
			]
		},
		{
			'featureType': 'transit',
			'elementType': 'labels.icon',
			'stylers': [
				{
					'visibility': 'off'
				}
			]
		},
		{
			'featureType': 'transit.line',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#ff0000'
				},
				{
					'lightness': '80'
				}
			]
		},
		{
			'featureType': 'transit.station',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#e5e5e5'
				}
			]
		},
		{
			'featureType': 'water',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#efefef'
				}
			]
		},
		{
			'featureType': 'water',
			'elementType': 'labels',
			'stylers': [
				{
					'visibility': 'off'
				}
			]
		}
	];
	

	map = new window.google.maps.Map(document.getElementById('map'), {
		center: { lat: 53.598052, lng: 18.036150 },
		styles: styles,
		zoom: 12
	});

	marker = new window.google.maps.Marker({
		position: { lat: 52.520008, lng: 13.404954 },
		map: map,
		title: 'Halloween'
	});

	marker.setMap(map);

	marker.addListener('click', toggleBounce);

};

const toggleBounce = () => {

	if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(window.google.maps.Animation.BOUNCE);
	}

	setTimeout(() => {
		marker.setAnimation(null);
	}, 3000);

};

