  // jQuery code for tab functionality
  $(document).ready(function(){
    $(".tablinks").click(function(){
      var tabName = $(this).attr("data-tab");
      $(".tabcontent").hide();
      $("#" + tabName).show();
      $(".tablinks").removeClass("active");
      $(this).addClass("active");
    });
    
    // Initially open the "ALL" tab
    $("#All").show();
    $(".tablinks[data-tab='All']").addClass("active");
  });