// const arr = [1,2 ,3]

// let ans = arr.reduce((acc , curr) => acc+curr , 0)  // this 0 is the initial value of accumulator

// console.log(ans)



const shoppingCart = [

    {
        carName : 'Fortuner',
        price : 50,
        color:'white',
    },
    {
        carName: 'Scorpio',
        price: 100,
        color: 'black',
    },
    {
        carName:'Thar',
        price: 150,
        color : 'red',
    },
    {
        carName : 'Range Rover',
        price: 200 , 
        color: 'White',
    },
]

const ans = shoppingCart.reduce((acc , currVal) => acc + currVal.price , 0)

console.log(ans)