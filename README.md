# Moove It Notes

Post it note app created with react and localStorage.

## Live demo

[https://nicolle-post-it.surge.sh/](https://nicolle-post-it.surge.sh/)

## Features

- Create Post it.
- Show all Post its in the home page.
- Edit a Post it.
- Move a Post it to the trash bin.
- Open the trash bin to see all Post its that have been moved there.
- Move a Post it from the trash bin to the workspace.
- Permanently delete all Post its in the trash bin.
- Show empty/pull state in trash bin icon and show number of trash post its.
- All Post its in the home and trash bin are saved in LocalStorage.

## Technology

This project is built with [React](https://github.com/facebook/react) and [Tailwind](https://tailwindcss.com/).
This project was generated with [Create React App](https://create-react-app.dev/).

## Dependencies

- [react-router-dom v6](https://reactrouter.com/docs/en/v6/getting-started/overview) - Manege routes on the app. This library was installed to be able to have multiples routes in the app, in this case home page and trash page.
- [react-inlinesvg](https://github.com/gilbarbara/react-inlinesvg) - Load inline, local or remote SVGs in your React components. This library was installed to use svg icon easily.
- [react-modal](https://github.com/reactjs/react-modal) - Accessible modal dialog component for React.JS. This library was installed to avoid accessibility issues when create a modal from scratch

## Installation

```bash
$ git clone git@github.com:NicolleMR/moove-it-challenge.git
$ cd moove-it-challenge
$ npm install
```

## Running the app

```bash
$ npm start
```
