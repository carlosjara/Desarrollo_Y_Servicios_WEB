$(document).ready(function(){
	console.log("LISTO EL PÖLLÖ");
    $("#bSumar").on("click",function(){
        var res = (Number($("[name='numb1']").val()) + Number($("[name='numb2']").val()));
        $("[name='result']").val(res);
    });

    $("#bRestar").on("click",function(){
        var res = (Number($("[name='numb1']").val()) - Number($("[name='numb2']").val()));
        $("[name='result']").val(res);
    });

    $("#bDividir").on("click",function(){
        var res = (Number($("[name='numb1']").val()) / Number($("[name='numb2']").val()));
        $("[name='result']").val(res);
    });

    $("#bMultiplicar").on("click",function(){
        var res = (Number($("[name='numb1']").val()) * Number($("[name='numb2']").val()));
        $("[name='result']").val(res);
    });
    $(document).on("click mouseenter",function(event){
    	var position = "x_Pos:"+ event.pageX + "y_Pos:"+ event.pageY
        $("#mouse").text(position);
    });
});
