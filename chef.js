function doesChefCook(n, ingredientIds)
{
let categories = ['FIBER', 'FAT', 'CARB'];
var ingredients = ingredientIds.split(' ');

let res = "00";

for (let i=2;i<n;i++) {
	
	let map = {
		'FIBER': [],
		'FAT': [],
		'CARB': []
	};
	
	let rem = n - ingredients.length;
	//console.log(rem);
	
	for (let j=0;j<=i-rem;j++) {
		if (ingredients[j].startsWith(categories[0])) {
			map[categories[0]].push(j);
		} else if (ingredients[j].startsWith(categories[1])) {
			map[categories[1]].push(j);
		} else if (ingredients[j].startsWith(categories[2])) {
			map[categories[2]].push(j);
		}
	}
	
	//console.log(map);
	
	const cat0 = map[categories[0]].length;
	const cat1 = map[categories[1]].length;
	const cat2 = map[categories[2]].length;	
	
	if (cat0 >= 2 || cat1 >= 2 || cat2 >= 2) {
		res += "1";
		if (cat0 >= 2) {
			let indexes = map[categories[0]];
			if (cat0 === 2) {
				ingredients.splice(indexes[1],1);
				ingredients.splice(indexes[0],1);
				ingredients.splice(0,1);
			} else if (cat0 === 3) {
				ingredients.splice(indexes[2],1);
				ingredients.splice(indexes[1],1);
				ingredients.splice(indexes[0],1);
			}
		} else if (cat1 >= 2) {
			let indexes = map[categories[1]];
			//console.log(indexes, cat1);
			if (cat1 === 2) {
				ingredients.splice(indexes[1],1);
				ingredients.splice(indexes[0],1);
				ingredients.splice(0,1);
			} else if (cat1 === 3) {
				ingredients.splice(indexes[2],1);
				ingredients.splice(indexes[1],1);
				ingredients.splice(indexes[0],1);
			}
		} else if (cat2 >= 2) {
			let indexes = map[categories[2]];
			if (cat2 === 2) {
				ingredients.splice(indexes[1],1);
				ingredients.splice(indexes[0],1);
				ingredients.splice(0,1);
			} else if (cat2 === 3) {
				ingredients.splice(indexes[2],1);
				ingredients.splice(indexes[1],1);
				ingredients.splice(indexes[0],1);
			}
		}
		//console.log(ingredients);
	}	else {
		res += "0";
	}
}

return res;
}

let res = doesChefCook(5, "FATOil FIBERSpinach CARBRice FATCheese FIBERBeans");
console.log('Case #1: ', 5, "FATOil FIBERSpinach CARBRice FATCheese FIBERBeans");
console.log('Chef cooks on: ', res);

res = doesChefCook(6, "FATOil FATCheese FATEgg FIBERSpinach CARBRice FIBERBeans");
console.log('Case #2: ', 6, "FATOil FATCheese FATEgg FIBERSpinach CARBRice FIBERBeans");
console.log('Chef cooks on: ', res);

res = doesChefCook(12, "FATOil FIBERSpinach CARBRice FATCheese FIBERBeans FATEgg FIBERBroccoli CARBPotato CARBCorn FATOlive FIBERCarrot CARBBeetroot");
console.log('Case #3: ', 12, "FATOil FIBERSpinach CARBRice FATCheese FIBERBeans FATEgg FIBERBroccoli CARBPotato CARBCorn FATOlive FIBERCarrot CARBBeetroot");
console.log('Chef cooks on: ', res);