function main() {
	// Part 1 Questions
	//================================================================================================

	// Array.prototype.filter()
	// 1. Filter the list of presidents for those who were born in the 1800's
	let result1;

	console.table(result1);

  // Array.prototype.map()
  // 2. Map the presidents name and party to a seperate array. Format: <president_name> (<party>)

  let result2;

  console.table(result2);

  // Array.prototype.sort()
  // 3. Sort the presidents by birthdate, by descending order (most recent to least recent dates)

  let result3;

  console.table(result3);

  // Array.prototype.reduce()
	// 4. How many years combined did all the presidents live? (Hint: Lookout for the presidents who are still alive)

  let result4;

  console.log(`Number of combined years presidents have lived: ${result4}`);

  // sort/map Exercise
  // 5. Sort the presidents names by name in ascending order, and map the time they took office to a new list. Format: <president_name> - <took_office>

  let result5;

  console.table(result5);

  // Array.prototype.reduce()
  // Hint: to check if a property exists in an object you can simply
  // have the following check: if (obj.property_name)
  // if the property exists on the obj object that will return true
  // Additonally, reduce can take an empty object as its accumulator.
  // 6. Sum up the number of times each political party held the presidency

  let result6;

	console.table(result6);
}

main()