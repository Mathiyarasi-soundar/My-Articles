//layout and popup 
var mlayout = document.querySelector(".layout")
var mpopup = document.querySelector(".popup")
var mplus = document.querySelector(".plus")
mplus.addEventListener("click", function () {
    mlayout.style.display = "block"
    mpopup.style.display = "block"
})
//select cancel button
var mbuttncancel = document.getElementById("buttncancel")
var mtext = document.querySelector(".text")
mbuttncancel.addEventListener("click", function (event) {
    event.preventDefault()
    mlayout.style.display = "none"
    mpopup.style.display = "none"
})

//bookcontainer,titleinput,authorinput,descriptioninput,buttnadd
var mbuttnadd = document.getElementById("buttnadd")
var marticlecontainer = document.querySelector(".article-container")
var mtitileinput = document.querySelector(".titleinput")
var mauthorinput = document.querySelector(".authorinput")
var mdescriptioninput = document.querySelector(".descriptioninput")

mbuttnadd.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "article-box")
    div.innerHTML = `<h3>${mtitileinput.value}</h3>
        <h5>${mauthorinput.value}</h5>
        <p>${mdescriptioninput.value}</p>
    <button class="btn" onclick="deletebook(event)">Delete</button>`
    marticlecontainer.append(div)
    mlayout.style.display = "none"
    mpopup.style.display = "none"
})

//Delete button
var mbtn = document.querySelector("btn")
function deletebook(event) {
    event.target.parentElement.remove()
}


