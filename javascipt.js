let btn =document.getElementById("shorten");

btn.addEventListener('click',short);


 async function short(){
    let longtURL = document.getElementById("longurl").ariaValue;
    const result =await fetch(' https://api.shrtco.de/v2/shorten?url=$(longURL)');
    const data = await result.json();
    console.log(data.result.short_link2);




}


   