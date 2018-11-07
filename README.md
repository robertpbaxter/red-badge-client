# Nest: Red Badge Capstone Project (front end)

This repo represents the front end Angular application created by Robert Baxter, Jessica Brandt, and Ingeborg Slegers of Eleven Fifty Academy. This project is still a work in progress and will be officially submitted on 11/15/2018 (components may still be in development).

View the deployed application (in its current state) at <a href="https://nest-capstone-project.herokuapp.com/home">https://nest-capstone-project.herokuapp.com/home</a>

Back-end repository: <a href="https://github.com/robertpbaxter/red-badge-server">https://github.com/robertpbaxter/red-badge-server</a>

# Features:

Designed in Angular 7 and styled with Angular Material + CSS

User authentication via AuthGuard is required to access rental listings (which will otherwise re-route users to the login component), and all queries outside of login and registration require a JWT retained in local storage

Administrators are a special role that can monitor and process tickets as support or report requests via routes accessible only to users with administrator permissions (log in with the email `admin@admin` and password `admin` to view the admin components)
