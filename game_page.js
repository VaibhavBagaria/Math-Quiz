player1_score = 0
player2_score = 0
Question_Turn = "Player1";
Answer_Turn = "Player2";

player1Name = localStorage.getItem("Player1_name")
player2Name = localStorage.getItem("Player2_name")

document.getElementById("Player1").innerHTML = player1Name + ":" + player1_score;
document.getElementById("Player2").innerHTML = player2Name + ":" + player2_score;

document.getElementById("Player_Question").innerHTML = "Question_Turn:" + player1Name;
document.getElementById("Player_Answer").innerHTML = "Answer_Turn:" + player2Name;

function Send_Numbers() {
    Number1 = document.getElementById("number1").value;
    Number2 = document.getElementById("number2").value;
    Actual_Answer = parseInt(Number1) * parseInt(Number2);
    console.log(Actual_Answer);

    quetion_number = "<h4>" + Number1 + "X" + Number2 + "</h4>";
    inputbox = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='Check()'>Check</button>";
    row = quetion_number + inputbox + check_button;
    console.log(row);
    document.getElementById("Ouput").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}


function Check() {
    answer = document.getElementById("input_check_box").value;
    console.log(answer);

    if (Actual_Answer == answer) {
        if (Answer_Turn == "Player1") {
            player1_score = player1_score + 1;
            document.getElementById("Player1").innerHTML = player1Name + ":" + player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("Player2").innerHTML = player2Name + ":" + player2_score;
        }
    } else {
        if (Answer_Turn == "Player1") {
            player1_score = player1_score - 1;
            document.getElementById("Player1").innerHTML = player1Name + ":" + player1_score;
        }
        else {
            player2_score = player2_score - 1;
            document.getElementById("Player2").innerHTML = player2Name + ":" + player2_score;
        }
    }

    if (Question_Turn == "Player1") {
        Question_Turn = "Player2";
        document.getElementById("Player_Question").innerHTML = "Question_Turn:" + player2Name;
    }else{
        Question_Turn = "Player1";
        document.getElementById("Player_Question").innerHTML = "Question_Turn:" + player1Name;
    }
    if (Answer_Turn == "Player1") {
        Answer_Turn = "Player2";
        document.getElementById("Player_Answer").innerHTML = "Answer_Turn:" + player2Name;
    }else{
        Answer_Turn = "Player1";
        document.getElementById("Player_Answer").innerHTML = "Answer_Turn:" + player1Name;
    }
    document.getElementById("Output").innerHTML="";
}