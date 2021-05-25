var input = $("#myInput")
var table =$("#myTable tr")
var remove =$(".btn")
var div =$(".div")
var stop = $(".stop")
var title =$("h2")


remove.css("margin-left","100px")
input.on("keyup",function(){
    var value =$(this).val().toLowerCase()
    table .filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1)
    })

   
})


var click = $('.link')

click.click(function () {
 $("h2").toggleClass("vernagir").html("hello  user")
 $(".div").toggle(4000).css("display", "flex")
 
})


remove.on("click", function(){
    table.slideToggle(000);
    input.val("")
 
}
)


div.mouseleave(function (){
    $(this).fadeTo("slow",0.5)
})


stop.click(function (){
    div.css( {
        background:"green",
        border:"3px solid  red",
        borderRadius:"20px"
        
    })

    div.stop()
   
})
