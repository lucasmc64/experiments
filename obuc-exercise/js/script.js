/* Formulário e preenchimento da tabela */

let arrLocaisTrabalho = JSON.parse(window.sessionStorage.getItem('arrLocaisTrabalho')) || []

console.log(arrLocaisTrabalho)

let button_add_workplace = window.document.querySelector('form button[type="submit"]')
let table_body = window.document.querySelector('table tbody')

function fillTable() {
    table_body.innerHTML = ''
    
    arrLocaisTrabalho.forEach((item, index) => {
        const tr = window.document.createElement('tr')

        const td_building = window.document.createElement('td')
        const td_workplace = window.document.createElement('td')
        const td_actions = window.document.createElement('td')

        const button_edit = window.document.createElement('button')
        const button_delete = window.document.createElement('button')

        const span_edit = window.document.createElement('span')
        const span_delete = window.document.createElement('span')

        button_edit.id = `edit-${index}`
        button_delete.id = `delete-${index}`

        span_edit.classList.add('material-icons-outlined')
        span_delete.classList.add('material-icons-outlined')

        td_building.textContent = item.building
        td_workplace.textContent = item.workplace

        span_edit.textContent = 'edit'
        span_delete.textContent = 'delete'

        button_edit.addEventListener('click', editWorkplace)
        button_delete.addEventListener('click', deleteWorkplace)

        button_edit.appendChild(span_edit)
        button_delete.appendChild(span_delete)

        td_actions.appendChild(button_edit)
        td_actions.appendChild(button_delete)

        tr.appendChild(td_building)
        tr.appendChild(td_workplace)
        tr.appendChild(td_actions)

        table_body.appendChild(tr)
    });
}

window.document.querySelector('body').onload = fillTable

function addWorkplace(event) {
    event.preventDefault()
    
    let select_building = window.document.querySelector('form select[name="building"]')

    if(select_building.value == 'default') {
        return
    }

    let input_workplace = window.document.querySelector('form input[name="wokplace"]')

    if(input_workplace.value.length == 0) {
        return
    }

    let new_workplace = {
        building: select_building.value,
        workplace: input_workplace.value
    }

    arrLocaisTrabalho.push(new_workplace)

    window.sessionStorage.setItem('arrLocaisTrabalho', JSON.stringify(arrLocaisTrabalho))

    fillTable()
}

button_add_workplace.addEventListener('click', addWorkplace)

function doneEdit(event) {
    const index = event.currentTarget.id.slice(5)

    const tds = table_body.getElementsByTagName('tr')[index].getElementsByTagName('td')

    const new_building_value = tds[0].querySelector('select').value
    const new_workplace_value = tds[1].querySelector('input').value

    arrLocaisTrabalho[index].building = new_building_value
    arrLocaisTrabalho[index].workplace = new_workplace_value

    window.sessionStorage.setItem('arrLocaisTrabalho', JSON.stringify(arrLocaisTrabalho))

    fillTable()
}

function cancelEdit() {
    fillTable()
}

function editWorkplace(event) {
    const index = event.currentTarget.id.slice(5)

    const tds = table_body.getElementsByTagName('tr')[index].getElementsByTagName('td')

    const td_building = tds[0]
    const td_workplace = tds[1]
    const td_actions = tds[2]
    
    const td_building_old_value = td_building.textContent
    const td_workplace_old_value = td_workplace.textContent
    
    td_building.innerHTML = td_workplace.innerHTML = ''

    const all_options = window.document.querySelectorAll('form select[name="building"] option')
    const options = []

    for(option of all_options) {
        if(option.value !== 'default') {
            options.push(option.value)
        }
    }

    /* Select */

    const select_building = window.document.createElement('select')

    options.forEach((item) => {
        const option_building = window.document.createElement('option')

        option_building.value = item
        option_building.textContent = item

        if(item === td_building_old_value) {
            option_building.selected = 'true'
        }

        select_building.appendChild(option_building)
    })

    td_building.appendChild(select_building)

    /* Input */

    const input_workplace = window.document.createElement('input')

    input_workplace.type = 'text'
    input_workplace.required = true
    input_workplace.value = td_workplace_old_value

    td_workplace.appendChild(input_workplace)   
    
    /* Actions */

    const actions_buttons = td_actions.getElementsByTagName('button')
    const button_done = actions_buttons[0]
    const button_cancel = actions_buttons[1]
    const span_done = button_done.querySelector('span')
    const span_cancel = button_cancel.querySelector('span')

    button_done.removeEventListener('click', editWorkplace)
    button_cancel.removeEventListener('click', deleteWorkplace)

    button_done.id = `done-${index}`
    button_cancel.id = `cancel`

    span_done.textContent = 'done'
    span_cancel.textContent = 'close'

    button_done.addEventListener('click', doneEdit)
    button_cancel.addEventListener('click', cancelEdit)
}

function deleteWorkplace(event) {
    const index = event.currentTarget.id.slice(7)

    const response = confirm("Deseja mesmo deletar esse local de trabalho?")

    response && arrLocaisTrabalho.splice(index, 1)
    
    fillTable()
}

/* Responsividade */

const side_menu = window.document.querySelector('div.main aside')

const button_close = window.document.createElement('button')
const span_close = window.document.createElement('span')
const div_overlay = window.document.createElement('div')

button_close.classList.add('close')
button_close.classList.add('hide')
span_close.classList.add('material-icons-outlined')
div_overlay.classList.add('overlay')

span_close.textContent = 'close'

button_close.appendChild(span_close)
side_menu.appendChild(button_close)
window.document.querySelector('body').appendChild(div_overlay)

function sideMenuState() {
    if(window.innerWidth < 776) {
        if(!side_menu.classList.contains('hide')) {
            side_menu.classList.add('hide')
            button_close.classList.remove('hide')
        }
    } else {
        if(side_menu.classList.contains('hide')) {
            side_menu.classList.remove('hide')
            button_close.classList.add('hide')
        }
    }
}

window.addEventListener('resize', sideMenuState)
window.addEventListener('load', sideMenuState)


const button_side_menu = window.document.querySelector('header nav ul li.menu button')
const button_close_side_menu = window.document.querySelector('aside button.close')
const body = window.document.querySelector('body')

function showAndHideSideMenu() {
    if(side_menu.classList.contains('hide')) {
        side_menu.classList.remove('hide')
        div_overlay.classList.add('active-overlay')
    } else {
        side_menu.classList.add('hide')
        div_overlay.classList.remove('active-overlay')
    }
}

button_side_menu.addEventListener('click', showAndHideSideMenu)
button_close_side_menu.addEventListener('click', showAndHideSideMenu)