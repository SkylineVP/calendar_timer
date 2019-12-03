'use strict';




function createTableElement(day) {
    const element = document.createElement("td");
    element.innerText=day.date.getDate();
    return element;


}

function createBodyTableRow(day) {
    const bodyTableRow= document.createElement("tr");
    day.forEach(value=>{
        bodyTableRow.appendChild(createTableElement(value));
    });

    return bodyTableRow;
}

export default function (month) {

    const calendarBody = document.createElement('tbody');
    month.weeks.forEach(value =>{
        calendarBody.appendChild(createBodyTableRow(value.days));
    });



    return calendarBody;
}

