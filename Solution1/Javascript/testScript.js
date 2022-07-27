//class and object
class hiragana {
  constructor(romaji,kana){
    this.romaji = romaji;
    this.kana = kana;
  }
};

let hiragana_a = new hiragana("A","あ")
let hiragana_e = new hiragana("E","え")
let hiragana_o = new hiragana("O","お")
let hiragana_i = new hiragana("I","い")
let hiragana_u = new hiragana("U", "う");

//Array of hiragana vowels//
var hiragana_vowels = [hiragana_a, hiragana_e, hiragana_o, hiragana_u, hiragana_i];

hiragana_vowels instanceof Array;

function myFunction(){
  alert("Hello");
}


//Event listener enter key on the keyboard
var element = document.getElementById("form1");
element.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        displayResult();
        event.preventDefault();
    }
});



var hiragana_vowel;

//Replaces start prompt with question//
var question;
var kana;
var count = 0;



function displayQuestion() {

    //hides results block
    document.getElementById('results').style.display = "none";

//creates question variable
    var hiragana_vowel = hiragana_vowels[Math.floor(Math.random() * hiragana_vowels.length)];
    let kana = hiragana_vowel.kana;
    //displays question
    document.getElementById('question').style.display = "block";
    document.getElementById('question').innerHTML = kana;
  //hides start button block
  document.getElementById('start-button-id').style.display = "none";
  //displays answer form
    document.getElementById("answer-form").style.display = "block";
    document.getElementById("answer").value = "";
    //return kana;
    question = kana;
    
    
}


//Shows Results and asks if user wants to continue the quiz//
function displayResult() {
    
    //alert("This is the question:"+ question);
    //creates answer variable
    var user_answer = document.getElementById("answer").value;
    let answer = user_answer;

    //kana translated
    var romaji;
    var kanaFound = false;


    /*
     * Searches through hiragana vowel array and compares the question being asked to the array. 
     * Once the question is paired to the correct Kana, the "translated" romaji is set according to the romaji property of the array. 
     * At that point the loops break and the user input is compared to the translated kana character.
    */
    while (kanaFound == false) {
        for (var i = 0; i < hiragana_vowels.length; i++) {

            var checker = hiragana_vowels[i].kana;
            
           


            if (question == checker.toLowerCase()) {
                
                romaji = hiragana_vowels[i].romaji;
                kanaFound = true;
                i = 25;
                
            }
           else {
                
            }
            
        }
    }
    
    
    //hides answer block
    document.getElementById('answer-form').style.display = "none";
    document.getElementById('results').style.display = "block";
    document.getElementById('result').style.display = "none";

    /*test
    document.getElementById('result').style.display = "block";
    document.getElementById('result').innerHTML = answer;   
    */
    //displays results
    
    if (answer.toLowerCase() == romaji.toLowerCase()) {
        document.getElementById('question').style.display = "none";

        document.getElementById('result').style.display = "block";

        document.getElementById('result').innerHTML = "Correct!";

        document.getElementById('continue').style.display = "block";
        count++;
        
    }
    else {
        document.getElementById('question').style.display = "none";

        document.getElementById('result').style.display = "block";

        document.getElementById('result').innerHTML = "Incorrect...";

        document.getElementById('continue').style.display = "block";
    }
    
}
