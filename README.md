Crypto Price Tracker
-----
### Introduction
This project was built as a solution to the Norebase Frontend Developer assessment, focusing on creating a responsive cryptocurrency price tracking interface. The task involved developing a paginated table that displays cryptocurrency data from the CoinLore API, with special attention to both Developer Experience (DX) and User Experience (UX). The application demonstrates modern web development practices, responsive design principles, and clean code architecture.

### Overview
Crypto Price Tracker is a streamlined platform that displays real-time cryptocurrency information in an intuitive interface. Key features include:
- Responsive table with adaptive layouts for different screen sizes
- Smart pagination system showing 10 items per page
- Interactive navigation with highlighted active states
- Alternating row colors for improved readability
- Mobile-first design with optimized data presentation
- Real-time data fetching using React Query

### Demo
![Demo of Crypto Tracker](./src/assets/demo.gif)

### Tech Stack
- **React** - Frontend framework for building the UI
- **Tailwind CSS** - Utility-first styling
- **React Query** - Data fetching and state management
- **Lucide React** - Modern icon system
- **CoinLore API** - Cryptocurrency data source

### Main Files: Project Structure
  ```sh
  ├── index.html
  ├── .gitignore
  ├── package.json
  ├── postcss.config.js
  ├── tailwind.config.js
  ├── vite.config.js
  └── src/
      ├── App.jsx
      ├── main.jsx
      ├── index.css
      ├── components/
      │   ├── CryptoTable.jsx
      │   ├── LoadingSpinner.jsx
      │   └── ErrorMessage.jsx
      ├── hooks/
      │   ├── useCryptoData.js
      │   └── usePagination.js
      ├── utils/
      │   └── formatters.js
      └── api/
          └── cryptoApi.js
  ```
Overall:
* Component logic is organized in the components directory
* Custom hooks handle data fetching and pagination
* Utility functions manage data formatting and calculations
* API interactions are centralized in the api directory

### Development Setup
1. Clone the repo
```
$ git clone [your-repository-url]
$ cd crypto-tracker
```

2. Install the dependencies:
```
$ npm install
```

3. Run the development server:
```
$ npm run dev
```

4. Navigate to Home page [http://localhost:5173](http://localhost:5173)

### Potential Additional Features
  
1. Add sorting functionality for each column
2. Implement search and filtering capabilities
3. Add price history charts and trends
4. Integrate WebSocket for real-time updates
5. Add unit tests using Jest/React Testing Library
6. Create a cryptocurrency details page
7. Implement user preferences storage
8. Add dark mode support