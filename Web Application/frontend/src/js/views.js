// AVA GARDINER (46410961)

// HANDLEBAR TEMPLATE THAT DISPLAYS THE TEXT FOR THE JOB LISTING ON THE INDEX AND JOB PAGE
export const jobTopTenList = (id, jobListArray) => {
  console.log(jobListArray)
  const template = Handlebars.compile (`
  
  <div class="main-heading">
    <h1 class="heading">Explore:</h1>
    <p class="sub-heading">Find a job you are passionate about!</p>
  </div>
  
  {{#each array}}
  
  <div class="joblist">
    <div class="job-detail">
      <div class="job-title">
        <b>
          <label>Title:</label>
        </b>
        <a class="link" href="/#!/jobs/{{jobId}}"> {{jobTitle}}</a>
      </div>
      <div class="company-name">
        <b>
          <label>Company Name:</label>
        </b>
        <a class="link" href="/#!/companies/{{companyId}}"> {{companyName}}</a>
      </div>
      <div class="job-type">
        <b>
          <label>Type:</label>
        </b>
        {{jobType}}
      </div>
      <div class="job-location">
        <b>
          <label>Location:</label>
        </b>
        {{jobLocation}}
      </div>
    </div>
  </div>
  
  {{/each}} 

  `)
  
  const target = document.getElementById(id)
  target.innerHTML = template({
      array: jobListArray
})

}

// HANDLE BAR TEMPLATE THAT DISPLAYS THE JOB DESCRIPTION TEXT WHEN
// THE USER CLICKS ON THE JOB TITLE

export const jobDescriptionView = (id, jobs) => {
  const template = Handlebars.compile (`
  
  <div class="job-description">
    <div class="company-name">
      <b>
        <label>Company name:</label>
      </b>
      <a href="/#!/companies/{{companyId}}"> {{companyName}}</a>
    </div>
    {{companyURL}}
    {{{jobDescription}}}
  </div>
  
  `)
  
  const target = document.getElementById(id)
  target.innerHTML = template(jobs)

}

// HANDLEBAR TEMPLATE THAT DISPLAYS THE COMPANY LOGO AND NAME WHEN THE USER CLICKS ON THE COMPANY
// LINK ON THE INDEX PAGE

export const companyView = (id, jobs) => {
  const template = Handlebars.compile (`
  
  <div class="job-description">
    <div class="company-name">
      <b>
        <label>Company name:</label>
      </b>
      <a href="/#!/jobs.html"> {{companyName}}</a>
    </div>
    <div class="job">
      {{#if companyLogo}}
      <img src="{{companyLogo}}" alt="job logo" />
      {{/if}}
    </div>
  </div>
  
  `)
  
  const target = document.getElementById(id)
  target.innerHTML = template(jobs)

}

// HANDLEBAR TEMPLATE THAT DISPLAYS THE LOGO AND NAME OF THE COMPANY WHEN
// THE USER CLICKS ON COMPANY LINK IN THE NAVBAR

export const allCompanyData = (id, jobs) => {
  const template = Handlebars.compile (`

  {{#each array}}
  <div class="job-description">
    <div class="company-name">
      <b><label>Company name:</label></b>
      <a href="/#!/jobs.html"> {{companyName}}</a>
    </div>
    <div class="job">
      {{#if companyLogo}}
      <img src="{{companyLogo}}" alt="job logo" />
      {{/if}}
    </div>
  </div>
  
  {{/each}} 
  
  `)
  
  const target = document.getElementById(id)
  target.innerHTML = template({
      array: jobs
  })
}

// HANDLEBAR TEMPLATE THAT DISPLAYS THE TEXT THAT WAS REQUIRED TO PASS L1C.
// I ALSO ADDED LOREM IPSUM TO FILL IN THE ABOUT US PAGE 

export const aboutUs = (id, jobs) => {
  const template = Handlebars.compile (`
  
  <div class="about-us">
    <div class="about"><h1>Ab<span>o</span>ut Us</h1></div>

    <p class="paragraphOne">
      Bob's Jobs is a revolution in career planning brought to you by Bob
      Bobalooba himself!
    </p>

    <video class="aboutVid" width="300" height="300" loop="true" autoplay="autoplay" muted>
      <source src="img/BobsJobs!.mp4" type="video/mp4">
    </video>

    <p class="paragraph">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aenean aliquam eros et augue luctus laoreet ut quis sem. 
    Sed odio eros, tempor ut mauris ut, ultricies rhoncus enim. 
    Interdum et malesuada fames ac ante ipsum primis in faucibus.
    Nulla auctor diam ac vehicula vestibulum. 
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
    Phasellus ornare euismod metus, non scelerisque quam lobortis tempus. Etiam id nisl mi.
    </p>
    <p class="paragraph">
    Duis in tortor eget justo porta commodo et in eros. 
    Donec nec urna in purus fringilla malesuada. 
    Donec nec malesuada risus, in vestibulum enim. 
    Maecenas non consectetur erat. 
    Proin non leo non nisi posuere aliquet id ac lacus. 
    Nunc aliquam ante et nisl dictum, elementum tempor lorem euismod. 
    Sed interdum libero in magna volutpat, vel placerat lacus egestas. 
    Aliquam vehicula pretium interdum. 
    Curabitur bibendum, sem sed commodo interdum, justo eros efficitur sem, ut mattis libero justo a metus. 
    Phasellus ut dolor cursus, sollicitudin lectus sed, dictum nulla.
    </p>
    <p class="paragraph">
    Integer ligula est, condimentum sit amet mauris id, viverra aliquam mi. 
    Pellentesque euismod ut diam nec varius. 
    Aliquam pretium tempor velit, quis scelerisque augue elementum sit amet. 
    Aenean id metus eget nulla dictum venenatis ornare finibus massa. 
    Fusce scelerisque, sem in finibus ultricies, arcu est scelerisque diam, non pretium mauris libero ultricies nibh. 
    Sed at ex ultrices, dapibus dui et, tincidunt velit. 
    Vestibulum congue auctor libero, eget tempor lorem ullamcorper id. 
    Nulla ultrices dui non mi dapibus commodo. 
    Donec non blandit neque, et viverra lectus.
    </p>
    <p class="paragraph">
    Praesent sit amet nisl quis massa posuere mattis. 
    Morbi mattis aliquam orci, ac tempus lacus pulvinar ut. 
    Proin ultrices, mi ac auctor tempus, ipsum enim aliquet mi, quis molestie ex neque sit amet turpis. 
    In condimentum libero gravida porttitor maximus. 
    In imperdiet nibh sem, eget sodales leo egestas et. 
    Cras lacinia odio at arcu commodo sodales. 
    Phasellus interdum ut lectus pellentesque blandit. 
    Sed porttitor quis eros et lobortis. In eget dolor libero. 
    Maecenas odio ipsum, pellentesque nec purus blandit, gravida pellentesque erat. 
    Cras ut tincidunt lacus, aliquet tempus eros. 
    Donec sit amet urna pulvinar, lobortis sem a, bibendum urna.
    </p>
    <p class="paragraph">
    Etiam sit amet risus sed nulla finibus pharetra. 
    Curabitur tincidunt sit amet augue eu tincidunt. 
    Aliquam sit amet viverra mi. 
    Cras imperdiet nibh posuere, semper quam a, finibus eros. 
    Morbi rhoncus, lorem at vehicula blandit, nisi erat placerat diam, eu placerat diam magna rutrum lectus. 
    Sed id justo posuere, placerat mi sit amet, faucibus sapien. Sed justo arcu, placerat eget metus in, sagittis consectetur lacus. 
    Morbi dapibus cursus velit sit amet dapibus. 
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Ut ante sem, pharetra non mollis quis, elementum at tellus. 
    Aenean tempus vulputate purus, vitae tincidunt purus laoreet ac. 
    Ut tempor libero maximus, varius orci eget, lacinia sem. 
    Curabitur a lobortis lorem. 
    In quam nisi, condimentum ac laoreet at, consequat eu nibh. 
    Integer dapibus lacinia neque eu sagittis.
    </p>
  </div>
  
  `)
  
  const target = document.getElementById(id) 
  target.innerHTML = template(jobs)

}

// HANDLEBAR TEMPLATE THAT DISPLAYS THE TEXT THAT WAS REQUIRED TO PASS L1D.
// I ALSO ADDED LOREM IPSUM TO FILL IN THE APPLICANT HELP PAGE 

export const applicantHelp = (id, jobs) => {
  const template = Handlebars.compile (`
  
  <div class="applicant-help">
    <div class="applicant"><h1>A<span>pp</span>licant H<span>e</span>lp</h1></div>
    <p class="paragraphOne">Be sure to he honest in your application!</p>
    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Morbi quis ornare justo, sed sagittis ipsum. Integer at iaculis enim, ac sollicitudin metus. 
    Nunc nec elit ut ante iaculis bibendum. Nulla vitae massa at eros pellentesque condimentum. 
    Sed tellus nunc, faucibus sit amet ante nec, consectetur faucibus purus. Suspendisse consequat orci a congue molestie. 
    Vivamus neque dolor, sagittis eget auctor bibendum, eleifend quis elit. 
    Sed id orci suscipit, dictum neque non, posuere sem. 
    Sed sit amet tellus sem. Etiam sed scelerisque libero. 
    Suspendisse sed tincidunt augue, vel mollis nisi. 
    Nulla venenatis sapien vitae feugiat sollicitudin. 
    Vivamus pharetra lacus nulla, sit amet viverra tortor dictum non. 
    Donec mattis dui id dictum elementum. Sed a urna imperdiet, rutrum mi semper, lacinia nunc. 
    Pellentesque quis venenatis turpis, aliquet blandit nunc.
    </p>
    <p class="paragraph">Nam in finibus tortor. 
    Quisque dignissim laoreet magna ut vestibulum. 
    Etiam felis turpis, volutpat id diam in, congue varius eros. 
    Nam ornare tempor turpis. 
    Aliquam ornare velit ut ipsum aliquam, sed rutrum sapien laoreet. 
    Phasellus efficitur tortor vitae massa sagittis, et gravida massa accumsan. 
    Vestibulum ut felis condimentum, malesuada sem quis, aliquam justo. 
    Maecenas dignissim elit sed felis feugiat, ac accumsan tellus pellentesque. 
    Donec tristique dignissim lectus vitae congue. 
    Duis euismod metus vel massa ultrices, eu egestas sapien cursus. 
    Integer vehicula ac purus sed maximus. 
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Aliquam sem diam, imperdiet pretium mauris at, bibendum finibus odio. 
    Vestibulum lacinia a arcu ac euismod.
    </p>
    <p class="paragraphtwo">How to Upload Your Application to Bob's Jobs Successfully?</p>
    <ol type = "1">
         <li class="helplist">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
         <li class="helplist">Praesent et enim vitae quam venenatis suscipit.</li>
         <li class="helplist">Vivamus dictum elit quis elit varius luctus.</li>
         <li class="helplist">Aenean scelerisque nunc a mauris tristique porttitor eu nec est.</li>
         <li class="helplist">Quisque ut turpis vitae felis congue volutpat.</li>
         <li class="helplist">Nullam bibendum velit ac nibh vestibulum, in aliquet eros malesuada.</li>
         <li class="helplist">Donec vel enim ut odio hendrerit malesuada.</li>
         <li class="helplist">Donec et magna id risus tristique posuere in at mauris.</li>
      </ol>
  </div>
  
  `)
  
  const target = document.getElementById(id)
  target.innerHTML = template(jobs)

}

// HANDLEBAR TEMPLATE THAT DISPLAYS PAGE NOT FOUND WHEN 
// AN UNKNOWN URL IS SEARCHED

export const fourZeroFour = (id, jobs) => {
  const template = Handlebars.compile (`
  
  <div class="four-zero-four">
    <div class="applicant"><h1>Page Not Found</h1></div>
  </div>
  
  `)
  
  const target = document.getElementById(id)
  target.innerHTML = template(jobs)

}