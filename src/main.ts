import './style.css'

const employees: string[] = []

employees[0] = 'Rivest, Ron'
employees[1] = 'Shamir,Adi'
employees[42] = 'Adleman, Leonard'

employees.push('Perry, Jason')
console.log(employees)

const colors = ['red', 'green', 'blue']
//for(let index = 0; index <colors.length; index ++)
//{
//const color = colors[]
//console.log(color)
//}

colors.forEach((color) => console.log(color))

type PrintItFunction = (value: number) => number

function printIt(numbers: number[], func: PrintItFunction) {
  for (let index = 0; index < numbers.length; index++) {
    const value = numbers[index]
    const result = func(value)

    console.log(`Turned ${value} into ${result}`)
  }
}

type Person = {
  name: string
  birthDate: string
  delayMilliseconds: number
}

const people: Person[] = [
  {
    name: 'Alan Turing',
    birthDate: 'June 23, 1912',
    delayMilliseconds: 1100,
  },
  {
    name: 'Ada Lovelace',
    birthDate: 'December 10, 1815',
    delayMilliseconds: 1500,
  },
  {
    name: 'Grace Hopper',
    birthDate: 'December 9, 1906',
    delayMilliseconds: 2000,
  },
  {
    name: 'Donald Knuth',
    birthDate: 'January 10,1938',
    delayMilliseconds: 2500,
  },
]
