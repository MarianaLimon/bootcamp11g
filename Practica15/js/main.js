
// Agregar Dueños desde formulario
let boss = {}
let addBoss = function ( ) {
    $.ajax({
        method: "POST",
        url: "https://petshome-d48d9-default-rtdb.firebaseio.com/Boss.json",
        data: JSON.stringify({boss}),
        success : response => {
            console.log(response)
        },
        error : error => {
            console.log(error)
        }

    })
} 

$("#btn-add-boss").click( function () {
    boss.id = Date.now();
    boss.name = $('input:text[id=name-boss]').val();
    boss.phone = $('input:text[id=phone]').val();
    boss.adress = $('input:text[id=adress]').val();
    addBoss()
    $('.form-boss')[0].reset();
})

// Agregar Mascotas desde formulario
let pet = {}
let addPet = function ( ) {
    $.ajax({
        method: "POST",
        url: "https://petshome-d48d9-default-rtdb.firebaseio.com/Pets.json",
        data: JSON.stringify({pet}),
        success : response => {
            console.log(response)
        },
        error : error => {
            console.log(error)
        }

    })
} 

$("#btn-add-pet").click( function () {
    //boss.id = Date.now();
    pet.name = $('input:text[id=name-pet]').val();
    pet.breed = $('input:text[id=breed]').val();
    pet.gender = $('input:text[id=gender]').val();
    pet.age = $('input:text[id=age]').val();
    pet.photo = $('input:text[id=photo]').val();
    addPet()
    $('.form-pet')[0].reset();
})



let getPets = function ( ) {
    let petsArray;
    $.ajax({
        async: false,
        url: "https://petshome-d48d9-default-rtdb.firebaseio.com/Pets/.json",
        type: 'GET',
        success: response => {
           console.log(response)
           petsArray = response;
        }
    });
    return petsArray
}

const printPets = (petsArray) => {
    let estaCosa = Object.entries(petsArray)

    estaCosa.forEach((Pets, index) => { 
        
        console.log('hola',Pets['pet'])
    });
    


    /* petsArray.forEach((pet, index) => {
      //clean posts wrapper
      //$('#posts-wrapper .card').remove();
  
      let petContainerId = Date.now();
  
      $("#pets-wrapper").prepend(
        `<div class="card mb-3 shadow">
            <div class="bg-white p-3 mb-3 row no-gutters">
              <div class="col-md-4">
                  <img class="post-list-image rounded-left" src="${pet.data.photo}" alt="...">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title text-blue">${pet.data.name}</h5>
                    <p class="card-text">${pet.data.breed}</p>
                    <p class="card-text">${pet.data.gender}</p>
                    <p class="card-text">${pet.data.age}</p>
                    <p class="card-text px-0 py-2 mb-0" id="${petContainerId}"></p>
                  </div>
              </div>
            </div>
          </div>        
        `
      )
    }); */
};
printPets(getPets());



const goHome = () => {
    $(location).attr("href", "index.html");
  };
$(".logo").click(goHome);

const goAddPet = () => {
    $(location).attr("href", "addPet.html");
  };
$("#go-add-pet").click(goAddPet);

const goAddBoss = () => {
    $(location).attr("href", "addBoss.html");
  };
$("#go-add-boss").click(goAddBoss);