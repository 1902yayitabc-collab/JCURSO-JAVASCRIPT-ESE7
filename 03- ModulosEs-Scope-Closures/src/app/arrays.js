// Sumar todos los elementos de un array
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Calcular el promedio de un array
function averageArray(arr) {
  if (arr.length === 0) return 0;
  return sumArray(arr) / arr.length;
}

// Agrupar elementos de un array por una propiedad
function groupArrayBy(arr, property) {
  return arr.reduce((acc, item) => {
    const key = item[property];
    
    if (!acc[key]) {
      acc[key] = [];
    }
    
    acc[key].push(item);
    return acc;
  }, {});
}