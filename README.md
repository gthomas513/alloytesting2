# Technical Task for SA interview @ Alloy

This project was an assignment for an interview with [Alloy](https://www.alloy.com//). It's a Form application that utilizies Alloy's onboarding API to allow a customer to apply and post the data to Allow's API. It is built with the following technologies:

- [React.js]
- [Javascript]
- [HTML]

## To Launch This Project Locally, Follow These Steps:

Clone and install:

```
git clone https://github.com/gthomas513/alloytesting2
cd alloytesting2
npm i
```

Start your development server:

```
npm start
```

The app should open in a browser automatically. If it doesn't, visit [http://localhost:3000](http://localhost.com:3000).

## Event Data Troubleshooting:

If you are not generating any results, or see an error, it's most likely caused by a CORS issue. There is code included in this project to proxy around that will get around the CORS issue by deploying a temporary server. The server remains active for 24 hours only unfortunately, and access will need to be requested at the end of every 24 hours.

- Open the project in your text editor
- Open `src/App.js`
- On line #43, you'll see this line of code: `let proxyLink = 'https://cors-anywhere.herokuapp.com/'
- Head to the link and press the button on the right hand side to gain temporary access to the dev server
- Stop your local server and restart it again: `npm start`

If you run into any other issues, you can email me directly at [gabe.thomas513@gmail.com](mailto:gabe.thomas513@gmail.com).

```

```
