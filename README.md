# React 18 useEffect Warning

This repository demonstrates a common issue encountered when upgrading to React 18 or later involving the `useEffect` hook.  The issue stems from logging the `count` state variable directly within the `useEffect` dependency array.  While this may have worked without issue in previous React versions, React 18 and above have stricter rules regarding state updates and logging within useEffect, leading to warnings or unexpected behavior.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Open your browser and observe the console for warnings. 

## Solution

The solution involves optimizing the `useEffect` call or refactoring your logic.  See `bugSolution.js` for a resolution.