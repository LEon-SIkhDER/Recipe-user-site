# Recipe Book

A responsive recipe sharing application where users can browse recipes, sign in, add their own recipes, like other users' recipes, and manage the recipes they created.

## Live Links

- Client: Add your deployed client URL here
- Server API: https://recipe-server-blush-six.vercel.app

## Features

- Firebase authentication with email/password and Google sign-in
- Protected routes for adding recipes, viewing recipe details, and managing personal recipes
- Browse all recipes with cuisine type filtering
- Home page shows the top 6 recipes sorted by likes
- Add recipes with title, image URL, category, cuisine type, ingredients, instructions, and preparation time
- View recipe details with image, category, cuisine type, ingredients, instructions, cooking time, and like count
- Like recipes, with own recipes disabled from self-liking
- Update and delete controls for recipes created by the logged-in user
- My Recipes page for viewing recipes by user
- Dark mode state saved in local storage
- Loading animations, toast notifications, confirmation alerts, and responsive UI

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS 4
- DaisyUI
- Firebase Authentication
- date-fns
- Lottie React
- React Toastify
- SweetAlert2
- Lucide React and React Icons

## Main Routes

| Route | Description | Access |
| --- | --- | --- |
| `/` | Home page with top recipes | Public |
| `/all-recipes` | Browse and filter all recipes | Public |
| `/signin` | User login page | Public |
| `/register` | User registration page | Public |
| `/add-recipe` | Add a new recipe | Private |
| `/recipe-details/:id` | View recipe details, like, update, or delete | Private |
| `/my-recipe/:id` | View recipes created by a specific user | Private |
| `/update/:id` | Update an existing recipe | Private |

## API Endpoints Used

The client communicates with the deployed recipe server at:

```txt
https://recipe-server-blush-six.vercel.app
```

Endpoints used by the app include:

- `GET /recipes`
- `GET /recipes/:id`
- `POST /recipes`
- `PATCH /recipes/:id`
- `DELETE /recipes/:id`
- `GET /sort/:cuisineType`
- `GET /sort6`
- `GET /my-recipe/:id`

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The local development server will start with Vite. Open the URL shown in the terminal, usually:

```txt
http://localhost:5173
```

## Authentication

Authentication is handled with Firebase Auth. The app supports:

- Email and password registration
- Email and password login
- Google popup login
- Auth state persistence through Firebase and local storage

## Notes

- Recipe data is loaded from the deployed Vercel server API.
- Private pages redirect unauthenticated users to the sign-in page.
- Only the owner of a recipe can update or delete it.
- Users cannot like their own recipe.
