// AVA GARDINER (46410961)

//IMPORTS FROM OTHER JAVASCRIPT FILES
// MODULE USED: util.js and views.js

import {
    split_hash
  } from './util.js'

  import {
    jobTopTenList,
    jobDescriptionView,
    companyView,
    allCompanyData,
    aboutUs,
    applicantHelp,
    fourZeroFour
  } from "./views.js"
  
  // allJobData IS A GLOBAL VARIABLE THAT WILL HOLD THE ARRAY
  // OF JOBS LOADED FROM THE BACKEND (STRAPI)
  
  let allJobData = []

  // loadData WILL LOAD THE BACKEND (STRAPI) USING FETCH
  // AND CALL REDRAW() WHEN IT IS READY
  
  const loadData = () => {

    //FETCHING THE 10 MOST RECENT JOBS
  
    fetch('http://localhost:1337/api/jobs?populate=*&sort[0]=publishedAt:desc&pagination[page]=1&pagination[pageSize]=10')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        let loops = data.data
        let dataArr = []
  
        loops.forEach((val) => {
          let jobId = val.id
          let jobTitle = val.attributes.title
          let jobLocation = val.attributes.location
          let jobType = val.attributes.type
          let jobDescription = val.attributes.description
          let companyId = val.attributes.company.data.id
          let companyName = val.attributes.company.data.attributes.name
          let companyLogo = val.attributes.company.data.attributes.logo
  
          dataArr.push({
            jobId,
            jobTitle,
            jobLocation,
            jobType,
            jobDescription,
            companyId,
            companyName,
            companyLogo
          })
        })
  
        allJobData = dataArr
        redraw()
      })
  }

  // FETCHING JOBS DETAIL FOR THE SEARCH BAR
  
  const getJobDetails = async (id) => {
    const returnData = await fetch(`http://localhost:1337/api/jobs?populate=*&filters[id][$eq]=${id}`)
    const jsonData = await returnData.json()
  
    let loops = jsonData.data[0]
    let dataArr
  
    let jobId = loops.id
    let jobTitle = loops.attributes.title
    let jobLocation = loops.attributes.location
    let jobType = loops.attributes.type
    let jobDescription = loops.attributes.description
    let companyId = loops.attributes.company.data.id
    let companyName = loops.attributes.company.data.attributes.name
    let companyLogo = loops.attributes.company.data.attributes.logo
    let companyURL = loops.attributes.company.data.attributes.url
  
    return {
      jobId,
      jobTitle,
      jobLocation,
      jobType,
      jobDescription,
      companyId,
      companyName,
      companyLogo,
      companyURL
    }
  }

  // GET SINGLE UNIT RECORD BY ID 

  const getCompanyDetails = (id) => {
    for (let i = 0; i < allJobData.length; i++) {
      if (allJobData[i].companyId == id) {
        return allJobData[i]
      }
    }
    return null
  }

  // RETURNS A SHALLOW COPY OF A PORTION
  // OF AN ARRAY INTO A NEW ARRAY OBJECT SELECTED FROM START TO END
  
  const getJobAllData = () => {
    return allJobData.slice(0, 10)
  }

  // RETURN ALL JOB DATA

  const getJobAllDataList = () => {
    return allJobData
  }
  
  // REDRAW IS CALLED WHENEVER THE PAGE NEEDS TO BE  
  // UPDATED, IT CALLS THE APROPRIATE VIEW FUNCTION
  
  const redraw = async () => {
  
    const pathInfo = split_hash(window.location.hash)
    console.log(pathInfo);
    if (pathInfo.path === "index.html") {
      if (pathInfo.id) {
        const job = getJobDetails(pathInfo.id)
        console.log(job);
        jobDescriptionView('content', job)
      } else {
        const jobs = getJobAllData()

        jobTopTenList('content', jobs)
      }
    } else if (pathInfo.path === "") {
      const jobs = getJobAllData()
  
      jobTopTenList('content', jobs)
    } else if (pathInfo.path === "jobs") {
      const job = await getJobDetails(pathInfo.id)
      console.log(job)
      jobDescriptionView('content', job)
    } else if (pathInfo.path === "companies") {
      const company = getCompanyDetails(pathInfo.id)
  
      companyView('content', company)
    } else if (pathInfo.path === "companies.html") {
      const jobs = getJobAllDataList()
  
      allCompanyData('content', jobs)
    } else if (pathInfo.path === "about.html") {
      const jobs = getJobAllDataList()
  
      aboutUs('content', jobs)
    } else if (pathInfo.path === "help.html") {
      const jobs = getJobAllDataList()
  
      applicantHelp('content', jobs)
    } else if (pathInfo.path === "jobs.html") {
  
      const jobs = getJobAllDataList()
  
      jobTopTenList('content', jobs)
  
    } else {
      fourZeroFour('content')
    }
  }
  
  window.onload = loadData;
  window.onhashchange = redraw;


  