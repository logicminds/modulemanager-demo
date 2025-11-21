const reportData = {
    health: {
        title: 'Module Health Report',
        content: `
            <div class="report-content">
                <h4>Overall Health Summary</h4>
                <p>This report provides a comprehensive overview of the health status of all Voxpupuli modules.</p>
                
                <div class="report-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Module</th>
                                <th>Status</th>
                                <th>Issues</th>
                                <th>PRs</th>
                                <th>Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>puppet-nginx</td>
                                <td><span class="status-badge healthy">Healthy</span></td>
                                <td>12</td>
                                <td>5</td>
                                <td>2024-11-19</td>
                            </tr>
                            <tr>
                                <td>puppet-prometheus</td>
                                <td><span class="status-badge warning">Needs Attention</span></td>
                                <td>28</td>
                                <td>11</td>
                                <td>2024-11-18</td>
                            </tr>
                            <tr>
                                <td>puppet-aptly</td>
                                <td><span class="status-badge critical">Critical</span></td>
                                <td>2</td>
                                <td>2</td>
                                <td>2024-11-18</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    backlog: {
        title: 'Maintenance Backlog',
        content: `
            <div class="report-content">
                <h4>Outstanding Work</h4>
                <p>Prioritized list of tasks requiring attention across all modules.</p>
                
                <div class="backlog-list">
                    <div class="backlog-item high">
                        <h5>puppet-aptly - Security vulnerability</h5>
                        <p>Update dependency puppetlabs/stdlib to fix CVE-2024-XXXX</p>
                        <span class="priority">High Priority</span>
                    </div>
                    <div class="backlog-item high">
                        <h5>puppet-prometheus - Modulesync update</h5>
                        <p>Module needs modulesync version update from 10.3.0 to 10.4.0</p>
                        <span class="priority">High Priority</span>
                    </div>
                    <div class="backlog-item medium">
                        <h5>puppet-postgresql - PR review needed</h5>
                        <p>PR #145 for PostgreSQL 16 support has been open for 30+ days</p>
                        <span class="priority">Medium Priority</span>
                    </div>
                </div>
            </div>
        `
    },
    modulesync: {
        title: 'Modulesync Compliance Report',
        content: `
            <div class="report-content">
                <h4>Modulesync Status</h4>
                <p>Compliance status of modulesync configuration across all modules.</p>
                
                <div class="compliance-stats">
                    <div class="compliance-item">
                        <strong>In Sync:</strong> 280 modules (90%)
                    </div>
                    <div class="compliance-item">
                        <strong>Out of Sync:</strong> 30 modules (10%)
                    </div>
                </div>
                
                <h5>Modules Requiring Updates</h5>
                <ul>
                    <li>puppet-prometheus (10.3.0 → 10.4.0)</li>
                    <li>puppet-nfs (10.2.0 → 10.4.0)</li>
                    <li>puppet-openvox_bootstrap (10.1.0 → 10.4.0)</li>
                    <li>puppet-aptly (9.8.0 → 10.4.0)</li>
                </ul>
            </div>
        `
    },
    dependencies: {
        title: 'Dependency Compliance Report',
        content: `
            <div class="report-content">
                <h4>Dependency Health</h4>
                <p>Status of all module dependencies across the ecosystem.</p>
                
                <div class="dependency-stats">
                    <div class="stat-item">
                        <strong>Up to Date:</strong> 1,200 dependencies
                    </div>
                    <div class="stat-item">
                        <strong>Outdated:</strong> 180 dependencies
                    </div>
                    <div class="stat-item">
                        <strong>Deprecated:</strong> 25 dependencies
                    </div>
                </div>
                
                <h5>Most Common Outdated Dependencies</h5>
                <ul>
                    <li>puppetlabs/stdlib (8.0.0) - 45 modules need update</li>
                    <li>puppetlabs/concat (7.0.0) - 32 modules need update</li>
                    <li>puppetlabs/apt (8.0.0) - 18 modules need update</li>
                </ul>
            </div>
        `
    },
    security: {
        title: 'Security Compliance Report',
        content: `
            <div class="report-content">
                <h4>Security Status</h4>
                <p>Security vulnerabilities and compliance across all modules.</p>
                
                <div class="security-alerts">
                    <div class="security-item critical">
                        <h5>Critical: puppet-aptly</h5>
                        <p>CVE-2024-XXXX in puppetlabs/stdlib 7.0.0</p>
                        <p><strong>Action:</strong> Update to version 9.0.0</p>
                    </div>
                    <div class="security-item high">
                        <h5>High: puppet-nfs</h5>
                        <p>Outdated dependency with known vulnerabilities</p>
                        <p><strong>Action:</strong> Review and update dependencies</p>
                    </div>
                </div>
                
                <div class="security-summary">
                    <p><strong>Overall Security Score:</strong> 98%</p>
                    <p>298 modules are secure, 10 have vulnerabilities, 2 are critical</p>
                </div>
            </div>
        `
    },
    downloads: {
        title: 'Download & Usage Report',
        content: `
            <div class="report-content">
                <h4>Module Popularity</h4>
                <p>Download statistics and version adoption across all modules.</p>
                
                <h5>Top 10 Most Downloaded Modules</h5>
                <ol>
                    <li>puppet-postgresql - 2.1M downloads</li>
                    <li>puppet-nginx - 1.2M downloads</li>
                    <li>puppet-gitlab - 890K downloads</li>
                    <li>puppet-prometheus - 450K downloads</li>
                    <li>puppet-fail2ban - 320K downloads</li>
                </ol>
                
                <h5>Version Adoption</h5>
                <p>Most modules are using recent versions, with 85% on versions released in the last year.</p>
                
                <h5>Growth Trends</h5>
                <p>Total downloads have increased by 12% over the last quarter, showing healthy growth in module usage.</p>
            </div>
        `
    }
};

function viewReport(reportType) {
    const report = reportData[reportType];
    if (!report) return;

    const detailSection = document.getElementById('report-detail');
    const titleElement = document.getElementById('report-detail-title');
    const bodyElement = document.getElementById('report-detail-body');

    titleElement.textContent = report.title;
    bodyElement.innerHTML = report.content;
    detailSection.style.display = 'block';
    
    // Scroll to report detail
    detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeReport() {
    document.getElementById('report-detail').style.display = 'none';
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

