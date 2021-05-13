function Add_USER() {
    Player1=document.getElementById("Player1_NameInput").value;
    Player2=document.getElementById("Player2_NameInput").value;

    localStorage.setItem("Player1_name",Player1);
    localStorage.setItem("Player2_name",Player2);
    window.location="game_page.html";
}