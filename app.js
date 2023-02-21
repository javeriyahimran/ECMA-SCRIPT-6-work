// var name="basit"


// function foo(){
//     name="ghous";
// }

// foo()

// console.log(name)



// if (true){

//     var name="haris";

// }

// console.log(name)


// ECMA SCRIPT 

//var ka scope globally hota hai or let ka scope curly brackets k andar.
// let curly bracket k andar hi kaam karta ha outside curly bracket ni.


// if (true){

//     let fullname="haris";

// }

// console.log(fullname)

// ya ECMA 5 ka hai.

// var lastname="iqbal";
// var lastname="hashim";

// console.log(lastname)

// ab  hum isko let say kar rahay hain

// jaisay var update hota ha aisay let bhi hojata hai.

// let lastname ="iqbal"


//  console.log(lastname)

// hum var ka keyword day kar bohat sary strings bana sakty hain lekin let main aik hi bar banta ha bar bar ni.


// let lastname;
// lastname="ghous"
// console.log(lastname)


//CONST K KAAM.

// const school="saylani"


// var obj={
//     schoolname:school
// }

// console.log(obj)


//template strings.

// let firstname="ali";
// let lastname="khawar";

// console.log(`my name is ${firstname} ${lastname}`)

//spread operators.

// var students1=["haris","ali"]
// var students2=[...students1,"hashim","ahmed"]
// var merge=students1.concat(students2)
// console.log(students2)

//spread operators on object

// var students1={name:"ghous"}
// var students2={...students1,school:"saylani",rollno:"9807"}

// console.log(students2)

// object destructuring

// var student={
//     name:"ronaldo",
//     school:"saylani",
//     rollno:"123"
// }

// let{name,school, rollno}=student;

// console.log(name)
// console.log(school)
// console.log(rollno)

//ternary operators.

// var age=20;
// if(age>30){
//     console.log("30 say bara hai")
// }else{
//     console.log("30 say chota hai")
// }


//ternary operators.

// var age=50;
// var check=
// age > 30 ?
// "30 say bara hai" 
// :
//  "30 say chota hai"
//  console.log(check)

// var age="60";
// var check=
// age>30 && age <40?
// "30 say bara hai"
// :
// "30 say chota hai";
//  console.log(check)

// bool hai.

// var bool=true;
// var name=bool &&"ghous";
// console.log(name)

// // agar bool ko false kardengy tou false dekhayega



// var bool=false;
// var name=bool &&"ghous";
// console.log(name)


// var loob=false;
// var name=loob &&"ghous";
// console.log(name)

// asynchronous or synchronous

// setTimeout(function(){
//     console.log("number1")
// },1000);




// console.log("number2")
// console.log("number3")

// asynchronous or synchronous

// var name1;
// setTimeout(function(){
//     name1="ghous ahmed"
// },1000);

// console.log(name1)


//promise.


// var promise = new Promise(function (resolve, reject) {
//     var zinger = "Available";
//     if (zinger === "available") {
//         resolve("han khilaya")
//     } else {
//         reject("ni khilaya")
//     }
// })

// promise.then(
//     function (data) {
//         console.log(data)

//     }
// )

//     .catch(
//         function (error) {
//             console.log(error)

//         }
//     )

//object destructuring


// let obj={
//     name:"kashaf",
//     email:"kashaf3456@gmail.com",

// }

// let {name,email}=obj;

// console.log(email)


// let arr=["haris","kashaf","omer"];
// let[name1,name2,name3]=arr;
// console.log(name1)



//function expression.

// let foo=function(){
//     console.log("Hello World")
// }

// foo()


//Arrow Functions.


// let hello=()=>{
// console.log("I am arrow function")
// }

// hello()


// let hello= name=>{
//     console.log(`hello ${name}`)
// }

// hello("Javeriya")

//Agar humen 2 value get karni ho tou.


// let hello=(name1,name2)=>{
//     console.log(`hello ${name1} and ${name2}`)
// }

// hello("Javeriya","Farah")


//agar parameter return karana ho tou.

// let hello=()=>{
//     return "Farah"
// }

// console.log(hello())

//without return keyword.

// let hello=()=>"ghous"
// console.log(hello())

// function foo(name){
//     console.log(this)
// }


//call back function.


// setInterval(()=>console.log("hello"),1000)


// let getData=(render_data)=>{
//     setTimeout(()=>{
//         render_data("Javeriya")
//     },1000)

//     }

//     let render_data=(name)=>{
//         console.log(name)
//     }


// getData(render_data)



// let arr=[{name:"basit",age:12},{name:"umer",age:17}]
// let filter= arr.filter(function(a){
//     return a.age===12
// })

// console.log(filter)


//short code method

// let arr=[{name:"basit",age:12},{name:"umer",age:17}]
// let filter= arr.filter(a=>a.age===17)


// console.log(filter)

//another way.




// let arr=[{name:"basit",age:12},{name:"umer",age:17}]
// let filter= arr.filter(a=>true)


// console.log(filter)


//array main bari age or choti age k students bhi hosakty hain tou usky liye.
// greater than or less than donon hosakty hain.

// let arr=[{name:"basit",age:12},{name:"umer",age:17}]
// let filter= arr.filter(a=>a.age>10)


// console.log(filter)

//search for searching

// let name="ghous";
// let search="g"

// if(name.startsWith(search)){
//     console.log(name)
// }

//ends with

// let name="ghous";
// let search="u"

// if(name.endsWith(search)){
//     console.log(name)
// }

//Array Map.

// let arr=[2,3,4,5]
// console.log(arr)

// let multiply=arr.map(a=>a*2)
// console.log(multiply)

//isko aik or tareekay say bhi karsakty hain agar array main name ho tou.

// let arr=[{name:"laiba"},{name:"kashaf"}]
// console.log(arr)

// let multiply=arr.map(a=>a.name="marium")
// console.log(multiply)


//agar koi table data ho tou.

// let arr=[{name:"laiba"},{name:"kashaf"}]
// console.log(arr)

// let multiply=arr.map(a=>{
//     document.getElementById("table").innerHTML=a.name

// })
// console.log(multiply)

//fetch ka kaam.



// fetch('http://jsonplaceholder.typicode.com/todos/1')
// .then (response=>response.json())
// .then(data=>console.log("result",data))
// .catch(err=>console.log("error",err))

//another short method with async or await

//async function getData(){
//     let data=await fetch('http://jsonplaceholder.typicode.com/todos/1')
//     console.log(data)
// }

//ES6 Classes.

//constructor function hai yah.

// function Student(name,email,school){
//     this.name=name;
//     this.email=email;
//     this.school=school;
// }

// let student1=new Student("ghous","ghous@gmail.com","abc")
// console.log(student1)

// ab yah class ki tarah hai.

// class school extends student {
//     constructor(name, email, school) {
//         super(name, email)
//         this.school = school;
//     }
// }
// let student1 = new Student("ghous", "ghous@gmail.com", "abc")

// console.log(student1)


// async function getData(){
// let promise=new promise(function(resolve,reject){

//     fetch('http://jsonplaceholder.typicode.com/todos/1')
//     .then (response=>response.json())
//     .then(function(data){
//         resolve(data);
//     })
//     .catch(function(error){
//         reject(error)
//     })
// })


// let data =await promise;
// //console.log(data)
// }
// console.log(data)
 








// console.log(firebase_data)

function add_to_cart(){
var image=document.getElementById("image");
var price=document.getElementById("price");
var product={
    image,
    price,

}
var arr=[]
arr.push(product)
localStorage.setItem("cart",arr)

}











