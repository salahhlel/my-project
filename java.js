var heigthScor=0
$('#sc').append('<h5> heigth score :'+heigthScor+'</h5>')
$('#tout').hide()
$('#note').hide()
$('#affiche').hide()
$("#valide").on('click',function (){
    $('#name').empty()
   var name= $('#begin').val()
   $('#name').append('<h5> name :'+name+'</h5>')
  if(name!==""){
   $('#tout').show()
    $('#note').show()
    $('#affiche').show()
    $('#mssg').hide()
    $('#begin').hide()
    $('#valide').hide()
    }else 
    $('#mssg').empty()
    $("#mssg").append('<p> please take your name </p>')

})
var a=Math.floor(Math.random()*9999)
var n=0
$("#btn").on('click',function(){
    $('#rr').empty()
    $('#tt').empty()
  var ent=  $('#in').val()
    if (ent.toString().length!==4){
        $("#tt").append(`<p>${'take number coposit for 4 num  '}</p>`)
    }else if (a===ent){
    $("#tt").append(`<h3> ${'verry good' } </h3><h4>${'your scoor is '+n}</h4>`)
if (heigthScor<n){
    heigthScor=n
}
}
else 
var ch=a.toString()
var ch2=ent.toString()
var v=0
var t=0 
for(i=0; i<ch.length;i++) {
    for (j=0 ; j<ch2.length ; j++){
        if (ch[i]===ch2[j] && i===j){
            v++
        }else if (ch[i]===ch2[j] && i!==j){
            t++
        }
    }
}
n++
$("#tt").append(`<p>${'try number '+n}</p><p>${'you have '+v+' v and '+'t '+t}</p><p>${'your number is'+ent}</p>`)
})
$("#btn1").on('click',function(){
    $('#rr').empty()
    $('#tt').empty()
    $('#rr').append(`<h4>${'the true number is '+a}</h4>`)   
   n=0
a=Math.floor(Math.random()*9999)
})

function cl(value){
    document.getElementById('in').value+=value
    }
    $('#btn2').on('click',function (){
        $('#begin').show()
        $('#valide').show() 
         $('#tout').hide()
        $('#note').hide()
        $('#affiche').hide()
        $('#mssg').empty()
        $('#tt').empty()
        $('#rr').empty()
    })