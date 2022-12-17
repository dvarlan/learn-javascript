function saveLead() {
    console.log("Button clicked!")
}

let inputBtn = document.getElementById("input-btn")

//inputBtn.addEventListener("click", saveLead())

inputBtn.addEventListener("click", function() {
    console.log("Button clicked from listener!")
})