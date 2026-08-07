# 🛒 Fake Store Shop

A modern e-commerce application built with React and modern frontend technologies.

## 🚀 Features

### Product Management

- Product listing
- Product details
- Search products
- Category filtering
- Rating display

### Shopping Cart

- Add products
- Remove products
- Increase/decrease quantity
- Persistent cart storage

### Authentication

- Login system
- Protected routes
- User session persistence

### Checkout

- React Hook Form
- Zod validation
- Order creation

### Orders

- Order history
- Persistent orders

### UI

- Responsive design
- Dark mode
- Loading states
- Error handling


---

# 🛠 Tech Stack

## Frontend

- React
- React Router
- Tailwind CSS

## State Management

- Redux Toolkit

## Server State

- TanStack Query

## API

- Axios
- FakeStore API

## Forms

- React Hook Form
- Zod


---

# 📂 Project Structure

```
src
├── api
│   ├── axios.js
│   └── productApi.js
├── app
│   └── store.js
├── components
│   ├── CartSummary.jsx
│   ├── CategoryFilter.jsx
│   ├── DarkModeToggle.jsx
│   ├── ErrorBoundary.jsx
│   ├── ErrorMessage.jsx
│   ├── Footer.jsx
│   ├── LoadingSpinner.jsx
│   ├── Navbar.jsx
│   ├── PageLoader.jsx
│   ├── ProductCard.jsx
│   ├── ProtectedRoute.jsx
│   └── SearchBar.jsx
├── features
│   ├── auth
│   │   └── authSlice.js
│   ├── cart
│   │   ├── cartSelectors.js
│   │   └── cartSlice.js
│   ├── orders
│   │   └── orderSlice.js
│   └── theme
│       └── themeSlice.js
├── hooks
│   ├── useCategories.js
│   ├── useProduct.js
│   ├── useProducts.js
│   └── useTheme.js
├── layouts
│   └── MainLayout.jsx
├── pages
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   ├── OrderHistory.jsx
│   └── ProductDetail.jsx
├── routes
│   └── router.jsx
└── validation
    └── checkoutSchema.js
```


---

# ⚙️ Installation

## Clone project

```bash
git clone repository-url
```

## Install packages

```bash
npm install
```

## Create .env

```env
VITE_API_URL=https://fakestoreapi.com
```

## Run project

```bash
npm run dev
```

## Build

```bash
npm run build
```


---

# 📸 Screenshots

Add screenshots:

- Home page
- Product detail
- Cart
- Checkout
- Dark mode


---

# 👨‍💻 Author

Junior Frontend Developer

React | JavaScript | Tailwind CSS
