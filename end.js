const username = document.getElementById("username");
const saveScorebtn = document.getElementById('saveScoreBtn');
const finalScore = localStorage.getItem('finalScore');
const mostRecentScore = localStorage.getItem('mostrecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    console.log(username.value);
    saveScorebtn.disabled = !username.value;
});

let saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/");
};