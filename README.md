# Times Higher Education take home test

At Times Higher Education our aim is to give the best insights we can into higher education for both students and academics. In this test we'd like to give you a taste of that and give you an opportunity to show us what you can do.

In this repository (inside `example-data`) you'll find some auto-generated dummy data about higher education institutions and example submission data. What we would like you to do is to build a very basic app to retrieve this data from a database and visualise it in a React app.

Please read the full README before starting, if you have any questions please feel free to ask.

## Scaffolding

You'll find some scaffolding code within the repo, you are not expected to use this but will hopefully find using it speeds up the process of getting started.

We've provided you with:

- A basic client app boostrapped using [Create React App](https://github.com/facebook/create-react-app). See [`./client/README.md`](./client/README.md) for more info.
- A basic server using Express with [BabelJS](https://babeljs.io) preconfigured and a basic test. See [`./server/README.md`](./server/README.md) for more info.
- A `.nvmrc` file to set the Node version using [NVM](https://github.com/nvm-sh/nvm). You can use a different Node version if you wish, the scaffolding has been created and tested using `v16.13.0`.
- A `docker-compose.yml` file to start a Postgres database, you can use a local database if you'd prefer.

## Example Data

There are two data files inside `./example-data`, `institutions.json` and `submissions.json`; an institution is a university or other higher education body, and a submission is some data about themselves they provided for a particular year. There is a foreign key from submission to institution and broadly speaking the fields are fairly self explanatory.

*N.B. this data is auto generated so there may not be obvious trends and numbers may not add up to produce totals you'd expect.*

## Task

It is expected you will spend around 2 hours on the task, please do not spend any more than 4 hours. You are not expected to complete it, what is more intesting to us is how you think and go about solving problems.

Please tackle the task in the same way as you would approach any other problem, there are no wrong answers or deliberate gotchas. You are not neccessarily expected to write tests but if this is how you would usually work then please do!

You are free to use any tools or libraries you see fit, the only expectation is that you complete the task using JavaScript (or TypeScript if you'd prefer) and React. If you do use any additional libraries and tools, please be prepared to explain your choice and how you used them. There is no need to create a beautiful app, although we do expect some basic styling to layout and style content - the design is up to you!

0. Clone the repo! You may use either the scaffolding or replace it with your own version.
1. Create a relational database schema to store the data provided in `institutions.json` and `submissions.json` & add the example data to the table(s).
    - You are not expected to write migrations to create the schema (although you may if you wish), if you create them manually please create a record of what you did so you can recreate them if neccessary.
2. Create a page to list institutions (showing a minimum of name and country) and allow filtering by institution name.
    - Watch out for CORS issues since you'll be requesting data across domains/ports! Make sure you use the full protocol and domain when making requests from the client.
3. Add the ability to sort institutions by name or country.
4. Enhance the page you created in step 2 so that when a user clicks on an institution name the UI lists the submissions for that institution.
5. For each institution, show a basic graph that visualises their income over time (for each year they have submitted data). You may wish to create some more fake data to give you some more interesting graphs.

## Follow up

Once you have complete the task please make sure you have committed your changes. Please submit your work, along with any notes you wish to provide, in one of two ways:

- create a private GitHub repo and add several THE users as collaborators (your recruiter should have given you the details)
- create a Git archive using using `git archive --format=zip -o THE_coding_test.zip HEAD` and send the zip to us in an email

The next step will be a pair programming exercise where you will add more functionality to the application you have created.

**Please make sure you keep, or are able to recreate, any test data you have created for use during the pair programming exercise**

---

**THE Interviewers** go [here](https://thewui.atlassian.net/wiki/spaces/EN/pages/1207140353/THE+Coding+Test) for pairing exercises and follow up questions.
