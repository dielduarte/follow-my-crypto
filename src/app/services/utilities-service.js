export function CurrencyFormat(number) {
    var decimalNumbers = 2,
        decimalSeparator = ",",
        numberSeparator = ".",
        signal = number < 0 ? "-" : "",
        integerNumber = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decimalNumbers))),
        j = (j = integerNumber.length) > 3 ? j % 3 : 0;
    return signal + (j ? integerNumber.substr(0, j) + numberSeparator : "") + integerNumber.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + numberSeparator) + (decimalNumbers ? decimalSeparator + Math.abs(number - integerNumber).toFixed(decimalNumbers).slice(2) : "");
};