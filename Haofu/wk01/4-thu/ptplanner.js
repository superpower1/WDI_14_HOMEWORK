// Melbourne Public Transport Journey Planner
//
// There are 3 train lines:
//
// The Alamein line has the following stops: Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, and Glenferrie.
//
// The Glen Waverly line has the following stops: Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong and Tooronga.
//
// The Sandringham line has the following stops: Southern Cross, Richmond, South Yarra, Prahran, and Windsor.

const AlameinLine = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
const GlenWaverlyLine = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
const SandringhamLine = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

/*
* Init
*/
(() => {
  let AllStations = [];
  AllStations = AllStations.concat(AlameinLine, GlenWaverlyLine, SandringhamLine).sort().filter(function(item, pos, ary) {
      return !pos || item != ary[pos - 1];
  });

  let stationList = '';
  for (var i = 0; i < AllStations.length; i++) {
    stationList += "<option>"+AllStations[i]+"</option>";
  }
  document.querySelector('.orig').innerHTML = stationList;
  document.querySelector('.dest').innerHTML = stationList;
})();

document.querySelector('button').addEventListener("click", () => {
  let orig = document.querySelector('.orig').value;
  let dest = document.querySelector('.dest').value;
  // alert(orig + " " + dest);

  let allLines = {
    "AlameinLine" : AlameinLine,
    "GlenWaverlyLine" : GlenWaverlyLine,
    "SandringhamLine" : SandringhamLine
  };

  if (orig === dest) {
    console.log("You don't need to travel at all!");
    document.querySelector('.result').innerHTML = "<p>You don't need to travel at all!</p>";
  } else {

    let origLine, destLine;
    if ((AlameinLine.indexOf(orig)>=0)&&(AlameinLine.indexOf(dest)>=0)) {
      printRoute(buildRoute(AlameinLine, orig, dest));
    } else if ((GlenWaverlyLine.indexOf(orig)>=0)&&(GlenWaverlyLine.indexOf(dest)>=0)) {
      printRoute(buildRoute(GlenWaverlyLine, orig, dest));
    } else if ((SandringhamLine.indexOf(orig)>=0)&&(SandringhamLine.indexOf(dest)>=0)) {
      printRoute(buildRoute(SandringhamLine, orig, dest));
    } else {
      for (var key in allLines) {
        if (allLines[key].indexOf(orig)>=0) origLine = allLines[key];
        if (allLines[key].indexOf(dest)>=0) destLine = allLines[key];
      }
      let intersections = findIntersection(origLine, destLine);
      let firstHalf = buildRoute(origLine, orig, intersections[0]);
      let secondHalf = buildRoute(destLine, intersections[0], dest);
      let combineRoute = firstHalf.concat(secondHalf).filter(function(item, pos, ary) {
          return !pos || item != ary[pos - 1];
      });
      printRoute(combineRoute);
    }
  }

});

/* buildRoute takes an array and a start point and an end point, returns a new array
* param: route
* param: orig
* param: dest
*/
buildRoute = (route, orig, dest) => {
  let start = route.indexOf(orig);
  let end = route.indexOf(dest);

  if (start>end) {
    return route.slice(end, start+1).reverse();
  } else {
    return route.slice(start, end+1);
  }
}

/*
* printRoute takes a route and print it out to the page
* param route
*/
printRoute = (route) => {

  // Melbourne Central -----> Parliament -----> Richmond
  // 2 stops total

  let result = "";
  for (var i = 0; i < route.length; i++) {
    if (i>=route.length-1) {
      result += route[i]
    } else {
      result += route[i] + " -----> ";
    }
  }
  console.log(result);
  console.log(`${route.length-1} stops total`);
  document.querySelector('.result').innerHTML = `
    <p>
      ${result} </br>
      ${route.length-1} stops total
    </p>
    `;
}

/*
* findIntersection takes two array of stations and return an intersection array with all the intersections
* param: route1
* param: route2
*/
findIntersection = (route1, route2) => {
  return intersectionArr = route1.filter(function(val) {
    return route2.indexOf(val) != -1;
  });
}
