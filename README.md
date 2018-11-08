# Nest: Red Badge Capstone Project (front end)

This repo represents the front end Angular application created by Robert Baxter, Jessica Brandt, and Ingeborg Slegers of Eleven Fifty Academy. This project is still a work in progress and will be officially submitted on 11/15/2018 (components may still be in development).

View the deployed application (in its current state) at https://nest-capstone-project.herokuapp.com/home

Back-end repository: https://github.com/robertpbaxter/red-badge-server

# Features:

- Designed in Angular 7 and styled with Angular Material + CSS

- User authentication via AuthGuard is required to access rental listings (which will otherwise re-route users to the login component), and all queries outside of login and registration require a JWT retained in local storage

- Administrators are a special role that can monitor and process tickets as support or report requests via routes accessible only to users with administrator permissions

- Sample admin credentials:
  - email: `admin@admin`
  - password: `admin`
