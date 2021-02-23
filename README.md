# Install dependencies
`npm install`

# Start different types of tests
1. Basic test run locally
`npm run local`

2. Test using Page Object Model
`npm run local-pom`

3. Data-driven test
`npm run local-datadriven`

4. Tests run on Browserstack
`npm run browserstack`

5. Tests run parallel on local browsers
`npm run local-parallel`

6. Tests run on Docker Selenium Grid
Make sure Docker Selenium Grid is running, by executing `docker-compose up -d` from the `/docker` folder.

   `npm run docker`

7. Tests run parallel on Docker Selenium Grid
Make sure to scale your Docker Selenium Grid with `docker-compose scale chromenode=3`.

   `npm run docker-parallel`

8. Tests run parallel on Browserstack
`npm run browserstack-parallel`
