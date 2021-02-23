- [Business Goal](#business-goal)
- [Technical Goal](#technical-goal)
- [Working in Development](#working-in-development)
- [Provisioning Hosting, Backend and Deployment](#provisioning-hosting-backend-and-deployment)

![](docs/screenshot.png)

## Business Goal

When a logged out user visits the web-app, they can see a screen full of bananas.
and when they hover over banana they will see the hashnode username of the person posting the banana

When a user clicks on Sign up they can create an accounts with an email, password and hashnode username.

When a user is logged in, they can left click to place upto 6 bananas onto the screen.
When the right click it will remove a banana. It would be nice to see bananas appear in real time.

## Technical Goal

Build a simple web-application that utilizes as much of the AWS Amplify Console using no javascript frameworks.

### Considersations

- Backend — The backend is built manually using the AWS Amplify Console Admin UI
- Hosting — The frontend is hosted via the AWS Amplify Console
- Frontend — The frontend is written in ES6 javascript, Scss and the Amplify Client, it was designed to be a simple use case to use Amplfiy without any javascript frameworks.

## Working in Development 

### Install Required Packages

```
npm i
```

### Running Local Web-server

Start the webpack development server.

```
npm start
```

Visit the url [http://localhost:8080/](http://localhost:8080/)

## Provisioning Hosting, Backend and Deployment

### Deployment

This web-application is using continuous deployment via AWS Amplify Console.
When you push to main it will automatically trigger a deploy.
