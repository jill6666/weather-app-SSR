# Weather-App-SSR

## Prequsitions
- react 16.10.1
- nodemon ^2.0.12
- express ^4.17.1

### Run in shell

```shell
  $ npm install
  $ npm run dev:server
  $ npm run dev:build:server
  $ npm run dev:build:client
  $ open https://localhost:3000
```

### Description
- Impletment server side rendering by fork PJChender's project. [link](https://codesandbox.io/s/weather-app-add-dark-mode-feature-3e3u5)
 
## Note
The moment data is hardcode not fetch the real data. 


## Deployment

### Heroku
#### Initialization

1. Create a project on Heroku website
2. Download [heroku cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
3. Login and set config
```
  $ heroku login
  $ heroku git:remote -a ${project name}
```

#### Test in local

```
  $ heroku local web -p 3000
  $ open http://localhost:3000
```

#### [Deploy to heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)

```
  # push to heroku remote and it will tirgger deployment
  $ git push heroku main
  # open project URL
  $ heroku open
  # see logs of the app
  $ heroku logs --tail
```

Note for Troubleshooting
- [Why is my Node.js app crashing with an R10 error](https://help.heroku.com/P1AVPANS/why-is-my-node-js-app-crashing-with-an-r10-error)
- [Node.js FAQ](https://help.heroku.com/P5IMU3MP/heroku-node-js-build-script-change-faq)