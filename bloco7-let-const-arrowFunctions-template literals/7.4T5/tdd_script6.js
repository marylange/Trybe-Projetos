// var promessa = {
//   'var': 'texto',
//   'array': [1, 2, 3, 4]
// };

// console.log(promessa['array'][1]);

function showProps(obj, objName) {
    var result = ``;
    for (var i in obj) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (obj.hasOwnProperty(i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    return result;
  }
  console.log(showProps(Ford, Mustang));