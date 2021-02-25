function initMap() {
	// add your code here
	L.mapquest.key = '3LBp0OHDQ2KObm5S6AtWnEKhAZ5uZym2';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
  center: [32.87953, -117.23597],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12,
  zoomControl: false
});
	L.marker([32.87953, -117.23597]).addTo(map);
}