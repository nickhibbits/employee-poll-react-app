# Employee Polls Project

This project simulates a polling application allowing make-believe employees to create questions and vote on those created by other coworkers.<br>
By logging in as one of these employees, users are shown a list of "Answered" and "Unanswered" question cards they can click to view. For answered questions, users can see the option they chose as well as stats on the number and percentage of votes cast for each option. For unanswered questions, users are shown a similar screen and prompted to choose. Upon answering they are redirected to the dashboard where they're able to see that question newly added to the "Answered" list.<br>
Lastly users can view a leaderboard where all make-believe employees are ranked by the sum of questions answered and asked.

## Technical Details

This project is built using React and manages state with Redux. The logic governing the presentation of the UI and the logic managing the data are separated, maintaining a predictable, functional, programming pattern.<br>

Unit testing with Jest has also been implemented, checking for both basic functionality and the correct rendering of components<br>

The `_DATA.js` file represents a fake database and methods that let users access the mock data.<br>

This is the final project for Udacity's React & Redux course.

## Getting Started

After cloning the repo...

```
npm i
```
to install the dependencies.

```
npm start
```
to spin up the React dev server.

Navigate to localhost:3000 to view the app.
