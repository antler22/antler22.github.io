//Master JS and JQuery library for Value Calculator project
//Nick.jacobsen@claas.com

//add commas to all outputs, for cleaner look
function addCommas(nStr)
        {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
        }

    //add dealer logo to page top
    $(document).ready(function(){
        $("#dealername").change(function(){
        $("img[name=dealerlogo]").attr("src",'miscellaneous/dealerpics/' + $(this).val());
        });
    });

//activate print button
function printer() {
        window.print();
        }

//auto expand text area
function increaseHeight(e){
   e.style.height = 'auto';
   var newHeight = (e.scrollHeight > 32 ? e.scrollHeight : 32);
   e.style.height = newHeight.toString() + 'px';
    };

//Show competitor logo, and place model number in results page
$(document).ready(function(){
    $("#claastype").change(function(){
        $('#td0').text($('#claastype option:selected').text());
        $('#hp1').text($('#claastype option:selected').val() + " hp");
        });

    $("#tractorpick2").change(function(){
    $("img[name=brandlogo]").attr("src",'miscellaneous/logos/' + $('#tractorpick2 :selected').parent().attr('label') + ".png");
    $('#td1').text($("#tractorpick2 option:selected").text());
    $('#hp2').text($('#tractorpick2 option:selected').val() + " hp");
    $('#groupname').text($('#tractorpick2 :selected').parent().attr('label'));
    $('.complabel').text($('#tractorpick2 :selected').parent().attr('label'));
    });


    //image preview
    $("#fileUpload").on('change', function() {
      //Get count of selected files
      var countFiles = $(this)[0].files.length;
      var imgPath = $(this)[0].value;
      var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
      var image_holder = $("#image-holder");
      image_holder.empty();
      if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
        if (typeof(FileReader) != "undefined") {
          //loop for each file selected for uploaded.
          for (var i = 0; i < countFiles; i++)
          {
            var reader = new FileReader();
            reader.onload = function(e) {
              $("<img />", {
                "src": e.target.result,
                "class": "thumb-image"
              }).appendTo(image_holder);
            }
            image_holder.show();
            reader.readAsDataURL($(this)[0].files[i]);
          }
        } else {
          alert("This browser does not support FileReader.");
        }
      } else {
        alert("Please select .jpg, .jpeg, .png, or .gif only");
      }
    });

});
