async function getAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    console.log(data);
    const adviceIdEl=document.getElementById('advice-id');
    const adviceTextEl=document.getElementById('advice-text');
    adviceTextEl.textContent='"'+data.slip.advice+'"';
    adviceIdEl.textContent="ADVICE #"+data.slip.id;
}

getAdvice();

document.getElementById("dice").addEventListener("click", function() {
    location.reload();
});
