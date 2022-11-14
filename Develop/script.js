$(document).ready(function(){
  //display current date and time
    // TODO: Add code to display the current date in the header of the page.
  var displayDate = dayjs().format(('dddd') + ", " + ('MMMM DD'));
  currentDay.innerHTML = displayDate;
   // TODO: Add a listener for click events on the save button. This code should
  // get save buttons to save content to text area when clicked
  $(".saveBtn").on("click", function(){
      // capture values inside text area and corresponding time
      var task = $(this).siblings("textarea").val();
      console.log(task)
      var time = $(this).parent().attr("id");
      console.log(time);
      localStorage.setItem(time, task)
  })
    // TODO: Add code to get any user input that was saved in localStorage and set
  // grab items from local storage to put into text areas
  $("#09 .description").val(localStorage.getItem("09"))
  $("#10 .description").val(localStorage.getItem("10"))
  $("#11 .description").val(localStorage.getItem("11"))
  $("#12 .description").val(localStorage.getItem("12"))
  $("#13 .description").val(localStorage.getItem("13"))
  $("#14 .description").val(localStorage.getItem("14"))
  $("#15 .description").val(localStorage.getItem("15"))
  $("#16 .description").val(localStorage.getItem("16"))
  $("#17 .description").val(localStorage.getItem("17"))
  $("#18 .description").val(localStorage.getItem("18"))
  $("#19 .description").val(localStorage.getItem("19"))
  $("#20 .description").val(localStorage.getItem("20"))

      // change color depending on whether event is in past, present, or future
      let currentHour = dayjs().format("HH");

      $(".description").each(function(){
          var timeEl = $(this).parent().attr("id");
          console.log(timeEl)
          if (timeEl < currentHour) {
              $(this).addClass("past")
          } else if (timeEl === currentHour) {
              $(this).addClass("present")
          } else if (timeEl > currentHour) {
              $(this).addClass("future")
          }

      })
  });