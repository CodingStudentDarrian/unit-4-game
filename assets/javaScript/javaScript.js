$(document).ready(function () {
    let Random = Math.floor(Math.random() * 200 + 101)

    $('#goal').text(Random);

    let diamond = Math.floor(Math.random() * 24 + 1)
    let ruby = Math.floor(Math.random() * 24 + 1)
    let sapphire = Math.floor(Math.random() * 24 + 1)
    let emerald = Math.floor(Math.random() * 24 + 1)

    let Score = 0
    let wins = 0
    let losses = 0
    let lives = 6

    $('#Wins').text(wins);
    $('#Losses').text(losses);
    $('#Lives').text(lives);

    $('#Diamond').on('click', function () {
        Score = Score + diamond;
        console.log("New Score= " + Score);
        $('#final_Score').text(Score);
        if (Score == Random) {
            winner();
        } else if (Score > Random) {
            loser();

        }
    })
        / $('#Ruby').on('click', function () {
            Score = Score + ruby;
            console.log("New Score= " + Score);
            $('#final_Score').text(Score);
            if (Score == Random) {
                winner();
            } else if (Score > Random) {
                loser();

            }
        })
    $('#Sapphire').on('click', function () {
        Score = Score + sapphire;
        console.log("New Score= " + Score);
        $('#final_Score').text(Score);
        if (Score == Random) {
            winner();
        } else if (Score > Random) {
            loser();

        }
    })
    $('#Emerald').on('click', function () {
        Score = Score + emerald;
        console.log("New Score= " + Score);
        $('#final_Score').text(Score);
        if (Score == Random) {
            winner();
        } else if (Score > Random) {
            loser();

        }
    })
    function reset() {
        Random = Math.floor(Math.random() * 200 + 101);
        console.log(Random)
        $('#goal').text(Random);
        diamond = Math.floor(Math.random() * 24 + 1);
        ruby = Math.floor(Math.random() * 24 + 1);
        sapphire = Math.floor(Math.random() * 24 + 1);
        emerald = Math.floor(Math.random() * 24 + 1);
        Score = 0;
        $('#final_Score').text(Score);
    }

    function winner() {
        alert("Great Job!");
        wins++;
        $('#Wins').text(wins);
        reset();

    }

    function loser() {
        alert("Try Again");
        losses++;
        $('#Losses').text(losses);
        reset();
        dead();
    }

    function dead() {
        if (Score != Random) {
            lives--;
            $('#Lives').text(lives);
            reset();
        } if (lives === 0) {
            alert("Game Over, Please Try Again!");
            location.reload();
        }
    }
})