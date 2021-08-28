const button = document.getElementById("random-btn");
button.addEventListener('click', async () => {
    const res =await fetch("https://randomuser.me/api/");
    const data = await res.json();
    pushValue(data.results);
   
})

const pushValue = datas => {
    const section = document.getElementById('section');
    section.textContent = "";
    datas.forEach(data => {
        console.log(data)
        const div = document.createElement("div");
        
        div.classList.add("card");
        div.classList.add("mx-auto");
        div.classList.add("mt-5");
        div.style.width = "18rem";
        div.innerHTML = `
         <img src="${data.picture.large}" class="card-img-top rounded-circle mx-auto py-3 w-50" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.name.first}${data.name.last}</h5>
                <p class="card-text">Gender: ${data.gender}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Street number: ${data.location.street.number}</li>
                <li class="list-group-item">Street name: ${data.location.street.name}</li>
                <li class="list-group-item">City:${data.location.city}</li>
                <li class="list-group-item">Country:${data.location.country}</li>
                <li class="list-group-item">Age:${data.dob.age}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Email:${data.email}</a>
            
            </div>`;
        
        section.appendChild(div);
    })
}