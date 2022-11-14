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
}
