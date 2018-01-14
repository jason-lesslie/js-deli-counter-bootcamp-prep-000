katzDeli = [];
otherDeli = ["Steven", "Blake", "Avi"];
takeANumber(katzDeli, 'Ada') //outputs: "Welcome, Ada. You are number 1 in line."
takeANumber(otherDeli, 'Grace'); //outputs: "Welcome, Grace. You are number 4 in line."

function takeANumber(katzDeliLine, customerName) {
  var nextLinePlace = katzDeliLine.length + 1;
  katzDeliLine[nextLinePlace - 1] = customerName
  var outputString = "Welcome, " + customerName + ". You are number " + nextLinePlace + " in line.";
  return outputString
}

const deliLine = ["Steven", "Blake", "Avi"];
nowServing(deliLine); //outputs: "Currently serving Steven."
nowServing([]);  //outputs: "There is nobody waiting to be served!"

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var outputString =  "Currently serving " + katzDeliLine.slice(0,1) + ".";
    katzDeliLine.shift();
    return outputString
  } else if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
}

currentLine([]); //outputs: "The line is currently empty."
currentLine(["Bill", "Jane", "Ann"]); //outputs: "The line is currently: 1. Bill, 2. Jane, 3. Ann"

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var outputString = "The line is currently:";
    for (let i=0; i < katzDeliLine.length; i++){
      outputString += " " + parseInt(i+1) + ". " + katzDeliLine[i] + ",";
    }
  outputString = outputString.slice(0, outputString.length - 1);
  } else if (katzDeliLine.length === 0) {
    var outputString = "The line is currently empty.";
  }
  return outputString
}
