'use strict';




function createTableElement(day) {
    day.days.forEach(day=>{
        const element = document.createElement("td");
        element.innerText=day.toLocaleString('ru', {weekday: 'short'});
    });


}

function createBodyTableRow(month) {
    month.weeks.forEach(value =>{
        const bodyTableRow= document.createElement("tr");
        bodyTableRow.appendChild(createTableElement(value));

    })


    return bodyTableRow;
}

export default function (month) {

    const calendarBody = document.createElement('tbody');
    calendarBody.appendChild(createBodyTableRow(month));


    return calendarBody;
}

