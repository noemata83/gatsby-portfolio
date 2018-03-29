---
title: Omnivorous
description: A recipe manager and shopping list app
techStack: Node.js, MongoDB, Express, React.js, Redux
imageURL: '../assets/omnivorous.jpg'
demo: http://omnivorous.herokuapp.com/
repo: https://github.com/noemata83/omnivorous
---

There are any number of recipe manager/shopping list apps out there, but I wanted to build one that really _works_: one that isn't lacking necessary features, and sports a pleasant UI. Omnivorous is my attempt to bring this to fruition. The app is powered by a Node.js/MongoDB cookie-secured API which features, in addition to normal CRUD operations for recipes, grocery lists, and (someday) meal plans, automated recipe importing via a custom-built node module, Kitchehand, which retrieves and parses structured recipe data from the web. The UI is still very much a work in progress. If I have my druthers, I will someday port the app for mobile with React Native.