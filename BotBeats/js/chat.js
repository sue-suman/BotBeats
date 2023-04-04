var coll=document.getElementsByClassName('collapsible');
//smooth transion or opening of chatbox
for(let i=0;i<coll.length;i++){
    coll[i].addEventListener("click",function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight=null;
        }
        else{
            content.style.maxHeight=content.scrollHeight+"px";
        }
    });
}
function getTime(){
    let today=new Date();
    hours=today.getHours();
    minutes=today.getMinutes();
    if(hours<10){
        hours='0'+hours;
    }
    if(minutes<10){
        minutes='0'+minutes;
    }
    let time= hours+":"+minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    let time = getTime();
    $("#chat-timestamp").append(time);
    document.getElementById("userText").scrollIntoView(false);
}

//calling the function we created previously.
firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
};

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();
    if (userText == "") {
        userText = "Hmmmm....";
    }
    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

function addEmoji(emoji) {
    let userText=  $("#textInput").val();
    textInput.value += emoji;
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    setTimeout(() => {
        getHardResponse(sampleText);
    }, 1000)
} 

// For emojies.
function toggleEmojiDrawer() {
    let drawer = document.getElementById('drawer');
    if (drawer.classList.contains('hidden')) {
        drawer.classList.remove('hidden');
        return{
            setters:[
                function(clickOutside_drive){
                    export_1({
                        "ClickOutsideDrive":clickOutside_drive["ClickOutsideDrive"]
                    });
                }],
                execute: function(){
            }
        }
    } else {
        drawer.classList.add('hidden');
    }
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    setTimeout(() => {
        getHardResponse(sampleText);
    }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("❤️")
}

// Press enter to send a message
$("#textInput").keypress(function (e){
    if (e.which == 13) {
        getResponse();
    }
});