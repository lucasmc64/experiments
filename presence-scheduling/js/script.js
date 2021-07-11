let today = new Date();
let current_year = today.getFullYear();
let current_month = today.getMonth();
let current_day = today.getDate();
let current_week = calculateWeek(current_year, current_month, current_day);

let week_array = [
    'Domingo', 
    'Segunda-feira', 
    'Terça-feira', 
    'Quarta-feira', 
    'Quinta-feira', 
    'Sexta-feira', 
    'Sábado'
];
let month_array = [
    {
        month: 'Janeiro',
        days: 31
    }, 
    {
        month: 'Fevereiro',
        days: februaryDays()
    }, 
    {
        month: 'Março',
        days: 31
    }, 
    {
        month: 'Abril',
        days: 30
    }, 
    {
        month: 'Maio',
        days: 31
    }, 
    {
        month: 'Junho',
        days: 30
    }, 
    {
        month: 'Julho',
        days: 31
    }, 
    {
        month: 'Agosto',
        days: 31
    }, 
    {
        month: 'Setembro',
        days: 30
    }, 
    {
        month: 'Outubro',
        days: 31
    }, 
    {
        month: 'Novembro',
        days: 30
    }, 
    {
        month: 'Dezembro',
        days: 31
    }
];

let data = {
    2021: {
        2: {
            1: [
                {
                    img: 'img/andre.jpg',
                    name: 'André Beires'
                }
            ]
        },
        3: {
            1: [
                {
                    img: 'img/andre.jpg',
                    name: 'André Beires'
                }
            ],
            2: [
                {
                    img: 'img/andre.jpg',
                    name: 'André Beires'
                },
                {
                    img: 'img/nubia.jpg',
                    name: 'Núbia Mendonça'
                }
            ],
            13: [
                {
                    img: 'img/andre.jpg',
                    name: 'André Beires'
                }
            ],
            19: [
                {
                    img: 'img/andre.jpg',
                    name: 'André Beires'
                },
                {
                    img: 'img/diego.jpg',
                    name: 'Diego Beires'
                },
                {
                    img: 'img/nubia.jpg',
                    name: 'Núbia Mendonça'
                },
                {
                    img: 'img/andre.jpg',
                    name: 'André Beires'
                },
                {
                    img: 'img/diego.jpg',
                    name: 'Diego Beires'
                },
                {
                    img: 'img/nubia.jpg',
                    name: 'Núbia Mendonça'
                },
                {
                    img: 'img/andre.jpg',
                    name: 'André Beires'
                },
                {
                    img: 'img/diego.jpg',
                    name: 'Diego Beires'
                },
                {
                    img: 'img/nubia.jpg',
                    name: 'Núbia Mendonça'
                },
                {
                    img: 'img/nubia.jpg',
                    name: 'Núbia Mendonça'
                }
            ],
            20: [
                {
                    img: 'img/diego.jpg',
                    name: 'Diego Beires'
                }
            ]
        }
    }
}

let me = {
    img: 'img/lucas.jpg',
    name: 'Lucas Marçal Coutinho'
}

let last_window_width = window.innerWidth;

let view_mode = 'M';
let table = window.document.querySelector('.table');
let calendar_container = window.document.querySelector('.container.calendar');

function februaryDays() {
    return ((current_year % 400 == 0) || (current_year % 4 == 0 && current_year % 100 != 0)) ? 29 : 28
}

function calculateWeek(year, month, day) {
    return (Math.ceil(((new Date(year, month, 1)).getDay() + Number(day)) / 7) - 1);
}

function getMonthDays() {
    let month = new Date(current_year, current_month, 1);
    let where_month_starts_on_week = month.getDay();
    let month_days = [];

    for(i = 0; i < where_month_starts_on_week; i++) {
        month_days.push(0);
    }

    for(i = 0; i < month_array[current_month].days; i++) {
        month_days.push(i + 1);
    }

    while(month_days.length % 7 != 0) {
        month_days.push(0);
    }

    return month_days;
}

function setObucIconDate() {
    let iconDate = window.document.querySelector('#icon-date');

    iconDate.textContent = today.getDate();
}

function setCurrentDateOnDocument() {
    let current_date = window.document.querySelector('.current-date');
    if(window.innerWidth >= 892) {
        current_date.textContent = `${month_array[current_month].month} de ${current_year}`;
    } else {
        current_date.innerHTML = `${month_array[current_month].month}<br/>de ${current_year}`;
    }
}

function fillTableHead() {
    let table_head = table.querySelector('.table-head');
    table_head.innerHTML = ''
    let row = window.document.createElement('div');

    let week;
    if(window.innerWidth < 892) {
        week = week_array.map((day) => {
            return day.slice(0, 1);
        });
    } else if (window.innerWidth < 925) {        
        week = week_array.map((day) => {
            return day.split('-feira')[0];
        });
    } else {
        week = week_array;
    }
    
    for(i in week) {
        let th = window.document.createElement('div');

        th.classList.add('th-cel');

        th.textContent = week[i];

        if(i == 0) th.classList.add('cel-top-left');
        if(i == 6) th.classList.add('cel-top-right');

        row.appendChild(th);
    }

    row.classList.add('table-line');
    table_head.appendChild(row);
}

function generateSelectedDay() {
    let div = calendar_container.querySelector('.selected-day-container');
    div.innerHTML = '';

    let button = window.document.createElement('button');
    let span = window.document.createElement('span');
    let img = window.document.createElement('img');

    let unavailable_day = (current_day < today.getDate() && current_month == today.getMonth() && current_year == today.getFullYear()) || (current_month < today.getMonth() && current_year == today.getFullYear()) || (current_year < today.getFullYear()) || ((new Date(current_year, current_month, current_day)).getDay() == 0 || (new Date(current_year, current_month, current_day)).getDay() == 6)
    let have_people = Object.keys(data).includes(`${current_year}`) && Object.keys(data[current_year]).includes(`${current_month}`) && Object.keys(data[current_year][current_month]).includes(`${current_day}`);
    let number_of_peoples = have_people ? data[current_year][current_month][current_day].length : 0;

    if(unavailable_day) {
        span.textContent = 'Indisponível';
        img.src = 'svg/schedule-unavailable.svg';
        img.alt = 'Ícone de indisponível';
        button.classList.add('click-day-unavailable');
    } else if(number_of_peoples != 0 && data[current_year][current_month][current_day].includes(me)) {
        span.textContent = 'Desagendar';
        img.src = 'svg/schedule-remove.svg';
        img.alt = 'Ícone de remover';
        button.classList.add('hover-day-remove');
        button.addEventListener('click', removeMe); 
    } else if(number_of_peoples < 10) {
        span.textContent = 'Agendar';
        img.src = 'svg/schedule-available.svg';
        img.alt = 'Ícone de adicionar';
        button.addEventListener('click', addMe);
    } else {
        span.textContent = 'Dia cheio';
        img.src = 'svg/schedule-unavailable.svg';
        img.alt = 'Ícone de indisponível';
        button.classList.add('click-day-unavailable');
    }
    
    button.id = `day-${current_day}`
        
    button.classList.add('click-day');

    button.appendChild(img);
    button.appendChild(span);
    div.appendChild(button);
    
    if(have_people) {
        for(people of data[current_year][current_month][current_day]) {
            let figure = window.document.createElement('figure');
            let img = window.document.createElement('img');
            let span = window.document.createElement('span');

            img.src = people.img;
            img.alt = people.name;
            span.textContent = people.name;

            img.classList.add('people-border');
            figure.classList.add('people-item');

            figure.appendChild(img);
            figure.appendChild(span);
            div.appendChild(figure);
        }
    }

    calendar_container.appendChild(div);
}

function generateWeek(month_days, week) {
    let row = window.document.createElement('div');

    for(j = week * 7; j < week * 7 + 7; j++) {
        let td = window.document.createElement('div');
        
        if(month_days[j] != 0) {
            let span = window.document.createElement('span');
            span.textContent = month_days[j];
            td.appendChild(span);
            td.classList.add(`cel-${month_days[j]}`)

            td.addEventListener('click', selectDay);
            
            let day_on_week = (new Date(current_year, current_month, month_days[j])).getDay();
            let unavailable_day = (month_days[j] < today.getDate() && current_month == today.getMonth() && current_year == today.getFullYear()) || (current_month < today.getMonth() && current_year == today.getFullYear()) || (current_year < today.getFullYear()) || (day_on_week == 0 || day_on_week == 6)
            if(unavailable_day) {
                td.classList.add('cel-month-unavailable-days');
            } else {
                td.classList.add('cel-month-available-days');
            }

            if(window.innerWidth < 892) {
                if(Object.keys(data).includes(`${current_year}`) && Object.keys(data[current_year]).includes(`${current_month}`) && Object.keys(data[current_year][current_month]).includes(`${month_days[j]}`)) {
                    let div = window.document.createElement('div'); // Ponto ver no dia indicando que há pessoas
                    div.classList.add('cel-have-people');
                    td.appendChild(div);
                }
            }

            if(month_days[j] == current_day) {
                td.classList.add('cel-selected-day');
            }
            
            if(month_days[j] == today.getDate() && current_month == today.getMonth() && current_year == today.getFullYear()) {
                td.classList.add('cel-today');
            }

            if(window.innerWidth >= 892) {
                let div = window.document.createElement('div');
                if(Object.keys(data).includes(`${current_year}`) && Object.keys(data[current_year]).includes(`${current_month}`) && Object.keys(data[current_year][current_month]).includes(`${month_days[j]}`)) {
                    for(people of data[current_year][current_month][month_days[j]]) {
                        let figure = window.document.createElement('figure');
                        let img = window.document.createElement('img');
                        let span = window.document.createElement('span');
                        
                        img.src = people.img;
                        img.alt = people.name;
                        span.textContent = people.name;
                        
                        if(view_mode == 'M') {
                            span.classList.add('hide');
                            figure.classList.add('people-item-month');
                            div.classList.add('people-month');
                        } else if(view_mode == 'W') {
                            img.classList.add('people-border');
                            figure.classList.add('people-item-week');
                            div.classList.add('people-week');
                        }

                        figure.appendChild(img);
                        figure.appendChild(span);
                        div.appendChild(figure);
                    }
                }

                td.appendChild(div);

                let button = window.document.createElement('button');
                let span = window.document.createElement('span');
                let img = window.document.createElement('img');
                
                let number_of_peoples = Object.keys(data).includes(`${current_year}`) && Object.keys(data[current_year]).includes(`${current_month}`) && Object.keys(data[current_year][current_month]).includes(`${month_days[j]}`) ? data[current_year][current_month][month_days[j]].length : 0;

                if(unavailable_day) {
                    span.textContent = 'Indisponível';
                    img.src = 'svg/schedule-unavailable.svg';
                    img.alt = 'Ícone de indisponível';
                    button.classList.add('hover-day-unavailable');
                } else if(number_of_peoples != 0 && data[current_year][current_month][month_days[j]].includes(me)) {
                    span.textContent = 'Desagendar';
                    img.src = 'svg/schedule-remove.svg';
                    img.alt = 'Ícone de remover';
                    button.classList.add('hover-day-remove');
                    button.addEventListener('click', removeMe);        
                } else if(number_of_peoples < 10) {
                    span.textContent = 'Agendar';
                    img.src = 'svg/schedule-available.svg';
                    img.alt = 'Ícone de adicionar';
                    button.addEventListener('click', addMe);
                } else {
                    span.textContent = 'Dia cheio';
                    img.src = 'svg/schedule-unavailable.svg';
                    img.alt = 'Ícone de indisponível';
                    button.classList.add('hover-day-unavailable');
                }

                button.classList.add('hover-day');
                button.id = `${month_days[j]}`

                button.appendChild(img);
                button.appendChild(span);
                td.appendChild(button);
            }
        } else {
            td.classList.add('cel-other-month-days');
        }

        if((week + 1 == month_days.length / 7) || view_mode == 'W') {
            if(j == week * 7) {
                td.classList.add('cel-bottom-left');
            } else if(j + 1 == week * 7 + 7) {
                td.classList.add('cel-bottom-right');
            }
        }

        td.classList.add('td-cel');
        row.appendChild(td);
    }

    return row;
}

function fillTableBody() {
    let table_body = table.querySelector('.table-body');
    table_body.innerHTML = '';

    let month_days = getMonthDays();
    
    let row_limit = view_mode == 'M' ? month_days.length / 7 : 1;

    for(i = 0; i < row_limit; i++) {
        let row = generateWeek(month_days, view_mode == 'M' ? i : current_week);

        row.classList.add('table-line');
        table_body.appendChild(row);
    }

    if(window.innerWidth < 892) {
        generateSelectedDay();
    } else {
        calendar_container.querySelector('.selected-day-container').innerHTML = '';
    }
}

function fillTable() {
    fillTableHead();
    fillTableBody();
}

function changeViewMode() {
    if(view_mode == 'M') {
        view_mode = 'W';
    } else {
        view_mode = 'M';
    }

    fillTable();
}

function previousMW() {
    if(view_mode == 'M') {
        if(current_month == 0) {
            current_month = 11;
            current_year--;
            month_array[1].days = februaryDays();
        } else {
            current_month--;
        }

        if(current_month == today.getMonth() && current_year == today.getFullYear()) {
            current_day = today.getDate();
        } else {
            current_day = 1;
        }
        
        current_week = calculateWeek(current_year, current_month, current_day);
    } else if(view_mode == 'W') {
        if(current_week == 0) {
            if(current_month == 0) {
                current_month = 11;
                current_year--;
                
                month_array[1].days = februaryDays();
            } else {
                current_month--;
            }
            
            let last_day_of_month = month_array[current_month].days;
            current_day = last_day_of_month - (new Date(current_year, current_month, last_day_of_month)).getDay();
            current_week = calculateWeek(current_year, current_month, current_day);
        } else {
            current_week--;
            
            if(current_week == calculateWeek(today.getFullYear(), today.getMonth(), today.getDate()) && current_month == today.getMonth() && current_year == today.getFullYear()) {
                current_day = today.getDate();
            } else {
                current_day = current_day - 7 >= 1 ? current_day - 7 - (new Date(current_year, current_month, current_day)).getDay() : 1;
            }
        }
    }

    setCurrentDateOnDocument();
    fillTable();
}

function nextMW() {
    if(view_mode == 'M') {
        if(current_month == 11) {
            current_month = 0;
            current_year++;
            month_array[1].days = februaryDays();
        } else {
            current_month++;
        }

        if(current_month == today.getMonth() && current_year == today.getFullYear()) {
            current_day = today.getDate();
        } else {
            current_day = 1;
        }
        
        current_week = calculateWeek(current_year, current_month, current_day);
    } else if(view_mode == 'W') {
        if(current_week == calculateWeek(current_year, current_month, month_array[current_month].days)) {
            if(current_month == 11) {
                current_month = 0;
                current_year++;
                
                month_array[1].days = februaryDays();
            } else {
                current_month++;
            }
            
            current_day = 1;
            current_week = calculateWeek(current_year, current_month, current_day);
        } else {
            current_week++;
            
            if(current_week == calculateWeek(today.getFullYear(), today.getMonth(), today.getDate()) && current_month == today.getMonth() && current_year == today.getFullYear()) {
                current_day = today.getDate();
            } else {
                current_day = current_day + 7 - (new Date(current_year, current_month, current_day)).getDay();
            }
        }
    }


    setCurrentDateOnDocument();
    fillTable();
}

function currentMW() {
    current_year = today.getFullYear();
    current_month = today.getMonth();
    current_day = today.getDate();
    current_week = calculateWeek(current_year, current_month, current_day);

    setCurrentDateOnDocument();
    fillTable();
}

function selectDay() {
    window.document.querySelector('.cel-selected-day').classList.remove('cel-selected-day');
    current_day = Number(this.querySelector('span').textContent);
    window.document.querySelector(`.cel-${current_day}`).classList.add('cel-selected-day');
    current_week = calculateWeek(current_year, current_month, current_day);

    if(window.innerWidth < 892) {
        generateSelectedDay();
    }
}

function startApp() {
    setObucIconDate();
    setCurrentDateOnDocument();
    fillTable();
}

function responsiveness() {
    if(window.innerWidth != last_window_width && ((last_window_width >= 892 && window.innerWidth < 892) || (last_window_width < 892 && window.innerWidth >= 892) || (last_window_width >= 925 && window.innerWidth < 925) || (last_window_width < 925 && window.innerWidth >= 925))) {
        setCurrentDateOnDocument()
        fillTable();
    }

    last_window_width = window.innerWidth;
}

function addMe() {
    if(Object.keys(data).includes(`${current_year}`)) {
        if(Object.keys(data[current_year]).includes(`${current_month}`)) {
            if(!Object.keys(data[current_year][current_month]).includes(`${current_day}`)) {
                data[current_year][current_month][current_day] = [];
            }
        } else {
            data[current_year][current_month] = {};
            data[current_year][current_month][current_day] = [];
        }
    } else {
        data[current_year] = {};
        data[current_year][current_month] = {};
        data[current_year][current_month][current_day] = [];
    }

    if(data[current_year][current_month][current_day].length < 10) {
        data[current_year][current_month][current_day].push(me);
    }

    fillTable();
}

function removeMe() {
    if(Object.keys(data).includes(`${current_year}`)) {
        if(Object.keys(data[current_year]).includes(`${current_month}`)) {
            if(Object.keys(data[current_year][current_month]).includes(`${current_day}`)) {
                data[current_year][current_month][current_day] = data[current_year][current_month][current_day].filter((people) => {
                    return people != me;
                });

                if(data[current_year][current_month][current_day].length == 0) {
                    delete data[current_year][current_month][current_day];
                    
                    if(Object.keys(data[current_year][current_month]).length == 0) {
                        delete data[current_year][current_month];
                        
                        if(Object.keys(data[current_year]).length == 0) {
                            delete data[current_year];
                        }
                    }
                }
            }
        }
    }

    fillTable();
}

window.document.querySelector('body').onload = startApp;
window.addEventListener('resize', responsiveness);
window.document.querySelector('.view').addEventListener('click', changeViewMode);
window.document.querySelector('#previous').addEventListener('click', previousMW);
window.document.querySelector('#next').addEventListener('click', nextMW);
window.document.querySelector('#today').addEventListener('click', currentMW);