// Task01
const Car1={
 Make:"Honda",
 Model:"Civic",
 Year:2019
}
const Car2={
    Make:"Toyata",
    Model:"Camry",
    Year:2020  
}
const Car3={
    Make:"Ford",
    Model:"Mustang",
    Year:2018
}
console.log(`The maker of First Car is ${Car1.Make} and it's model is ${Car1.Model} and It will make in ${Car1.Year}`);
console.log(`The maker of Second Car is ${Car2.Make} and it's model is ${Car2.Model} and It will make in ${Car2.Year}`);
console.log(`The maker of Third Car is ${Car3.Make} and it's model is ${Car3.Model} and It will make in ${Car3.Year}`);

// Task02 Part1 
const Book={
    title:"",
    author:"",
    NoOfPages:""
}
let bookTitle=prompt("Enter the Title of the Book","");
let author=prompt("Enter Author of the Book","");
let numberOfPages=Number(prompt("Enter no of Pages of the book",""));
Book.title=bookTitle;
Book.author=author;
Book.numberOfPages=numberOfPages;
console.log(`The title of the book is ${Book.title} and the author of the Book is ${Book.author} and The number of pages of the Book is ${Book.numberOfPages}`);

// Part 2
let FindMaxAge=(PersonAge)=>{
    let max=PersonAge[0];
   for(let i=0; i<PersonAge.length;i++)
   {
       if(PersonAge[i].age>max.age)
       {
          max=PersonAge[i];
       }
   }
   return max.name;
}
let PersonAge=[
    {name:"Shazaib",age:22},
    {name:"Shayan",age:20},
    {name:"Muhammad Arslan",age:18},
];
console.log(`The Name of the Oldest Person is ${FindMaxAge(PersonAge)}`);

// Part3 Objects
const movies = [];

for (let i = 0; i < 3; i++) {
  let title = prompt("Enter the title of the Movie", "");
  let director = prompt("Enter the director of the movie", "");
  let year = prompt("Enter the year of the movie", "");

  // Create a new object for each movie and push it into the array
  movies.push({ title: title, director: director, year: year });
}

for (let i = 0; i < movies.length; i++) {
  console.log(`The title of the movie is ${movies[i].title} and the director of the movie is ${movies[i].director} and the year of the released movie is ${movies[i].year}`);
}

// Part4
let findTotalPrice=(item)=>
{
    let sum=0;
    for(let i=0; i<item.length;i++)
    {
        sum+=item[i].price;
    }
    return sum;
}
let item=[];
let num=Number(prompt("Enter how many items you wanna enter",""));
for(let i=0; i<num;i++)
{
    let name=prompt("Enter the name of the item","");
    let price=Number(prompt("Enter the price of the item",""));
    item.push({name:name,price:price});
}
console.log(`The total price of the item you enter is ${findTotalPrice(item)}`);