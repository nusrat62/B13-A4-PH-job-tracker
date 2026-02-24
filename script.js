let jobs = [
    { id: 1, company: "Mobile First Corp", role: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130k - $175k", desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "all" },
    { id: 2, company: "WebFlow Agency", role: "Web Designer & Developer", location: "LA, CA", type: "Part-time", salary: "$80k - $120k", desc: "Create stunning web experiences for high-profile clients.", status: "all" },
    { id: 3, company: "DataViz Solutions", role: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125k - $165k", desc: "Transform complex data into compelling visualizations.", status: "all" },
    { id: 4, company: "CloudFirst Inc", role: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$140k - $190k", desc: "Design and maintain scalable backend systems using Python and AWS.", status: "all" },
    { id: 5, company: "Innovation Labs", role: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110k - $150k", desc: "Create beautiful and functional user interfaces for our products.", status: "all" },
    { id: 6, company: "StartupXYZ", role: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120k - $160k", desc: "Join our fast-growing startup and work on our core platform.", status: "all" },
    { id: 7, company: "TechCorp Industries", role: "Senior Frontend Developer", location: "SF, CA", type: "Full-time", salary: "$130k - $175k", desc: "Build scalable web applications using React and TypeScript.", status: "all" },
    { id: 8, company: "Future Scale", role: "Product Manager", location: "NY", type: "Full-time", salary: "$150k - $200k", desc: "Lead product strategy and execution for our core products.", status: "all" }
];

let currentTab = 'all';
function render() {
    const container = document.getElementById('jobs-container');
    const emptyState = document.getElementById('empty-state');
    const filteredJobs = currentTab === 'all' ? jobs : jobs.filter(j => j.status === currentTab);
    document.getElementById('total-count').innerText = jobs.length;
    document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'interview').length;
    document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'rejected').length;
    document.getElementById('section-count').innerText = filteredJobs.length;
    if (filteredJobs.length === 0) {
        container.innerHTML = "";
        emptyState.classList.remove('hidden');
        return;
    }
    emptyState.classList.add('hidden');
    container.innerHTML = filteredJobs.map(job => `
        <div class="job-card">
            <button class="delete-btn" onclick="deleteJob(${job.id})" title="Delete Job">🗑</button>
            <h3 class="card-title">${job.company}</h3>
            <p class="card-role">${job.role}</p>
            <div class="card-meta">
                ${job.location} • ${job.type} • ${job.salary}
            </div>
            <div class="status-label">${job.status === 'all' ? 'NOT APPLIED' : job.status.toUpperCase()}</div>
            <p class="job-desc">${job.desc}</p>
            <div class="card-btns">
                <button class="btn-action btn-int ${job.status === 'interview' ? 'active' : ''}" 
                    onclick="updateStatus(${job.id}, 'interview')">INTERVIEW</button>
                <button class="btn-action btn-rej ${job.status === 'rejected' ? 'active' : ''}" 
                    onclick="updateStatus(${job.id}, 'rejected')">REJECTED</button>
            </div>
        </div>
    `).join('');
}
function updateStatus(id, newStatus) {
    jobs = jobs.map(j => {
        if (j.id === id) {
            return { ...j, status: newStatus };
        }
        return j;
    });
    render();
}

function deleteJob(id) {
    if(confirm("Are you sure you want to delete this job?")) {
        jobs = jobs.filter(j => j.id !== id);
        render();
    }
}

function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tab-${tab}`).classList.add('active');
    render();
}
