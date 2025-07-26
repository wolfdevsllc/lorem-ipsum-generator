# Lorem Ipsum Generator - Modern UI

A beautiful Chrome extension for generating Lorem Ipsum placeholder text with a modern shadcn/ui inspired design.

## ✨ Features

- **Modern Design**: Clean, professional interface inspired by shadcn/ui design system
- **Dark Mode Support**: Automatically adapts to your system's color scheme
- **Flexible Generation Options**:
  - Set number of paragraphs (1-20)
  - Control sentences per paragraph (1-15)
  - Optional word limit (50-1000 words or unlimited)
- **Real-time Word Count**: Live word counting for generated text
- **Enhanced UX**: Smooth animations and visual feedback
- **Smart Copy Feature**: Visual confirmation when text is copied
- **Keyboard Shortcuts**:
  - `Cmd/Ctrl + Enter`: Generate text
  - `Cmd/Ctrl + C`: Copy text (when no text is selected)
- **Input Validation**: Smart limits and real-time validation
- **Responsive Layout**: Compact, organized layout optimized for browser extensions

## 🎨 Design Improvements

This modernized version includes:

### Visual Design

- Modern color palette with CSS custom properties
- Professional typography using system fonts (-apple-system, Segoe UI)
- Consistent spacing and layout grid
- Subtle borders and clean aesthetics
- Smooth transitions and micro-interactions
- Left-aligned title for better visual hierarchy

### User Experience

- Horizontal input layout for space efficiency
- Clean input fields without browser styling quirks
- Visual feedback for actions (generate animation, copy confirmation)
- Better error handling and user-friendly validation messages
- Accessibility improvements with proper labels and focus states
- Optional max words field with helpful placeholder text

### Technical Enhancements

- Clean, semantic HTML structure
- Modern CSS with custom properties and cross-browser compatibility
- Enhanced JavaScript with improved error handling
- Smart text generation with word limit respect
- Keyboard shortcuts for power users
- Optimized performance and memory usage

## 🚀 Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. The extension will appear in your Chrome toolbar

## 📝 Usage

1. Click the extension icon in your Chrome toolbar
2. Configure your text generation preferences:
   - **Paragraphs**: Number of paragraphs to generate (1-20)
   - **Sentences**: Sentences per paragraph (1-15)
   - **Max Words**: Optional word limit (leave empty for no limit, or set 50-1000)
3. Click "Generate" or press `Cmd/Ctrl + Enter`
4. Click "Copy" or press `Cmd/Ctrl + C` to copy the text to your clipboard
5. The word count updates in real-time to show actual generated words

## 🎯 Generation Modes

### Paragraph-Based Generation (Default)

- Leave "Max Words" empty
- Generates complete paragraphs based on your paragraph and sentence settings
- Perfect for structured content and traditional Lorem Ipsum usage

### Word-Limited Generation

- Set a number in "Max Words" field (50-1000)
- Generates text up to your specified word limit
- Ideal for social media posts, headlines, or content with strict length requirements
- Smart truncation ensures clean text endings

## 🛠️ Development

The extension consists of:

- `manifest.json` - Extension configuration and metadata
- `popup.html` - Main interface structure with semantic HTML
- `styles.css` - Modern CSS with shadcn/ui inspired design system
- `popup.js` - Enhanced functionality with smart text generation
- `images/` - Extension icons (16px, 48px, 128px)

## 🎯 Version 2.0 Improvements

- Complete UI/UX redesign with modern shadcn/ui aesthetics
- Added flexible word limit feature with smart truncation
- Dark mode support with automatic system preference detection
- Enhanced animations and visual feedback
- Improved accessibility and keyboard navigation
- Better performance and error handling
- Compact layout optimized for browser extensions
- Cross-browser input field compatibility
- Real-time input validation and user guidance

## 🔧 Technical Features

- **Smart Text Generation**: Respects word limits while maintaining text quality
- **Cross-browser Compatibility**: Consistent appearance across different browsers
- **Memory Efficient**: Optimized for browser extension environment
- **Error Resilient**: Graceful handling of edge cases and user input errors
- **Extensible Design**: Clean code structure for easy modifications

## 📄 License

MIT License - feel free to use and modify as needed.
