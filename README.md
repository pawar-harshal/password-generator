# 🔐 React Password Generator

A clean, customizable password generator built using **React**, **Tailwind CSS**.

## 🚀 Features

- 🎛️ Password length selector (0–50)
- 🔢 Toggle to include numbers
- 🔣 Toggle to include special characters
- 📋 One-click copy to clipboard
- 💡 Auto-generate on setting change
- 🌈 Stylish UI using Tailwind CSS
- ⚛️ Fully functional with React Hooks (`useState`, `useEffect`, `useRef`)

## 🖼️ Preview

![Password Generator Screenshot](passwordGenerator.png) 

## 📦 Tech Stack

- React (Vite)
- Tailwind CSS


## 🧠 How it Works

- `useState` manages length, options, password value, and copy status.
- `useEffect` re-generates password when dependencies (length, options) change.
- `useRef` is used to access the input element for copying.
- Password is randomly generated from allowed character sets.
