function swapCase(str) 
{
    return str.split('')

      .map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase())

      .join('');
  }
  
  const input = 'The Quick Brown Fox';

  const output = swapCase(input);
  
  console.log(output); 