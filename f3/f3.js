const students = require('../students.json');
/* Írj függvényt ami megvizsgálja, hogy van-e eltérés a freeDormitory
 boolean és dormitoryPrice number-ek között 
 (Ha jól van feltöltve a lista a false értékek száma és a null-ok száma megegyezik.
  Ha nem akkor írja ki az eltérést) */
const f3 = () => {
  let mistakeCount = 0
  students.forEach(student => {
    if ((student.freeDormitory === false && student.dormitoryPrice === null) || (student.freeDormitory === true && student.dormitoryPrice !== null)) mistakeCount++;
  });
  return mistakeCount
}
console.log(f3())
module.exports = f3