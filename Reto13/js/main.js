
const getMentorData = () => {
    let mentorObject = {}
    $(".form-add-mentors input").each(function () {
        let property = this.name
        let value = this.value
        mentorObject[property] = value
    });
    saveMentor(mentorObject)
}


const saveMentor = mentorData => {
    $.ajax({    
        method: "POST",
        data: JSON.stringify(mentorData),
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/marianalimon/mentors.json`,
        success: response => {
            console.log(response)
            printMentors( getMentors() )
            $('.form-add-mentors')[0].reset();
            //console.log($(".form-add-mentors"))
        },
        error: error => {
            console.log(error)
        }
    })
}
$("#save-mentor").click(getMentorData)


const getMentors = () => {
    let mentorsCollection;
    $.ajax({
        method: "GET",
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/marianalimon/mentors.json`,
        success: response => {
            console.log(response)
            mentorsCollection = response
        },
        async: false
    })
    return mentorsCollection
}
 

const deleteMentor = key => {
    $.ajax({
        method: "DELETE",
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/marianalimon/mentors/${key}.json`,
        success: response => {
            console.log(response)
            $( `#${key}` ).remove();
        },
        error: error => {
            console.log(error)

        }
    })
}

const printMentors = mentorsCollection => {
    //console.log(mentorsCollection)
    let mentorCard = '';
    $(".mentors-cards-container").empty()
    for (key in mentorsCollection) {
        let { name, age, tel } = mentorsCollection[key]
        mentorCard += `
            <div id="${key}" class="col-6 pt-4">
                <div class="card">
                    <div class="card-body">
                        <div class="card-text"><b>Nombre:</b> ${name}</div>
                        <div class="card-text"><b>Edad:</b> ${age}</div>
                        <div class="card-text"><b>Teléfono:</b> <span id="${key}-tel">${tel}</span></div>
                        <div class="pt-4 d-flex justify-content-end">
                            <button type="button" class="btn btn-danger m-1 drop-mentor" data-mentor-key="${key}">Eliminar</button>
                            <button type="button" class="btn btn-primary m-1 edit-mentor" data-mentor-key="${key}" data-toggle="modal" data-target="#edition-modal">Editar</button>
                        </div>
                    </div>
                </div>
            </div>`
    }
    $(".mentors-cards-container").append(mentorCard)

    let l = document.getElementById("-MYI5eXRr9gGYhRztzkQ-tel");
    console.log(l.textContent)


    $(".drop-mentor").click((element )=> {
        deleteMentor(element.currentTarget.dataset.mentorKey)   
    })
     
    $(".edit-mentor").click(( )=> {
        console.log( "dropping")
    })
}
printMentors(getMentors())
