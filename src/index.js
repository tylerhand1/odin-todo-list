import './style.css';
import setFooter from './js/footer';
import loadInbox from './js/inbox';
import loadToday from './js/today';
import loadThisWeek from './js/this-week';

function loadFirstTime() {
    setFooter();
    setSidebarEventListeners();
}

function setSidebarEventListeners() {
    const listItems = document.querySelectorAll('.list-item');
    const addProjectDiv = document.querySelector('#add-project');

    listItems.forEach(listItem => listItem.addEventListener('click', e => changeContent(e)));
    addProjectDiv.addEventListener('click', e => addProject(e));
}

function clearProjectContainer() {
    const projectContainer = document.querySelector('#project-container');

    while(projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.lastChild);
    }
}

function changeContent(e) {
    clearProjectContainer();

    switch(Number.parseInt(e.target.dataset.key)) {
        case 0:
            loadInbox();
            break;
        case 1:
            loadToday();
            break;
        case 2:
            loadThisWeek();
    }
}

function addProject(e) {
    console.log(e.target);
}

loadFirstTime();