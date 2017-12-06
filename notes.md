# Notes
---
_To record problems and what I learned doing the project_

### Webpack, babel, heroku and express server
Tried to bundle server bundles with webpack, this worked locally but heroku did not like it.
I wanted to keep my modules in ES6 but heroko did not like this. I used babel cli to
compile my dir to new dir, I found out that lib folder was where you should but your compiled
files from es6 with babel. I also learned that babel cli compiling can be used for production
before deploying, unlike other like babel register.

### npm scripts in package.json
##### Error message about fs and feverents
```
"start:dev": "webpack-dev-server --hot ./webpack.dev.js --progress",
```
##### Missing --config and --hot should not be before the --config
```
"start:dev": "webpack-dev-server --config ./webpack.dev.js --progress --hot",
```
## Hot Module Replacement (webpack)
After doing a practice/test deploy to heroku I realised that I needed to make different production and development environments. I wanted to be able to work on development locally and not need the heroku database or use heroku local. I have a express server that is connecting to a database and serving up. Therefore for the server.js needs to run to run the app, this is what is happening in heruko. I wanted to use webpack-dev-server (basically an expres server of it own) for its help in the development environment. This would serve my index.html file on localhost:8080. This is a problem as does not use my server which is connecting to the database, so I would not have access to my database. Solution to this problem is to use **webpack-dev-middleware** and **webpack-hot-middleware**. These are required in the server.js file and added as a middleware. You have to make sure you also have the appropriate plugins in webpack config:
```
plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new webpack.NoEmitOnErrorsPlugin()
   ]
   ```
and that you also have the appropriate entry points to webpack:

```
entry: ['webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&reload=true', './src/index.js']
```

**Not got changes to scss files to cause reload though!**

I had a problem with getting browser to reload when I altered a component. Solution was that I had not added `&reload=true`.
## Importing and exporting modules
imports have to be at the top level. When I did if statement for when in development to use middleware for webpack I had above error, I had to do deperate if statements to put the areas in the correct places.
## NODE_ENV
After I changed the server.js code to have an if satement for development environment heroku was thinking is was in development. This is a bit strange as a thought this was the default for heroku. You can set heroku with this:
```
heroku config:set NODE_ENV="production"
```
In Procfile
```
web: NODE_ENV=production node ./lib/server.js
```
## Why will the form not submit in heroku?
#### Answer: unique constraint "service_email_key"!!!
In my heroku postgres service table I had set email to be unique. I had not realised this and wandered why was getting error when I was trying to submit. I found the error in the heroku logs. I should add more info on my error message I have when their is a problem with submitting the form.

---

### Brew and PSQL
I used brew services to help mange launching of postgres on startup.
When using psql on the command line had message that postgres not running. When I searched for solution it was to delete _**postmaster.pid**_ from /usr/local/var/postgres/.

### Express Routing
I found out about two ways to GET data in express. This is by parameter or query.

#### _Parameter_
```
app.get('/api/services/:id', (req, res) => {
  const id = req.params.id;
  res.send(id);
  });
```
#### _Query_
```
app.get('/api/service*', (req, res) => {
  const id = req.query.id;
  res.send(id);
  });
  ```
A query would look like:
- /api/service?category=Community

A parameter would look like this:
- /api/service/Community

I had problems where the /api/service route was getting used when I wanted the /api/service/:category. I found that this was due to the order of the routes as the parameter route was not being uses as the first was used before it could get to to it. This can be fixed by changing the order or use of {next()}

to do:
- tidy up npm scripts, how to work on development project without relying on heroku database,
need some setting for development vs production. Look at webpack-dev-server , hot etc.
- Home spinning icon does not work well as disappears.
- responsive, look at hamburger and toggle navigation on smaller screens.
- rest of the work on filters, display categories, etc
- remember to comment
- struggled to get responsive image maintaining aspect for home page, I think have done it but need to check ok on iphone 6 setting.
- note I have debug mode on in .babelrc file
- remove the _**unique constraint**_ for email on the heroku postgres database.
