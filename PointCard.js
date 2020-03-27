const input = ['2', '5 10000', '12 10000']
function foo(input_lines) {

  if(input_lines[0] === 0){
    return null
  } 
  let answer = 0
  let input = input_lines
  input.splice(0, 1)

  for(i = 0; i < input.length; i++) {
      const subStr = input[i].split(" ")
      if(subStr[0].includes(5)){
          answer = Math.floor(answer + subStr[1] * 0.05)
      }
      else if(subStr[0].includes(3)){
        answer = Math.floor(answer + subStr[1] * 0.03)
      } else {
      answer = Math.floor(answer + subStr[1] * 0.01)
      }
  }
  console.log(answer);
}

foo(input)