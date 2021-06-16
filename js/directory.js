let html = ''

for (let i = 0; i < pets.length; i++) {
  let pet = pets[i]
  html += `
    <h2>${pet.name}</h2>
  `
}

console.log(html)