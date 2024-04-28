# COMP2110 Web Development Assignment

This project implements the Bob's Jobs web application for the COMP2110 
Web Development assignment.  

Full details of the assignment requirements are in [the doc folder](doc/assignment.md). 

## Getting Started

Once you have cloned a copy of this repository locally you need to install the 
dependancies using `npm`.  This requires that you have `node` and `npm` installed.  

The overall project consists of two sub-projects for the backend and the frontend.
Each is independant in terms of code and the backend project (Strapi) will have
its own `package.json` file and node modules installed.  You will need to create
that project when the time comes.

In the main folder, you need to install the project dependencies (`http-server`
to run the frontend server and `cypress` for testing):

```shell
npm install
```

Once you have done this you can run the frontend server from the main project
directory with:

```shell
npm run frontend
```

To run the tests you can open up the Cypress GUI:

```shell
npm run cypress
```

The tests are split into 12 separate files so that we can run them automatically
as part of the Github Classroom grading.  Initially the tests for levels 1 and 2
are provided.  Otherse will be added later.  You may not change anything about
the tests (we would be able to see from the git logs).

## Level 3 and 4

Details of these levels are now in the [assignment spec](doc/assignment.md).

## LEVELS THAT HAVE NOT BEEN PASSING IN CYPRESS BUT I BELIEVE THEY SHOULD BE

L3C: Job list comes from the API and is in publishedAt order. The ten most recent jobs are shown.

L3D: Search box searches job descriptions

## DESCRIBE EACH LEVEL, WHAT WAS ACHIEVED: 

THE LEVELS I WAS ABLE TO ACHIEVE

Level 1

   L1A: The main title of the application page should contain "Bob's Jobs." To accomplish this, I added a link called Bob's Jobs to the top left corner of the navbar. This way, the user can return to the homepage by clicking on the logo.

   L1B: The homepage successfully links to a CSS stylesheet that provides the web application's design. This had already been completed, but I used my own design based on the first assignment.

   L1C: On the home page, I added a link with the text About Us and the URL /#!/about, which, when clicked, takes you to a page that describes Bob's Jobs. This page had to include the text "Bob's Jobs is a revolution in career planning brought to you by Bob Bobalooba himself!" To accomplish this, I created an HTML page called about and a views.js file. I made an HTML handlebar template in the views file. I called a p tag paragraphOne in this template and inserted the text inside. I used the splithash function to display this text with the URL /#!/about on the about us page, which gave me a hash path like #!/thing/99, which returned an object with the properties "path" ("thing") and "id" (99). The splithash function from the router.js file and the aboutUs function from the views.js file were then imported. In the main.js file, I created a redraw method that calls the aboutUs function whenever the About Us page needs to be updated. After clicking on the About Us link, the content changes and the hash changes.
   
   L1D: Similarly to L1D, I added a link to the home page with the text Applicant Help and the URL /#!/help, which when clicked displays a page of extra help for people applying for jobs. The phrase "Be sure to be honest in your application!" must appear on the page. To accomplish this, I created an HTML page called about and a views.js file. I made an HTML handlebar template in the views file. I called a p tag paragraphOne in this template and inserted the text inside. I used the splithash function to display this text with the URL /#!/help on the Applicant Help page, which gave me a hash path like #!/thing/99, which returned an object with the properties "path" ("thing") and "id" (99). The applicantHelp function from the views.js file was then imported. In the main.js file, I added a redraw method that calls the applicantHelp function whenever the Applicant Help page needs to be updated. After clicking on the Applicant Help link, the content changes and the hash changes.

   L1E: I successfully created a navigation menu that appears in a nav element and included links to About Us and Applicant Help. The current page is highlighted by adding the class selected to the element that contains the link.  

Level 2

   L2A: I made a home page that displayed the first ten jobs in the order specified in the sample-data.json file's job list. To accomplish this, I used fetch. In the home page, I created a class called jobs with the id called content. I only displayed the 'title', 'location', 'type', and the company name. This was accomplished using a html handlebar called jobTopTenList. In the main.js file, I created a loop that retrieves a single unit record by id and then used slice() to return a shallow copy of a portion of the job array into a new array object selected from beginning to end. jobTopTenList was then incorporated into the redraw function which redraws the first 10 jobs on the home page

   L2B: The job title was successfully converted into a hyperlink that takes me to a specific job page. The hyperlink was made in the form    /#!/jobs/id. Where id is the job field. The splithash function in the router.js was called in the redraw function to create the jobs hyperlink.

   L2C: After clicking on the job title, a page with all relevant job details in a readable format, including a job description, is displayed. The description field, on the other hand, contained HTML code, which I rendered using {{{}}} to display it in a readable format. In the views.js file, I put this in a div tag called "job-description" with the function name jobDescriptionView. To display this on the page, jobDescriptionView was added to the redraw function in the main.js file.

   L2D: Each job page I successfully included a link back to the home page of the page so that the user can return to the home page. This allows the user to return to the page's job listing.

   L2E: On the main page which shows the job listing I created a hyperlink for the company name. The hyperlink was made in the form           /#!/companies/id. Where id is the company field. The splithash function in the router.js was called in the redraw function to create the companies hyperlink.

   L2F: I created a page that displays the details of that company by clicking on the company link. The details included the company name and logo. This was completed by naming the html handlebar template companyView in the view.js file. companyView was added to the redraw function in the main.js file to display the content on the page.
   
   L2G: When an unknown URL is entered into the search bar, an error page captioned "PAGE NOT FOUND" appears. This was accomplished by creating a fourZeroFour html handlebar in which I placed a div element called applicant and inserted the text. fourzerofour was added to the redraw function, but at the end, using an else statement. If redraw is unable to locate what you are looking for, it will display PAGE NOT FOUND on the webpage.

Level 3

   L3A: When the server is running on port 1337, I was able to successfully configure the Strapi backend to store the jobs and company data. I can easily access the API and retrieve job and company information. The endpoints are '/api/jobs,' '/api/companies,' and '/api/job-applications.'

   L3B: The Strapi backend API has been configured with the correct Job and Company records.

   L3C: The job list was transferred from the sample-data.json file to the Strapi API data. Instead of showing the first ten jobs on the homepage, the list of jobs had to be ordered by the 'publishedAt' field, with the most recent jobs displayed first. I used the Postman application to display the ten jobs in descending order. I then created unique values for each field and inserted them into the code I had already written for level 1 and 2 in the main.js and views.js files to connect the data from Strapi to the web application.

   3D: I added a search box to each page so that users could look for jobs. The search box contained an 'input' element with the id 'search'. I also included a submit button with the id 'searchbutton'. The user can enter text into the search box, and a search is performed, and jobs that contain the search term in the 'description' field are listed on the page. The search terms can be limited to single words or, more precisely, strings contained in the job description. The user can click on the title and be take to the job description page. 

Level 4

   L4A: On every page, a login box with the names username and password and a button with the id loginbutton is displayed..
   

## Extension

If you have implemented an extension to the base requirements, describe it here.

1. In the navbar, there is a sliding search bar. When you hover your mouse over the sliding search bar, it expands to the right over the nav  items. When you click on it, it becomes black and focuses. When you move your mouse away, it will shrink and remain black until you click on the page, at which point it will reset. This was created using html and css only. When you type your search term a black drop down search will appear with a list of jobs relating to that search term. If you take your mouse away it will stay on the screen until your click on the page and it will fade out and disappear. This is using jQuery. 

2. When you hover your mouse over a link, the animated nav icons slide up and turn pink, and when you move your mouse away, they slide down and turn white.