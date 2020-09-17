// Function 4: convert celsius into fahrenheit into celsius,
// and vice versa. Function will take two parameters that will be  a temp either fahrenheit or celsius,
// up to 2 decimal places. The second argument will be either the letter ‘c’ or the letter ‘f’ 
// to state whether the value given is starting in celsius or in fahrenheit. 
// Convert the temp to the opposite unit, and return the value.  (35.6, ‘c’)
// T(°C) = (T(°F) - 32) / 1.8
// T(°F) = T(°C) × 1.8 + 32
const celciusToFaren = function(temp, conv) {
    
    if (conv === 'F') {
            return (((temp -32) / 1.8) + ` C`);
    } else if (conv === 'C') {
            return (((temp * 1.8) + 32) + ` F`);
    }
        
}
     console.log(celciusToFaren (77,'F'))