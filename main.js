Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    pngquality:90
  });
  
  camera = document.getElementById("camera");
  
  Webcam.attach( '#camera');
  
  function take_snapshot()
  {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
  
    });
  }
  
  console.log('ml5 version:', ml5.version);
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ptPeCfYDG/',modelLoaded);
  
  function modelLoaded(){
    console.log('Model Loaded!');
  }
  
  function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "Hello how are you doing"
    speak_data_2 = "Lets call it a truce" 
    speak_data_3 = "Yes you can do it" 
    speak_data_4 = "No you cant do it" 
    speak_data_5 = "That was extremely cool" 
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
  }
  
function check(){
  img = document.getElementById('captured_image');
  classifier.classify(img, gotResult);
  }

  
function gotResult(error,results) {
  if (error) {
      console.error(error);
  } else {
      console.log(results);
      document.getElementById("result_emotion_name").innerHTML = results[0].label;
      document.getElementById("result_emotion_name2").innerHTML = results[1].label;
      prediction_1 = results[0].label;
      prediction_2 = results[1].label;
      speak();
      if(results[0].label == "thumbs up")
      {
          document.getElementById("update_emoji").innerHTML = "&#128077;";
      }
      if(results[0].label == "thumbs down")
      {
          document.getElementById("update_emoji").innerHTML = "&#128078;";
      }
      if(results[0].label == "rad")
      {
          document.getElementById("update_emoji").innerHTML = "&#129304;";
      }

      if(results[1].label == "peace")
      {
          document.getElementById("update_emoji2").innerHTML = "&#9996;";
      }
      if(results[1].label == "wave")
      {
          document.getElementById("update_emoji2").innerHTML = "&#128075;";
      }
  }
  }
