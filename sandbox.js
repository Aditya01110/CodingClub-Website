const URL='https://coding-week-2024-api.onrender.com/api/data';

fetch(URL).then(function(res){
    return res.json();
}).then(function (data){
   for( let i=0 ; i< 4 ; i++){
    
    document.querySelector(`.ama${i}`).innerText = data[i].type;
    document.querySelector(`.author${i}`).innerText = data[i].author;
    document.querySelector(`.title${i}`).innerText = data[i].headline;
    document.querySelector(`.blogdetails${i}`).innerText = data[i].date;
    const imgElement = document.querySelector(`.img${i}`);
    if (imgElement) {
        imgElement.src = data[i].image;
    } else {
        console.error(`Image element .img${i} not found`);
    }

   }

   for(let j=4; j < 8 ;j++){

    document.querySelector(`.title${j}`).innerText = data[j].headline;
    document.querySelector(`.blogdetails${j}`).innerText = data[j].date;
    const imgElement = document.querySelector(`.img${j}`);
    if (imgElement) {
        imgElement.src = data[j].image;
    } else {
        console.error(`Image element .img${i} not found`);
    }

  
   }
}).catch((err)=>{
    console.log('Rejected',err);
});

