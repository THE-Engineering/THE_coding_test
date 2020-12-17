# Times Higher Education take home test

At Time Higher Education our aim is give the best insights we can into higher education for both students and academics. In this test, we'd like to give you a taste of that and give you the opportunity to show us how you could improve this

In this repository we've given you some dummy data about some higher education institutions and what data the could have submitted to us. What we would like you to do is take this data and do something interesting with it; there are some suggestions below to inspire you but feel free to use your imagination.

The aim is to have something to show and talk about in the technical interview, particularly around how you chose to solve the problem, what limitations it may have, and what the code looks like to achieve it.

There are no hard and fast rules but there some guidelines as to what we're expecting:

 - Ideally spend between 1 to 2 hours on the problem; you can spend a little more if you want but we don't want this to be a chore.
 - Based on the time constraints, it's better to think small and complete and have ideas of what/how you'd do something bigger to talk about in the technical interview
 - We would like to see some code/scripts of what you've done; ideally we'd prefer it in JS/Typescript but any reasonably modern language is fine.
 - Likewise we're not expecting something production ready, but it should reflect how you approach the problem normally rather than something you'd throw away afterwards.

# Files

There are two files, `institutions.json` and `submissions.json`; an institution is a university or other higher education body, and a submission is some data they told us about themselves for a particular year. There is a foreign key from submission to institution and broadly speaking the fields are fairly self explanatory. N.B. this data is auto generated so there may not be obvious trends and numbers may not add up to produce totals you'd expect.

# Suggestions
Here are a list of examples of things you could do with the data; feel free to use one of these but also feel free to try something else if you feel inspired.

Look at the data and see how it could be enhanced or what insights could be gained from it:
 - Produce a list of the best institutions to study a particular subject
 - Enhance the data by adding some new data e.g. adding how many [Covid-19 cases](https://github.com/nytimes/covid-19-data) there have been per country/institution (N.B. as our dataset names are made up, feel free to amend them to show it working)

Show us how you could setup a service to manage this sort of data:
 - Create an API that would be able to serve the data to a frontend to render
 - Setup storage mechanism to store the data and allow for adding new data (rather than using static JSON files)

Display and interact the data:
 - Display some submission data per institution for each year in either a table or chart
 - Show a list of subjects and which institutions you can study them at
