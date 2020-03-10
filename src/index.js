const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
const morse = [
    {
        sign: 'a',
        value: '0000001011'
    },
    {
        sign: 'b',
        value: '0011101010'
    },
    {
        sign: 'c',
        value: '0011101110'
    },
    {
        sign: 'd',
        value: '0000111010'
    },
    {
        sign: 'e',
        value: '0000000010'
    },
    {
        sign: 'f',
        value: '0010101110'
    },
    {
        sign: 'g',
        value: '0000111110'
    },
    {
        sign: 'h',
        value: '0010101010'
    },
    {
        sign: 'i',
        value: '0000001010'
    },
    {
        sign: 'j',
        value: '0010111111'
    },
    {
        sign: 'k',
        value: '0000111011'
    },
    {
        sign: 'l',
        value: '0010111010'
    },
    {
        sign: 'm',
        value: '0000001111'
    },
    {
        sign: 'n',
        value: '0000001110'
    },
    {
        sign: 'o',
        value: '0000111111'
    },
    {
        sign: 'p',
        value: '0010111110'
    },
    {
        sign: 'q',
        value: '0011111011'
    },
    {
        sign: 'r',
        value: '0000101110'
    },
    {
        sign: 's',
        value: '0000101010'
    },
    {
        sign: 't',
        value: '0000000011'
    },
    {
        sign: 'u',
        value: '0000101011'
    },
    {
        sign: 'v',
        value: '0010101011'
    },
    {
        sign: 'w',
        value: '0000101111'
    },
    {
        sign: 'x',
        value: '0011101011'
    },
    {
        sign: 'y',
        value: '0011101111'
    },
    {
        sign: 'z',
        value: '0011111010'
    },
    {
        sign: '1',
        value: '1011111111'
    },
    {
        sign: '2',
        value: '1010111111'
    },
    {
        sign: '3',
        value: '1010101111'
    },
    {
        sign: '4',
        value: '1010101011'
    },
    {
        sign: '5',
        value: '1010101010'
    },
    {
        sign: '6',
        value: '1110101010'
    },
    {
        sign: '7',
        value: '1111101010'
    },
    {
        sign: '8',
        value: '1111111010'
    },
    {
        sign: '9',
        value: '1111111110'
    },
    {
        sign: '0',
        value: '1111111111'
    },
    {
        sign: ' ',
        value: '**********'
    },
  ]
  
  function decode(expr) {
    let result = ''
    let str = expr
    let sign
    let counter = 0
    for(let i = 0; i < expr.length/ 10; i++){
        sign = str.slice(counter,counter + 10)

        for(let k = 0; k < morse.length; k++){
            if(morse[k].value === sign){
              result += morse[k].sign
              break
            }
        }
        counter +=10
    }
  
    return result
  }


module.exports = {
    decode
}