<form class="submit_post" onsubmit="addEntry(event)" >
<input type="text" class="title" name="title" id="title" placeholder="Enter The title of post"/>
<input type="text"  class="url" name="url" id="url" placeholder="Enter The URL of post"/>
 <button class="add">
  Add
 </button>
</form>
<script>
    function UrlExists(url) {
    var http = new XMLHttpRequest();
    try{
        http.open('HEAD', url, false);
        http.send();
    }
    catch (error) {
        return(false)
    }
    if (http.status != 404)
        return(true)
    else
        return(false)
}
addEntry = (e) => {
  e.preventDefault()
  
  let entries = []
  let title =  document.getElementById("title").value
  let url =  document.getElementById("url").value
  if(UrlExists(url)){
  if(localStorage.getItem('title_ls')){
    entries = JSON.parse(localStorage.getItem('title_ls')) 
    entries.push(title)
    localStorage.setItem('title_ls',JSON.stringify(entries))
   }else{
    entries.push(title)
    localStorage.setItem('title_ls',JSON.stringify([title]))
   }
   entries = []
  

  if(localStorage.getItem('url_ls')){
    entries = JSON.parse(localStorage.getItem('url_ls')) 
    entries.push(url)
    localStorage.setItem('url_ls',JSON.stringify(entries))
   }else{
    entries.push(url)
    localStorage.setItem('url_ls',JSON.stringify([url]))
   }

   entries = []
  let timestamp = Date.now(); 

  if(localStorage.getItem('timestamp_ls')){
    entries = JSON.parse(localStorage.getItem('timestamp_ls')) 
    entries.push(timestamp)
    localStorage.setItem('timestamp_ls',JSON.stringify(entries))
   }else{
    entries.push(timestamp)
    localStorage.setItem('timestamp_ls',JSON.stringify([timestamp]))
   }
   if(localStorage.getItem('n')){
   var nm="vote"+localStorage.getItem('n')
    localStorage.setItem(nm,0)
   }
   else{
    localStorage.setItem('vote[0]',0)
   }
   localStorage.setItem('n',JSON.stringify([entries.length]))
  
  window.location.href = "index.php";
//  document.getElementById("guestview").innerHTML= html
  }
else{
    document.getElementById("title").value=''
    document.getElementById("url").value=''
    alert("Enter valid URL")
}
}
</script>
