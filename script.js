$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
      // on click of the save button the function will execute the following code
      // the following vars are declared with the value targeting the text input
      var value = $(this).siblings('.description').val();
      // this targets the time
      var time = $(this).parent().attr('id');
  
      // save the vars in localStorage
      localStorage.setItem(time, value);
    });
  
    function timeUpdate () {
      // get current number of hours using moment
      var currentHour = moment().hours();
  
      // loop over time blocks
      $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
  
        // check if we've moved past this time and assign a class to change the color of the bars depending on its temporal position relative to the current time
        // if less than the current time
        if (blockHour < currentHour) {
          $(this).addClass('past');
          // if the current time is the same as the bar
        } else if (blockHour === currentHour) {            
          $(this).removeClass('past');
          $(this).addClass('present');
          // if it is anythiung else
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
    // calling the hourUpdater() function
    timeUpdate();    
     
    // load any saved data from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
    // display current day on page
    $('#currentDay').text(moment().format('Do MMMM, YYYY'));
  });