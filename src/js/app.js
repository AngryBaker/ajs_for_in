// TODO: write your code here
export default function sortingPropWithRef(obj, ref) {
  const refArr = [];
  const alphabetArr = [];   
  // отделяем свойства из образца от остальных 
  for (const prop in obj) {
    if (ref.includes(prop)){
      refArr.push(prop)
    } else {
      alphabetArr.push(prop)
    }
  }

  // сортируем свойства по образцу
  refArr.sort( function(a, b) {
    return ref.indexOf(a) - ref.indexOf(b);
  })
  
  //  соединяем массивы попутно сортируя по алфавиту второй массив
  const finishSortArr = refArr.concat(alphabetArr.sort());
  const returnArr = [];

  //  делаем из массива свойств массив объектов с парами ключ - значение
  for (const prop1 of finishSortArr) {
    returnArr.push({key: prop1, value: obj[prop1]})
  }
  return returnArr;
}
