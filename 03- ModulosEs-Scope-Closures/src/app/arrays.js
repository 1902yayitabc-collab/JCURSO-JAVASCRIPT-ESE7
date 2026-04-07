// Sumar todos los elementos de un array
export function sumArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Debe ser un array");
  }

  return arr.reduce((acc, num) => acc + num, 0);
}


// Promedio de un array
export function averageArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array inválido");
  }

  return sumArray(arr) / arr.length;
}


// Agrupar por propiedad
export function groupArrayBy(arr, prop) {
  if (!Array.isArray(arr)) {
    throw new Error("Debe ser un array");
  }

  return arr.reduce((acc, item) => {
    const key = item[prop];

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);
    return acc;
  }, {});
}