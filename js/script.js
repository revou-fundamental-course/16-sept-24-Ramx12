//ini js
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

//memunculkan prompt nama
var nama = prompt("Enter your name");
document.write("Hello " + nama + " ,Welcome To RapTv Website");

function validateForm(){
    let inputName = document.getElementById('input-name').value;
    if(inputName == ''){
        alert("inputan kosong");
    }else{
        document.getElementById('result-form').innerHTML = inputName;
        alert("Inputan berhasil dimasukkan")
    }
}


//validate form
function validateForm(){
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    document.getElementById("error-name").innerHTML = "";
    document.getElementById("error-birth-date").innerHTML = "";
    document.getElementById("error-gender").innerHTML = "";
    document.getElementById("error-messages").innerHTML = "";

    switch (true) { 
        case (name == ""):
            document.getElementById("error-name").innerHTML = "*Nama tidak Boleh kosong";
            return false;
        case (birthDate == ""):
            document.getElementById("error-birth-date").innerHTML = "*Isi Tanggal Lahir";
            return false;
        case (gender == ""):
            document.getElementById("error-gender").innerHTML = "*Pilih Salah Satu Gender";
            return false;
        case (messages == ""):
            document.getElementById("error-messages").innerHTML = "*Pesan Harap Di isi";
            return false;
    }

    document.forms["message-form"].reset();

    setSenderUI(name, birthDate, gender, messages);
    return false
}

// data output dari form
function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}