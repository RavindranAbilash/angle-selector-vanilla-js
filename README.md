# Angle Selector

This project is an interactive angle selector built using vanilla JavaScript, HTML, and CSS. It allows users to select an angle value between 0 and 360 degrees using a text input, slider, and radio buttons. The selected angle is visually represented using a pie chart that displays the angle in a circle.

## Features

- **Text Input**: Users can enter a numeric value directly into a text box. The value is constrained to be between 0 and 360.
- **Slider**: A range slider allows users to select an angle value by sliding left or right. The slider is centered at 0 degrees, with values ranging from -180 to 180, translating to a 0-360 degree representation.
- **Radio Buttons**: A set of predefined angle values (0°, 45°, 60°, 90°, 180°) can be selected using radio buttons.
- **Visual Representation**: The selected angle is shown in a pie chart using SVG, with the angle value displayed at the center of the circle.
- **Synchronization**: All components (text input, slider, and radio buttons) are synchronized. Changing one component updates the others:
  - If a value like 0, 45, 60, 90, or 180 is typed into the text box, the corresponding radio button is automatically checked.
  - Clicking a radio button updates the text input and slider.
  - Moving the slider updates the text input and checks the correct radio button if applicable.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- A web browser (e.g., Chrome, Firefox, Safari)
- A text editor (e.g., VS Code, Sublime Text) for editing the code if needed

### Installation

1. **Clone the repository or download the zip file**:

   ```bash
   git clone https://github.com/RavindranAbilash/angle-selector-vanilla-js.git
