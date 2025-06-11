const projects = [
    {
        title: "Sales Prediction Model",
        description: "Developed a machine learning model using Python and scikit-learn to predict retail sales with 92% accuracy. Implemented time series analysis and feature engineering techniques.",
        githubLink: "https://github.com/kiran-pokhrel-91/sales-prediction",
        tools: ["Python", "Pandas", "Scikit-learn", "Time Series Analysis"],
        category: "Data Science"
    },
    {
        title: "Customer Segmentation Analysis",
        description: "Applied K-means clustering to segment customers based on purchasing behavior. Created interactive visualizations using Plotly and Dash.",
        githubLink: "https://github.com/kiran-pokhrel-91/customer-segmentation",
        tools: ["Python", "Scikit-learn", "Plotly", "Dash"],
        category: "Data Science"
    },
    {
        title: "Sentiment Analysis Dashboard",
        description: "Built an NLP-based sentiment analysis tool for social media data. Utilized BERT model for text classification and streamlit for interactive dashboard.",
        githubLink: "https://github.com/kiran-pokhrel-91/sentiment-analysis",
        tools: ["Python", "NLTK", "BERT", "Streamlit"],
        category: "Data Science"
    }
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