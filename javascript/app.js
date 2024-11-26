"use strict";
const menuT = document.getElementById("menu-toggle");
const navList = document.getElementById("navList");
if (menuT) {
    menuT.addEventListener('click', function () {
        navList.classList.toggle('active');
        menuT.ariaExpanded = menuT.ariaExpanded == 'true' ? 'false' : 'true';
    });
}
class userInputs {
    constructor() {
        this.nameInput = document.getElementById("name");
        this.emailInput = document.getElementById("email");
        this.messageInput = document.getElementById("message");
        this.formInputs = document.getElementById("formInputs");
    }
    takeDatas(event) {
        event.preventDefault();
        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const messageInput = this.messageInput.value;
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${messageInput}`);
        alert("Data successfully sent!");
        this.nameInput.value = "";
        this.emailInput.value = "";
        this.messageInput.value = "";
    }
}
const userInp = new userInputs();
userInp.formInputs.addEventListener("submit", userInp.takeDatas.bind(userInp));
