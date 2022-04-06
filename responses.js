function getBotResponse(input) {
    //rock paper scissors
    if (input == "Yoga") {
        return "The purpose of yoga is to build strength, awareness and harmony in both the mind and body";
    } else if (input == "Benifits of yoga") {
        return "Yoga can ease arthritis symptoms, benefits heart health,mproves strength, balance and flexibility";
    } else if (input == " Surya Namaskar") {
        return "ones the entire body, helps with weight loss, and strengthens muscles and joints";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }else if (input == "hi") {
        return "Hi there!😀";
    }else if (input == "bye") {
        return "Okay bye ! Take care!😃";
    }
     else {
        return "Try asking something else!";
    }
}