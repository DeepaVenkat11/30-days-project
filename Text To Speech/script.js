const speech = document.getElementById("box");

var TextToSpeech = new SpeechSynthesisUtterance();

function speak(){
    TextToSpeech.text = speech.value;
    TextToSpeech.volume =1;
    TextToSpeech.pitch=1;
    TextToSpeech.rate=1;
    window.speechSynthesis.speak(TextToSpeech);
    

}

