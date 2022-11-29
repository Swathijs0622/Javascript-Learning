const username = document.getElementById("username");
const saveScorebtn = document.getElementById('saveScoreBtn');
const finalScore = localStorage.getItem('finalScore');
const mostRecentScore = localStorage.getItem('mostrecentScore');

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    console.log(username.value);
    saveScorebtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

};