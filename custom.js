 
 
 
 // This submission is for assignment for Full Stack Developer Training at Invide 
 // Datetime Of Submission : 07-05-2021, 18:00 hrs
 // Student Name :  Soumita Roy
 // License : MIT






 //Posting data in home page
 //Contains The home page details
 detailsforhomepage();
 function detailsforhomepage(){
 var retrievedData = localStorage.getItem("url_ls");
 var url = JSON.parse(retrievedData);
 retrievedData = localStorage.getItem("title_ls");
 var title = JSON.parse(retrievedData);
 retrievedData = localStorage.getItem("n");
 var n = JSON.parse(retrievedData);
 retrievedData = localStorage.getItem("timestamp_ls");
 var timestamp = JSON.parse(retrievedData);
 var curr = Date.now()
 // html=''
 html = []
 for (i = 0; i < n; i++) {
     var elsp = timeDifference(timestamp[i], curr);
     var comment_count = 0
     var temp = "cmt_ls" + i.toString()
     if (localStorage.getItem(temp)) {
         comment_count = JSON.parse(localStorage.getItem(temp)).length;
     }






     //Code without sorting the elements according to the number of votes
     //    html += '<div class="news_list"><span class="numbering">'+(i+1)+'. </span><span class="uparrow" onclick="increase(this.id)" id='+i+'>&#9650</span><span class="news"><a href="'+url[i]+'"> '+title[i]+'</a> </span> <span class="news_details">('+extractRootDomain(url[i])+')<br></span>'
     //    var v="vote["+i.toString()+"]"
     //    html+= '<span class="news_details pad">'+localStorage.getItem(v)+' votes<span onclick="comments(this.id)" id='+i+'> <a href="comment.html">'+elsp+' </a></span> | <span onclick="comments(this.id)" id='+i+'> <a href="comment.html">'+comment_count +' comments</a> <span  class="yes " id="flag-'+i.toString()+'" onclick="flag('+i+')"> | Flag</span> <span id="unflag-'+i.toString()+'" class=" no" onclick="flag('+i+')"> | UnFlag</span></span>'
     //    html+='</div>'
     //   }
     //   if(document.getElementById('log')){
     //     document.getElementById('log').innerHTML += html;
     //   }







     //Code with sorting the elements according to the number of votes
     //Posts with equal votes matches the time of posting. For equal votes post with recent timing appears on top
     //Starts here
     var v = "vote[" + i.toString() + "]"
     //Checking if time elasped is in days or not
     if((elsp.split(' ')[1])=="days"){
         //If time is in days we check if its less than 7 or not
         //If yes we form the html code for that post otherwise not
        if(parseInt(elsp.split(' ')[0])<=7){
            html[i] = '<div class="news_list"><span class="uparrow cursor" onclick="increase(this.id)" id=' + i + '>&#9650</span><span class="news"><a href="' + url[i] + '"> ' + title[i] + '</a> </span> <span class="news_details">(' + extractRootDomain(url[i]) + ')<br></span><span class="news_details pad">' + localStorage.getItem(v) + ' votes<span onclick="comments(this.id)" id=' + i + '> <a href="comment.html">' + elsp + ' </a></span> | <span onclick="comments(this.id)" id=' + i + '> <a href="comment.html">' + comment_count + ' comments</a> <span  class="cursor" id="flag-' + i.toString() + '" onclick="flag(' + i + ')"> | Flag</span> <span id="unflag-' + i.toString() + '" class="cursor" onclick="flag(' + i + ')"> | UnFlag</span></span></div>'
         }
    }







    //Checking if time is in seconds minutes or hours
    //If yes we form the html code for that post otherwise not
    else if(((elsp.split(' ')[1])=="seconds") || ((elsp.split(' ')[1])=="hours") || ((elsp.split(' ')[1])=="minutes")){
        html[i] = '<div class="news_list"><span class="uparrow cursor" onclick="increase(this.id)" id=' + i + '>&#9650</span><span class="news"><a href="' + url[i] + '"> ' + title[i] + '</a> </span> <span class="news_details">(' + extractRootDomain(url[i]) + ')<br></span><span class="news_details pad">' + localStorage.getItem(v) + ' votes<span onclick="comments(this.id)" id=' + i + '> <a href="comment.html">' + elsp + ' </a></span> | <span onclick="comments(this.id)" id=' + i + '> <a href="comment.html">' + comment_count + ' comments</a> <span  class="cursor" id="flag-' + i.toString() + '" onclick="flag(' + i + ')"> | Flag</span> <span id="unflag-' + i.toString() + '" class="cursor" onclick="flag(' + i + ')"> | UnFlag</span></span></div>'
    }
    // If time is in months or years we donot display the posts
    // Thus displaying code only for a week

 }





 //Sorting the votes and side by side the post it accompanies
 //Made use of bubble sort for sorting
 var v=[]
 for(i=0;i<n;i++){
    var vtemp = "vote[" + i.toString() + "]"
    v.push(parseInt(localStorage.getItem(vtemp)));
 }
//  console.log(v)
 for (i = 0; i <= n; i++) {
    //  console.log(v);
     //   console.log(parseInt(localStorage.getItem(v)))
     for (j = 0; j <=n; j++) {
         //   console.log(t);
         if (v[i] > v[j]) {
            var t=v[i] ;
            v[i] = v[j];
            v[j]=t;
             var z = html[i];
             html[i] = html[j];
             html[j] = z;
         }
     }
 }
//  console.log(v)

 //Remove for loop to remove the sort by highest vote
 for (i = 0; i < n; i++) {
     if (document.getElementById('log')) {
         document.getElementById('log').innerHTML += '<span class="numbering">' + (i + 1) + '. </span>' + html[i] + '<br>';
     }
 }
 //Ends here






//Adding toogling property to Flag and unflag button
//Flag is active at the beginning whereas unflag is inactive
 for (i = 0; i < n; i++) {
     var z = "unflag-" + i.toString();
     var yold = "flag-" + i.toString();
     var flgvalue = "flg[" + i.toString() + "]";
     var x = document.getElementById(z);
     var y = document.getElementById(yold);
     if (localStorage.getItem(flgvalue) == "0") {
         if (y) {
             y.className += " " + "inline";
             x.className += " " + "none";
         }
     } else {
         if (y) {
             y.className += " " + "none";
             x.className += " " + "inline";
         }
     }

 }
 }




 //Flag function is to do toggling as well as to store the flag properties in localstorage
 //When clicked on flag unflag button appears and flag disapears
 //Thus one user can flag a post only once
 function flag(x) {
     var z = "unflag-" + x.toString();
     var yold = "flag-" + x.toString();
     var flgvalue = "flg[" + x.toString() + "]";
     var x = document.getElementById(z);
     var y = document.getElementById(yold);
     if (localStorage.getItem(flgvalue) == "1") {
         y.style.display = "inline";
         x.style.display = "none"
         localStorage.setItem(flgvalue, 0);
         location.reload();
     } else {
         y.style.display = "none";
         x.style.display = "inline"
         localStorage.setItem(flgvalue, 1);
         location.reload();
     }
 }





//Function to increase the votes when clicked and storing the value in local storage
//This displays the vote count live by reloading the page everytime the vote option is clicked
 function increase(x) {
     var votes = "vote[" + x.toString() + "]"
     var vote_ct = parseInt(localStorage.getItem(votes));
     localStorage.setItem(votes, ++vote_ct);
     console.log(localStorage);
     location.reload();
     // localStorage.votes=z
 }

 function comments(x) {
     localStorage.setItem('id', x)
 }



 //Function to extract the hostname from a given url
 function extractHostname(url) {
     var hname;
     //find & remove protocol and get hostname

     if (url.indexOf("//") > -1) {
         hname = url.split('/')[2];
     } else {
         hname = url.split('/')[0];
     }

     //find & remove port number or ? if any present
     hname = (hname.split(':')[0]).split('?')[0];
     
     return hname;
 }


 //Extracting the root domain from url
 //First the host name is extracted and then the root domain
 function extractRootDomain(url) {
     var domain = extractHostname(url),
         Arr = domain.split('.'),
         arrLen = Arr.length;

     //extracting the root domain here
     //if there is a subdomain 
     if (arrLen > 2) {
         domain = Arr[arrLen - 2] + '.' + Arr[arrLen - 1];
         if (Arr[arrLen - 2].length == 2 && Arr[arrLen - 1].length == 2) {
             domain = Arr[arrLen - 3] + '.' + domain;
         }
     }
     return domain;
 }




 //Function to calculate time differnce between current time and the time it was posted
 function timeDifference(current, previous) {

     var ms_in_Minute = 60 * 1000;
     var ms_in_Hour = ms_in_Minute * 60;
     var ms_in_Day = ms_in_Hour * 24;
     var ms_in_Month = ms_in_Day * 30;
     var ms_in_Year = ms_in_Day * 365;
     var elapsed = previous - current;

     if (elapsed < ms_in_Minute) {
         return Math.round(elapsed / 1000) + ' seconds ago';
     } else if (elapsed < ms_in_Hour) {
         return Math.round(elapsed / ms_in_Minute) + ' minutes ago';
     } else if (elapsed < ms_in_Day) {
         return Math.round(elapsed / ms_in_Hour) + ' hours ago';
     } else if (elapsed < ms_in_Month) {
         return Math.round(elapsed / ms_in_Day) + ' days ago';
     } else if (elapsed < ms_in_Year) {
         return Math.round(elapsed / ms_in_Month) + ' months ago';
     } else {
         return Math.round(elapsed / ms_in_Year) + ' years ago';
     }
 }





 
    //Checks if the length of title is greater than 3 or not
    //If not an alert message is thrown 
    function titleLength(x){
        if(x<=3){
          return false;
        }
        else{
          return true;
        }
      }
      
      //var matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;

      //function checkURL(string){
        //return matcher.test(string);
      //}



      //Checking if the url is valid or not
      // Done by using regex expression
      function checkURL(input) {
        pattern = '^(https?:\\/\\/)?' + // protocol
            '((([a-zA-Z\\d]([a-zA-Z\\d-]{0,61}[a-zA-Z\\d])*\\.)+' + // domain name
            '[a-zA-Z]{2,13})' + // extension
            '|((\\d{1,3}\\.){3}\\d{1,3})' + // OR ip (v4) address
            '|localhost)' + // OR localhost
            '(\\:\\d{1,5})?' + // port
            '(\\/[a-zA-Z\\&\\d%_.~+-:@]*)*' + // path
            '(\\?[a-zA-Z\\&\\d%_.,~+-:@=;&]*)?' + // query string
            '(\\#[-a-zA-Z&\\d_]*)?$'; // fragment locator
        regex = new RegExp(pattern);
        return regex.test(input);
    }

//Sortng votes by no of votes
function sort_by_vote() {
    var retrievedData = localStorage.getItem("n");
    var n = parseInt(JSON.parse(retrievedData)[0]);
    var arr = JSON.parse(localStorage.getItem("url_ls"));
    var h = "";
    for (i = 0; i < n; i++) {
      var dm = extractRootDomain(arr[i]);
      if (a.includes(dm)) {
        continue;
      } else {
        for (j = 0; j < n; j++) {
          var tem = extractRootDomain(arr[j]);
          if (a.includes(tem)) {
            continue;
          } else {
            if (
              parseInt(localStorage.getItem(tem)) >
              parseInt(localStorage.getItem(dm))
            ) {
              dm = tem;
            }
          }
        }
        a.push(dm);
        if (dm) {
          h += "<p>" + dm + ": " + localStorage.getItem(dm) + " votes</p>";
        }
      }
    }
    if (document.getElementById("vote")) {
      document.getElementById("vote").innerHTML += h;
    }
    var x = document.getElementById("vote");
    var y = document.getElementById("spam");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display= "none"
    } else {
      x.style.display = "none";
      x.style.display = "none";
    }
  }






    //Sorting votes by no of flags 
    function sort_by_spam() {
        var retrievedData = localStorage.getItem("n");
        var n = parseInt(JSON.parse(retrievedData)[0]);
        var arr2 = JSON.parse(localStorage.getItem("url_ls"));
        var h = "";
        for (i = 0; i < n; i++) {
          var temp = extractRootDomain(arr2[i]);
          var dm = temp + ".spam"
          if (fa.includes(dm)) {
            continue;
          } else {
            for (j = 0; j < n; j++) {
              var temporary = extractRootDomain(arr2[j]) 
              var tem = temporary + ".spam";
              if (fa.includes(tem)) {
                continue;
              } else {
                if (
                  parseInt(localStorage.getItem(tem)) >
                  parseInt(localStorage.getItem(dm))
                ) {
                  dm = tem;
                }
              }
            }
            fa.push(dm);
            if (dm) {
              var p=(dm.split('.').slice(0, -1));
              var name_of_domain=""
              for(k=0;k<p.length;k++){
                  if((k+1)!=p.length){
                  name_of_domain+=p[k]+"."
                  }
                  else{
                    name_of_domain+=p[k]
                  }
              }
              h += "<p>" + name_of_domain + "</p>"//": " + localStorage.getItem(dm) + " Flagged";
            }
          }
        }
        if (document.getElementById("spam")) {
          document.getElementById("spam").innerHTML += h;
        }
        var x = document.getElementById("spam");
        var y = document.getElementById("vote");
        if (x.style.display === "none") {
          x.style.display = "block";
          y.style.display= "none"
        } else {
          x.style.display = "none";
          x.style.display = "none";
        }
      }

      



      //Function to delete the comments on click of the delete button of the comments 
      function del(i, j) {
        var cm = "cmt_ls" + i.toString();
        var cm_t = "cmt_ls_time" + i.toString();
        retData = JSON.parse(localStorage.getItem(cm));
        rettimeData = JSON.parse(localStorage.getItem(cm_t));
        var a = [];
        var tme = [];
        for (p = 0; p < n; p++) {
          if (retData[p] == retData[j]) {
            continue;
          } else {
            a.push(retData[p]);

            tme.push(rettimeData[p]);
          }
        }
        console.log(tme);
        localStorage.removeItem(cm);
        localStorage.removeItem(cm_t);
        entries = [];
        ent = [];
        for (p = 0; p < n; p++) {
          if (a[p]) {
            if (localStorage.getItem(cm)) {
              entries = JSON.parse(localStorage.getItem(cm));
              entries.push(a[p]);
              localStorage.setItem(cm, JSON.stringify(entries));
            } else {
              entries.push(a[p]);
              localStorage.setItem(cm, JSON.stringify([a[p]]));
            }
            if (localStorage.getItem(cm_t)) {
              ent = JSON.parse(localStorage.getItem(cm_t));
              ent.push(tme[p]);
              localStorage.setItem(cm_t, JSON.stringify(ent));
            } else {
              ent.push(tme[p]);
              localStorage.setItem(cm_t, JSON.stringify([tme[p]]));
            }
          }
        }
        location.reload();
      }




      //Function to delete the comments on click of the delete button of the comments 
      //Present in notes page as well as comments page
      function del(i, j) {
        var cm = "cmt_ls" + i.toString();
        var cm_t = "cmt_ls_time" + i.toString();
        retData = JSON.parse(localStorage.getItem(cm));
        //console.log(retData)
        rettimeData = JSON.parse(localStorage.getItem(cm_t));
        var a = [];
        var tme = [];
        var n= retData.length;
        for (p = 0; p < n; p++) {
          if (retData[p] == retData[j]) {
            continue;
          } else {
            a.push(retData[p]);
            console.log(a)
            tme.push(rettimeData[p]);
          }
        }
        console.log(tme);
        localStorage.removeItem(cm);
        localStorage.removeItem(cm_t);
        entries = [];
        ent = [];
        
        for (p = 0; p < n; p++) {
          if (a[p]) {
            if (localStorage.getItem(cm)) {
              entries = JSON.parse(localStorage.getItem(cm));
              entries.push(a[p]);
              localStorage.setItem(cm, JSON.stringify(entries));
            } else {
              entries.push(a[p]);
              localStorage.setItem(cm, JSON.stringify([a[p]]));
            }
            if (localStorage.getItem(cm_t)) {
              ent = JSON.parse(localStorage.getItem(cm_t));
              ent.push(tme[p]);
              localStorage.setItem(cm_t, JSON.stringify(ent));
            } else {
              ent.push(tme[p]);
              localStorage.setItem(cm_t, JSON.stringify([tme[p]]));
            }
          }
        }
        location.reload();
      }