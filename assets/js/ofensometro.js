$(document).ready(function () {
    var grupo = "#";
	var frase;


	//seleciona o grupo
	$( "#grupo" ).change(function() {
		grupo = $(this).val();
		$("#frase").val(grupo);
	});
	//muda as frases de acordo com a frase principal
	
	$("#frase").change(function() {
		frase = $(this).val();
		
		$("#nordestinos").html("<span>" + frase.replace(grupo, "os nordestinos") +"</span>");

		$("#brasileiros").html("<span>" + frase.replace(grupo, "os brasileiros") +"</span>");

		$("#criancas").html("<span>" + frase.replace(grupo, "as crianças") +"</span>");

		$("#adolescentes").html("<span>" + frase.replace(grupo, "os adolescentes") +"</span>");

		$("#adultos").html("<span>" + frase.replace(grupo, "os adultos") +"</span>");

		$("#idosos").html("<span>" + frase.replace(grupo, "os idosos") +"</span>");

		$("#gays").html("<span>" + frase.replace(grupo, "os gays") +"</span>");	

		$("#lesbicas").html("<span>" + frase.replace(grupo, "as lésbicas") +"</span>");

		$("#bissexuais").html("<span>" + frase.replace(grupo, "os bissexuais") +"</span>");

		$("#heterossexuais").html("<span>" + frase.replace(grupo, "os heterossexuais") +"</span>");		

		$("#asiaticos").html("<span>" + frase.replace(grupo, "os asiáticos") +"</span>");

		$("#indios").html("<span>" + frase.replace(grupo, "os índios") +"</span>");

		$("#brancos").html("<span>" + frase.replace(grupo, "os brancos") +"</span>");

		$("#negros").html("<span>" + frase.replace(grupo, "os negros") +"</span>");

		$("#ateus").html("<span>" + frase.replace(grupo, "os ateus") +"</span>");

		$("#religiosos").html("<span>" + frase.replace(grupo, "os religiosos") +"</span>");

		$("#homens").html("<span>" + frase.replace(grupo, "os homens") +"</span>");

		$("#mulheres").html("<span>" + frase.replace(grupo, "as mulheres") +"</span>");

		$("#transexuais").html("<span>" + frase.replace(grupo, "os transexuais") +"</span>");

		$("#gordos").html("<span>" + frase.replace(grupo, "os gordos") +"</span>");

	});


});

