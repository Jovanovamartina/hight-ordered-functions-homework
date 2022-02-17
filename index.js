
/*Homework
Exercise
There is a JSON file with students. Make a call to the file and get the following data from it:

All students with an average grade higher than 3
All female student names with an average grade of 5
All male student full names who live in Skopje and are over 18 years old
The average grades of all female students over the age of 24
All male students with a name starting with B and average grade over 2
Use higher order functions to find the answers Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json


*/

//url
  let url = " https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";
   let btn=document.getElementById("btn");//selektiranje na button
// ajax povik
  function myFunction(apiUrl){
      $.ajax({
          url:apiUrl,
          success: function(response){
              let parsed=JSON.parse(response);
              console.log("success " ,parsed);
//BARANJA 


              //average grade higher than 3 from api list
              let higherThen3 = parsed.filter(function(element){
                  return element.averageGrade > 3;
              })
              console.log(higherThen3);

              //female student name with average grade 5
            let female5=[];
            female5= parsed.filter((x)=> {
                if(x.averageGrade===5 && x.gender==="Female"){
                    return x;
                }
            });
console.log(female5);
//All male student full names who live in Skopje and are over 18 years old
male18Skopje=[];
male18Skopje= parsed.filter((y)=> {
    if( y.gender==="Male" && y.city==="Skopje" && y.age > 18){
        return y;
}
    });
    console.log(male18Skopje);
//The average grades of all female students over the age of 24
let femaleOver24=[];
femaleOver24=parsed.filter((a)=>{
    if(a.gender==="Female" && a.age > 24 && a.averageGrade){
        return a;
    }
});
console.log(femaleOver24);
//All male students with a name starting with B and average grade over 2
let startWithB=[];
startWithB=parsed.filter((b)=>{
  if  ( b.gender==="Male" && b.averageGrade > 2 && b.firstName[0]==="B"){
      return b;
  }
}),
console.log(startWithB);
console.log(`${firstName} `)
},
// BARANJATA ZAVRSUVAAT
      
          error: function(error){
              console.log(error);
          },
      });
  }
  btn.addEventListener("click",function(){
      myFunction(url);
  })
 

 


