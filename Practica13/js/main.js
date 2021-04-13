
/*agregamos el listener de click a todos los inputs del tipo radio dentro e controls wrapper*/
$(".controls-wrapper input[type='radio']").click( () => {
    /*determinamos cuál fue la forma seleccionada*/
    let selection = $(".controls-wrapper input[type='radio']:checked").val()
    console.log( selection )
    /*a nuestro elemento mutable le agregamos una clase con el mismo nombre que la selección*/
    $("#mutable-shape").removeClass().addClass(selection)
})


let images = [
    'https://www.trecebits.com/wp-content/uploads/2020/02/meme-kid.jpg',
    'https://i.ytimg.com/vi/SdtJ7AuCB9w/maxresdefault.jpg',
    'https://spoiler.bolavip.com/__export/1614872879996/sites/bolavip/img/2021/03/04/kathryn_hahn_reacciona_a_los_memes_virales_de_agatha_harkness_en_wandavision_crop1614872851585.jpg_2024461655.jpg',
    'https://assets.entrepreneur.com/content/3x2/2000/20180706133830-meme.jpeg?width=700&crop=2:1',
    'https://static.toiimg.com/photo/78679919.cms'
]

let img = 0
    
    $("#after").click( () => {
        img = img + 1
        $("#change-img").attr("src",images[img]);
        console.log(img);
        $("#before").prop('disabled', false)
        let cantImages = images.length - 1
        if (img > cantImages - 1) {
            $("#after").prop('disabled', true);
            console.log('para')
        }
    }) 
    
    $("#before").click( () => {
        img = img - 1
        $("#change-img").attr("src",images[img]);
            console.log(img); 
        $("#after").prop('disabled', false)
        if (img < 1) {
            $("#before").prop('disabled', true);
            console.log('para')
        } 
    }) 




