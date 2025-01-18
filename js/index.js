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

    console.log(`name: ${name}, email: ${email}, message: ${message}`)
}