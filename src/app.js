const projectsContainer = document.getElementById('projects-container');

fetch('./projects.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');

            projectElement.innerHTML = `
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <img src="${project.image}" alt="${project.title}">
                ${project.video ? `<iframe width="560" height="315" src="${project.video}" frameborder="0" allowfullscreen></iframe>` : ''}
            `;

            projectsContainer.appendChild(projectElement);
        });
    })
    .catch(error => console.error('Error loading projects:', error));