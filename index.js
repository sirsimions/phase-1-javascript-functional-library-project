function myEach (collection, callback) {
    let currentArr = [...collection]
    if (collection instanceof Array === false) {
      currentArr = Object.values(collection)
    }
    for (let i = 0; i < currentArr.length; i++) {
      callback(currentArr[i])
    }
    return collection
  }

  function myMap(collection, callback) {
    let currentArr = [...collection]
    if ( collection instanceof Array === false) {
      currentArr = Object.values(collection)
    }
    const newCollection = []
    for(let i = 0; i < currentArr.length; i++) {
      const newItem = callback(currentArr[i])
      newCollection.push(newItem)
    }
    return newCollection
  }

  function myReduce(collection, callback, acc) {
    let currentArr = [...collection]
    if (collection instanceof Array === false) {
      currentArr = Object.values(collection)
    }
    let current = acc
    if(typeof acc !== "number"){
      current = currentArr[0]
      for(let i = 1; i < currentArr.length; i++) {
        current = callback(current, currentArr[i], currentArr)
      }
    } else { 
      for(let i = 0; i < currentArr.length; i++) {
        current = callback(current, currentArr[i], currentArr)
      }
    }
    return current
  }

  function myFind(collection, predicate) {
    let currentArr = [...collection]
    if (collection instanceof Array === false) {
      currentArr = Object.values(collection)
    }
    for (let i = 0; i < currentArr.length; i++) {
      if (predicate(currentArr[i])) {
        return currentArr[i]
      }
    }
    return undefined
  }

  function myFilter(collection, predicate) {
    let currentArr = [...collection]
    if (collection instanceof Array === false) {
      currentArr = Object.values(collection)
    }
    const newCollection = []
    for (let i = 0; i < currentArr.length; i++) {
      if (predicate(currentArr[i])) {
        newCollection.push(currentArr[i])
      }
    }
    return newCollection
  }

  function mySize(collection) {
    let currentArr = [...collection]
    if (collection instanceof Array === false) {
      currentArr = Object.values(collection)
    }
    return currentArr.length
  }

  function myFirst(array, n) {
    if (typeof n !== "number") {
      return array[0]
    } else {
      let newArray = []
      for (let i = 0; i < n; i++){
        newArray.push(array[i])
      }
      return newArray
    }
  }

  function myLast(array, n) {
    if (typeof n !== "number") {
      return array[array.length - 1]
    } else {
      let newArray = []
      for (let i = 1; i <= n; i++) {
        newArray.unshift(array[array.length-i])
      }
      return newArray
    }
  }

  function myKeys (object) {
    const arrayOfKeys = []
    for (let key in object) {
      arrayOfKeys.push(key)
    }
    return arrayOfKeys
  }

  function myValues (object) {
    const arrayOfValues = []
    for (let key in object) {
      arrayOfValues.push(object[key])
    }
    return arrayOfValues
  } 
 