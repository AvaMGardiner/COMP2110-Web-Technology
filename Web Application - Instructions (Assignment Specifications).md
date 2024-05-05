# Web Development Assignment

The task for the web development assignment this year is to build a job listing web application. Your app will show a list of posted jobs, allow users to search them and view job details, and then submit an application for a job. This will be a simplified version of something like Seek or Glassdoor. The goal is to give you experience in building a realistic web application within the confines of this introductory unit.

The task is split into two parts: front-end and back-end. For the back end, we will use Strapi which makes it easy to set up a database that provides a JSON-based API. For the front end, we'll write JavaScript code in the style that you've been developing in the workshops.

## Two Submission Points

There will be two submissions for this assignment. In the first (26th April, 5pm), you will submit some core functionality on the front-end using a dummy back-end. We will mark this using automated tests and provide you some feedback. The final submission (week 10, 15th May, 5pm) will include the full Strapi backend and include more advanced features.

## Getting Started

We will again use Github Classroom to manage the assignment and you will do your work in a new repository. Please follow [**Github Classroom Assignment**](https://classroom.github.com/assignment-invitations/432e1a8188de23c3cecc0ef55b0db21a/status) to accept the assignment and get your own repository.

The full requirements for the assignment are contained in the files in the repository. At the moment these are only detailed for levels 1 and 2, updates will be made available soon for the remaining levels.

The repository contains sample data that you will use to get started and prototype your front-end code. It also contains automated tests and these will be run every time you push your code to Github. You can also run the automated tests locally using Cypress. At the moment, the tests for levels 1 and 2 are provided.

Note that if you don't pass all of the tests, Github will show them as failing, [**you can look at the detailed output to see which tests you are passing if any**(https://docs.github.com/en/education/manage-coursework-with-github-classroom/learn-with-github-classroom/view-autograding-results). 

-------

### Levels 3 and 4

Now that the first submission is done, the requirements for levels 3 and 4 are available. As before, the requirements are described in the files in the doc folder of your project. You can get the updated files here:

1. Download level34.zip which contains the updated files and copy them into your project. This should add the new files to your repository (git add, or via VSCode) and commit the changes. NOTE: an earlier version of this zip file (or the patch file) was missing a few details - please update.

For now, these files do not include updated tests. These will be released a little later when we have fully debugged them.

For reference, here are the updated documentation files (for the other files that you'll need see the zip file above):

- README.md
- doc/assignment.md
- doc/level3-4.md
- doc/backend.md
- doc/data.md

---------

## Grading

Your work will be marked out of 35 in total. These marks will be allocated according to the following rubric.

### Functionality: First Submission (5 marks)

- Auto marking: up to 5 marks (pass at least 10/12 tests); each test is worth 0.5 marks for a max of 5.

### Functionality: Final Submission (10 marks)

- Levels 3-4: 10 auto-tests (5 marks)
- Extensions: well-documented additional features or capabilities. Must be very clearly mentioned in the README.md file so that we know what you have done. (5 marks)

### Code Review (10 marks) - each is worth 2 marks

- README file describes each level, what was achieved, etc.
- Comments: 
  - (a) on the top of each function and each substantial piece of code and, 
  - (b) at the top of each file: module name, student name, and student number.
- Modularity: the project is structured according to the MVC framework: model.js, views.js, main.js at the very minimum contain: the data-, views- and the controller-related code respectively.
- Readability: 
  - function names – easy to understand, consistent notation, i.e., camelCase used for all function names; suitable names are used.
  - variable names – convey what is the variable supposed to do, consistent notation (e.g., user_name, or camelCase).

Note: Comments, function and variable names coupled with well-written (structured) code are very important for code readability and maintainability.

### Design and Completeness (10 marks) - each is worth 2 marks

- Overall Appearance: there are no broken links; images are displayed properly, in proportion; fonts are easy to read, e.g., font is not too small/too large.
- Adjustability: Page size adjusts accordingly with smaller or wider screen size. Responsive web design is not required, just ensure your page displays properly with different screen sizes, i.e., when the user adjusts the page size, the page is rearranged and still presentable and usable.
- Browser Support: Displays well on different modern desktop browsers (e.g., Chrome, Firefox, Edge, and Safari).
- Structure of Pages: the page structure is clear, tidy, and easy to use.
- Aesthetics: Consistent color schema with attention to color combinations, e.g., background/foreground contrast (i.e., BG is not too busy). If you are interested, please read on color theory ([link1], [link2]).
