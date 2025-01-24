// **FOOTER AND COPYRIGHT**
const footer = document.createElement("footer")
const body = document.querySelector("body")
body.appendChild(footer)

    //create date
const today = new Date()
const thisYear = today.getFullYear()

    //create copyright
const copyright = document.createElement("p")
copyright.innerHTML = `© J. Kuffler ${thisYear}`

    //add copyright to footer
footer.appendChild(copyright)

// **SKILLS SECTION**
const skills = ["bowling", "data management", "pattern recognition", "learning new things", "cooking", "repairing things", "installing things"]
const skillsSection = document.getElementById("skills")
const skillsList = skillsSection.querySelector("ul")

for(let i=0; i < skills.length; i++) {
    const skill = document.createElement("li")
    skill.textContent = skills[i]
    skillsList.appendChild(skill)
}

// **MESSAGES**
const messageForm = document.querySelector("form[name='leave_message']");
// console.log(messageForm)
messageForm.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
      
 
    const name = e.target.usersName.value
    const email = e.target.usersEmail.value
    const message = e.target.usersMessage.value
    // console.log(`name: ${name}, email: ${email}, message: ${message}`)
    const messageSection = document.querySelector("#messages")
    // console.log(messageSection)
    messageSection.style.display = "flex"
    const messageList = document.querySelector("#msgList")
    // console.log(messageList)

    // CREATING MESSAGE
    const newMessage = document.createElement("li")
    const nameEmail = document.createElement("a")
    nameEmail.textContent = name
    nameEmail.href = `mailto:${email}`
    nameEmail.target = "_blank"
    newMessage.appendChild(nameEmail)
    const msgTxt = document.createElement("span")
    msgTxt.textContent = ` wrote: ${message}`
    // REMOVE BUTTON
    const removeButton = document.createElement("button")
    removeButton.innerText = "R E M O V E"
    removeButton.setAttribute("type", "button")
    
    removeButton.addEventListener("click", handleRemove)
    
    function handleRemove() {
        const entry = removeButton.closest("li")
        entry.remove()
        if (messageList.children.length === 0) {
            messageSection.style.display = "none";
        }
           
    }
    // DISPLAY MESSAGE IN ALL ITS GLORY
    newMessage.appendChild(msgTxt)
    newMessage.appendChild(removeButton)
    messageList.appendChild(newMessage)
    // Show message section if it's hidden
    messageSection.style.display = "flex";
    messageForm.reset()  
}