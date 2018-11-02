
// console.log("Print all numbers divisible by 3 between 1 to 100");
// for(let i = 1; i <= 100; i+=1) {
//     if (i % 3 == 0) {
//         console.log (i + "Fizz");
//         }}
//  console.log("Print all numbers divisible by 5 between 1 to 100");
// for(let i = 1; i <= 100; i+=1) {
//     if (i % 5 == 0) {
//     console.log (i + "Buzz");
// }}
// console.log("Print all numbers divisible by 5 and 3 between 1 to 100");
// for(let i = 1; i <= 100; i+=1){
//     if (i % 5 === 0 && i % 3 === 0){
//         console.log (i + "FizzBuzz");
// }}
// console.log("Print all numbers!");
// for (let i=1; i < 101; i+=1){
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }
var i, buzz, fizz,  outputs;
outputs = $( '#output' );

for ( i = 1; i <= 100; i++ )
{
  fizz = i % 3 === 0;
  buzz = i % 5 === 0;
	if ( fizz && buzz )
  {
  	outputs.append( '<span class="fizzbuzz">FizzBuzz</span> ' + i + '<br>' );
  }
  else if ( fizz )
  {
  	outputs.append( '<span class="fizz">Fizz</span> ' + i + '<br>' );
  }
  else if ( buzz )
  {
  	outputs.append( '<span class="buzz">Buzz</span> ' + i + '<br>' );
  }
  else
  {
    outputs.append( i + '<br>' );
  }
}