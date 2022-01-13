let presidents = require('./presidents.js');

function main() {
	// Part 1 Questions
	//================================================================================================

	// Array.prototype.filter()
	// 1. Filter the list of presidents for those who were born in the 1800's
	let result1;
  result1 = presidents.filter(e => 1800 <= e.birth_year && e.birth_year <= 1899);

  console.table(result1);

// Array.prototype.map()
// 2. Map the presidents name and party to a seperate array. Format: <president_name> (<party>)

  let result2;
  result2 = presidents.map(p => `${p.president} (${p.party})`); 
  console.table(result2);

// Array.prototype.sort()
// 3. Sort the presidents by birthdate, by descending order (most recent to least recent dates)

  let temp = presidents.map(x => x);
  let result3 = temp.sort((fe, se)=> se.birth_year - fe.birth_year); 
  console.table(result3);

// Array.prototype.reduce()
// 4. How many years combined did all the presidents live? (Hint: Lookout for the presidents who are still alive)

  let result4;
  const reducer = (sum, p)=> sum + (p.death_year-p.birth_year); 
  result4 = presidents.map((p) => {if(p.death_year == null) { 
      p.death_year = 2022;
  }  
  return p;
}).reduce(reducer, 0); 
  console.log(`Number of combined years presidents have lived: ${result4}`);

// sort/map Exercise
// 5. Sort the presidents names by name in ascending order, and map the time they took office to a new list. Format: <president_name> - <took_office>

 let result5;
 let temp2 = presidents.map(x => x);
 temp2.sort((fe, se)=> fe.president.localeCompare(se.president)); 
 result5 = temp2.map(p => `${p.president} - ${p.took_office}`) 
 console.table(result5);

// Array.prototype.reduce()
// Hint: to check if a property exists in an object you can simply
// have the following check: if (obj.property_name)
// if the property exists on the obj object that will return true
// Additonally, reduce can take an empty object as its accumulator.
// 6. Sum up the number of times each political party held the presidency

  let result6;
  const reducer2 = (table, p)=>{ 
      var par = p.party; 
        if(table.hasOwnProperty(par)) { 
           table[par] += 1; 
        } else { 
           table[par] = 1; 
        } 
        return table; 
     } 
     result6 = presidents.reduce(reducer2, {}); 
  console.table(result6);
    }

main()