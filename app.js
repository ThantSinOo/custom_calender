const currentDate = document.querySelector(".currentDate"),
dayTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll('.icons span');




// Getting Dates , Months, Years 
let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

const months = [
    'Janauary','February','March','April','May','June','July','August','September','October','November','December'
]

const loadCalender = () =>{
    let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay();
    let lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(currentYear, currentMonth , lastDateofMonth).getDate();
    let lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    let liTag = "";

    for(let i =firstDayofMonth; i> 0; i --){
        liTag += `<li class="inactive">${lastDateofLastMonth -i + 1}</li>`
    }

    for(let i = 1; i <= lastDateofMonth; i ++){
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`
        // console.log('Days =>', i);
    }

    for(let i = lastDayofMonth; i < 6; i ++){
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
    dayTag.innerHTML = liTag;

}

loadCalender();

prevNextIcon.forEach(icon =>{
    icon.addEventListener("click", ()=>{
        console.log(icon);
        currentMonth = icon.id == "prev" ? currentMonth - 1 : currentMonth + 1;
        
        if(currentMonth < 0 || currentMonth > 11) {
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        }else{
            date = new Date();
        }
        
        loadCalender();
    })
})

