// AVA GARDINER (46410961)

function delay(callback, ms) {
    var timer = 0;
    return function () {
      var context = this,
      args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(context, args);
      }, ms || 0);
    };
  }
  
  $('#search').keyup(delay(function (e) {
    let searchString = this.value
    fetch(`http://localhost:1337/api/jobs?fields=id,title&filters[$or][0][description][$containsi]=${searchString}`)
    .then((response) => {
      return response.json()
    })
    
    .then((data) => {
      console.log(data)
      let loops = data.data
      html = ''
      loops.forEach((val) => {
        let jobId = val.id
        let jobTitle = val.attributes.title
        html += `<li><a class="search-link" href="/#!/jobs/${jobId}" target="_blank">${jobTitle}</a></li>`
      })

      $('#searchPopulate').html(' ')
      $('#searchPopulate').html(html)

    })
    
    $(document).ready(function () {
      $(".dropdown").click(function () {
        $(this).find("#searchPopulate").fadeIn("slow");
      });
    });

    $(document).on("click", function (event) {
      var $trigger = $(".dropdown");
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $("#searchPopulate").fadeOut("slow");
      }
    });
  }, 500));