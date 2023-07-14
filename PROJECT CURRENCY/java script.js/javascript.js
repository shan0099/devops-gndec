javascript
function convertCurrency() {
    var amount = document.getElementById("amount").value;
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;

    var conversionRate = getConversionRate(fromCurrency, toCurrency);
    var convertedAmount = amount * conversionRate;

    var result = amount + " " + fromCurrency + " = " + convertedAmount + " " + toCurrency;
    document.getElementById("result").innerText = result;
}

function getConversionRate(fromCurrency, toCurrency) {
    var conversionRates = {
        "USD": {
            "USD": 1,
            "EUR": 0.85,
            "GBP": 0.72
        },
        "EUR": {
            "USD": 1.18,
            "EUR": 1,
            "GBP": 0.85
        },
        "GBP": {
            "USD": 1.39,
            "EUR": 1.17,
            "GBP": 1
        }
    };

    return conversionRates[fromCurrency][toCurrency];
}
