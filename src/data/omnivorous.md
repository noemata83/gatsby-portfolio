---
title: Omnivorous
description: A recipe manager and shopping list app
techStack: Node.js, MongoDB, Express, React.js, Redux
imageURL: '../assets/omnivorous.jpg'
demo: http://omnivorous.herokuapp.com/
---

When I left my teaching job at William and Mary, I took over the cooking duties for our household. For years, we had been putting together our weekly meal plans and building our shopping lists by hand, and it was always a lengthy and error-prone undertaking. So I began looking for software that would make this part of our weekly routine easier. But in every app I installed, some crucial features were either lacking or poorly implemented. I decided to take matters into my own hands, using my newly minted React skills and Node/Express/Mongo experience. I built a RESTful API that exposes several endpoints for handling authorization and protected CRUD operations for both recipes and shopping list. I also built a custom Node module, called Kitchenhand, which allows structured recipe data to be scraped and parsed from external websites on request. The frontend uses React and Redux to manage UI and application state, and communicates with the backend serving using Axios and the redux-thunk middleware. The application is still very much 'in development.' I look forward to implementing more features, and to porting the finished app to mobile with React Native in the near future.