const softSkills = {
    "Communication": [
        { name: "Public Speaking", proficiency: "Intermediate", icon: "ri-chat-voice-line" },
        { name: "Technical Writing", proficiency: "Advanced", icon: "ri-draft-line" },
        { name: "Team Collaboration", proficiency: "Advanced", icon: "ri-team-line" }
    ],
    "Leadership": [
        { name: "Project Management", proficiency: "Advanced", icon: "ri-git-branch-line" },
        { name: "Mentoring", proficiency: "Intermediate", icon: "ri-user-star-line" },
        { name: "Problem Solving", proficiency: "Expert", icon: "ri-lightbulb-line" }
    ],
    "Professional": [
        { name: "Critical Thinking", proficiency: "Expert", icon: "ri-mind-map" },
        { name: "Time Management", proficiency: "Advanced", icon: "ri-time-line" },
        { name: "Adaptability", proficiency: "Expert", icon: "ri-compass-line" }
    ]
};

const skills = [
    {
        category: "Data Science & Machine Learning",
        icon: "ri-ai-generate",
        items: [
            { name: "Python", level: 90, icon: "ri-code-s-line" },
            { name: "Machine Learning", level: 85, icon: "ri-brain-line" },
            { name: "Statistical Analysis", level: 88, icon: "ri-bar-chart-box-line" },
            { name: "Deep Learning", level: 80, icon: "ri-landscape-line" },
            { name: "Data Visualization", level: 92, icon: "ri-pie-chart-2-line" }
        ]
    },
    {
        category: "Data Tools & Libraries",
        icon: "ri-database-2-line",
        items: [
            { name: "Pandas & NumPy", level: 95, icon: "ri-numbers-line" },
            { name: "Scikit-learn", level: 88, icon: "ri-robot-line" },
            { name: "TensorFlow", level: 82, icon: "ri-cpu-line" },
            { name: "Matplotlib & Seaborn", level: 90, icon: "ri-line-chart-line" },
            { name: "Jupyter Notebook", level: 95, icon: "ri-book-read-line" }
        ]
    },
    {
        category: "Web Development",
        icon: "ri-code-s-slash-line",
        items: [            { name: "HTML & CSS", level: 90, icon: "ri-html5-fill" },
            { name: "JavaScript", level: 85, icon: "ri-javascript-fill" },
            { name: "Django", level: 80, icon: "ri-code-s-line" }
        ]
    }
];

function createSkillBar(skill) {
    return `
    <div class="skill-item" data-aos="fade-up">
        <div class="skill-header">
            <div class="skill-name-with-icon">
                <i class="${skill.icon}"></i>
                <span class="skill-name">${skill.name}</span>
            </div>
            <span class="skill-percentage">${skill.level}%</span>
        </div>
        <div class="skill-bar">
            <div class="skill-percentage-bar" style="width: ${skill.level}%"></div>
        </div>
    </div>
    `;
}

function createSkillCategory(category) {
    return `
    <div class="skills-category" data-aos="fade-up">
        <div class="skills-category-header">
            <i class="${category.icon}"></i>
            <h3 class="skills-category-title">${category.category}</h3>
        </div>
        <div class="skills-list">
            ${category.items.map(skill => createSkillBar(skill)).join('')}
        </div>
    </div>
    `;
}

function createSoftSkillCard(skill) {
    return `
    <div class="soft-skill-card" data-aos="fade-up">
        <div class="soft-skill-icon">
            <i class="${skill.icon}"></i>
        </div>
        <div class="soft-skill-content">
            <h4 class="soft-skill-name">${skill.name}</h4>
            <span class="soft-skill-level ${skill.proficiency.toLowerCase()}">${skill.proficiency}</span>
        </div>
    </div>
    `;
}

function createSoftSkillCategory(categoryName, skills) {
    return `
    <div class="soft-skills-category">
        <h3 class="soft-skills-category-title">${categoryName}</h3>
        <div class="soft-skills-grid">
            ${skills.map(skill => createSoftSkillCard(skill)).join('')}
        </div>
    </div>
    `;
}

function renderSkills() {
    // Render technical skills
    const skillsContainer = document.querySelector('.skills-grid');
    if (skillsContainer) {
        skillsContainer.innerHTML = skills.map(category => createSkillCategory(category)).join('');
        
        // Animate skill bars on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelector('.skill-percentage-bar').style.width = 
                        entry.target.querySelector('.skill-percentage-bar').getAttribute('style').split(':')[1];
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.skill-item').forEach(item => observer.observe(item));
    }

    // Render soft skills
    const softSkillsContainer = document.querySelector('.soft-skills-container');
    if (softSkillsContainer) {
        softSkillsContainer.innerHTML = Object.entries(softSkills)
            .map(([category, items]) => createSoftSkillCategory(category, items))
            .join('');
    }
}

document.addEventListener('DOMContentLoaded', renderSkills);