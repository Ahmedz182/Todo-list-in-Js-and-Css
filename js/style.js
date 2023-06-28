//tags 
const div = "div"
const input = "input"
let todoList = []

let root = document.getElementById('root')
let divv = document.createElement("div")
divv.className = "heading"
root.appendChild(divv)
let heading = document.createElement('h1')
heading.innerText = "TodoList"

divv.appendChild(heading)


let logo = document.createElement("img")
logo.src = "./asset/logo2.png"
divv.appendChild(logo)

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



let taskList = document.createElement(div)
taskList.className = "taskList"
root.appendChild(taskList)




let table = document.createElement("table")
table.className = "table"
taskList.appendChild(table)

let thead = document.createElement("thead")
thead.className = "thead"
table.appendChild(thead)




let subHead = document.createElement("th")
subHead.innerText = "Your Tasks are here"
subHead.className = "listhead"
subHead.style.color = "#363753"
thead.appendChild(subHead)


let tbody = document.createElement("tbody")
tbody.className = "table"
table.appendChild(tbody)



let footertext = document.createElement("p")
footertext.innerText = "Craft by Ahmed 👨🏻‍💻"
footertext.className = "footer"
root.appendChild(footertext)

let dark = document.createElement("button")
dark.innerText = "Dark Mode🌙"
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
        dark.innerText = "Light Mode😎"
    } else if (currentBgColor === "rgb(43, 49, 49)") {
        btn.style.backgroundColor = "#363753";
        btn.style.color = "#fefefe";
        bg.style.backgroundColor = "#fefefe";
        thead.style.backgroundColor = "#5cd2c6";
        subHead.style.color = "#fefefe";
        heading.style.color = "#363753";
        footertext.style.color = "#363753";
        dark.innerText = "Dark Mode🌙"
    }
};

dark.onclick = chnge;

btn.onclick = function () {


    if (taskAdd.value != '') {
        todoList.push(taskAdd.value)
        render();

    }
    console.table(todoList);

};

const render = () => {

    let data = ``
    document.querySelectorAll("td").forEach(function (e) { e.remove() })
    todoList.forEach((i, index) => {


        data += `
        <tr>
        <td>
        ${index + 1} : <input type="checkbox"> ${i}
        </td>
        <td class="btn">
        <button onclick="del">Delete</button>
        <button>Edit</button></>
        </td>
        </tr>
        
        `
        tbody.innerHTML = data
        taskAdd.value = ''

    })
    function del() {
        todoList.pop(i)
        console.log(todoList.pop(i));
    }

}
