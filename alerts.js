// Sample alerts data
const alerts = [
    {
        id: 1,
        module: 'puppet-aptly',
        type: 'security',
        severity: 'critical',
        title: 'Security vulnerability in dependency puppetlabs/stdlib',
        description: 'Version 7.0.0 has known CVE-2024-XXXX vulnerability',
        created: '2 days ago',
        action: 'Update to version 9.0.0'
    },
    {
        id: 2,
        module: 'puppet-prometheus',
        type: 'modulesync',
        severity: 'critical',
        title: 'Modulesync out of sync',
        description: 'Module is using modulesync version 10.3.0, latest is 10.4.0',
        created: '5 days ago',
        action: 'Run modulesync update'
    },
    {
        id: 3,
        module: 'puppet-nfs',
        type: 'dependency',
        severity: 'high',
        title: 'Outdated dependencies detected',
        description: '3 dependencies have newer versions available',
        created: '1 week ago',
        action: 'Review and update dependencies'
    },
    {
        id: 4,
        module: 'puppet-postgresql',
        type: 'pr',
        severity: 'high',
        title: 'PR #145 open for 30+ days',
        description: 'PostgreSQL 16 support PR needs review',
        created: '3 days ago',
        action: 'Review and merge PR'
    },
    {
        id: 5,
        module: 'puppet-nginx',
        type: 'issue',
        severity: 'medium',
        title: 'Issue #245 needs attention',
        description: 'Support for Ubuntu 24.04 requested',
        created: '1 week ago',
        action: 'Address issue or assign maintainer'
    },
    {
        id: 6,
        module: 'puppet-openvox_bootstrap',
        type: 'modulesync',
        severity: 'high',
        title: 'Modulesync version outdated',
        description: 'Using version 10.1.0, should be 10.4.0',
        created: '2 weeks ago',
        action: 'Update modulesync configuration'
    },
    {
        id: 7,
        module: 'puppet-fail2ban',
        type: 'dependency',
        severity: 'medium',
        title: 'Dependency update available',
        description: 'puppet-fail2ban has newer version available',
        created: '3 days ago',
        action: 'Consider updating dependency'
    },
    {
        id: 8,
        module: 'puppet-chrony',
        type: 'issue',
        severity: 'low',
        title: 'Low activity detected',
        description: 'No commits in the last 60 days',
        created: '1 week ago',
        action: 'Review module activity'
    }
];

let filteredAlerts = [...alerts];

function renderAlerts() {
    const criticalAlerts = filteredAlerts.filter(a => a.severity === 'critical');
    const highAlerts = filteredAlerts.filter(a => a.severity === 'high');
    const mediumAlerts = filteredAlerts.filter(a => a.severity === 'medium');
    const lowAlerts = filteredAlerts.filter(a => a.severity === 'low');

    renderAlertList('critical-alerts', criticalAlerts);
    renderAlertList('high-alerts', highAlerts);
    renderAlertList('medium-alerts', mediumAlerts);
    renderAlertList('low-alerts', lowAlerts);
}

function renderAlertList(containerId, alertList) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (alertList.length === 0) {
        container.innerHTML = '<p class="no-alerts">No alerts in this category</p>';
        return;
    }

    container.innerHTML = alertList.map(alert => {
        const severityClass = alert.severity;
        const typeIcon = getTypeIcon(alert.type);
        
        return `
            <div class="alert-item ${severityClass}">
                <div class="alert-icon">${typeIcon}</div>
                <div class="alert-content">
                    <div class="alert-header">
                        <span class="alert-module">${alert.module}</span>
                        <span class="alert-type">${alert.type}</span>
                        <span class="alert-time">${alert.created}</span>
                    </div>
                    <h4 class="alert-title">${alert.title}</h4>
                    <p class="alert-description">${alert.description}</p>
                    <div class="alert-action">
                        <strong>Action:</strong> ${alert.action}
                    </div>
                </div>
                <div class="alert-actions">
                    <button class="btn-secondary btn-sm" onclick="viewModule('${alert.module}')">View Module</button>
                    <button class="btn-primary btn-sm" onclick="dismissAlert(${alert.id})">Dismiss</button>
                </div>
            </div>
        `;
    }).join('');
}

function getTypeIcon(type) {
    const icons = {
        security: '🔒',
        dependency: '📦',
        modulesync: '🔄',
        pr: '🔀',
        issue: '📋'
    };
    return icons[type] || '⚠️';
}

function filterAlerts(severity) {
    if (severity === 'all') {
        filteredAlerts = [...alerts];
    } else {
        filteredAlerts = alerts.filter(a => a.severity === severity);
    }
    renderAlerts();
}

function filterByType(type) {
    if (type === 'all') {
        filteredAlerts = [...alerts];
    } else {
        filteredAlerts = alerts.filter(a => a.type === type);
    }
    renderAlerts();
}

function viewModule(moduleName) {
    window.location.href = `index.html#module-${moduleName}`;
}

function dismissAlert(alertId) {
    filteredAlerts = filteredAlerts.filter(a => a.id !== alertId);
    alerts.splice(alerts.findIndex(a => a.id === alertId), 1);
    renderAlerts();
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Initialize
renderAlerts();

