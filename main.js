
let alumnos = [
    { nombre: 'Maria', calificaciones: [9,9,7,8,10] },
    { nombre: 'Antonio', calificaciones: [9,8,7,8,10] },
    { nombre: 'Juan', calificaciones: [9,9,7,8,2] },
    { nombre: 'Luis', calificaciones: [9,9,7,8] },
    { nombre: 'Ana', calificaciones: [9,9,7,8,10] },
    { nombre: 'Maria', calificaciones: [9,9,8,10,10] },
    { nombre: 'Pedro', calificaciones: [7,9,9,8,10] },
    { nombre: 'Julio', calificaciones: [10,9,7,8,10] },
];

    
console.log(
    alumnos.reduce((pre, act) => {
        if ((act.calificaciones.reduce((p,c) => p+c) / 5) > 8.5){
            pre.push(act);
        }
        return pre
    }, [])
)





    


 /*  console.log(alumnos[0].calificaciones.reduce((pre,act) => {
      let total = (pre + act);
      let tamaño = alumnos[0].calificaciones.length
      return (total) / tamaño})); */

