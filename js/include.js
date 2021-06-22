const {odd,even} = require('./hellow');

function checkOddOrEven(num)
{
    if(num % 2 )
    {
        return odd;
    }else
        return even;
}

module.exports = checkOddOrEven;