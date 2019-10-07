//document.write("Where is my JS code");
//window.alert(5 + 6);
//window.alert('5 + 6');
//document.write('<h1>A heading</h1>');
//document.write('<p>A sentence.</p>');
//const x = "web";
//const y = "mapping";
//const out = x + y;
//document.write(out);
 //A prompt box is used to prompt users to input a value before entering a page.
//user_name = window.prompt("Please enter your name", "Type your name here");
 //document.write(user_name);
 var webmaps =
   [
     ["Yelp",
      "https://www.yelp.com/",
      "The primary purpose of this site is to help provide the users with specific information that they are searching for. The particular intrest the user has in mind such as, hamburgers in San Marcos, will provide a list of every hamburger joint in town and the specific map location along with this business. Yelp uses GIS techniques by storing data and using search queries to limit your search results to what you are looking for. "
    ],
    ["Craigslist",
     "https://sanmarcos.craigslist.org/",
     "Craigslist, this as well as yelp is another site to provide users with the information they desire to search for by using queries to define the search results. The website uses a number of different filters to refine the results to exactly what the user intends to find. This website allows individuals to find search results easily but lacks a proper map as well."]
   ];
 function welcome()
 {
   let a = "Please enter your name.";
   let b = "Type your name here.";
   // A prompt box is used to prompt users to input a value before entering a page.
   user_name = window.prompt(a, b);
   message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
   return message
 }

 function webmap_table()
 {
   document.write("<table width=100%>");
   for (var row=0; row < webmaps.length; row++)
 {
   document.write("<tr>");
   for (var column=0; column < webmaps[0].length; column++)
 {
    if (column < 2){
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    else{
      document.write("</tr>");
      document.write("<tr>");
      document.write("<td colspan='2'>" + webmaps[row][column] + "<p></td>");
    }
  }
  document.write("</tr>");
}
document.write("</table>");
}
//x = 22;
//const y = 33;
//document.writeln(x + y);
//document.writeln("<br>");
//document.writeln(x += 33);
//document.writeln("<button onclick='condition()'>Conditional Test</button>")
//function condition ()
//{
  //x = confirm("Are you sure you want to proceed?");
  //if(x)
  //{
    //document.writeln("You chose Okay!");
  //}
  //else
  //{
    //document.writeln("You chose Cancel!");
  //}
