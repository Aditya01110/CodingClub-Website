const URL='https://coding-week-2024-api.onrender.com/api/data';


const getdata = async ()=>{
   
   const response = await fetch(URL);

   if (response.status !== 200){
    throw new Error();
   }

   const data = await response.json();
   return data;

};

// fetch('mm.json').then((response)=>{
//     console.log('resolved',response);
//     return response.json();
// }).then(data =>{
//     console.log(data);
// }).catch((err)=>{
//     console.log('rejected',err);
// });

getdata()
.then(data => {
    console.log(data);
    for( let i=0;i < 4 ;i++){
        document.querySelector(`.ama${i}`).innerHTML = data[i].type;
        document.querySelector(`.ama${i}`).innerText = data[i].type;
        document.querySelector(`.author${i}`).innerText = data[i].author;
    }
})
.catch(err=>console.log('rejected',err));


// var header = document.getElementsByClassName('header1');

// // console.log(Array.isArray(header));
// console.log(Array.isArray(Array.from(header)));

// Array.from(header).forEach(function(item){
//     console.log(item);
// })
