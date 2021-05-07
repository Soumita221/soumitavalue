<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>News</title>
    <link rel="stylesheet" href="./custom.css"/>
  </head>
  <body>
    <div class="container">
<div class="row1">
<p style="margin-left:40px">
  <span style="font-size:20px"><strong><a href="index.php">Hacker News</a>&nbsp; &nbsp; &nbsp;</strong></span><span class="tab"><a href="index.php">News</a>&nbsp; </span><span style="font-size:16px">&nbsp;|</span><span class="tab">&nbsp; &nbsp;<a href="index.php?p=analytics">Analytics</a>&nbsp; &nbsp;</span><span style="font-size:16px">|&nbsp;</span><span class="tab"> &nbsp;<a href="index.php?p=notes">Notes</a>&nbsp; &nbsp;</span><span style="font-size:16px">|</span><span class="tab">&nbsp; &nbsp;<a href="index.php?p=submit">Submit</a></span></p>
</div>
<?php
if (isset($_GET['p'])) {
include($_GET['p'] . ".php");
} else {
include("home.php");
}
?>


</div>

    <script src="./custom.js"></script>
    <script>
     
</script>
  </body>
</html>
