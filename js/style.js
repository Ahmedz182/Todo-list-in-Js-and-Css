//tags 
const div = "div"
const input = "input"

let root = document.getElementById('root')
let heading = document.createElement('h1')
heading.innerText = "Todo List"
heading.className = "heading"
root.appendChild(heading)

let mainContainer = document.createElement("div")
mainContainer.className = "addTask"
root.appendChild(mainContainer)

let taskAdd = document.createElement("input")
mainContainer.appendChild(taskAdd)
taskAdd.placeholder = "Enter your Task"
taskAdd.className = "task"

let btn = document.createElement("i")
btn.className = " fa fa-add add"
mainContainer.appendChild(btn);

btn.onclick = function () {
    alert("I'm Alive")
};

let taskList = document.createElement(div)
taskList.className = "taskList"
root.appendChild(taskList)

let table = document.createElement("table")
table.className = "table"
taskList.appendChild(table)

let thead = document.createElement("thead")
thead.className = "thead"
table.appendChild(thead)


let tr = document.createElement("tr")
thead.appendChild(tr)

let subHead = document.createElement("th")
subHead.innerText = "Your Tasks are here"
subHead.className = "listhead"
tr.appendChild(subHead)


let tbody = document.createElement("tbody")
tbody.className = "table"
table.appendChild(tbody)

let tr2 = document.createElement("tr")
tr2.className = "mainTasks"
tbody.appendChild(tr2)

let check = document.createElement(input);
check.type = "checkbox"
tr2.appendChild(check);



let td = document.createElement("td");
td.innerText = "its my first task"
tr2.appendChild(td);

check.onclick = function () {
    if (this.checked) {
        td.style = "text-decoration: line-through"
    } else {
        td.style = "text-decoration: none"
    }
}


let footertext = document.createElement("p")
footertext.innerText = "Craft by Ahmed 👨🏻‍💻"
footertext.className = "footer"
root.appendChild(footertext)

let dark = document.createElement("button")
dark.innerText = "Magic 🪄"
dark.className = "dark"
root.appendChild(dark)
let bg = document.body

let chnge = () => {
    let currentBgColor = getComputedStyle(bg).backgroundColor;

    if (currentBgColor === "rgb(254, 254, 254)") {
        btn.style.backgroundColor = "#5cd2c6";
        btn.style.color = "#363753";
        bg.style.backgroundColor = "#2b3131";
        thead.style.backgroundColor = "#379b91";
        subHead.style.color = "#fefefe";
        heading.style.color = "#fefefe";
        footertext.style.color = "#fefefe";
    } else if (currentBgColor === "rgb(43, 49, 49)") {
        btn.style.backgroundColor = "#363753";
        btn.style.color = "#fefefe";
        bg.style.backgroundColor = "#fefefe";
        thead.style.backgroundColor = "#5cd2c6";
        subHead.style.color = "#fefefe";
        heading.style.color = "#363753";
        footertext.style.color = "#363753";
    }
};

dark.onclick = chnge;
