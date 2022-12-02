let box = document.getElementById("box");
let cards = document.getElementById("cards")
let toggleitem = document.querySelector('.toggle-menu-container');
let element =document.querySelector('#expand')
const apiUrl = "https://dev.deepthought.education/assets/uploads/files/others/project.json";
const proxy = "https://api.allorigins.win/raw?url="


let title = ["Task Heading 1","Task Heading 2","Task Heading 3","Task Heading 4","Task Heading 5","Task Heading 6","Task Heading 7" ]
        let task1 = document.querySelector("#task1").innerHTML = title[0];
        let task2 = document.querySelector("#task2").innerHTML = title[1];
        let task3 = document.querySelector("#task3").innerHTML = title[2];
        let task4 = document.querySelector("#task4").innerHTML = title[3];
        let task5 = document.querySelector("#task5").innerHTML = title[4];
        let task6 = document.querySelector("#task6").innerHTML = title[5];



        let menubar = document.getElementById('menu-bar')
        menubar.onclick=()=>{
            toggleitem.classList.toggle('active');
            toggleitem.toggleClass('clicked')
        }
        
        document.querySelector('#close-menu').onclick=()=>{
            toggleitem.classList.remove('active')
        }


        element.onclick = () =>{
            element.style.transform = "rotate(180deg)"
        };
    

function fetchData(url){
    fetch(proxy+url)
    .then(res => res.json())
    .then(data => {
     console.log(data.tasks[0].assets)
     DisplayData(data.tasks[0].assets)
            })
        }