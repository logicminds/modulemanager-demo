# Voxpupuli Module Manager

## 1. Executive Summary

### 1.1 Purpose
The Voxpupuli Module Manager is a comprehensive web application designed to index, track, and manage 100+ Puppet modules maintained by the Voxpupuli organization. The system provides a single pane of glass view for monitoring module health, tracking issues, managing dependencies, and coordinating maintenance efforts across the entire module ecosystem.

### 1.2 Problem Statement
Managing 100+ Puppet modules across GitHub and Puppet Forge presents significant challenges:
- Lack of centralized visibility into module status, health, and maintenance needs
- Difficulty tracking issues, PRs, and discussions across multiple repositories
- No unified view of module popularity, download statistics, and version adoption
- Challenges in monitoring modulesync template synchronization status
- Limited visibility into dependency health and security issues
- No historical tracking of module metrics and trends
- Manual, communication-heavy process for importing/forking/transferring modules into Voxpupuli
- Difficulty tracking modules that exist in GitHub but not on Puppet Forge
- No automated tracking of version synchronization between GitHub and Puppet Forge

### 1.3 Solution Overview
A Next.js web application built on Makerkit that:
- Automatically indexes all Voxpupuli modules from GitHub and Puppet Forge
- Provides real-time status dashboards with actionable insights
- Integrates GitHub issues, PRs, and discussions into a unified interface
- Tracks and visualizes module metrics, downloads, and trends
- Monitors modulesync synchronization status and version compliance
- Tracks dependencies and their health across all modules
- Provides alerting and notification systems for maintenance needs
- Streamlines module import/fork/transfer process with guided wizard and admin approval workflow
- Tracks modules in GitHub but not on Puppet Forge
- Monitors version synchronization between GitHub and Puppet Forge

## 2. User Personas

### 2.1 Public Users (Read-Only)
- **Goal**: View module status and health information
- **Needs**: Access to public module information, download stats, supported platforms
- **Permissions**: Read-only access to public data

### 2.2 Community Contributors
- **Goal**: Understand module status to contribute effectively
- **Needs**: View issues, PRs, discussions, and module health
- **Permissions**: Read access + ability to view detailed module information

### 2.3 Module Maintainers
- **Goal**: Manage their assigned modules efficiently
- **Needs**: Full module details, ability to take actions, receive alerts for their modules
- **Permissions**: Write access to their assigned modules, can trigger actions

### 2.4 Voxpupuli Admins
- **Goal**: Oversee entire module ecosystem
- **Needs**: Full access to all modules, reporting, configuration, user management
- **Permissions**: Full administrative access

## 3. Core Features

### 3.1 Module Discovery & Indexing

#### 3.1.1 Initial Discovery
- **GitHub Organization Crawl**: Automatically discover all repositories in the Voxpupuli GitHub organization
- **Puppet Forge Namespace Crawl**: Discover all modules in the Voxpupuli namespace on Puppet Forge
- **Reconciliation**: Match GitHub repositories with Puppet Forge modules using metadata
- **Orphan Detection**: Identify and track modules that exist in GitHub but not on Puppet Forge
- **Version Sync Detection**: Identify modules where GitHub and Puppet Forge versions are out of sync (if version sync tracking is enabled)
- **Manual Addition**: Allow admins to manually add modules that aren't auto-discovered

#### 3.1.2 Data Collection
- **GitHub Data**: Repository metadata, issues, PRs, releases, stars, forks, contributors
- **Puppet Forge Data**: Module metadata, download statistics (total and per-version), version information, release dates
- **Module Metadata**: Parse `metadata.json` for dependencies, supported OS, Puppet version requirements
- **Modulesync Data**: Parse `.msync.yml` for modulesync version and configuration

### 3.2 Module Dashboard (Single Pane of Glass)

#### 3.2.1 Dashboard Layout
- **Header Section**: Title and subtitle with module count summary (fixed at top)
- **Statistics Bar**: Quick overview cards showing:
  - Total modules
  - Healthy modules count
  - Modules needing attention
  - Critical modules count
  - Fixed position, does not scroll
- **Module Controls Section**: 
  - Positioned below statistics for easy access
  - View toggle (Card/List view)
  - Search input for filtering modules
  - Status filter dropdown
  - **Sticky Positioning**: Becomes sticky at top of viewport when page is scrolled
  - Stays fixed at top while user scrolls through module list
  - Page scrolls normally until controls reach top, then controls stick and module list scrolls independently
- **Module Grid/List**: Main content area displaying modules
  - **Normal Page Scrolling**: Page scrolls normally, allowing user to scroll controls to top
  - **Independent Scrolling**: Once controls are sticky at top, module list scrolls independently below
  - Minimum height to display at least 9 modules visible at once
  - Header and statistics scroll with page, controls become sticky at top
  - Custom scrollbar styling for better UX
  - Responsive behavior (smaller heights on mobile devices)

#### 3.2.2 View Modes
- **Card Layout** (Default): Visual cards showing key module information
- **List Layout**: Compact list view for quick scanning
- **Toggle**: Easy switching between card and list views, positioned in controls section

#### 3.2.3 Module Card Information
Each module card displays:
- **Module Name**: Display name and identifier
- **Status Indicators**: 
  - Health score/status (traffic light: green/yellow/red)
  - Badges: "Needs Attention", "Up to Date", "Out of Sync", "Security Issues"
- **Quick Stats**:
  - Open issues count
  - Open PRs count
  - Last updated date
  - Last download date
  - Download count (total or recent)
- **Modulesync Status**: Version and sync status indicator
- **Popularity Indicators**: Star count, download trends (up/down arrow)

#### 3.2.4 Filtering & Search
- **Search**: Full-text search across module names, descriptions
- **Filters**:
  - By maintainer/owner
  - By supported operating system
  - By supported Puppet version
  - By health status (green/yellow/red)
  - By tags/categories
  - By modulesync version
  - By alert status (has alerts, no alerts)
- **Sorting**: By name, last updated, download count, health score, issues count

### 3.3 Module Detail Page

#### 3.3.1 Overview Section
- **Module Information**:
  - Full name, description, GitHub URL, Puppet Forge URL
  - Current version, latest release date
  - Maintainers list
  - Tags/categories
- **Quick Stats Dashboard**:
  - Total downloads (with trend indicator)
  - Downloads by version (table/graph)
  - Open issues/PRs count
  - Stars, forks, contributors
  - Last activity date

#### 3.3.2 Download Statistics
- **Download Graph**: Time-series chart showing download trends
- **Version Breakdown**: Downloads separated by module version
- **Version Changes**: Changelog and version history
- **Importation Information**: Important notes about version changes, breaking changes, migration guides

#### 3.3.3 GitHub Integration
- **Issues Tab**: 
  - List of open/closed issues with status, labels, assignees
  - Filter by status, label, assignee
  - Direct links to GitHub issues
  - Embedded GitHub issue discussions (if API allows)
  - **Tab Badge**: Issues tab displays count badge showing number of open issues (e.g., "Issues (12)")
- **Pull Requests Tab**:
  - List of open/merged/closed PRs
  - PR status, reviewers, labels
  - Highlight PRs that should be merged
  - Direct links to GitHub PRs
- **Discussions Tab**:
  - GitHub Discussions integration
  - View and participate in discussions without leaving the app

#### 3.3.4 Modulesync Information
- **Modulesync Status**: 
  - Current modulesync version from `.msync.yml`
  - Sync status (in sync, out of sync, unknown)
  - Last sync date
  - Template compliance status
- **Modulesync Configuration**: Display parsed `.msync.yml` configuration
- **Sync Actions**: Trigger manual sync check or sync operation

#### 3.3.5 Dependencies Section
- **Dependency List**: All dependencies from `metadata.json`
- **Dependency Status**: For each dependency:
  - Current version used
  - Latest available version
  - Security vulnerabilities (if any)
  - Update status (up to date, outdated, deprecated)
  - Health status of dependency module (if tracked)
- **Dependency Links**: 
  - **Voxpupuli Modules**: If a dependency is a Voxpupuli-managed module, clicking the dependency name navigates to that module's detail page within the Module Manager (same-page navigation)
  - **External Modules**: For non-Voxpupuli modules (e.g., Puppet Labs), dependency names link to Puppet Forge module page (opens in new tab)
  - **GitHub Links**: Additional GitHub link icon for each dependency (opens in new tab)
  - **Visual Indicator**: Voxpupuli modules display a "VP" badge next to the dependency name
  - **Automatic Detection**: System automatically detects if a dependency is Voxpupuli-managed by checking against the module index
- **Dependency Graph**: Visual representation of dependency relationships
- **Dependency Alerts**: Highlight dependencies that need updates
- **Tab Badge**: Dependency tab displays count badge showing number of dependencies (e.g., "Dependencies (3)")

#### 3.3.6 Supported Platforms
- **Operating Systems**: List of supported OS with versions
- **Puppet Versions**: Supported Puppet version ranges
- **Compatibility Matrix**: Visual matrix showing OS × Puppet version compatibility

#### 3.3.7 Historical Tracking
- **Module-Level Trends**: Available in Statistics tab of module detail page
  - Download trends (2-year history)
  - Version adoption breakdown
- **Ecosystem Trends**: Comprehensive trends available on dedicated Trends page (see Section 3.8)

#### 3.3.8 Actions Panel
Available actions (based on user permissions):
- **Trigger Sync/Update**: Manually trigger data refresh for the module
- **Create Issue**: Quick link to create GitHub issue
- **Create PR**: Quick link to create GitHub PR
- **Mark as Reviewed**: Acknowledge alerts or status
- **Link to GitHub**: Direct link to repository
- **Link to Puppet Forge**: Direct link to Forge page
- **Subscribe to Alerts**: Configure alert preferences for this module

### 3.4 Alerting & Notifications

#### 3.4.1 Alert Types
- **Security Issues**: Known vulnerabilities in dependencies or the module itself
- **Outdated Dependencies**: Dependencies with newer versions available
- **Template Sync Issues**: Modulesync out of sync with templates
- **Outstanding PRs**: PRs that should be merged (based on age, approval status, etc.)
- **Stale Issues**: Issues that haven't been updated in a while
- **Version Updates**: New versions of dependencies or upstream packages
- **Low Activity**: Modules with no recent activity

#### 3.4.2 Alert Configuration
- **User Preferences**: 
  - Per-module alert subscriptions
  - Alert severity filters (critical, high, medium, low)
  - Delivery method preferences
- **Alert Rules**: Configurable thresholds (e.g., "alert if PR open > 30 days")
- **Alert Aggregation**: Group similar alerts to reduce noise

#### 3.4.3 Notification Delivery
- **In-App Dashboard**: Alert center showing all active alerts
- **Email Notifications**: Digest emails (daily/weekly) or immediate for critical alerts
- **Slack Integration**: Post alerts to Slack channels (future enhancement)

### 3.5 Reporting

#### 3.5.1 Reports Page
- **Dedicated Reports Page**: Separate page accessible from main navigation
- **Report Cards**: Visual cards for each report type:
  - Module Health Report
  - Maintenance Backlog
  - Modulesync Compliance
  - Dependency Compliance
  - Security Compliance
  - Download & Usage
- **Report Summary**: Each card displays:
  - Report title and description
  - Key statistics (3-4 metrics)
  - "View Report" button to expand details
- **Detailed Reports**: Expandable report sections showing:
  - Tables with module data
  - Prioritized lists
  - Statistics and summaries
  - Actionable insights

#### 3.5.2 Module Health Reports
- **Overall Health Dashboard**: Summary of all modules with health scores
- **Module Health Report**: Detailed health report for individual modules
- **Health Trends**: Track health improvements/degradations over time (available on Trends page)

#### 3.5.3 Maintenance Backlog
- **Outstanding Work**: List of all modules needing attention
- **Prioritized Tasks**: Tasks sorted by urgency/impact
- **Maintainer Workload**: Distribution of work across maintainers

#### 3.5.4 Compliance Reports
- **Modulesync Compliance**: Modules that are out of sync
- **Dependency Compliance**: Modules with outdated dependencies
- **Security Compliance**: Modules with known security issues

#### 3.5.5 Download & Usage Reports
- **Popularity Rankings**: Most downloaded modules
- **Version Adoption**: Which versions are most used
- **Trend Analysis**: Growth/decline in module usage (detailed trends on Trends page)

### 3.6 Social Features

#### 3.7.1 GitHub Integration
- **Unified View**: Bring GitHub issues, PRs, and discussions into the app
- **Inline Viewing**: View issue/PR content without leaving the app
- **Quick Actions**: Comment, close, label issues/PRs from within the app (if permissions allow)
- **Discussion Threads**: View and participate in GitHub Discussions

#### 3.7.2 Comments & Annotations
- **Module Comments**: Add internal notes/comments on modules (for maintainers/admins)
- **Issue Annotations**: Link internal notes to GitHub issues
- **Collaboration**: Share notes and annotations with team members

### 3.8 Module Import/Fork/Transfer Workflow

#### 3.8.1 Transfer Module Wizard
- **Modal Wizard**: Accessible via "Transfer Module" button in navigation bar (removed from navigation tabs)
- **Guided Process**: Step-by-step wizard UI (8 steps) to walk users through the transfer process based on [Voxpupuli migration documentation](https://voxpupuli.org/docs/migrate_module/)
- **Transfer Request Tracking**: Each transfer creates a unique tracking record with:
  - Transfer Request ID (e.g., TR-1234567890)
  - Status tracking (draft, submitted, in_progress, completed)
  - Step-by-step completion tracking
  - Timestamps for each phase
  - Complete record of all wizard inputs and checklist completions
- **Wizard Steps**:
  1. **Membership Verification**: 
     - Verify user is a member of Voxpupuli GitHub organization
     - Provide instructions if membership is required
     - Link to join process if needed
     - Tracked in transfer request
  2. **Repository Selection**: 
     - Enter GitHub repository URL or select from user's repositories
     - Detect if repository is a fork
     - Validate repository access and permissions
     - Repository URL saved to transfer request
  3. **Repository Preparation Checklist**:
     - **Enable GitHub Issues**: Verify/issues are enabled, provide toggle if needed
     - **Remove PDK .sync.yaml**: Detect and prompt for removal if PDK `.sync.yaml` exists
     - **License Verification**: Verify `LICENSE` file exists in docroot and matches `metadata.json` license
     - **Fork Network**: If repository is a fork, provide instructions and link to detach from fork network
     - **Validation**: Real-time validation of each checklist item with visual indicators
     - Checklist completion tracked in transfer request
  4. **Transfer Configuration**:
     - Module name and description
     - Target Voxpupuli organization
     - Initial maintainers assignment
     - Notes about old module (for deprecation process)
     - Configuration saved to transfer request
  5. **Transfer Repository**:
     - Confirmation checkbox for transfer understanding
     - Execute transfer operation (via GitHub API)
     - Transfer execution tracked in transfer request
     - Transfer completion timestamp recorded
  6. **Admin Tasks Preview**:
     - Display list of admin tasks that will be required after transfer:
       - Verify all webhooks are disabled
       - Enable "Automatically delete head branches" in repository settings
       - Add `collaborators` team with Write permissions
       - Update forge.puppet.com secret access permissions
     - These tasks are tracked and assigned to admins automatically
     - Admin task list saved to transfer request
  7. **Post-Transfer Tasks**:
     - Display checklist of maintainer tasks:
       - Add module to modulesync_config
       - Execute modulesync for the module
       - Release first version under Vox Pupuli
       - Create Forge issue to deprecate old module
       - Write blog post about migration
       - Send mailing list notification
     - Tasks tracked in transfer request for follow-up
  8. **Review & Submit**: 
     - Review all information and checklist items
     - Display transfer request ID
     - Show summary of all steps completed
     - Submit request for tracking
     - Transfer request saved and tracked
- **Progress Tracking**: Visual progress indicator showing current step and completion status
- **Checklist Management**: Interactive checklist that tracks completion of each required step
- **Validation**: Real-time validation of repository access, naming conventions, and requirements
- **Transfer Request Persistence**: Transfer requests saved and can be viewed in user's transfer requests dashboard
- **Status Updates**: Real-time status updates as transfer progresses through each phase

#### 3.8.2 Transfer Types
- **Transfer Own Repository**: Transfer ownership of user's own repository to Voxpupuli organization (primary use case)
- **Fork External Repository**: Fork an external repository into Voxpupuli organization (requires owner engagement documentation)
- **Import Existing**: Import a module that already exists in Voxpupuli but isn't tracked in the system
- **Third-Party Module Request**: For modules not owned by requester:
  - Requester must document efforts to engage owner
  - Must show owner is unresponsive
  - Requires email to mailing list before starting process
  - Evaluated on case-by-case basis

#### 3.8.3 Admin Approval Workflow
- **Automatic Notification**: System automatically notifies Voxpupuli admins when a request is submitted
- **Approval Queue**: Admin dashboard showing pending import/transfer requests
- **Request Details**: Admins can view full request details, repository information, and requester information
- **Approval Actions**:
  - **Approve**: Approve the request and proceed with transfer/fork
  - **Reject**: Reject with optional reason/feedback
  - **Request Changes**: Request modifications before approval
  - **Defer**: Mark for later review
- **Multi-Admin Approval**: Optional requirement for multiple admin approvals for sensitive operations
- **Audit Trail**: Complete history of all approval actions and decisions

#### 3.8.4 Transfer Request Tracking
- **Unique Request ID**: Each transfer request receives a unique identifier (e.g., TR-1234567890)
- **Request Status**: Track status of each transfer request:
  - **Draft**: User is still working on the request
  - **Pre-Transfer Checklist**: User completing repository preparation checklist
  - **Submitted**: Awaiting admin review
  - **Under Review**: Admin is reviewing the request
  - **Changes Requested**: Admin requested modifications
  - **Approved**: Approved, ready to execute transfer
  - **Rejected**: Request was rejected
  - **Transfer In Progress**: Transfer/fork operation is executing
  - **Transfer Completed**: Repository successfully transferred
  - **Admin Tasks Pending**: Waiting for admin to complete post-transfer tasks
  - **Maintainer Tasks Pending**: Waiting for maintainer to complete post-transfer tasks
  - **Completed**: All tasks completed, migration fully done
  - **Failed**: Operation failed (with error details)
- **Checklist Status**: Track individual checklist items:
  - Repository preparation checklist (pre-transfer)
  - Admin tasks checklist (post-transfer)
  - Maintainer tasks checklist (post-transfer)
- **Status Updates**: Real-time status updates and notifications to requester
- **History View**: Complete history of all import/transfer requests with status changes
- **User Dashboard**: Users can view status of their own requests with detailed checklist progress
- **Admin Dashboard**: Admins can view all requests and assigned tasks

#### 3.8.5 Execution & Automation
- **Wizard-Initiated Transfer**: Transfer can be executed directly from wizard (step 4) after confirmation
- **Automated Execution**: System executes the transfer operation via GitHub API
- **Transfer Confirmation**: User must confirm understanding that repository ownership will transfer
- **Transfer Record Creation**: Transfer request record created at wizard start and updated throughout process
- **Post-Transfer Admin Tasks**: After transfer, system tracks and assigns admin tasks:
  - **Webhook Verification**: Admin must verify all webhooks are disabled
  - **Branch Settings**: Admin must enable "Automatically delete head branches"
  - **Team Permissions**: Admin must add `collaborators` team with Write permissions
  - **Forge Secrets**: Admin must update forge.puppet.com secret access permissions
  - System provides direct links to repository settings for each task
- **Post-Transfer Maintainer Tasks**: System tracks maintainer tasks:
  - **Modulesync Setup**: Add module to voxpupuli/modulesync_config
  - **Modulesync Execution**: Execute modulesync for the module
    - Note: Modulesync will delete `CONTRIBUTING.md` in root directory and use global version from voxpupuli/.github
    - System prompts user to review and enhance global CONTRIBUTING.md if local version has useful parts
  - **First Release**: Release first version under Vox Pupuli
  - **Forge Deprecation**: Create GitHub issue in FORGE project to deprecate old module (and approve new one if old was approved)
  - **Blog Post**: Write blog post about the migration
  - **Mailing List**: Send notification to mailing list about the migration/new blog post
- **Task Tracking**: Each task has status (pending, in progress, completed) with assignee tracking
- **Automated Checks**: System can automatically verify some checklist items (e.g., issues enabled, LICENSE file exists)
- **Error Handling**: Graceful error handling with detailed error messages and retry capabilities
- **Rollback**: Ability to rollback failed transfers if needed
- **Bulk Migration Support**: Special workflow for users migrating multiple modules (may grant temporary admin access)

#### 3.8.6 GitHub/Forge Discrepancy Tracking
- **Orphan Modules**: Track modules that exist in GitHub but not on Puppet Forge
  - Display in dashboard with "Not on Forge" badge
  - Alert admins/maintainers about missing Forge presence
  - Provide action to create Forge module
- **Version Sync Monitoring**: 
  - Compare GitHub releases/tags with Puppet Forge versions
  - Alert when versions are out of sync
  - Show version discrepancy details
  - Track sync status (in sync, out of sync, unknown)
- **Sync Actions**: 
  - Manual trigger to check version sync
  - Option to enable automatic version sync tracking per module
  - Alert when new versions are published in one location but not the other

#### 3.8.7 Communication Integration
- **Slack Reduction**: Reduce Slack communication by centralizing requests in the UI
- **In-App Messaging**: Built-in messaging system for admin-requester communication
- **Email Notifications**: Email notifications for status changes and approvals
- **Activity Feed**: Activity feed showing recent import/transfer activity

## 4. Technical Architecture

### 4.1 Technology Stack
- **Frontend**: Next.js 16 with App Router, React 19, TypeScript
- **UI Framework**: Tailwind CSS 4, Shadcn UI, Lucide React
- **Backend**: Next.js Server Actions, API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (with GitHub OAuth integration)
- **Deployment**: Vercel
- **Monorepo**: Turborepo

### 4.2 External Integrations
- **GitHub API**: 
  - Authentication: GitHub App or Personal Access Token
  - Endpoints: Repositories, Issues, Pull Requests, Discussions, Releases
- **Puppet Forge API**:
  - Authentication: Forge API Token
  - Endpoints: Module metadata, download statistics, version information
- **Webhooks**: GitHub webhooks for real-time updates (future enhancement)

### 4.3 Data Update Strategy
- **Event-Driven Updates**:
  - GitHub webhooks (for real-time issue/PR updates)
  - GitHub Actions integration (trigger updates from CI/CD)
  - Manual triggers (user-initiated refresh)
- **Scheduled Updates**: Daily batch jobs for:
  - Download statistics from Puppet Forge
  - Module metadata refresh
  - Dependency version checks
  - Security vulnerability scans

### 4.4 Data Model (High-Level)

#### Core Entities
- **Modules**: Core module information
- **Module Versions**: Version history and metadata
- **Dependencies**: Module dependencies and their status
- **Issues**: GitHub issues (cached)
- **Pull Requests**: GitHub PRs (cached)
- **Downloads**: Download statistics (time-series)
- **Modulesync Status**: Sync status and version tracking
- **Alerts**: Active alerts and notifications
- **Users**: User accounts with roles and permissions
- **Module Maintainers**: Association between users and modules
- **Import Requests**: Module import/fork/transfer requests with status tracking
- **Version Sync Status**: Tracking of version synchronization between GitHub and Puppet Forge

## 5. User Permissions & Access Control

### 5.1 Permission Levels
- **Public (Read-Only)**: View public module information, stats, issues, PRs
- **Authenticated User**: Same as public + ability to subscribe to alerts + can submit import/transfer requests
- **Module Maintainer**: Full access to assigned modules + can take actions
- **Voxpupuli Member**: Access to member-only features, can view all modules + can submit import/transfer requests
- **Admin**: Full access to all features, configuration, user management + can approve/reject import/transfer requests

### 5.2 Access Control Rules
- Public data: All users can view
- Module actions: Only maintainers/admins can execute
- Alert configuration: Users can configure their own alerts
- Import/transfer requests: Authenticated users can submit, only admins can approve
- Admin features: Only admins can access

## 6. User Interface Requirements

### 6.1 Design Principles
- **Modern & Clean**: Use Makerkit's design system
- **Responsive**: Mobile-first design, works on all screen sizes
- **Accessible**: WCAG 2.1 AA compliance
- **Fast**: Optimistic UI updates, efficient data loading
- **Intuitive**: Clear navigation, obvious actions
- **Independent Scrolling**: Module lists scroll independently, keeping controls and headers visible

### 6.2 Key Pages
1. **Home/Dashboard**: 
   - Module grid/list view with search and filter controls
   - Statistics bar showing module counts by health status
   - Search, filter, and view toggle controls positioned below statistics
   - Module cards/list items with status indicators
   - Quick access to module details
   - "Transfer Module" button in navigation (opens transfer wizard modal)
2. **Trends Page**: 
   - Dedicated page for historical trends and analytics
   - Multiple chart visualizations showing 3-year trends:
     - Total Downloads
     - Module Health Status
     - Open Issues & PRs
     - Modulesync Compliance
     - Module Growth
     - Version Releases
     - Contributor Activity
     - Dependency Health
3. **Module Detail**: Comprehensive module information page
   - Tab navigation with count badges (Issues, Dependencies)
   - Clickable dependency links to Puppet Forge and GitHub
   - Interactive charts and statistics
   - Overview, Issues, Dependencies, and Statistics tabs
4. **Alerts Center**: 
   - Dedicated page for all active alerts and notifications
   - Alerts organized by severity (Critical, High, Medium, Low)
   - Filtering by severity and alert type
   - Alert cards showing module, type, description, and recommended action
   - Statistics bar showing alert counts
   - Actions: View Module, Dismiss Alert
5. **Reports Page**: 
   - Dedicated page for comprehensive reports and analytics
   - Report cards for:
     - Module Health Report
     - Maintenance Backlog
     - Modulesync Compliance
     - Dependency Compliance
     - Security Compliance
     - Download & Usage
   - Expandable detailed reports with tables, lists, and statistics
6. **Transfer Module Wizard**: 
   - Modal popup accessible via "Transfer Module" button
   - 7-step guided wizard for transferring modules
   - Transfer request tracking with unique IDs
   - Step-by-step process following Voxpupuli migration documentation
7. **Transfer Requests**: User's transfer request history and status (future page)
8. **Admin Approval Queue**: Pending transfer requests for admin review (admins only)
9. **Settings**: User preferences, alert configuration
10. **Admin Panel**: System configuration, user management (admins only)

### 6.4 Navigation & Interaction Patterns
- **Top Navigation Bar**: Consistent navigation across all pages:
  - Dashboard (home page)
  - Trends (historical analytics)
  - Alerts (alert center)
  - Reports (reporting views)
  - Transfer Module button (opens transfer wizard modal)
- **Transfer Module Access**: 
  - Removed from navigation tabs
  - Accessible via "Transfer Module" button in navigation bar
  - Opens modal wizard overlay
  - Available from all pages via navigation button
- **Tab Badges**: Count badges on tabs (Issues, Dependencies) show number of items
- **External Links**: All external links (GitHub, Puppet Forge) open in new tabs
- **Dependency Navigation**: Dependencies are clickable with links to both Forge and GitHub
- **Responsive Navigation**: Mobile-friendly navigation with collapsible menus
- **Page Structure**: 
  - Dashboard: Statistics → Module Controls (search/filter/view toggle) → Module List
  - Trends: Dedicated page with multiple chart visualizations
  - Alerts: Severity-organized alert lists with filtering
  - Reports: Card-based report selection with expandable details

### 6.3 Status Indicators
- **Traffic Light System**: 
  - Green: Healthy, up to date, no issues
  - Yellow: Needs attention, minor issues
  - Red: Critical issues, out of sync, security problems
- **Badges**: Quick visual indicators for status
- **Score System**: Optional numeric health score (0-100)

## 7. Non-Functional Requirements

### 7.1 Performance
- **Page Load**: < 2 seconds for dashboard
- **Data Refresh**: Background updates, don't block UI
- **API Rate Limits**: Respect GitHub and Puppet Forge rate limits
- **Caching**: Aggressive caching of static data, smart invalidation

### 7.2 Scalability
- **Module Count**: Support 100+ modules initially, scalable to 500+
- **Concurrent Users**: Support 100+ concurrent users
- **Data Volume**: Efficient storage and querying of historical data

### 7.3 Reliability
- **Uptime**: 99.9% availability
- **Error Handling**: Graceful degradation when external APIs are unavailable
- **Data Integrity**: Ensure data consistency across updates

### 7.4 Security
- **Authentication**: Secure authentication via Supabase Auth
- **API Keys**: Secure storage of GitHub and Puppet Forge tokens
- **Data Privacy**: Respect GitHub and Puppet Forge privacy policies
- **Rate Limiting**: Protect against abuse

## 8. Implementation Phases

### Phase 1: MVP (Minimum Viable Product)
- Module discovery and indexing
- Basic module dashboard (card/list view)
- Module detail page with basic information
- GitHub integration (issues, PRs)
- Puppet Forge integration (downloads, versions)
- Basic filtering and search
- User authentication and basic permissions

### Phase 2: Enhanced Features
- Modulesync integration and tracking
- Dependency monitoring
- Alert system (in-app)
- Historical tracking and trends
- Download graphs and version breakdown
- Enhanced GitHub integration (discussions)
- Module import/fork/transfer wizard
- Admin approval workflow
- GitHub/Forge discrepancy tracking

### Phase 3: Advanced Features
- Email notifications
- Advanced reporting
- Slack integration
- Social commenting features
- Advanced alert rules and configuration
- Performance optimizations

### Phase 4: Polish & Scale
- UI/UX improvements
- Advanced analytics
- Mobile app (if needed)
- Additional integrations
- Performance tuning for scale

## 9. Success Metrics

### 9.1 Adoption Metrics
- Number of active users
- Modules indexed and tracked
- Daily/weekly active users

### 9.2 Usage Metrics
- Modules viewed per session
- Actions taken per user
- Alert subscriptions

### 9.3 Impact Metrics
- Reduction in time to identify module issues
- Increase in modulesync compliance
- Reduction in outdated dependencies
- Faster response to security issues

## 10. Open Questions & Future Considerations

### 10.1 Open Questions
- Specific GitHub App permissions needed
- Puppet Forge API rate limits and quotas
- Modulesync API or file parsing approach
- Historical data retention policy

### 10.2 Future Enhancements
- Automated PR creation for dependency updates
- Integration with CI/CD pipelines
- Module comparison tools
- Community contribution metrics
- Module deprecation workflows
- Automated security scanning
- Integration with other Puppet ecosystem tools
- Automated version sync between GitHub and Puppet Forge
- Bulk import/transfer operations

## 11. Dependencies & Assumptions

### 11.1 Dependencies
- Access to Voxpupuli GitHub organization
- Puppet Forge API access and token
- GitHub App or Personal Access Token
- Supabase account and setup
- Vercel deployment account

### 11.2 Assumptions
- GitHub and Puppet Forge APIs remain stable
- Modules follow standard Puppet module structure
- Modulesync uses `.msync.yml` configuration file
- Metadata is available in `metadata.json` format
- Historical data can be collected going forward (may not have past data)

---

**Document Version**: 1.5  
**Last Updated**: [Current Date]  
**Status**: Draft for Review  
**Changes**: 
- v1.1: Added Module Import/Fork/Transfer Workflow feature (Section 3.7)
- v1.2: Added tab badges for Issues and Dependencies counts, clickable dependency links to Forge/GitHub (Sections 3.3.3, 3.3.5, 6.2, 6.4)
- v1.3: 
  - Added Trends page with comprehensive chart visualizations (Section 3.6.1, 6.2)
  - Created dedicated Alerts Center page with severity-based organization (Section 3.4.1, 6.2)
  - Created dedicated Reports page with card-based report selection (Section 3.5.1, 6.2)
  - Updated navigation structure and page organization (Section 6.2, 6.4)
  - Reorganized dashboard layout with controls positioned below statistics (Section 3.2.1)
  - Renumbered sections: Social Features (3.7), Import/Transfer Workflow (3.8)
- v1.4:
  - Removed "Import Module" from navigation tabs, replaced with "Transfer Module" button
  - Enhanced Transfer Module wizard with 7-step process including transfer execution
  - Added transfer request tracking with unique IDs and step-by-step status
  - Updated wizard to include admin tasks and post-transfer tasks steps
  - Added transfer record persistence and tracking (Section 3.8.1, 3.8.4, 3.8.5)
  - Implemented independent scrolling for module cards/list, keeping header and controls visible (Section 3.2.1, 6.1)
- v1.5:
  - Enhanced dashboard scrolling: Module controls become sticky at top when page is scrolled, module list scrolls independently below (Section 3.2.1, 6.1)

