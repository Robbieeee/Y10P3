//Unsorted dataset
var unsortedData = [212, 30, 7, 2, 56, 21, 9, 76, 908, 98, 743, 6534, 823, "steve", "jack", "johnny", "jay","conan", "jimmy"]

//Main function to initiate sorting
//Calls the merge function
function mergesort(unsortedArray) 
{
  // Base case or terminating case
  if (unsortedArray.length <= 1) 
  {
    return unsortedArray; 
  }
    else 
  {
    var midpoint = parseInt(unsortedArray.length / 2); //divide the length of the array in two
    var leftData   = unsortedArray.slice(0, midpoint); // the first half of the array
    var rightData  = unsortedArray.slice(midpoint, unsortedArray.length); // the second half of the array
	
	//Prints out variables for testing  
	console.log("unsorted: " + unsortedArray);
	console.log("midpoint: " + midpoint);
	console.log("left: " + leftData);
	console.log("right: " +  rightData);
	
    //returns sorted array until all data is sorted
    return merge(mergesort(leftData), mergesort(rightData)); 
  }
}

//Prints both original array and sorted array on the screen 
document.write( '<p id="jstext">' + "Unsorted Array: " + (unsortedData) + '</p>');
document.write( '<p id="jstext">' + "Sorted Array: " + mergesort(unsortedData) + '</p>');

//mergesort function
function merge(leftData, rightData) 
{
  var newData = []; //Sorted data will be stored here

// Break out of loop if any one of the array gets empty
  while (leftData.length && rightData.length) 
  {
		// Pick the smaller among the smallest element of left and right sub arrays 
		if (leftData[0] <= rightData[0]) 
		{
			newData.push(leftData[0]);
			leftData = leftData.slice(1);
			//console.log(leftData)
		} 
	  	else 
		{
			newData.push(rightData[0]);
			rightData = rightData.slice(1)
		}
 }
	
  // insert the smallest element to the newData
  while (leftData.length)
    newData.push(leftData.shift());
 
  while (rightData.length)
    newData.push(rightData.shift());
  
  return newData;
  
}

