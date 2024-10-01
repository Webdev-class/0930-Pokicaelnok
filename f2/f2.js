const students = require("../students.json");
/* Írj függvényt ami feltölt egy objektumot (lehetőleg üres {}-ről induljon) 
a klubbok nevével és tagjainak számával. (pl. {"club1": 4, "club2": 3....}) */
function f2() {
    const clubs = {};
    students.forEach(student => {
        let clubName = `${student.club}`;
        if (!clubs[clubName]) clubs[clubName] = 1;
        else clubs[clubName]++;
    });
    return clubs;
}
console.log(f2());
module.exports = f2;
