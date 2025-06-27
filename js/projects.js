const projects = [
    {
        title: "Malaria Cell Diagnosis Model",
        description: "Developed a machine learning model using Python and TensorFlow to predict malaria from blood cell images. The model achieved an accuracy of 95% on the test dataset.",
        githubLink: "https://github.com/kiran-pokhrel-91/sales-prediction",
        tools: ["Python", "Pandas", "TensorFlow", "Keras", "matplotlib", "seaborn"],
        category: "Data Science"
    },
];

// Function to create a project card
function createProjectCard(project) {
    return `
    <div class="project-card">
        <div class="project-content">
            <h3>${project.title}</h3>
            <p class="description">${project.description}</p>
            <div class="project-tools">
                ${project.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.githubLink}" target="_blank" class="button project-button">
                    View on GitHub <i class="ri-github-fill"></i>
                </a>
            </div>
        </div>
    </div>
    `;
}

// Function to render all projects
function renderProjects() {
    const projectsContainer = document.querySelector('.project-items');
    if (projectsContainer) {
        projectsContainer.innerHTML = projects.map(project => createProjectCard(project)).join('');
    }
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects);