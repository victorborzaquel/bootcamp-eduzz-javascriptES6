function multiply(a, b) {
  return a * b
}

function sumRest(...args) {
  return args.reduce((acc, curr) => acc + curr, 0)
}

function sumSpread(...args) {
  return sumSpread(...args)
}

const propName = 'prop'

const obj = {
  multiply,
  sumRest,
  sumSpread,
  sum(a, b) {
    return a + b
  },
  [propName + '_key']: 'prop value',
}

console.log(obj)


// Clone Object
const obj1 = {
  prop: 123,
  subObj: {
    prop: 123
  }
}

const objClone = {...obj1, subObj: {...obj1.subObj}}

objClone.subObj.prop = 456

console.log(obj1)


// Não muda com destruct
const obj2 = {prop: 'name'}
let {prop} = obj2

prop = 'last name'
console.log(obj2.prop)

// Parameter Array destruct and Default values
function sumArray([a, b] = [0, 0]) {
  return a + b
}

function sumObj({a = 0, b = 0}) {
  return a + b
}

console.log(sumArray([1,2]))

console.log(sumObj([1,2]))