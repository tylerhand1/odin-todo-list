export default function loadInbox() {
    const projectContainer = document.querySelector('#project-container');

    const header2 = document.createElement('h2');
    header2.classList.add('project-name');
    header2.textContent = `Inbox`;

    const addTaskDiv = document.createElement('div');
    addTaskDiv.classList.add('add-task');
    addTaskDiv.id = `add-task`;
    addTaskDiv.textContent = `+ Add Project`;

    projectContainer.appendChild(header2);
    projectContainer.appendChild(addTaskDiv);
}