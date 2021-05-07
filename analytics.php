<div class="row2">
<button onClick="sort_by_vote()" id="vote_show_hide" >Sort By Votes</button>
<button onClick="sort_by_spam()" id="spam_show_hide"> Sort by Spam</button>
<br>
<div id="vote"></div>
<div id="spam"></div>
</div>
<script src="./custom.js"></script>
<script>
var retrievedData = localStorage.getItem("n");
var n = parseInt(JSON.parse(retrievedData)[0]); 
var arr=JSON.parse(localStorage.getItem('url_ls'))
for(i=0;i<n;i++){
    var dm=extractRootDomain(arr[i])
    localStorage.removeItem(dm)
}
for(i=0;i<n;i++){
    var vt="vote["+i.toString()+"]"
    var val=0
    if(localStorage.getItem(vt)){
        var dm=extractRootDomain(arr[i])
        val=parseInt(localStorage.getItem(vt))
        if(localStorage.getItem(dm)){
            entries = parseInt(localStorage.getItem(dm))
            var temp=entries+val
            // console.log(temp)
            localStorage.setItem(dm,temp)
        }
        else{
            localStorage.setItem(dm,val)
        }
    }


}
var a=[]
function sort_by_vote(){
    var retrievedData = localStorage.getItem("n");
    var n = parseInt(JSON.parse(retrievedData)[0]); 
    var arr=JSON.parse(localStorage.getItem('url_ls'));
    var h=''
    for(i=0;i<n;i++){
        var dm=extractRootDomain(arr[i])
        if(a.includes(dm)){
            continue;
        }
        else{
            
            for(j=0;j<n;j++){
                var tem=extractRootDomain(arr[j])
                if(a.includes(tem)){
                    continue;
                }
                else{
                    if(parseInt(localStorage.getItem(tem))>parseInt(localStorage.getItem(dm))){
                        dm=tem;
                    }
                }
            }
            a.push(dm)
            if(dm){
                h+='<p>'+dm+ ': '+localStorage.getItem(dm)+' votes</p>'
            }
        }
    }
    if(document.getElementById('vote')){
        document.getElementById('vote').innerHTML += h;
    }
    var x = document.getElementById("vote");
    if (x.style.display === "none"){
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
    
}


</script>