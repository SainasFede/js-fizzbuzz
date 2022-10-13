const container = document.querySelector('.container');
const limitBox = 100
const fizz = 'Fizz'
const buzz = 'Buzz'
const fizzBuzz = 'FizzBuzz'


for(let i = 1; i <= limitBox; i++){
  const box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = i;
  container.append(box);

  if(!(i % 3)){
    box.classList.add('yellow')
    box.innerHTML = fizz
  }if(!(i % 5)){
    box.classList.add('blue')
    box.innerHTML = buzz
  }if(!(i % 15)){
    box.classList.add('green')
    box.innerHTML = fizzBuzz
  }
}












