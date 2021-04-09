
const addMentor = () => {
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log( response  )
        }
    }

    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/marianalimon/mentors.json", true);

    xhttp.send( JSON.stringify(mentor) );
}

let mentor = {
    name:" ",
    age : 0,
    tel : 0
}

let btnSend = document.getElementById("btnMagic")

let sendBtn = function(){
    /* mentor.name = document.getElementById("name").value
    mentor.age = document.getElementById("age").value
    mentor.tel = document.getElementById("telephone").value */

    mentor.name = document.forms[0].elements[0].value;
    mentor.age = document.forms[0].elements[1].value;
    mentor.tel = document.forms[0].elements[2].value;

    addMentor()

    document.forms[0].elements[0].value = "";
    document.forms[0].elements[1].value = "";
    document.forms[0].elements[2].value = "";  
}


btnSend.addEventListener("click", sendBtn)

/* {"name":"-MXnsv8PhG7bDOf5Gddr"} */ 