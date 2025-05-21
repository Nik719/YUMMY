# YUMMY - Restaurant Management System

A comprehensive restaurant management system with QR-based ordering, built with React and Vite.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Project Overview
This is a modern food ordering system that utilizes QR codes to streamline the ordering process in restaurants. The system consists of a customer-facing interface for placing orders via QR codes and an administrative dashboard for restaurant management.

## Features

### Customer Features
- Scan QR code to access digital menu
- Browse menu items with descriptions and prices
- Add items to cart
- Customize orders
- Place orders directly from mobile devices
- Track order status
- Make payments online

### Admin Features
- Dashboard with quick insights
- Real-time order management
- Menu management (add, edit, delete items)
- Inventory tracking
- Sales analytics and reporting
- Customer data management
- QR code generation for tables

## Technology Stack
- **Frontend**: React.js with Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: React Bootstrap
- **Icons**: React Icons
- **State Management**: React Context API
- **Routing**: React Router v6

## Project Structure
```
YUMMY/
├── public/
├── src/
│   ├── Components/
│   │   ├── AdminInterface/
│   │   │   ├── AdminInterface.jsx
│   │   │   ├── QuickInsight.jsx
│   │   │   ├── SideBar.jsx
│   │   ├── CustomerInterface/
│   │   ├── Common/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm (v8 or later) or yarn
- MongoDB (for local development)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/yummy.git
   cd yummy
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   VITE_API_URL=http://localhost:5000
   # Add other environment variables as needed
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:5173`

## 📦 Project Structure

```
YUMMY/
├── public/               # Static files
├── src/
│   ├── Components/       # Reusable UI components
│   │   ├── AdminInterface/  # Admin dashboard components
│   │   ├── CustomerInterface/ # Customer-facing components
│   │   └── Common/         # Shared components
│   ├── pages/              # Page components
│   ├── services/           # API services
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main App component
│   └── main.jsx            # Application entry point
├── .gitignore
├── package.json
└── README.md
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm preview` - Preview production build locally

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Node.js (v14 or later)
- npm or yarn

### Steps to Run Locally
1. Clone the repository
```bash
git clone https://github.com/yourusername/QR-BasedFoodOrderingSystem.git
```

2. Navigate to the project directory
```bash
cd QR-BasedFoodOrderingSystem
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

## Usage
1. **Admin Access**: Navigate to the admin login page and use your credentials to access the dashboard
2. **Customer Usage**: Scan the QR code at your table to access the menu and place orders

## Screenshots
[Include screenshots of your application here]

## Future Enhancements
- Mobile app development
- Integration with kitchen display systems
- Multi-language support
- Loyalty program integration
- AI-powered recommendations
