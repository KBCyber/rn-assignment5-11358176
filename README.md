# React Native App with Dark Mode

This React Native application showcases various features and components implemented with a dark mode theme. The app includes screens for home, settings, my cards, and statistics, each adapted to support both light and dark themes seamlessly.

## Features

- **Home Screen**: Displays user information, featured credit card, transaction cards, and action buttons.
- **Settings**: Allows users to change language, view profile, contact support, change password, and toggle between light and dark themes.
- **My Cards**: Displays user credit card details and allows editing of card information.
- **Statistics**: Shows graphical representation of user statistics and purchases over time.

## Implementation Details

### Components

- **CreditCard Component**: Displays a styled credit card component with dynamic information.
- **Transaction Component**: Renders transaction information with logos and details.
- **ActionButtons Component**: Provides quick action buttons styled according to the current theme.

### Screens

- **Home Screen**: Integrates multiple components and features like featured cards and transaction lists.
- **Settings Screen**: Includes a toggle switch for switching between light and dark themes.

### Theme Context

The app utilizes React Context API for managing themes. The `ThemeContext` provides:

- **Theme Switching**: Toggles between light and dark themes across the app.
- **Dynamic Styling**: Components dynamically change styles based on the selected theme.

### Assets

- **Images**: Various images used throughout the app for logos, profile pictures, and graphical elements.

## Getting Started

To run the app locally:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the app on iOS or Android using `npm run ios` or `npm run android`.

## Usage

- Navigate through different screens using the bottom navigation bar.
- Explore various functionalities available in each screen.
- Toggle between light and dark modes from the settings screen.

## Technologies Used

- **React Native**: Building cross-platform mobile applications.
- **Expo**: Development environment and tooling.
- **React Navigation**: Navigation and routing for React Native apps.

## Future Enhancements

- Implement more themes and customization options.
- Enhance accessibility features.
- Add more interactive data visualization in the Statistics screen.
