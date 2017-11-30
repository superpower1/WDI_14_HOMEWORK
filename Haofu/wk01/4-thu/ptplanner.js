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
* uniq is a function to delete duplicate elements in a array, be careful because it need to sort the Array
* param: arr
*/
uniq = (arr) => {
  return arr.sort().filter(function(item, pos, ary) {
      return !pos || item != ary[pos - 1];
  })
}

(() => {
  let AllStations = [];
  AllStations = uniq(AllStations.concat(AlameinLine, GlenWaverlyLine, SandringhamLine));

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

  // divide each train line into two sub line
  let AlameinLine1 = AlameinLine.slice(0, AlameinLine.indexOf("Richmond")+1);

  let AlameinLine2 = AlameinLine.slice(AlameinLine.indexOf("Richmond"));

  let GlenWaverlyLine1 = GlenWaverlyLine.slice(0, GlenWaverlyLine.indexOf("Richmond")+1);

  let GlenWaverlyLine2 = GlenWaverlyLine.slice(GlenWaverlyLine.indexOf("Richmond"));

  let SandringhamLine1 = SandringhamLine.slice(0, SandringhamLine.indexOf("Richmond")+1);

  let SandringhamLine2 = SandringhamLine.slice(SandringhamLine.indexOf("Richmond"));

  // console.log(AlameinLine1);
  // console.log(AlameinLine2);
  // console.log(GlenWaverlyLine1);
  // console.log(GlenWaverlyLine2);
  // console.log(SandringhamLine1);
  // console.log(SandringhamLine2);
  let allLines = {
    "AlameinLine1" : AlameinLine1,
    "AlameinLine2" : AlameinLine2,
    "GlenWaverlyLine1" : GlenWaverlyLine1,
    "GlenWaverlyLine2" : GlenWaverlyLine2,
    "SandringhamLine1" : SandringhamLine1,
    "SandringhamLine2" : SandringhamLine2
  };

  if (orig === dest) {
    console.log("You don't need to travel at all!");
    document.querySelector('.result').innerHTML = "You don't need to travel at all!";
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
      let firstHalf = buildRoute(origLine, orig, "Richmond");
      let secondHalf = buildRoute(destLine, "Richmond", dest);
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
  let result = [];
  let start = route.indexOf(orig);
  let end = route.indexOf(dest);

  if (start>end) {
    result = route.slice(end, start+1).reverse();
  } else {
    result = route.slice(start, end+1);
  }
  return result;
}

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
