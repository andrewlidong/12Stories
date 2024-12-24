# 12 Short Stories - A Digital Storybook

A magical digital storybook built with React, featuring twelve enchanting stories. This web application provides an interactive and immersive reading experience with beautiful animations, page-turning effects, and a responsive design.

## Features

- 🎄 Interactive storybook interface
- 📖 Beautiful page-turning animations
- 🎵 Sound effects for page turns and interactions
- ✨ Elegant typography and design
- 📱 Fully responsive layout
- 🔒 Password-protected content

## Technologies Used

- React
- Material-UI (MUI)
- CSS Animations
- Web Audio API

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/12-short-stories.git
   ```

2. Install dependencies:
   ```bash
   cd 12-short-stories
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder.

## Customization

You can customize the stories by editing the `stories` array in `src/components/Stories.js`. Each story object should have:

- `title`: The chapter title
- `subtitle`: A descriptive subtitle (optional)
- `content`: The story content (supports line breaks and formatting)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Fonts: Dancing Script and Quicksand from Google Fonts
- Sound effects from SoundJay
- Material-UI for the component library 