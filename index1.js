function Clone(){
   
    let write= document.getElementById('txtValue'),
      list = document.getElementById('List'),
      aList = document.createElement('li'),

      txtNode= document.createTextNode(txtValue.value);
      txtValue.value= "";

      aList.appendChild(txtNode);
      list.appendChild(aList);
    
     aList.addEventListener('click', function(){
         aList.style.textDecoration ='line-through'
     })
     

     aList.addEventListener('dblclick', function(){
      aList.removeChild(txtNode)
     })
     
}
