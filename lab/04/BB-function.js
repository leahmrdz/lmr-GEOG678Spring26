// the function file to create a bounding box// 
// first create a function to find the points that correspond to top left and right and bottom left and right//

// find topLeft: the point with the maximum lat and minimum lon//
function findTopLeft(pointList){
	var maxLat = null;
	var minLon = null;
		
	pointList.data.forEach(
		point => {
			if(maxLat == null){
				maxLat = point.lat
				minLon = point.lon
			}
			else{
				if(point.lat > maxLat){
				maxLat = point.lat}
				if (point.lon < minLon){
					minLon = point.lon}
			}
		}
	
	)
	return {"pointId":1, "lat":maxLat, "lon":minLon}
	}

// find topRight: the point with the maximum lat and max lon//
function findTopRight(pointList){
	var maxLat = null;
	var maxLon = null;
	
	pointList.data.forEach(
		point => {
			if(maxLat == null){
				maxLat = point.lat
				maxLon = point.lon
			}
			else{
				if(point.lat > maxLat){
				maxLat = point.lat}
				if (point.lon > maxLon){
					maxLon = point.lon}
			}
		}
	
	)
	return {"pointId":2, "lat":maxLat, "lon":maxLon}
	}
	
// find BottomLeft: the point with the minimum lat and minimum lon//
function findBottomLeft(pointList){
	var minLat = null;
	var minLon = null;
	
	pointList.data.forEach(
		point => {
			if(minLat == null){
				minLat = point.lat
				minLon = point.lon
			}
			else{
				if(point.lat < minLat){
				minLat = point.lat}
				if (point.lon < minLon){
					minLon = point.lon}
			}
		}
	
	)
	return {"pointId":3, "lat":minLat, "lon":minLon}
	}
	
// find BottomRight: the point with the minimum lat and maximum lon//
function findBottomRight(pointList){
	var minLat = null;
	var maxLon = null;
	
	pointList.data.forEach(
		point => {
			if(minLat == null){
				minLat = point.lat
				maxLon = point.lon
			}
			else{
				if(point.lat < minLat){
				minLat = point.lat}
				if (point.lon > maxLon){
					maxLon = point.lon}
			}
		}
	
	)
	return {"pointId":4, "lat":minLat, "lon":maxLon}
	}
	


// make the function run
function RunB()
{
    // get the corners by creating functions which select an item from the data which has the correct values
    var topLeftPoint = findTopLeft(theJSON2);
	var topRightPoint = findTopRight(theJSON2);
	var bottomLeftPoint = findBottomLeft(theJSON2);
	var bottomRightPoint = findBottomRight(theJSON2);
	
	// make a JSON output object containing the corner points as each of its properties
    var boundingBox = 
{
    topLeft: topLeftPoint,
    topRight: topRightPoint,
    bottomLeft: bottomLeftPoint,
    bottomRight: bottomRightPoint
}

    // print it out
    console.log("Bounding box computed for leahmrdz22@tamu.edu: ");
    console.log(boundingBox);
}