# 📚 FOSSBilling Modern Theme - Complete Installation & Customization Guide

> **Advanced documentation for developers and system administrators**

Table of Contents:
- [System Requirements](#system-requirements)
- [Pre-Installation Checklist](#pre-installation-checklist)
- [Server Setup](#server-setup)
- [Installation Methods](#installation-methods)
- [Post-Installation Configuration](#post-installation-configuration)
- [Customization Guide](#customization-guide)
- [Advanced Modifications](#advanced-modifications)
- [Troubleshooting](#troubleshooting)
- [Performance Optimization](#performance-optimization)
- [Uninstallation](#uninstallation)

---

## System Requirements

### Minimum Requirements
```
PHP:                7.4 or later (8.1+ recommended)
Node.js:            14.x or later (18.x recommended for development)
npm:                6.x or later
FOSSBilling:        v1.4.0 or later
Web Server:         Apache 2.4+ OR Nginx 1.19+
SSL Certificate:    Required for production
Disk Space:         50MB minimum
RAM:                512MB minimum
```

### Recommended Setup
```
PHP:                8.2+
Node.js:            20.x LTS
Database:           MySQL 8.0+ or MariaDB 10.5+
Web Server:         Nginx 1.24+
SSL/TLS:            Let's Encrypt or commercial
Disk Space:         200MB+
RAM:                2GB+
```

## Pre-Installation Checklist

Before installing the theme, ensure:

- ✅ FOSSBilling is fully installed and operational
- ✅ You have SSH/SFTP access to your server
- ✅ You have admin privileges in FOSSBilling
- ✅ Your server has git installed (for git clone method)
- ✅ Node.js and npm are installed (for development builds)
- ✅ You have a backup of your current theme
- ✅ Your server meets minimum PHP version requirement
- ✅ Write permissions exist in `/themes/` directory

### Create Backup

Before proceeding, backup your current theme setup:

```bash
# SSH into your server
cd /path/to/fossbilling

# Backup current theme directory
cp -r themes/ themes_backup_$(date +%Y%m%d)

# Verify backup
ls -la themes_backup_*
```

## Server Setup

### 1. Configure File Permissions

```bash
# Navigate to FOSSBilling root
cd /path/to/fossbilling

# Set correct permissions for themes directory
chown -R www-data:www-data themes/
chmod -R 755 themes/
chmod -R 644 themes/*/

# Verify ownership
ls -l themes/
```

### 2. Check Server Configuration

#### For Apache Users

```apache
# .htaccess should be in place
# Verify mod_rewrite is enabled
a2enmod rewrite
sudo systemctl restart apache2
```

#### For Nginx Users

```nginx
# Verify Nginx configuration includes location block
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

### 3. Enable Required PHP Extensions

```bash
# Check installed extensions
php -m | grep -i "gd\|json\|dom\|curl"

# Install missing extensions if needed
sudo apt-get install php-gd php-json php-xml php-curl

# Restart PHP-FPM (if using)
sudo systemctl restart php8.1-fpm
```

## Installation Methods

### Method 1: Git Clone (Recommended for Updates)

#### Prerequisites
- Git installed on server
- SSH access to repository (public, no credentials needed)

#### Steps

```bash
# 1. Navigate to themes directory
cd /path/to/fossbilling/themes

# 2. Clone the repository
git clone https://github.com/HighMark-31/fossbilling-theme-modern.git modern

# 3. Navigate to theme directory
cd modern

# 4. Install dependencies (optional, for development)
npm install

# 5. Verify installation
ls -la
```

#### To Update Later

```bash
cd /path/to/fossbilling/themes/modern
git pull origin main
npm install
npm run build
```

### Method 2: Manual Download (No Git Required)

#### Steps

1. **Download the theme**
   - Visit: https://github.com/HighMark-31/fossbilling-theme-modern/releases
   - Download the latest `.zip` file

2. **Extract the archive**
   ```bash
   unzip fossbilling-theme-modern-main.zip
   ```

3. **Upload to server**
   - Use SFTP/FTP client (Filezilla, WinSCP, etc.)
   - Upload to `/path/to/fossbilling/themes/`
   - Rename folder to `modern` if needed

4. **Set permissions**
   ```bash
   chmod -R 755 /path/to/fossbilling/themes/modern
   ```

### Method 3: Docker Installation

If running FOSSBilling in Docker:

```bash
# Inside your FOSSBilling container
docker exec fossbilling_container sh -c "\
  cd /var/www/fossbilling/themes && \
  git clone https://github.com/HighMark-31/fossbilling-theme-modern.git modern
"

# Verify installation
docker exec fossbilling_container ls -la /var/www/fossbilling/themes/modern/
```

## Post-Installation Configuration

### Step 1: Activate in FOSSBilling Admin Panel

1. **Log into Admin Panel**
   - URL: `https://your-domain.com/admin`
   - Enter your admin credentials

2. **Navigate to Settings**
   - Click: **Settings** → **Themes**

3. **Select Modern Theme**
   - Find "Modern" or "fossbilling-theme-modern"
   - Click to select it
   - Click **Activate** or **Save**

4. **Clear Caches**
   ```bash
   # Clear FOSSBilling cache
   rm -rf /path/to/fossbilling/storage/cache/*
   
   # Clear browser cache
   # Press Ctrl+Shift+Del (Windows/Linux) or Cmd+Shift+Del (Mac)
   ```

5. **Verify Activation**
   - Navigate to client portal: `https://your-domain.com/`
   - Verify modern theme is displayed
   - Check console for errors (F12 → Console)

### Step 2: Verify All Features

- [ ] Dashboard loads correctly
- [ ] Navigation menu is visible
- [ ] Responsive design works on mobile
- [ ] All CSS styles applied correctly
- [ ] No console errors
- [ ] Links and buttons functional

## Customization Guide

### 1. Basic Color Customization

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0066cc',     // Change primary color
        secondary: '#ff6b6b',   // Change secondary color
        accent: '#ffd700',      // Change accent color
      },
      spacing: {
        '4.5': '1.125rem',     // Add custom spacing
      },
    },
  },
};
```

### 2. Logo & Branding

1. **Replace Logo**
   - Add your logo to `assets/images/`
   - Update logo path in template files

2. **Edit Theme Colors**
   - Modify `assets/css/variables.scss`
   - Update color variables

### 3. Font Customization

```javascript
// In tailwind.config.js
theme: {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    serif: ['Playfair Display', 'serif'],
    mono: ['Fira Code', 'monospace'],
  },
}
```

### 4. Building Modified Themes

```bash
# Install dependencies
npm install

# Development build (watch for changes)
npm run watch

# Production build (minified)
npm run build

# Clear cache after build
rm -rf ../../../storage/cache/*
```

## Advanced Modifications

### Customizing Twig Templates

All templates are in `html/` directory:

```twig
{# Example: Modify dashboard layout #}
{# File: html/client/dashboard.html #}

<div class="dashboard">
    {# Your custom HTML #}
    {{ client.name }}
    {{ client.balance }}
</div>
```

### Adding Custom JavaScript

1. **Create file**: `assets/js/custom.js`
2. **Add your code**:
   ```javascript
   document.addEventListener('DOMContentLoaded', function() {
       // Your custom JavaScript
       console.log('Theme loaded!');
   });
   ```
3. **Link in template**:
   ```html
   <script src="{{ theme_url }}/assets/js/custom.js"></script>
   ```

### Custom CSS Classes

```scss
// Add to assets/scss/custom.scss
.custom-component {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 2rem;
    border-radius: 0.5rem;
}
```

## Performance Optimization

### 1. Minify Assets

```bash
# Production build
npm run build

# Verify minified files
ls -lh assets/css/*.min.css
ls -lh assets/js/*.min.js
```

### 2. Enable Caching

#### Browser Caching (Apache)

```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType text/javascript "access plus 1 month"
    ExpiresByType image/* "access plus 1 year"
</IfModule>
```

#### Browser Caching (Nginx)

```nginx
location ~* \.(css|js|jpg|png|gif)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 3. Gzip Compression

```bash
# Check if gzip is enabled
gzip -V

# For Nginx (add to nginx.conf)
gzip on;
gzip_types text/css text/javascript application/javascript;
gzip_level 6;
```

## Troubleshooting

### Theme Not Showing

**Problem**: Theme doesn't appear after activation

**Solution**:
```bash
# 1. Clear all caches
rm -rf storage/cache/*
rm -rf storage/logs/*

# 2. Check file permissions
chmod -R 755 themes/modern/

# 3. Verify theme folder name
ls -la themes/

# 4. Check FOSSBilling logs
tail -f storage/logs/error.log
```

### Styling Issues

**Problem**: CSS not loading or colors wrong

**Solution**:
```bash
# 1. Rebuild theme
cd themes/modern
npm run build

# 2. Clear browser cache (Ctrl+Shift+Del)

# 3. Hard refresh (Ctrl+F5)

# 4. Check console errors (F12 → Console tab)
```

### JavaScript Errors

**Problem**: JavaScript functions not working

**Solution**:
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Check Network tab for failed requests
4. Verify JavaScript files exist:
   ```bash
   ls -la themes/modern/assets/js/
   ```

### Mobile Responsiveness Issues

**Problem**: Theme looks broken on mobile

**Solution**:
1. Test on actual device or emulator
2. Check viewport meta tag in template
3. Verify Tailwind breakpoints
4. Test on multiple browsers

## Uninstallation

To revert to a previous theme:

```bash
# 1. Backup current theme (if needed)
cp -r themes/modern themes/modern_backup

# 2. Delete modern theme
rm -rf themes/modern

# 3. Restore from backup if exists
cp -r themes_backup_20240101 themes/backup_restored

# 4. Clear cache
rm -rf storage/cache/*

# 5. Select different theme in admin panel
# Settings → Themes → Select another theme
```

## Getting Help

### Resources
- 📖 README: https://github.com/HighMark-31/fossbilling-theme-modern
- 🐛 Issues: https://github.com/HighMark-31/fossbilling-theme-modern/issues
- 💬 Discussions: https://github.com/HighMark-31/fossbilling-theme-modern/discussions
- 🎬 Live Demo: https://demo-fossbilling-theme-modern.highmark.it/

### Support Channels

1. **Check existing issues** - your problem might be already solved
2. **Read documentation** - most questions covered in README.md
3. **Create new issue** - with detailed description and error logs
4. **Join discussions** - for feature requests and ideas

---

**Version**: 1.1  
**Last Updated**: December 2024  
**License**: MIT  
**Maintainer**: HighMark-31
