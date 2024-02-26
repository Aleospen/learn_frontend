'use strict'

let id = Symbol('id')

let user = {
    name: 'Garry',
    [id] : '0'
}

for (let key in user){
    console.log(key) // prints 'name' without 'id'
}

