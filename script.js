var submit = () => {

    var nombre = $("input[name='nombre']").val();
    var apellidos = $("input[name='apellidos']").val();
    var nacido = $("input[name='nacido']").val();
    var hm = $("input[name='hm']").val();
    var nacionalidad = $("select[name='nacionalidad']").val();
    //var radio = $("input[name='radio']").val()
    var param = {

        nombre: nombre,
        apellidos: apellidos,
        nacido: nacido,
        hm: hm,
        nacionalidad: nacionalidad,
        //radio: radio,
    }

    console.log(param);
}
