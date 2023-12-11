# Getting Started with Create React App


1. Login Component (Login.js):
Purpose: Allows users to sign up using their email and password or using Google Sign-In.
Dependencies: Firebase for authentication.
Key Functions:
handleGoogleSignIn: Initiates the Google Sign-In process using Firebase authentication.
handleLogout: Logs the user out by setting the user state to null.
Conditional rendering based on whether a user is logged in or not.
2. Navbar Component (Navbar.js):
Purpose: Displays the navigation bar with the project name, home and shopping cart buttons, and a sign-up button.
Key Functions:
Uses Link from react-router-dom for navigation.
Includes conditional rendering to show "Sign Up" or "Logout" based on the user's authentication status.
3. Books Page Component (BooksPage.js):
Purpose: Renders a list of books based on the selected category or all categories.
Dependencies: React Router for navigation, context API (useBookContext) for accessing book data.
Key Functions:
handleQuickViewClick: Sets the selected book for quick view.
handleCloseQuickView: Closes the quick view modal.
handleMouseEnter and handleMouseLeave: Control the visibility of the quick view button.
handleAddToCart: Placeholder function for adding a book to the shopping cart (this functionality is intended but not fully implemented).
4. Shopping Cart Component (ShoppingCart.js):
Purpose: Displays the selected book in the shopping cart.
Dependencies: React Router (useLocation) for accessing the selected book from the previous page.
Key Functions:
Retrieves the selected book information from the location state.
5. Context (BookContext.js):
Purpose: Manages the global state for books, allowing components to access and update book data.
Key Functions:
useBookContext: Custom hook to access the context data.
6. Routing (App.js):
Purpose: Sets up the routes for different components using React Router.
Key Functions:
Defines routes for Login, Navbar, BooksPage, and ShoppingCart.
7. Firebase Configuration (firebaseConfig.js):
Purpose: Configures Firebase for authentication.
Key Functions:
Sets up Firebase authentication and exports the auth and provider objects.
8. Index File (index.js):
Purpose: Renders the main App component and attaches it to the HTML root.
9. Additional Notes:
Styling: Tailwind CSS is used for styling throughout the project.
Routing: React Router is used for navigation between different components.
Incomplete Functionality: The shopping cart functionality is a placeholder and not fully implemented. You may need to implement the actual logic for adding books to the cart.
10. Overall Flow:
User logs in or signs up.
Navigates through different book categories.
Clicks on a book to view details or add it to the shopping cart (placeholder).
View selected books in the shopping cart.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
