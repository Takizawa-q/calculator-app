# Calculator App 🧮

A modern, responsive web calculator built with vanilla HTML, CSS, and JavaScript. Features a sleek dark design with full keyboard support and mobile-friendly interface.

## 🚀 Features

### Core Functionality
- **Basic Operations**: Addition (+), Subtraction (-), Multiplication (*), Division (/)
- **Percentage Calculations**: iOS-style percentage functionality
- **Clear Functions**: C (Clear) and AC (All Clear) buttons
- **Decimal Support**: Comma (,) and dot (.) decimal input
- **Expression Display**: Shows the current calculation being performed

### User Experience
- **Keyboard Support**: Full keyboard input support
  - Numbers: `0-9`
  - Operators: `+`, `-`, `*`, `/`
  - Equals: `Enter` or `=`
  - Percent: `%`
  - Clear: `C`, `Backspace`, or `Delete`
  - Decimal: `.` or `,`

- **Visual Feedback**: 
  - Hover effects on buttons
  - Click animations for both mouse and keyboard input
  - Responsive button scaling

- **Responsive Design**:
  - Desktop: 4-column grid layout
  - Mobile: 3-column grid layout (max-width: 600px)
  - Scalable design using viewport units

## 🎨 Design

### CSS Architecture
- **BEM Methodology**: Clean, maintainable CSS class naming
- **Responsive Units**: Uses `vw`, `vh`, `em` for perfect scaling
- **Modern Flexbox/Grid**: Flexible layouts for all screen sizes
- **CSS Animations**: Smooth transitions and hover effects

### Color Scheme
- **Background**: Black calculator body
- **Buttons**: Dark gray with orange accent for operators
- **Display**: White background with black text
- **Expression**: Subtle gray text on black background

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with animations and responsive design
- **JavaScript (ES6+)**: Interactive functionality and keyboard handling

## 📁 Project Structure

```
calculator/
├── index.html              # Main HTML file
├── calculator.js           # JavaScript functionality
├── styles/
│   ├── calculator.css      # Main calculator styles
│   └── default.css         # Base/reset styles
└── README.md              # Project documentation
```

## 🚦 Getting Started

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Start calculating!** Use either mouse clicks or keyboard input


## 💻 Usage Examples

### Basic Operations
- `7 + 3 =` → Results in `10`
- `15 - 5 =` → Results in `10`
- `4 * 6 =` → Results in `24`
- `20 / 4 =` → Results in `5`

### Percentage Calculations (iOS Style)
- `100 + 20%` → Results in `120` (adds 20% of 100)
- `200 - 15%` → Results in `170` (subtracts 15% of 200)
- `50 * 20%` → Results in `1000` (multiplies by 20%)

### Keyboard Shortcuts
| Key | Function |
|-----|----------|
| `0-9` | Number input |
| `+` `-` `*` `/` | Operators |
| `Enter` `=` | Calculate result |
| `%` | Percentage |
| `C` `Backspace` `Delete` | Clear |
| `.` `,` | Decimal point |

## 🔧 Key Code Features

### BEM CSS Classes
```css
.calculator              /* Block */
.calculator__display     /* Element */
.calculator__button      /* Element */
.calculator__button--orange  /* Modifier */
```


**Built with ❤️ using vanilla web technologies**