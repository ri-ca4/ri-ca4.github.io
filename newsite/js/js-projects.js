// alert('connected')

/* 
    title: Load Project Contents
    author: ri-ca4
    date: 10/9/22
*/

$(document).ready(function(){
    $("button").click(function(){
      $("#page_content").load("projects/test.html");
    });
  });