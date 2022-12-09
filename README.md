# Subify

# Credits:
Ahsan Ali : (https://github.com/greyali)
Ed Cho : (https://github.com/edcho720)
Joe Hynan : (https://github.com/JoeH1020)
Sarah Moosa : (https://github.com/Sbethm)


# Motivations: 
Money is a big motivator for most people, and everyone likes to save money. Nowadays, there are so many subscription services out there for a plethora of goods and services that it can be hard to keep track of them all. As a result, people can often forget to cancel subscriptions they no longer need and end up paying for them for months or even years after they have stopped using them. Without closely monitoring your transactions, it can be easy to miss these charges and consumers may feel as if their money is vanishing into a black hole. 


# Description: 
Subify is a web application that allows users to keep track of their subscriptions and their monthly costs. This allows users to have an overview of all their subscriptions and see how much they are spending on a monthly, as well as yearly, basis. The goal is to help users save money by being better aware of what they are spending their money on so they can make more informed decisions about their subscriptions.


# Technologies: 
This project was built utilizing a combination of React, Node.js, Express, PostgreSQL and Webpack. 

  - **React** was utilized to create the front end of the application as it was felt to be an efficient and lightweight method of providing seamless functionality and a responsive user interface. It allows for a great deal of modularity through reusable components and, with the aid of React Hooks and the Context API, it was quite easy to manage state and pass necessary data between components. 

  - **Sass** was used to style the application as it allowed for a more efficient and organized way of styling components compared to traditional CSS. It provided us with the ability to use variables and mixins which made it easier to maintain a consistent theme throughout the application that helped users differentiate between the various components for a better user experience.

  - **Node.js and Express** were used to build out the back end of the application due to their ability to handle asynchronous requests and their ability to provide a robust framework for building out the server. The use of these technologies allowed us to create a RESTful API that could be used to interact with the PostgreSQL database for efficient and sensible management of user data.

  - **PostgreSQL** was used as the database for this application as due to its flexibility as a database that was inherently well-suited to managing user data in an easily scalable manner. Specifically, it allowed us to create a relational database that could be used to store user data, and through the use of join tables, it was possible to create a one-to-many relationship between users and their various subscriptions. 

  - **Webpack** was used to bundle the application as it allowed us to build an efficient and modular base for the application. It allowed us to use a variety of loaders to handle different file types and it also provided us with the ability to use plugins to optimize the application for production.

  - **Babel** was used to transpile the application as it allowed us to use the latest version of JavaScript and utilize features such as arrow functions and async/await. It also allowed us to use the latest version of React and JSX.


# Future Goals:

  - **Security**: Presently, the application does not have any security features implemented. In the future, we would like to implement a login system that securely hashes passwords and stores them in the database. An extension of this would be implementing a password reset system that allows users to reset their passwords if they forget them. 

  - **OAuth**: We would also like to implement OAuth to allow users to login using their Google or Facebook accounts. This would allow users to login to the application without having to create a new account and would also allow them to login to the application from any device without having to remember their password. We feel this would be a great improvement for the user experience. 

  - **Filtering**: A minor feature that could be useful, particularly for users with many subscriptions, would be the ability to filter subscriptions by category. This would allow users to quickly see all their subscriptions in a particular category, such as entertainment, and would allow them to quickly see how much they are spending on a particular category.

  - **More Robust Subscription Management**: Currently, the application only serves as a service that allows users to add subscriptions and delete them from their Subify account. In the future, we feel it would be significantly more useful for users if they could also directly modify their subscriptions from this application. This would help transform the application into a one-stop-solution for managing subscriptions. 

  - **Improved Subscription Data**: One of the goals the team had in mind was to create an API that was constantly updated with the latest data on a prepopulated list of subscriptions. This would allow users to quickly add subscriptions to their account without having to manually enter all their data. This could also help users find new subscriptions that they may be interested in. Furthermore, this could also adjust pricing information for subscriptions that may have changed since the user added them to their account or based on the user's location. Currency conversions could also be implemented to allow users to see how much they are spending in their local currency.