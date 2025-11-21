// Chart.js configuration
Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
Chart.defaults.font.size = 12;
Chart.defaults.color = '#64748b';

// Generate monthly labels for last 3 years
function generateMonthlyLabels(years = 3) {
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
    const months = 36; // 3 years
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

// Initialize all charts
function initCharts() {
    const monthlyLabels = generateMonthlyLabels(3);
    
    // Total Downloads Chart
    const downloadsCtx = document.getElementById('downloadsChart');
    if (downloadsCtx) {
        const downloadsData = generateTrendData(5000000, 0.03, 0.15);
        new Chart(downloadsCtx, {
            type: 'line',
            data: {
                labels: monthlyLabels,
                datasets: [{
                    label: 'Total Downloads',
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
                        mode: 'index',
                        intersect: false,
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
    
    // Health Status Chart
    const healthCtx = document.getElementById('healthChart');
    if (healthCtx) {
        const healthyData = generateTrendData(200, 0.01, 0.05);
        const warningData = generateTrendData(60, -0.005, 0.1);
        const criticalData = generateTrendData(15, -0.01, 0.15);
        
        new Chart(healthCtx, {
            type: 'line',
            data: {
                labels: monthlyLabels,
                datasets: [
                    {
                        label: 'Healthy',
                        data: healthyData,
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Needs Attention',
                        data: warningData,
                        borderColor: '#f59e0b',
                        backgroundColor: 'rgba(245, 158, 11, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Critical',
                        data: criticalData,
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
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
    
    // Issues & PRs Chart
    const issuesCtx = document.getElementById('issuesChart');
    if (issuesCtx) {
        const issuesData = generateTrendData(450, 0.01, 0.12);
        const prsData = generateTrendData(180, 0.015, 0.15);
        
        new Chart(issuesCtx, {
            type: 'bar',
            data: {
                labels: monthlyLabels.filter((_, i) => i % 3 === 0), // Show quarterly
                datasets: [
                    {
                        label: 'Open Issues',
                        data: issuesData.filter((_, i) => i % 3 === 0),
                        backgroundColor: 'rgba(37, 99, 235, 0.7)',
                        borderColor: '#2563eb',
                        borderWidth: 1
                    },
                    {
                        label: 'Open PRs',
                        data: prsData.filter((_, i) => i % 3 === 0),
                        backgroundColor: 'rgba(16, 185, 129, 0.7)',
                        borderColor: '#10b981',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        stacked: false
                    },
                    x: {
                        stacked: false,
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45
                        }
                    }
                }
            }
        });
    }
    
    // Modulesync Compliance Chart
    const modulesyncCtx = document.getElementById('modulesyncChart');
    if (modulesyncCtx) {
        const compliantData = generateTrendData(280, 0.02, 0.08);
        const nonCompliantData = generateTrendData(30, -0.02, 0.1);
        
        new Chart(modulesyncCtx, {
            type: 'line',
            data: {
                labels: monthlyLabels,
                datasets: [
                    {
                        label: 'In Sync',
                        data: compliantData,
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Out of Sync',
                        data: nonCompliantData,
                        borderColor: '#f59e0b',
                        backgroundColor: 'rgba(245, 158, 11, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
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
    
    // Module Growth Chart
    const growthCtx = document.getElementById('growthChart');
    if (growthCtx) {
        const growthData = generateTrendData(250, 0.015, 0.05);
        
        new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: monthlyLabels,
                datasets: [{
                    label: 'Total Modules',
                    data: growthData,
                    borderColor: '#8b5cf6',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
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
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false
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
    
    // Version Releases Chart
    const releasesCtx = document.getElementById('releasesChart');
    if (releasesCtx) {
        const releasesData = monthlyLabels.map(() => Math.floor(Math.random() * 20 + 5));
        
        new Chart(releasesCtx, {
            type: 'bar',
            data: {
                labels: monthlyLabels.filter((_, i) => i % 2 === 0), // Show bi-monthly
                datasets: [{
                    label: 'Releases',
                    data: releasesData.filter((_, i) => i % 2 === 0),
                    backgroundColor: 'rgba(139, 92, 246, 0.7)',
                    borderColor: '#8b5cf6',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
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
    
    // Contributor Activity Chart
    const contributorsCtx = document.getElementById('contributorsChart');
    if (contributorsCtx) {
        const activeContributors = generateTrendData(45, 0.01, 0.1);
        const newContributors = generateTrendData(8, 0.02, 0.2);
        
        new Chart(contributorsCtx, {
            type: 'line',
            data: {
                labels: monthlyLabels,
                datasets: [
                    {
                        label: 'Active Contributors',
                        data: activeContributors,
                        borderColor: '#06b6d4',
                        backgroundColor: 'rgba(6, 182, 212, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'New Contributors',
                        data: newContributors,
                        borderColor: '#ec4899',
                        backgroundColor: 'rgba(236, 72, 153, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
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
    
    // Dependency Health Chart
    const dependencyHealthCtx = document.getElementById('dependencyHealthChart');
    if (dependencyHealthCtx) {
        const upToDate = generateTrendData(1200, 0.02, 0.08);
        const outdated = generateTrendData(180, -0.01, 0.12);
        const deprecated = generateTrendData(25, -0.02, 0.15);
        
        new Chart(dependencyHealthCtx, {
            type: 'line',
            data: {
                labels: monthlyLabels,
                datasets: [
                    {
                        label: 'Up to Date',
                        data: upToDate,
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Outdated',
                        data: outdated,
                        borderColor: '#f59e0b',
                        backgroundColor: 'rgba(245, 158, 11, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Deprecated',
                        data: deprecated,
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
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
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Initialize charts when page loads
document.addEventListener('DOMContentLoaded', function() {
    initCharts();
});

