# Voxpupuli Module Manager - Demo

This is a static HTML/CSS/JavaScript demo of the Voxpupuli Module Manager application based on the PRD. This is merely a sample of what could be.  The actual application will be far more complex, more features and hook up with things in the backend.  This is purely to get buy-in.

## Features Demonstrated

- **Module Dashboard**: Card and list view of modules with status indicators
- **Search & Filtering**: Search modules by name/description, filter by status
- **Module Detail View**: Comprehensive module information with tabs
- **Import Wizard**: Step-by-step wizard for importing modules to Voxpupuli
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## How to View

### Local Development

Simply open `index.html` in a web browser. No server required.

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a simple HTTP server (recommended)
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Deploy to Vercel

This project is configured for Vercel deployment.

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy from the demo directory
cd demo
vercel

# Or deploy to production
vercel --prod
```

The `vercel.json` configuration file is included for static site deployment.

## Sample Data

The demo includes 12 sample modules based on actual Voxpupuli repositories:
- puppet-nginx
- puppet-prometheus
- puppet-fail2ban
- puppet-nfs
- puppet-chrony
- puppet-autosign
- puppet-quadlets
- puppet-aptly
- puppet-openvox_bootstrap
- puppet-example
- puppet-gitlab
- puppet-postgresql

## Interactive Features

- Click on any module card to view details
- Use the view toggle to switch between card and list views
- Search modules using the search bar
- Filter by status (All, Healthy, Needs Attention, Critical)
- Try the "Import Module" button to see the wizard flow

## Notes

This is a static prototype for demonstration purposes. All data is mock/sample data and interactions are simulated.

