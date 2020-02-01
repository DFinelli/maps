



	var map = L.map('mapid').setView([42.3601, -71.0589], 13);


				L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				}).addTo(map);

				L.marker([42.3601, -71.0589]).addTo(map)
				    .bindPopup('I am here somewhere')
				    .openPopup();

