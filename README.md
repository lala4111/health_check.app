# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# health_check.app

# The page runs on github page, so please check the link and the page


# When you run it locally

Please install recharts,bootstraps, and get an API key for weather API

run these codes for recharts

npm install recharts

run this code for bootstraps 

npm install bootstrap bootswatch

Login to this API and get an API key and place it in .env file and in the .env file  create this variable and place your key like below. 

Please signup to get an API key 
https://openweathermap.org/api?filter=current_and_forecast#collections

VITE_API_KEY = your key 
