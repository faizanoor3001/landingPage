# ZORO Energy Landing Page

A modern, interactive landing page for ZORO Energy built with Next.js, Three.js, and TailwindCSS. Features 3D animations, particle effects, and responsive design.

## 🚀 Features

- Interactive 3D logo and energy device models
- Particle background effects
- Responsive design for all devices
- Modern UI with smooth animations
- Enterprise-grade layout and components

## 🛠 Prerequisites

### Windows

1. Install [Node.js](https://nodejs.org/) (LTS version recommended)
2. Install [Git](https://git-scm.com/download/win)

### macOS

1. Install Homebrew (if not already installed):
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Install nvm (Node Version Manager):
```bash
brew install nvm

# Add NVM to your shell configuration (~/.zshrc or ~/.bash_profile):
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"' >> ~/.zshrc
echo '[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"' >> ~/.zshrc

# Reload your shell configuration
source ~/.zshrc
```

3. Install Node.js using nvm:
```bash
nvm install 18
nvm use 18
```

4. Install Git:
```bash
brew install git
```

## 📥 Installation

1. Clone the repository:
```bash
git clone https://github.com/faizanoor3001/landingPage.git
cd landingPage
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory (if needed for environment variables):
```bash
touch .env.local
```

## 🚀 Running the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
landingPage/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   │   ├── 3d/            # Three.js components
│   │   │   ├── FloatingElements.tsx
│   │   │   ├── HeroScene.tsx
│   │   │   └── ZLogo.tsx
│   │   ├── Navigation.tsx
│   │   └── ParticleBackground.tsx
│   ├── data/              # Static data
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
├── tailwind.config.js     # Tailwind CSS configuration
└── next.config.js         # Next.js configuration
```

## 🔧 Common Issues & Solutions

### Module not found: 'react-tsparticles'
If you encounter this error, install the missing dependencies:
```bash
npm install react-tsparticles tsparticles tsparticles-slim
```

### Import error with @/data
If you see this error, check that the path alias is properly configured in `tsconfig.json` and that the data file exists in the correct location.

### Three.js related errors
Make sure all Three.js dependencies are installed:
```bash
npm install three @react-three/fiber @react-three/drei
```

## 🌐 Browser Support

The application is tested and supported on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Support

The website is fully responsive and supports:
- iOS Safari
- Android Chrome
- Other mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Three.js for 3D graphics
- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- React Three Fiber for making Three.js React-friendly 