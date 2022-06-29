$(document).ready(function(){
    $("#Enter").click(function(){
        var text1 = $("#text1").val();
         let done=$(":button").val();
        $('#displayArea').append("<tr><td>" + text1 + "</td><td>" +
        '<button class="done btn btn-success">Done</button>     <button class="undone btn btn-warning">Undone</button>       <button class="delete btn btn-danger">Delete</button>' +
         "</td><td class='result'></td</tr>")
       // $("input[type=text], textarea").val("");
    });
    // $(document).on('click','.delete',function(){
    //   $(this).parent().parent().remove();
      
    // });

    $(document).on('click','.delete',function(){
      //var i=1;
       i = myTable.rows.length;
    
      if(i>2){
          // var row = btn.parentNode.parentNode;
          $(this).parent().parent().remove();
      }
    });
  
  
    $(document).on('click','.done',function(){
      $(this).parent().siblings('.result').html('&#9989;');
      $(this).siblings('.delete').attr("disabled",true)
    });
    $(document).on('click','.undone',function(){
      $(this).parent().siblings('.result').html('&#x274C;');
      $(this).siblings('.delete').attr("disabled",false)
    });
  });
