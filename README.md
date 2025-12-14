# 🎨 FOSSBilling Theme – Modern

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/HighMark-31/fossbilling-theme-modern?style=flat-square)](https://github.com/HighMark-31/fossbilling-theme-modern)
[![Version](https://img.shields.io/badge/Version-1.1-blue.svg)](https://github.com/HighMark-31/fossbilling-theme-modern/releases)
[![Built with Tailwind CSS](https://img.shields.io/badge/Built%20with-Tailwind%20CSS-38B2AC.svg)](https://tailwindcss.com)

A **clean, modern, and fully responsive theme** for [FOSSBilling](https://github.com/FOSSBilling/FOSSBilling) designed to bring a polished, contemporary look to the client panel. Enhance user experience with a fresh UI while maintaining 100% compatibility with FOSSBilling's core features.

## 🌟 Highlights

- **Modern Design**: Contemporary UI with refined typography, improved spacing, and a professional color palette
- **Responsive & Mobile-First**: Optimized for mobile, tablet, and desktop devices
- **Enhanced UX**: Redesigned components for a smoother, more intuitive experience
- **100% Open Source**: Fully customizable and free for personal and commercial use
- **Actively Maintained**: Regular updates and bug fixes
- **Easy Installation**: Simple setup process with zero complications

## 🎬 Live Demo

**Try before installing!** Explore all features in action:

👉 **[https://demo-fossbilling-theme-modern.highmark.it/](https://demo-fossbilling-theme-modern.highmark.it/)**

### Test Credentials

```
Email:    testaccount@gmail.com
Password: Test123!
```

## ✨ Key Features

| Feature | Details |
|---------|----------|
| 🎨 **Modern UI** | Clean, minimal design with contemporary styling |
| 📱 **Responsive** | Fully optimized for all device sizes |
| ⚡ **Performance** | Built with Tailwind CSS for minimal CSS footprint |
| 🔧 **Customizable** | Easy-to-modify structure for your branding |
| 🔄 **FOSSBilling v1.4+** | Tested and compatible with recent versions |
| 🌙 **Dark Mode Ready** | Modern color palette works beautifully |
| 📦 **Zero Dependencies** | No external JS libraries required |

## 📋 Technology Stack

```
Twig (78.5%) - Template engine for FOSSBilling
CSS/SCSS (15.7%) - Styling with Tailwind CSS
JavaScript (5.8%) - Interactive components
Webpack + PostCSS - Build optimization
```

## 🚀 Installation Guide

### Prerequisites

- FOSSBilling v1.4 or later installed and running
- SSH/FTP access to your server
- Basic familiarity with file management

### Step-by-Step Installation

#### Option 1: Git Clone (Recommended)

```bash
# SSH into your server
cd /path/to/fossbilling

# Clone the theme repository into the themes directory
git clone https://github.com/HighMark-31/fossbilling-theme-modern.git themes/modern

# Navigate to the theme directory
cd themes/modern

# Install dependencies (optional, for development)
npm install
```

#### Option 2: Manual Download

1. Download the latest release from [GitHub Releases](https://github.com/HighMark-31/fossbilling-theme-modern/releases)
2. Extract the zip file
3. Upload the extracted folder to `/themes/` on your server
4. Rename the folder to `modern` (if needed)

### Activate the Theme

1. Log in to your FOSSBilling **Admin Panel**
2. Navigate to **Settings → Themes**
3. Click on the **Modern** theme to select it
4. Click **Activate** or **Save Changes**
5. Clear your browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
6. Refresh the client panel to see the new theme

### Verify Installation

- ✅ Client portal displays the modern theme
- ✅ All navigation menus are functional
- ✅ Dashboard elements are properly styled
- ✅ Responsive design works on mobile devices

## 🎯 Usage & Customization

### File Structure

```
fossbilling-theme-modern/
├── html/                 # Twig template files
│   ├── layout.html      # Main layout template
│   ├── client/          # Client area templates
│   └── admin/           # Admin panel templates
├── assets/              # CSS, JS, images
│   ├── css/             # Compiled CSS
│   ├── js/              # JavaScript files
│   └── images/          # Theme images
├── config/              # Theme configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── webpack.config.js    # Webpack build configuration
└── package.json         # Dependencies and scripts
```

### Development & Customization

#### Build the Theme

```bash
# Install Node.js dependencies
npm install

# Watch for changes (development mode)
npm run watch

# Build for production
npm run build
```

#### Customize Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      },
    },
  },
};
```

#### Modify Templates

All Twig templates are in the `html/` directory. Edit them to change:
- Layout structure
- Component styling
- Client interface elements

## ⚠️ Important Notice

**This is an actively developed theme.** If you encounter:
- 🐛 Visual bugs
- ❌ Functionality issues
- 📱 Responsive design problems
- 🔌 Compatibility concerns

**Please open an [Issue](https://github.com/HighMark-31/fossbilling-theme-modern/issues) immediately.** We respond quickly with hotfixes and patches.

## 🔧 Troubleshooting

### Theme Not Appearing

```bash
# Clear FOSSBilling cache
rm -rf storage/cache/*

# Clear browser cache (or press Ctrl+Shift+Del)
# Refresh the page
```

### Styling Issues

1. **CSS not loading?** → Run `npm run build` to recompile assets
2. **Colors look wrong?** → Check `tailwind.config.js` configuration
3. **Layout broken?** → Ensure all Twig files are present in `html/` directory

### JavaScript Not Working

1. Check browser console for errors (F12 → Console tab)
2. Verify JavaScript files are in `assets/js/`
3. Ensure Webpack build completed successfully

### Need Help?

- 📖 Check the [GUIDE.md](GUIDE.md) for detailed instructions
- 🐛 Report bugs on [GitHub Issues](https://github.com/HighMark-31/fossbilling-theme-modern/issues)
- 💬 Join our [Discussions](https://github.com/HighMark-31/fossbilling-theme-modern/discussions)

## 📊 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome/Edge | ✅ Full | Latest versions recommended |
| Firefox | ✅ Full | Latest versions recommended |
| Safari | ✅ Full | iOS 12+ |
| Mobile Browsers | ✅ Full | Fully responsive |

## 🤝 Contributing

Contributions are welcome! Here's how to help:

1. **Fork** the repository
2. **Create a branch** for your feature (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request** with a clear description

### Code Style

- Use 2-space indentation
- Follow Tailwind CSS conventions
- Comment complex logic
- Test on multiple devices before submitting

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**You are free to:**
- ✅ Use commercially
- ✅ Modify and customize
- ✅ Distribute
- ✅ Use privately

**Conditions:**
- ⚠️ Include license and copyright notice
- ⚠️ State changes made to the code

## ⭐ Support the Project

If you find this theme useful, please consider:

1. **⭐ Star this repository** - It helps reach more developers
2. **🔗 Share with your network** - Help others discover it
3. **💬 Leave feedback** - Your suggestions improve the theme
4. **🐛 Report bugs** - Help us maintain quality
5. **🤝 Contribute code** - Join our development effort

## 📞 Contact & Support

- **Issues & Bug Reports**: [GitHub Issues](https://github.com/HighMark-31/fossbilling-theme-modern/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/HighMark-31/fossbilling-theme-modern/discussions)
- **Live Demo**: [https://demo-fossbilling-theme-modern.highmark.it/](https://demo-fossbilling-theme-modern.highmark.it/)

## 📈 Project Stats

- **Stars**: 3+
- **Forks**: 1+
- **Contributors**: Open to all
- **Last Updated**: December 2024
- **License**: MIT

---

**Made with ❤️ by HighMark-31**

*For detailed setup and customization instructions, check [GUIDE.md](GUIDE.md)*
