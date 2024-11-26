const menuT = document.getElementById("menu-toggle") as HTMLElement;
const navList = document.getElementById("navList") as HTMLElement;

if(menuT)
{
    menuT.addEventListener('click', function () {
        navList.classList.toggle('active');
        menuT.ariaExpanded = menuT.ariaExpanded == 'true' ? 'false' : 'true';
});
}

class userInputs
{
    nameInput;
    emailInput;
    messageInput;
    formInputs;

    constructor()
    {
        this.nameInput = document.getElementById("name") as HTMLInputElement;
        this.emailInput = document.getElementById("email") as HTMLInputElement;
        this.messageInput = document.getElementById("message") as HTMLTextAreaElement;
        this.formInputs = document.getElementById("formInputs") as HTMLFormElement;
    }

    takeDatas(event: Event)
    {
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


