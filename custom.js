 
 // This submission is for assignment for Full Stack Developer Training at Invide 
 // Datetime Of Submission : 07-05-2021, 18:00 hrs
 // Student Name :  Soumita Roy
 // License : MIT
     

//Posting data in home page
    //Contains The home page details
    
    var retrievedData = localStorage.getItem("url_ls");
    var url = JSON.parse(retrievedData); 
    retrievedData = localStorage.getItem("title_ls");
    var title = JSON.parse(retrievedData);
    retrievedData = localStorage.getItem("n");
    var n = JSON.parse(retrievedData); 
    retrievedData = localStorage.getItem("timestamp_ls");
    var timestamp = JSON.parse(retrievedData);
    var curr =Date.now()
    html=''
  for(i=0;i<n;i++){
    var elsp=timeDifference(timestamp[i],curr);
    var comment_count=0
    var temp="cmt_ls"+i.toString()
    if(localStorage.getItem(temp)){
        comment_count=JSON.parse(localStorage.getItem(temp)).length;
    }
   html += '<div class="news_list"><span class="numbering">'+(i+1)+'. </span><span class="uparrow" onclick="increase(this.id)" id='+i+'>&#9650</span><span class="news"><a href="'+url[i]+'"> '+title[i]+'</a> </span> <span class="news_details">('+extractRootDomain(url[i])+')<br></span>'
//    var temp=localStorage.getItem(nm)
   var v="vote["+i.toString()+"]"
   html+= '<span class="news_details pad">'+localStorage.getItem(v)+' votes<span onclick="comments(this.id)" id='+i+'> <a href="index.php?p=comment">'+elsp+' </a></span> | <span onclick="comments(this.id)" id='+i+'> <a href="index.php?p=comment">'+comment_count +' comments</a> <span class="'+i.toString()+' flag" id="flag'+i.toString()+'" onclick="flag(this.class)"> | Flag</span> <span class="'+i.toString()+' unflag" id="unflag'+i.toString()+'" onclick="unflag(this.class)"> | UnFlag</span></span>'
   html+='</div>'
   var uf="unflag"+i.toString();
   var fl="flag"+i.toString();
//    document.getElementById(uf).style.display="none";
//    document.getElementById(fl).style.display="inline";
  }
  if(document.getElementById('log')){
    document.getElementById('log').innerHTML += html;
  }
  

  function flag(x){
    var z="unflag"+x;
    var yold="flag"+x
    var x = document.getElementById(z);
    var y = document.getElementById(yold);
    if (x.style.display === "none"){
        x.style.display = "inline";
        y.style.display = "none"
    } 
    else {
        x.style.display = "none";
        y.style.display = "inline"
    }
  }
  function unflag(x){
    var z="flag"+x;
    var yold="unflag"+x
    var x = document.getElementById(z);
    var y = document.getElementById(yold);
    if (x.style.display === "none"){
        x.style.display = "inline";
        y.style.display = "none"
    } 
    else {
        x.style.display = "none";
        y.style.display = "inline"
    }
  }
function increase(x){
    var votes="vote["+x.toString()+"]"
    var vote_ct = parseInt(localStorage.getItem(votes));
    localStorage.setItem(votes, ++vote_ct);
    console.log(localStorage);
    location.reload();
    // localStorage.votes=z
}
function comments(x){
    localStorage.setItem('id',x)
}
function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

      function extractRootDomain(url) {
    var domain = extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length;

    //extracting the root domain here
    //if there is a subdomain 
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
        //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
        if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
            //this is using a ccTLD
            domain = splitArr[arrLen - 3] + '.' + domain;
        }
    }
    return domain;
}

function timeDifference( current,previous) {
    
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;
    var elapsed =  previous- current;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        return  Math.round(elapsed/msPerDay) + ' days ago';   
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + ' months ago';   
    }

    else {
        return Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}
