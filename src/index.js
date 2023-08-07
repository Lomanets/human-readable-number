module.exports = function toReadable (number) {
    const oneNum = [
        "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", 
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
      ];
    
      const twoNum = [
        "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
      ];

      let numberStr = String(number);
      let out = "";
    
      if (number === 0) return "zero";

      if (number < 20) {
        let out = oneNum[number];
        return out;
      }


      if (numberStr.length === 2) {
        out = `${twoNum[numberStr[0]]} ${oneNum[numberStr[1]]}`;
        return out.trim();
      }

      if (numberStr.length === 3) {
        if (numberStr[1] === "0" && numberStr[2] === "0") {
            return `${oneNum[numberStr[0]]} hundred`;
          } else {
            return `${oneNum[numberStr[0]]} hundred ${toReadable(Number(numberStr[1] + numberStr[2]))}`.trim();
          }
      }

}
