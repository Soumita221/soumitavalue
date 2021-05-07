<div class="row2">
<form onsubmit="addEntry(event)" >
<textarea name="cmt" id="cmt" class="cmt" rows="4" cols="50" placeholder="Enter what you want to note down....">
</textarea><br>
 <button class="submit">
  Submit
 </button>
</form>
</div>
<hr class="comment_hr">
<div class="row2">
<h2 id="heading"> </h2>
<div class="row2">
    
  <div id="comment_area"></div>
</div></div>
<script src="./custom.js"></script>
<script>
addEntry = (e) => {
  e.preventDefault()
  let entries = []
  let cmt =  document.getElementById("cmt").value
  var id= localStorage.getItem('id')
  var cmt_ls = "cmt_ls"+id
  let timestamp = Date.now(); 
  var cmt_ls_time="cmt_ls_time"+id
  if(localStorage.getItem(cmt_ls)){
    entries = JSON.parse(localStorage.getItem(cmt_ls)) 
    entries.push(cmt)
    localStorage.setItem(cmt_ls,JSON.stringify(entries))
   }else{
    entries.push(cmt)
    localStorage.setItem(cmt_ls,JSON.stringify([cmt]))
   }
   entries=[]
   if(localStorage.getItem(cmt_ls_time)){
    entries = JSON.parse(localStorage.getItem(cmt_ls_time)) 
    entries.push(timestamp)
    localStorage.setItem(cmt_ls_time,JSON.stringify(entries))
   }else{
    entries.push(timestamp)
    localStorage.setItem(cmt_ls_time,JSON.stringify([timestamp]))
   }
   document.getElementById("cmt").value=''
   location.reload()
//  document.getElementById("guestview").innerHTML= html


}

var id= localStorage.getItem('id')
  var cmt_ls = "cmt_ls"+id
  var cmt_ls_time="cmt_ls_time"+id
if(localStorage.getItem(cmt_ls)){
var retrievedData = localStorage.getItem(cmt_ls);
var comment = JSON.parse(retrievedData); 
retrievedData = localStorage.getItem(cmt_ls_time);
var timestmp = JSON.parse(retrievedData); 
var comment_html=''
var curr=Date.now()

var x=comment.length
for(i=0;i<x;i++){ 
    var elsp=timeDifference(timestmp[i],curr);
comment_html+='<p class="cmt_time">'+elsp+'</p>'
comment_html+='<p class="cmts">'+comment[i]+'</p>'
}
if(document.getElementById('comment_area')){
    document.getElementById('comment_area').innerHTML += comment_html;
    document.getElementById('heading').innerHTML = "Comment Section"
  }
}

</script>