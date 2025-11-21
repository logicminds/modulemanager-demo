// Sample module data based on Voxpupuli repositories
const modules = [
    {
        name: 'puppet-nginx',
        description: 'Puppet Module to manage NGINX on various UNIXes',
        status: 'healthy',
        stars: 871,
        forks: 471,
        issues: 12,
        prs: 5,
        lastUpdated: '2024-11-19',
        downloads: '1.2M',
        modulesync: '10.4.0',
        badges: ['up-to-date'],
        issuesList: [
            { id: 245, title: 'Support for Ubuntu 24.04', status: 'open', opened: '3 days ago' },
            { id: 244, title: 'Add support for custom error pages', status: 'open', opened: '1 week ago' }
        ],
        dependencies: [
            { name: 'puppetlabs/stdlib', version: '9.0.0', latest: '9.0.0', status: 'up-to-date' },
            { name: 'puppetlabs/concat', version: '7.1.0', latest: '7.2.0', status: 'outdated' },
            { name: 'puppet-postgresql', version: '8.0.0', latest: '8.0.0', status: 'up-to-date' }
        ]
    },
    {
        name: 'puppet-prometheus',
        description: 'Puppet module for prometheus',
        status: 'warning',
        stars: 252,
        forks: 59,
        issues: 28,
        prs: 11,
        lastUpdated: '2024-11-18',
        downloads: '450K',
        modulesync: '10.3.0',
        badges: ['needs-attention', 'out-of-sync'],
        issuesList: [
            { id: 156, title: 'Support for Prometheus 3.0', status: 'open', opened: '2 weeks ago' },
            { id: 155, title: 'Fix memory leak in exporter', status: 'open', opened: '1 month ago' },
            { id: 154, title: 'Add support for custom labels', status: 'open', opened: '3 weeks ago' }
        ],
        dependencies: [
            { name: 'puppetlabs/stdlib', version: '8.0.0', latest: '9.0.0', status: 'outdated' },
            { name: 'puppetlabs/concat', version: '7.0.0', latest: '7.2.0', status: 'outdated' },
            { name: 'puppetlabs/apt', version: '9.0.0', latest: '9.0.0', status: 'up-to-date' },
            { name: 'puppet-nginx', version: '5.1.0', latest: '5.1.0', status: 'up-to-date' }
        ]
    },
    {
        name: 'puppet-fail2ban',
        description: 'This module installs, configures and manages the Fail2ban service',
        status: 'healthy',
        stars: 107,
        forks: 33,
        issues: 13,
        prs: 5,
        lastUpdated: '2024-11-19',
        downloads: '320K',
        modulesync: '10.4.0',
        badges: ['up-to-date'],
        issuesList: [
            { id: 89, title: 'Documentation update needed', status: 'open', opened: '5 days ago' }
        ],
        dependencies: [
            { name: 'puppetlabs/stdlib', version: '9.0.0', latest: '9.0.0', status: 'up-to-date' }
        ]
    },
    {
        name: 'puppet-nfs',
        description: 'Installs and configures NFS server and clients',
        status: 'warning',
        stars: 80,
        forks: 16,
        issues: 7,
        prs: 3,
        lastUpdated: '2024-11-17',
        downloads: '180K',
        modulesync: '10.2.0',
        badges: ['needs-attention', 'out-of-sync'],
        issuesList: [
            { id: 45, title: 'NFSv4 support incomplete', status: 'open', opened: '2 weeks ago' },
            { id: 44, title: 'Fix mount options parsing', status: 'open', opened: '1 week ago' }
        ],
        dependencies: [
            { name: 'puppetlabs/stdlib', version: '8.0.0', latest: '9.0.0', status: 'outdated' },
            { name: 'puppetlabs/mount_providers', version: '1.0.0', latest: '1.0.0', status: 'up-to-date' },
            { name: 'puppet-prometheus', version: '3.0.0', latest: '3.0.0', status: 'up-to-date' }
        ]
    },
    {
        name: 'puppet-chrony',
        description: 'Puppet module for Chrony with Systemd',
        status: 'healthy',
        stars: 62,
        forks: 13,
        issues: 4,
        prs: 0,
        lastUpdated: '2024-11-16',
        downloads: '95K',
        modulesync: '10.4.0',
        badges: ['up-to-date'],
        issuesList: [],
        dependencies: [
            { name: 'puppetlabs/stdlib', version: '9.0.0', latest: '9.0.0', status: 'up-to-date' }
        ]
    },
    {
        name: 'puppet-autosign',
        description: 'Install and manage the autosign gem, to faciliate puppet certificate policy autosigning',
        status: 'healthy',
        stars: 22,
        forks: 11,
        issues: 7,
        prs: 2,
        lastUpdated: '2024-11-20',
        downloads: '45K',
        modulesync: '10.4.0',
        badges: ['up-to-date'],
        issuesList: [
            { id: 12, title: 'Update for Puppet 8 compatibility', status: 'open', opened: '1 week ago' }
        ],
        dependencies: [
            { name: 'puppetlabs/stdlib', version: '9.0.0', latest: '9.0.0', status: 'up-to-date' }
        ]
    },
    {
        name: 'puppet-quadlets',
        description: 'Puppet module to manage Podman Quadlets',
        status: 'healthy',
        stars: 13,
        forks: 5,
        issues: 2,
        prs: 1,
        lastUpdated: '2024-11-19',
        downloads: '12K',
        modulesync: '10.4.0',
        badges: ['up-to-date'],
        issuesList: [
            { id: 5, title: 'Add support for network quadlets', status: 'open', opened: '3 days ago' }
        ],
        dependencies: []
    },
    {
        name: 'puppet-aptly',
        description: 'Puppet module for aptly',
        status: 'critical',
        stars: 79,
        forks: 2,
        issues: 2,
        prs: 2,
        lastUpdated: '2024-11-18',
        downloads: '28K',
        modulesync: '9.8.0',
        badges: ['security', 'out-of-sync'],
        issuesList: [
            { id: 23, title: 'Security vulnerability in dependency', status: 'open', opened: '5 days ago' },
            { id: 22, title: 'Update required for latest aptly version', status: 'open', opened: '2 weeks ago' }
        ],
        dependencies: [
            { name: 'puppetlabs/stdlib', version: '7.0.0', latest: '9.0.0', status: 'outdated' },
            { name: 'puppetlabs/apt', version: '8.0.0', latest: '9.0.0', status: 'outdated' },
            { name: 'puppetlabs/concat', version: '6.0.0', latest: '7.2.0', status: 'outdated' }
        ]
    },
    {
        name: 'puppet-openvox_bootstrap',
        description: 'OpenVox bootstrap module',
        status: 'warning',
        stars: 4,
        forks: 2,
        issues: 1,
        prs: 0,
        lastUpdated: '2024-11-19',
        downloads: '5K',
        modulesync: '10.1.0',
        badges: ['needs-attention'],
        issuesList: [
            { id: 3, title: 'Update bootstrap script', status: 'open', opened: '1 month ago' }
        ],
        dependencies: [
            { name: 'puppetlabs/stdlib', version: '8.0.0', latest: '9.0.0', status: 'outdated' }
        ]
    },
    {
        name: 'puppet-example',
        description: 'An example Puppet repository to test out automation and coding styles',
        status: 'healthy',
        stars: 10,
        forks: 0,
        issues: 0,
        prs: 10,
        lastUpdated: '2024-11-15',
        downloads: '1K',
        modulesync: '10.4.0',
        badges: ['up-to-date'],
        issuesList: [],
        dependencies: []
    },
    {
        name: 'puppet-gitlab',
        description: 'Puppet module to manage GitLab',
        status: 'healthy',
        stars: 156,
        forks: 89,
        issues: 15,
        prs: 8,
        lastUpdated: '2024-11-14',
        downloads: '890K',
        modulesync: '10.4.0',
        badges: ['up-to-date'],
        issuesList: [
            { id: 78, title: 'Support GitLab 16.x', status: 'open', opened: '1 week ago' },
            { id: 77, title: 'Update documentation', status: 'open', opened: '2 weeks ago' }
        ],
        dependencies: [
            { name: 'puppetlabs/stdlib', version: '9.0.0', latest: '9.0.0', status: 'up-to-date' },
            { name: 'puppetlabs/apt', version: '9.0.0', latest: '9.0.0', status: 'up-to-date' },
            { name: 'puppetlabs/postgresql', version: '8.0.0', latest: '8.0.0', status: 'up-to-date' },
            { name: 'puppet-nginx', version: '5.1.0', latest: '5.1.0', status: 'up-to-date' }
        ]
    },
    {
        name: 'puppet-postgresql',
        description: 'Puppet module for managing PostgreSQL',
        status: 'warning',
        stars: 234,
        forks: 145,
        issues: 32,
        prs: 12,
        lastUpdated: '2024-11-13',
        downloads: '2.1M',
        modulesync: '10.3.0',
        badges: ['needs-attention'],
        issuesList: [
            { id: 145, title: 'PostgreSQL 16 support', status: 'open', opened: '3 days ago' },
            { id: 144, title: 'Fix replication configuration', status: 'open', opened: '1 week ago' },
            { id: 143, title: 'Update for new authentication methods', status: 'open', opened: '2 weeks ago' }
        ],
        dependencies: [
            { name: 'puppetlabs/stdlib', version: '9.0.0', latest: '9.0.0', status: 'up-to-date' },
            { name: 'puppetlabs/apt', version: '9.0.0', latest: '9.0.0', status: 'up-to-date' },
            { name: 'puppetlabs/concat', version: '7.1.0', latest: '7.2.0', status: 'outdated' },
            { name: 'puppetlabs/firewall', version: '4.0.0', latest: '4.0.0', status: 'up-to-date' }
        ]
    }
];

let currentView = 'card';
let filteredModules = [...modules];

function renderModules() {
    const container = document.getElementById('modules-container');
    container.innerHTML = '';
    
    if (filteredModules.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--text-light);">No modules found</p>';
        return;
    }
    
    filteredModules.forEach(module => {
        const card = createModuleCard(module);
        container.appendChild(card);
    });
}

function createModuleCard(module) {
    const card = document.createElement('div');
    card.className = `module-card ${currentView === 'list' ? 'list-item' : ''}`;
    
    const statusClass = module.status === 'healthy' ? 'healthy' : 
                        module.status === 'warning' ? 'warning' : 'critical';
    
    if (currentView === 'list') {
        card.innerHTML = `
            <div class="status-indicator ${statusClass}"></div>
            <div style="flex: 1;">
                <div class="module-name">
                    <a href="#" onclick="showModuleDetail('${module.name}'); return false;">${module.name}</a>
                </div>
                <div class="module-description">${module.description}</div>
            </div>
            <div style="display: flex; gap: 2rem; align-items: center;">
                <div class="stat-item">
                    <div class="stat-item-label">Issues</div>
                    <div class="stat-item-value">${module.issues}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-item-label">PRs</div>
                    <div class="stat-item-value">${module.prs}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-item-label">Status</div>
                    <div class="stat-item-value">
                        <span class="status-badge ${statusClass}">${module.status}</span>
                    </div>
                </div>
            </div>
        `;
    } else {
        card.innerHTML = `
            <div class="module-header">
                <div>
                    <div class="module-name">
                        <span class="status-indicator ${statusClass}"></span>
                        <a href="#" onclick="showModuleDetail('${module.name}'); return false;">${module.name}</a>
                    </div>
                    <div class="module-description">${module.description}</div>
                </div>
            </div>
            <div class="badges">
                ${module.badges.map(badge => `<span class="badge ${badge.replace(/-/g, '-')}">${badge.replace(/-/g, ' ')}</span>`).join('')}
            </div>
            <div class="module-stats">
                <div class="stat-item">
                    <div class="stat-item-label">Issues</div>
                    <div class="stat-item-value">${module.issues}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-item-label">PRs</div>
                    <div class="stat-item-value">${module.prs}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-item-label">Downloads</div>
                    <div class="stat-item-value">${module.downloads}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-item-label">Modulesync</div>
                    <div class="stat-item-value">${module.modulesync}</div>
                </div>
            </div>
        `;
    }
    
    card.onclick = () => showModuleDetail(module.name);
    return card;
}

function switchView(view) {
    currentView = view;
    const container = document.getElementById('modules-container');
    container.className = `modules-container ${view}-view`;
    
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-view="${view}"]`).classList.add('active');
    
    renderModules();
}

function filterModules(query) {
    const lowerQuery = query.toLowerCase();
    filteredModules = modules.filter(module => 
        module.name.toLowerCase().includes(lowerQuery) ||
        module.description.toLowerCase().includes(lowerQuery)
    );
    renderModules();
}

function filterByStatus(status) {
    if (status === 'all') {
        filteredModules = [...modules];
    } else {
        filteredModules = modules.filter(module => module.status === status);
    }
    renderModules();
}

// Transfer request tracking
let currentTransferRequest = null;

function showTransferWizard() {
    // Reset wizard to first step
    nextStep(1);
    // Generate transfer request ID
    currentTransferRequest = {
        id: 'TR-' + Date.now(),
        status: 'draft',
        createdAt: new Date().toISOString(),
        steps: {
            membership: false,
            repository: null,
            preparation: {},
            transfer: false,
            adminTasks: [],
            postTransferTasks: []
        }
    };
    document.getElementById('transfer-wizard').classList.add('active');
    updateReviewData();
}

function closeWizard() {
    document.getElementById('transfer-wizard').classList.remove('active');
}

function updateReviewData() {
    if (!currentTransferRequest) return;
    
    const repoUrl = document.getElementById('repo-url')?.value || '-';
    const moduleName = document.getElementById('module-name')?.value || '-';
    
    // Update review section
    const reviewRepo = document.getElementById('review-repo');
    const reviewName = document.getElementById('review-name');
    const transferId = document.getElementById('transfer-id');
    
    if (reviewRepo) reviewRepo.textContent = repoUrl;
    if (reviewName) reviewName.textContent = moduleName;
    if (transferId && currentTransferRequest) transferId.textContent = currentTransferRequest.id;
    
    // Update preparation status
    const prepStatus = document.getElementById('review-prep');
    if (prepStatus) {
        const checks = document.querySelectorAll('#tab-issues, #check-pdk, #check-license, #check-fork');
        const checked = Array.from(checks).filter(c => c.checked).length;
        prepStatus.textContent = `${checked}/${checks.length} items completed`;
    }
}

function executeTransfer() {
    if (!document.getElementById('confirm-transfer').checked) {
        alert('Please confirm that you understand the transfer will move ownership to Voxpupuli');
        return;
    }
    
    // Update transfer request
    if (currentTransferRequest) {
        currentTransferRequest.steps.transfer = true;
        currentTransferRequest.status = 'transfer_completed';
        currentTransferRequest.transferCompletedAt = new Date().toISOString();
    }
    
    alert('Repository transfer initiated. Admins will be notified to complete post-transfer tasks.');
    nextStep(6);
}

function submitTransferRequest() {
    if (!currentTransferRequest) {
        alert('Error: Transfer request not initialized');
        return;
    }
    
    // Finalize transfer request
    currentTransferRequest.status = 'submitted';
    currentTransferRequest.submittedAt = new Date().toISOString();
    
    // Save to localStorage (in real app, this would be sent to server)
    const requests = JSON.parse(localStorage.getItem('transferRequests') || '[]');
    requests.push(currentTransferRequest);
    localStorage.setItem('transferRequests', JSON.stringify(requests));
    
    alert(`Transfer request ${currentTransferRequest.id} submitted successfully! Admins will be notified.`);
    closeWizard();
    
    // Reset
    currentTransferRequest = null;
}

function nextStep(step) {
    document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.progress-step').forEach(s => s.classList.remove('active'));
    
    const stepElement = document.querySelector(`.wizard-step[data-step="${step}"]`);
    const progressElement = document.querySelector(`.progress-step[data-step="${step}"]`);
    
    if (stepElement) stepElement.classList.add('active');
    if (progressElement) progressElement.classList.add('active');
    
    // Update transfer request tracking
    if (currentTransferRequest && step > 1) {
        updateTransferTracking(step);
    }
    
    // Update review data when on review step
    if (step === 8) {
        updateReviewData();
    }
}

function updateTransferTracking(step) {
    if (!currentTransferRequest) return;
    
    switch(step) {
        case 2:
            const repoUrl = document.getElementById('repo-url')?.value;
            if (repoUrl) {
                currentTransferRequest.steps.repository = repoUrl;
            }
            break;
        case 3:
            // Track preparation checklist
            const checks = {
                issues: document.getElementById('check-issues')?.checked || false,
                pdk: document.getElementById('check-pdk')?.checked || false,
                license: document.getElementById('check-license')?.checked || false,
                fork: document.getElementById('check-fork')?.checked || false
            };
            currentTransferRequest.steps.preparation = checks;
            break;
    }
}

function prevStep(step) {
    nextStep(step);
}

function submitRequest() {
    alert('Request submitted! Admins will be notified.');
    closeWizard();
}

function showModuleDetail(moduleName) {
    const module = modules.find(m => m.name === moduleName);
    if (!module) return;
    
    document.getElementById('detail-name').textContent = moduleName;
    document.getElementById('module-detail').classList.add('active');
    
    // Update tab badges with counts
    updateTabBadges(module);
    
    // Populate issues and dependencies
    populateIssues(module);
    populateDependencies(module);
    
    showTab('overview');
    // Initialize module charts when detail view is shown
    setTimeout(() => {
        initModuleCharts(moduleName);
    }, 100);
}

function updateTabBadges(module) {
    const issuesCount = module.issuesList ? module.issuesList.length : module.issues || 0;
    const dependenciesCount = module.dependencies ? module.dependencies.length : 0;
    
    const issuesBadge = document.getElementById('issues-badge');
    const dependenciesBadge = document.getElementById('dependencies-badge');
    
    if (issuesBadge) {
        issuesBadge.textContent = issuesCount;
        issuesBadge.style.display = issuesCount > 0 ? 'inline-block' : 'none';
    }
    
    if (dependenciesBadge) {
        dependenciesBadge.textContent = dependenciesCount;
        dependenciesBadge.style.display = dependenciesCount > 0 ? 'inline-block' : 'none';
    }
}

function populateIssues(module) {
    const issuesList = document.getElementById('issues-list');
    if (!issuesList) return;
    
    const issues = module.issuesList || [];
    
    if (issues.length === 0) {
        issuesList.innerHTML = '<p style="color: var(--text-light); padding: 1rem;">No open issues</p>';
        return;
    }
    
    issuesList.innerHTML = issues.map(issue => `
        <div class="issue-item">
            <span class="issue-status ${issue.status}">${issue.status}</span>
            <span class="issue-title">${issue.title}</span>
            <span class="issue-meta">#${issue.id} • opened ${issue.opened}</span>
        </div>
    `).join('');
}

function populateDependencies(module) {
    const dependenciesList = document.getElementById('dependencies-list');
    if (!dependenciesList) return;
    
    const dependencies = module.dependencies || [];
    
    if (dependencies.length === 0) {
        dependenciesList.innerHTML = '<p style="color: var(--text-light); padding: 1rem;">No dependencies</p>';
        return;
    }
    
    dependenciesList.innerHTML = dependencies.map(dep => {
        const statusClass = dep.status === 'up-to-date' ? 'healthy' : 
                           dep.status === 'outdated' ? 'warning' : 'critical';
        const statusText = dep.status === 'up-to-date' ? 'Up to date' :
                          dep.status === 'outdated' ? `Update available (${dep.latest})` :
                          'Deprecated';
        
        // Check if this dependency is a Voxpupuli module
        const isVoxpupuliModule = isVoxpupuliManagedModule(dep.name);
        
        let depLink, depLinkTitle, depLinkClass, depLinkOnClick, githubLink, githubLinkTitle;
        
        if (isVoxpupuliModule) {
            // For Voxpupuli modules, link to module detail page in the app
            const voxModuleName = getVoxpupuliModuleName(dep.name);
            depLink = '#';
            depLinkTitle = 'View in Module Manager';
            depLinkClass = 'dep-name-link voxpupuli-module';
            depLinkOnClick = `onclick="showModuleDetail('${voxModuleName}'); return false;"`;
            
            // Still provide GitHub link
            githubLink = `https://github.com/voxpupuli/${voxModuleName}`;
            githubLinkTitle = 'View on GitHub';
        } else {
            // For non-Voxpupuli modules, link to Forge
            const forgeUrl = `https://forge.puppet.com/modules/${dep.name}`;
            depLink = forgeUrl;
            depLinkTitle = 'View on Puppet Forge';
            depLinkClass = 'dep-name-link';
            depLinkOnClick = 'target="_blank" rel="noopener noreferrer"';
            
            // GitHub link for Puppet Labs modules
            if (dep.name.startsWith('puppetlabs/')) {
                githubLink = `https://github.com/${dep.name}`;
            } else {
                const depModuleName = dep.name.replace('puppetlabs/', '').replace('puppet-', '');
                githubLink = `https://github.com/voxpupuli/puppet-${depModuleName}`;
            }
            githubLinkTitle = 'View on GitHub';
        }
        
        const depLinkText = dep.name;
        
        return `
            <div class="dependency-item">
                <a href="${depLink}" ${depLinkOnClick} class="${depLinkClass}" title="${depLinkTitle}">
                    <span class="dep-name">${depLinkText}</span>
                    ${isVoxpupuliModule ? '<span class="vox-badge" title="Voxpupuli Module">VP</span>' : ''}
                </a>
                <span class="dep-version">${dep.version}</span>
                <span class="status-badge ${statusClass}">${statusText}</span>
                <a href="${githubLink}" target="_blank" rel="noopener noreferrer" class="dep-github-link" title="${githubLinkTitle}">
                    <span class="github-icon">🔗</span>
                </a>
            </div>
        `;
    }).join('');
}

// Check if a dependency is a Voxpupuli-managed module
function isVoxpupuliManagedModule(depName) {
    // Remove namespace prefix if present
    const cleanName = depName.replace(/^(voxpupuli|puppetlabs)\//, '');
    
    // Check if this module exists in our modules list
    // Voxpupuli modules typically don't have the namespace in metadata.json
    // So we check if the module name (without namespace) matches any of our modules
    const moduleName = cleanName.startsWith('puppet-') ? cleanName : `puppet-${cleanName}`;
    
    return modules.some(m => m.name === moduleName || m.name === cleanName);
}

// Get the Voxpupuli module name from a dependency name
function getVoxpupuliModuleName(depName) {
    // Remove namespace prefix
    const cleanName = depName.replace(/^(voxpupuli|puppetlabs)\//, '');
    
    // Find matching module
    const module = modules.find(m => {
        const mName = m.name.replace('puppet-', '');
        return mName === cleanName || m.name === cleanName || m.name === `puppet-${cleanName}`;
    });
    
    return module ? module.name : cleanName;
}

function closeDetail() {
    document.getElementById('module-detail').classList.remove('active');
}

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(`tab-${tabName}`).classList.add('active');
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Initialize charts when stats tab is shown
    if (tabName === 'stats') {
        const moduleName = document.getElementById('detail-name').textContent;
        setTimeout(() => {
            initModuleCharts(moduleName);
        }, 100);
    }
}

function toggleMobileMenu() {
    // Mobile menu toggle functionality
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Close modals when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Chart.js configuration (for module detail charts)
if (typeof Chart !== 'undefined') {
    Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    Chart.defaults.font.size = 12;
    Chart.defaults.color = '#64748b';
}

// Generate monthly labels for charts
function generateMonthlyLabels(years = 2) {
    const labels = [];
    const now = new Date();
    for (let i = years * 12 - 1; i >= 0; i--) {
        const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
        labels.push(date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));
    }
    return labels;
}

// Generate trend data (simulated growth)
function generateTrendData(baseValue, growthRate = 0.02, volatility = 0.1) {
    const months = 24; // 2 years for module charts
    const data = [];
    let current = baseValue;
    
    for (let i = 0; i < months; i++) {
        // Add growth with some randomness
        const change = (Math.random() - 0.5) * volatility + growthRate;
        current = Math.max(0, current * (1 + change));
        data.push(Math.round(current));
    }
    
    return data;
}

// Module-specific charts
let moduleDownloadsChart = null;
let moduleVersionChart = null;

function initModuleCharts(moduleName) {
    // Module Downloads Chart
    const moduleDownloadsCtx = document.getElementById('moduleDownloadsChart');
    if (moduleDownloadsCtx && moduleDownloadsChart) {
        moduleDownloadsChart.destroy();
    }
    
    if (moduleDownloadsCtx) {
        const monthlyLabels = generateMonthlyLabels(2); // 2 years for module detail
        const module = modules.find(m => m.name === moduleName);
        const baseDownloads = parseInt(module.downloads.replace(/[KM]/g, '')) * (module.downloads.includes('M') ? 1000000 : 1000);
        const downloadsData = generateTrendData(baseDownloads, 0.02, 0.15);
        
        moduleDownloadsChart = new Chart(moduleDownloadsCtx, {
            type: 'line',
            data: {
                labels: monthlyLabels,
                datasets: [{
                    label: 'Downloads',
                    data: downloadsData,
                    borderColor: '#2563eb',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return 'Downloads: ' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: {
                            callback: function(value) {
                                if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
                                if (value >= 1000) return (value / 1000).toFixed(1) + 'K';
                                return value;
                            }
                        }
                    },
                    x: {
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45
                        }
                    }
                }
            }
        });
    }
    
    // Module Version Chart
    const moduleVersionCtx = document.getElementById('moduleVersionChart');
    if (moduleVersionCtx && moduleVersionChart) {
        moduleVersionChart.destroy();
    }
    
    if (moduleVersionCtx) {
        const versions = ['5.0.0', '5.1.0', '5.2.0', '5.3.0', '5.4.0', '5.5.0'];
        const versionDownloads = versions.map(() => Math.floor(Math.random() * 50000 + 10000));
        
        moduleVersionChart = new Chart(moduleVersionCtx, {
            type: 'bar',
            data: {
                labels: versions,
                datasets: [{
                    label: 'Downloads',
                    data: versionDownloads,
                    backgroundColor: 'rgba(37, 99, 235, 0.7)',
                    borderColor: '#2563eb',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return 'Downloads: ' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                if (value >= 1000) return (value / 1000).toFixed(1) + 'K';
                                return value;
                            }
                        }
                    }
                }
            }
        });
    }
}

// Initialize
renderModules();

