import http from './helper.js'

document.body.onload = async function(){
	let content_body = document.querySelector("#content");
	let content = document.createElement("svg");
    let win_width = window.innerWidth;
	if (win_width>800){
		// show desktop content
		content.src = './static/about_d.svg'
	} else {
		// show mobile content
		content.src = './static/about_m.svg'
	}
	content_body.append(content);
    
}

document.querySelector("#send").onclick = ()=>{ // send button logic
	let message = document.querySelector("textarea#input").value;
    send_user_chat(message)
}

function send_user_chat(message){
	show_note(message, "Sent user chat")
}
function send_ai_chat(){}


function show_note(message="test message", title=""){
    console.log(message)
    let notification = document.querySelector("#notification");
    document.querySelector("#note_message").innerHTML = message;
    document.querySelector("#note_title").innerHTML = title;
    document.querySelector("#note_close").onclick = hide_note
    notification.classList.add("visible")
}
export function hide_note(){
    notification.classList.remove("visible");
}
