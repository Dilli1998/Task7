//a) Get all the countries from the Asia continent /region using the Filter function

// let request = new XMLHttpRequest()

// request.open('GET','https://restcountries.com/v3.1/all')
// request.send()

// request.onreadystatechange = function(){
//      if(request.status==200){
//         let response = JSON.parse(this.responseText)
//         response.filter((element) => console.log(element.flags))
//         };
//      }

//b) Get all the countries with a population of less than 2 lakhs using Filter function

//  let request = new XMLHttpRequest();

//  request.open('GET','https://restcountries.com/v3.1/all')
//  request.send()

//  request.onreadystatechange=function(){
//         let response = JSON.parse(this.response)
//         response.filter(element => {
//             if(element.population < 200000)
//             console.log(element)
//         });  
//  }

//c) Print the following details name, capital, flag using forEach function

// let request = new XMLHttpRequest();

// request.open('GET','https://restcountries.com/v3.1/all')
// request.send()

// request.onreadystatechange=function(){
//     let response = JSON.parse(this.response)
//     response.forEach(element => {
//         console.log(element.name,element.capital,element.flags)
//     });
// }

//d) Print the total population of countries using reduce function

// let request = new XMLHttpRequest()

// request.open('GET','https://restcountries.com/v3.1/all')
// request.send();

// request.onreadystatechange=function(){
//     let response=JSON.parse(this.response)
//      let totalPopulation=0
//      response.reduce(element => { 
//         totalPopulation +=element.population;
//         console.log("TotalPopulation = "+ totalPopulation)
//      });
// }

//e) Print the country which uses US Dollars as currency.

// let request = new XMLHttpRequest()

// request.open('GET','https://restcountries.com/v3.1/all')
// request.send();

// request.onreadystatechange=function(){
//     let response=JSON.parse(this.response)
//         response.forEach(element => {
//             if(element.currencies.USD)
//             console.log(element)
//         });
// }