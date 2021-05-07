<div class="row2">
<div id="all_notes"></div>
</div>

<script src="./custom.js"></script>
<script>
var comment_html=''
var retrievedData = localStorage.getItem("n");
var no_of_items = parseInt(JSON.parse(retrievedData)[0]); 
var data=JSON.parse(localStorage.getItem('title_ls'));
var url_data=JSON.parse(localStorage.getItem('url_ls'));
for(i=0;i<=no_of_items;i++){
    var cmt_ls = "cmt_ls"+i.toString()
    var cmt_ls_time="cmt_ls_time"+i.toString()
    var comment = JSON.parse(retrievedData); 
    retrievedData = localStorage.getItem(cmt_ls_time);
    var timestmp = JSON.parse(retrievedData); 
    if(localStorage.getItem(cmt_ls)){
        var retrievedData = localStorage.getItem(cmt_ls);
        var comment = JSON.parse(retrievedData); 
        var x=comment.length
        var t=data[i]
        var url=url_data[i]
        for(j=0;j<x;j++){
            var elsp=timeDifference(timestmp[j],curr);
            
            comment_html+='<p class="cmt_time">'+elsp+ ' &nbsp;&nbsp;&nbsp;| <span class="title_all_cmts">on: <a href="'+url+'">' + t +'</a> </span></p>'
            comment_html+='<p class="cmts">'+comment[j]+'</p><span class="cmt_time" onclick="del('+i+','+j+')">Delete</span><hr>'
        }
        
    }
}
if(document.getElementById('all_notes')){
    document.getElementById('all_notes').innerHTML += comment_html;
}
function del(i,j){
    var cm="cmt_ls"+i.toString();
    var cm_t="cmt_ls_time"+i.toString()
    retData = JSON.parse(localStorage.getItem(cm));
    rettimeData = JSON.parse(localStorage.getItem(cm_t));
    var a=[]
    var tme=[]
    for(p=0;p<n;p++){
        if(retData[p]==retData[j]){
            continue;
        }
        else{
            a.push(retData[p])
            
            tme.push(rettimeData[p])
        }
    }
    console.log(tme)
    localStorage.removeItem(cm)
    localStorage.removeItem(cm_t)
    entries=[]
    ent=[]
    for(p=0;p<n;p++){
        if(a[p]){
            if(localStorage.getItem(cm)){
                entries = JSON.parse(localStorage.getItem(cm)) 
                entries.push(a[p])
                localStorage.setItem(cm,JSON.stringify(entries))
            }
            else{
                entries.push(a[p])
                localStorage.setItem(cm,JSON.stringify([a[p]]))
           }
           if(localStorage.getItem(cm_t)){
                ent = JSON.parse(localStorage.getItem(cm_t)) 
                ent.push(tme[p])
                localStorage.setItem(cm_t,JSON.stringify(ent))
            }
            else{
                ent.push(tme[p])
                localStorage.setItem(cm_t,JSON.stringify([tme[p]]))
           }
        }   
    }
    location.reload()
}
</script>