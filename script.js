var url = "https://official-joke-api.appspot.com/random_joke";

async function random_joke() {
    mydata = await ( await fetch(url)).json();
    document.getElementById("question").innerHTML = mydata["setup"];
    document.getElementById("answer").innerHTML = mydata["punchline"];


}
random_joke();