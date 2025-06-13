const projectsContainer = document.getElementById('projects-container');

const projects = [
  {
    title: "MEMOCLOCK",
    description: "My first college project. A simple alarm clock that forces the user to play a Simon says game to turn it off.",
    youtube: "KI55y5cqgig", // Example YouTube ID
    link: "https://github.com/yourusername/project-one"
  },
  {
    title: "Project Two",
    description: "Another project description.",
    youtube: "dQw4w9WgXcQ",
    link: "https://yourwebsite.com/project-two"
  }
];

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('projects');
  projects.forEach((proj, i) => {
    const div = document.createElement('div');
    div.className = 'project';
    div.style.animationDelay = `${i * 0.1 + 0.2}s`;

    let media = '';
    if (proj.image) {
      media = `<img src="${proj.image}" alt="Project image"/>`;
    } else if (proj.youtube) {
      media = `<iframe src="https://www.youtube.com/embed/${proj.youtube}" allowfullscreen></iframe>`;
    }

    div.innerHTML = `
      ${media}
      <h2>${proj.title}</h2>
      <p>${proj.description}</p>
      ${proj.link ? `<a href="${proj.link}" target="_blank">View Project</a>` : ''}
    `;
    container.appendChild(div);
  });
});