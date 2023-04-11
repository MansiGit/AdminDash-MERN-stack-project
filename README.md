# Ecom Dash MERN stack project
**Check out the dashboard : https://ecom-dash-mern-stack.onrender.com/**

![dash](https://user-images.githubusercontent.com/31558571/231217267-cf3d99a3-042a-4e68-89ee-0d31dbac6dda.png)
# Introduction 
This is a full stack dashboard project developed for E-COM Admins. It helps admins keep a track of Product Inventory, Sales, Transactions and also study the trends of sales and products. The front end is built using React, Material UI, and Redux-toolkit. The backend has been built using Node, Express, and MongoDB. 

## Front End

- Material UI for styling
- Material UI data grid for tables
- Nivo for charts
- Redux toolkit for state management
- Redux Tool Kit (RTK) for making API calls

## Back End

- NodeJS as a Runtime
- ExpressJS as a backend framework (API / server technology)
- Mongoose for managing mongoDB

## Project Initialization

```powershell
npm i express body-parser cors dotenv helmet morgan mongoose nodemo
```

- body parser for parsing our data coming in cores for cross-origin resource sharing
- dotenv for environment variables
- helmet for protecting our apis
- Morgan for logging
- Our API calls Mongoose for handling mongodb calls and
- Nodemon for live server reload

## Backend Configuration and Setup 

We will be splitting the APIs based on the sidebar navigation. So, make routes as per the user navigation:

- Client
- Sales
- Management
- General

## ERD Diagram and Data Modeling 
Use Lucidchart for making the ER Diagram [https://lucid.app/](https://lucid.app/)
![ERD](https://github.com/MansiGit/ecom-dash-MERN-stack-project/blob/master/ERD%20for%20this%20project.png)

## New Learning!
### Products Page 
- Card layout from Material UI

### Customers Page
- For tables you'll need Data Grid from mui
[React Table component - Material UI (mui.com)](https://mui.com/material-ui/react-table/#sorting-amp-selecting)
- Client side pagination

### Transactions page
- Server side pagination 

### Geography Page
- Nivo charts ⇒ choropleth

### Overview Page
- Nivo charts ⇒ ResponsiveLine

### Daily Sales Page
- react-datepicker, useMemo

### Sales Breakdown Page
- Nivo charts ⇒ ResponsivePie , Tooltips

## Scope for new features!
- Login/Logout functionality
- User management (admins/superadmins)
- Implementing site search
