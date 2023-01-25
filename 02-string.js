// var name = 'Cristian';
// var surname = 'Castillo';

// var fullName = name + ' ' + surname;
// console.log (fullName)

var firstIngredient = 'leche'
var secondIngredient = 'arroz'
var thirdIngredient = 'limon'
var fourthIngredient = 'canela'

// lista de ingredientes: leche, arroz, limon y canela

var recipe = 'lista de ingredientes: \n' + firstIngredient + ', ' + secondIngredient + ', ' + thirdIngredient + ', ' + fourthIngredient + '.'

console.log (recipe)

var recipeInterpolated = 
`lista de ingredientes:
- ${firstIngredient}.
- ${secondIngredient}.
- ${thirdIngredient}.
- ${fourthIngredient}.
`
console.log (recipeInterpolated)

console.log('--------------')

var car = 'fiat'
var myCar = `Mi coche es un ${car.toUpperCase()}`

console.log(myCar)

var dog = 'CARLINO'
var myDog = `Mi perro es un ${dog.toLowerCase()}`

console.log(myDog)

var computerDescription = '   Ordenador muy potente con mucha RAM.  '
console.log(computerDescription.trim())

var school = 'The PWBA'
var schoolName = school.slice(4)
console.log(schoolName)

