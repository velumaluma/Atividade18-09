fetch("https://dog.ceo/api/breeds/image/random")
     .then(res => res.json())
     .then(res => {
         const img = document.createElement("img");
         img.src = res.message
         content.appendChild(img)
     })
     .catch(err => {
         console.log(err)
     })
