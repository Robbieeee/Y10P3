//Function that will sort the dataset
function QuickSort(firstData) {
	if (firstData.length <= 1) { // If array length is less than 1, return original array
		return firstData;
	} else {

		var v_leftSide = []; //"left" section of the sorted array
		var v_rightSide = []; //"right" section of the sorted array
		var newArray = []; //Sorted data will be stored here
		var lastValue = firstData.pop(); // return last element in original array and assign it to lastValue.
		var length = firstData.length; //length of the array 

		for (var i = 0; i < length; i++) {
			if (firstData[i] <= lastValue) { // if the element is less than lastValue add it to "left" of the array, otherwise "right"
				v_leftSide.push(firstData[i]); //add to the "right" of the array
			} else {
				v_rightSide.push(firstData[i]); //add to the "right" of the array
			}
		}

	return newArray.concat(QuickSort(v_leftSide), lastValue, QuickSort(v_rightSide)); //returns the sorted array, organized from left to right
		
		
	}
}

//Dataset that will be sorted
 var myArray = 
	[
		212, 30, 7, 2, 56, 21, 9, 76, 908, 98, 743, 6534, 823, "steve", "jack", "johnny", "jay","conan", "jimmy"
	];

//Printing code onto the screen and styling it
document.write( '<p id="jstext">' + "Original array: " + myArray + '</p>');
var sortedArray = QuickSort(myArray);
document.write( '<p id="jstext">' + "Sorted array: " + sortedArray + '</p>');
