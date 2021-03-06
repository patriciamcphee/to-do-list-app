
function newItem(){

  // add a new item to list 
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);
  
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  // cross out item from list

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  // add delete button "x"
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);

  //add class delete display none to css
  function deleteListItem(){
    li.addClass("delete")
  }

  // add strikethrough when clicking an item in list
  li.on("click", function() {
    li.addClass("strike");
  });

  // reorder items in list 
  $('#list').sortable();

}
    
     
    
    
    
    
    
    
    
    // If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.
    
    
    
    
    
    
    
    
      /*
    // jQuery Code
    //1. Adding a new item to the list:
    
      let li = $('<li></li>');
      let inputValue = $('#input').val();
      li.append(inputValue);
    
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }
    //2. Crossing an item out:
      function crossOut() {
            li.toggleClass("strike");
        }
    
        li.on("dblclick", function crossOut() {
            li.toggleClass("strike");
        });
    //3. Adding a delete button
      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
    
    //   crossOutButton.on("click", deleteListItem);
    //   function deleteListItem(){
    // 		li.addClass("delete")
    // 	}
       $('#list').sortable();
    */
    
    
    
    
    
    
    
    
    
    
    