$(document).ready(function(){


//LEXION ONLY
//Show label based on radio select for kernel, g or mL
    $(".labeler").change(function(){
		if($('#seedcount1').is(':checked')) {$('.kernelorg').text(' kernels')};
		if($('#weight1').is(':checked')) {$('.kernelorg').text(' grams')};
		if($('#volume1').is(':checked')) {$('.kernelorg').text(' mL')};
        });

//Show the acres/hour
    $('*').click(function() {

        $('#td2').val(($('#headerwidth1').val() * $('#groundspeed1').val() * $('#efficiency').val() * 5280/43560/100));
        $('#td3').val(($('#headerwidth2').val() * $('#groundspeed2').val() * $('#efficiency').val() * 5280/43560/100));
        $('#td2').text(($('#headerwidth1').val() * $('#groundspeed1').val() * $('#efficiency').val() * 5280/43560/100).toLocaleString(undefined, {maximumFractionDigits: 2}) + " ac/hr");
        $('#td3').text(($('#headerwidth2').val() * $('#groundspeed2').val() * $('#efficiency').val() * 5280/43560/100).toLocaleString(undefined, { maximumFractionDigits: 2}) + " ac/hr");
        $('#td4').text(($('#td2').val() - $('#td3').val()).toLocaleString(undefined, {maximumFractionDigits: 2}) + " ac/hr");

//Show the average capacity

        $('#td22').val(($('#bpaaverage').val() * $('#td2').val()));
        $('#td23').val(($('#bpaaverage').val() * $('#td3').val()));
        $('#td22').text(($('#bpaaverage').val() * $('#td2').val()).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/hr");
        $('#td23').text(($('#bpaaverage').val() * $('#td3').val()).toLocaleString(undefined, {maximumFractionDigits: 2})+ " bu/hr");
        $('#td24').text(($('#td22').val() - $('#td23').val()).toLocaleString(undefined, {maximumFractionDigits: 2})+ " bu/hr");

//Total hours needed

        $('#td5').val((1/ $('#td2').val() * $('#totalacres').val()));
        $('#td6').val((1/ $('#td3').val() * $('#totalacres').val()));
        $('#td7').val($('#td6').val() - $('#td5').val());
        $('#td5').text((1/ $('#td2').val() * $('#totalacres').val()).toLocaleString(undefined, {maximumFractionDigits: 2}) + " hours");
        $('#td6').text((1/ $('#td3').val() * $('#totalacres').val()).toLocaleString(undefined, {maximumFractionDigits: 2}) + " hours");
        $('#td7').text(($('#td6').val() - $('#td5').val()).toLocaleString(undefined, {maximumFractionDigits: 2}) + ' hours');

//Operating costs
        var totalmaint = +$('#laborprice').val() + +$('#maintcost').val();

        $('#td8').val((totalmaint * $('#td5').val()));
        $('#td9').val((totalmaint * $('#td6').val()));
        $('#td10').val($('#td9').val() - $('#td8').val());
        $('#td8').text("$ " + (totalmaint * $('#td5').val()).toLocaleString(undefined, {maximumFractionDigits: 2}));
        $('#td9').text("$ " + (totalmaint * $('#td6').val()).toLocaleString(undefined, {maximumFractionDigits: 2}));
        $('#td10').text("$ " + ($('#td9').val() - $('#td8').val()).toLocaleString(undefined, {maximumFractionDigits: 2}));

//Fuel + DEF costs
		var fueltot1 = +$('#fuelburn1').val() * +$('#fuelprice').val() * +$('#totalacres').val();
		var deftot1 = +$('#defburn1').val() * +$('#defprice').val() * +$('#totalacres').val();
		var fueltot2 = +$('#fuelburn2').val() * +$('#fuelprice').val() * +$('#totalacres').val();
		var deftot2 = +$('#defburn2').val() * +$('#defprice').val() * +$('#totalacres').val();
        var totfluid1 = (fueltot1 + deftot1);
    	var totfluid2 = (fueltot2 + deftot2);


        $('#td11').val(totfluid1);
        $('#td12').val(totfluid2);
        $('#td13').val($('#td12').val() - $('#td11').val());
        $('#td11').text('$ ' + (totfluid1).toLocaleString(undefined, {maximumFractionDigits: 2}));
        $('#td12').text('$ ' + (totfluid2).toLocaleString(undefined, {maximumFractionDigits: 2}));
        $('#td13').text('$ ' + ($('#td12').val() - $('#td11').val()).toLocaleString(undefined, {maximumFractionDigits: 2}) );

//Grain Loss
	if($('#spread1').is(':checked')) {
    $('.weighit').hide();
    $('.dropscreen').show();
    $('#losstype').attr("src", "miscellaneous/289146.jpg");

    var samplesize=(($('#panlength').val()/12) * ($('#panwidth').val()/12) / 43560);

            if($('#seedcount1').is(':checked')) {
                    $('#td14').val($('#loss1').val() / $('#seedsperbu111').val() / 60 / samplesize);
                    $('#td15').val($('#loss2').val() / $('#seedsperbu111').val() / 60 / samplesize);
                    $('#td16').val($('#td15').val() - $('#td14').val());

                    $('#td14').text(($('#loss1').val() / $('#seedsperbu111').val() / 60 / samplesize).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
                    $('#td15').text(($('#loss2').val() / $('#seedsperbu111').val() / 60 / samplesize).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
                    $('#td16').text(($('#td15').val() - $('#td14').val()).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
            };

            if($('#volume1').is(':checked')) {
                $('#td14').val($('#loss1').val() / 35239.1 / samplesize);
                $('#td15').val($('#loss2').val() / 35239.1 / samplesize);
                $('#td16').val($('#td15').val() - $('#td14').val());

                $('#td14').text(($('#loss1').val() / 35239.1 / samplesize).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
                $('#td15').text(($('#loss2').val() / 35239.1 / samplesize).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
                $('#td16').text(($('#td15').val() - $('#td14').val()).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
            };

            if($('#weight1').is(':checked')) {
                $('#td14').val($('#loss1').val() / 453.592 / $('#testweight111').val() / samplesize);
                $('#td15').val($('#loss2').val() / 453.592 / $('#testweight111').val() / samplesize);
                $('#td16').val($('#td15').val() - $('#td14').val());

                $('#td14').text(($('#loss1').val() / 453.592 / $('#testweight111').val() / samplesize).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
                $('#td15').text(($('#loss2').val() / 453.592 / $('#testweight111').val() / samplesize).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
                $('#td16').text(($('#td15').val() - $('#td14').val()).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
            };
        };


    if($('#windrow1').is(':checked')) {
    $('.weighit').hide();
    $('.dropscreen').show();
    $('#losstype').attr("src", "miscellaneous/losspic.png");

    var samplesize=(($('#panlength').val()/12) * ($('#panwidth').val()/12) / 43560);
    var loser1 = $('#loss1').val() * $('#claastype').val() / 12 / $('#headerwidth1').val();
    var loser2 = $('#loss2').val() * $('#tractorpick2').val() / 12 / $('#headerwidth2').val();

        if($('#seedcount1').is(':checked')) {
                $('#td14').val(loser1 / $('#seedsperbu111').val() / 60 / samplesize);
                $('#td15').val(loser2 / $('#seedsperbu111').val() / 60 / samplesize);
                $('#td16').val($('#td15').val() - $('#td14').val());

                $('#td14').text((loser1 / $('#seedsperbu111').val() / 60 / samplesize).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
                $('#td15').text((loser2 / $('#seedsperbu111').val() / 60 / samplesize).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
                $('#td16').text(($('#td15').val() - $('#td14').val()).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
            };

        if($('#volume1').is(':checked')) {
                $('#td14').val(loser1 / 35239.1 / samplesize);
                $('#td15').val(loser2 / 35239.1 / samplesize);
                $('#td16').val($('#td15').val() - $('#td14').val());

                $('#td14').text((loser1 / 35239.1 / samplesize).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
                $('#td15').text((loser2 / 35239.1 / samplesize).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
                $('#td16').text(($('#td15').val() - $('#td14').val()).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
            };

        if($('#weight1').is(':checked')) {
                $('#td14').val(loser1 / 453.592 / $('#testweight111').val() / samplesize);
                $('#td15').val(loser2 / 453.592 / $('#testweight111').val() / samplesize);
                $('#td16').val($('#td15').val() - $('#td14').val());

                $('#td14').text((loser1 / 453.592 / $('#testweight111').val() / samplesize).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
                $('#td15').text((loser2 / 453.592 / $('#testweight111').val() / samplesize).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
                $('#td16').text(($('#td15').val() - $('#td14').val()).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
            };
    };

    if($('#scale1').is(':checked')) {
    $('.weighit').show();
    $('.dropscreen').hide();

    var area1 = $('#headerwidth1').val() * $('#distancex').val();
    var area2 = $('#headerwidth2').val() * $('#distancex').val();

    $('#td14').val($('#cartweight1').val() / $('#testweight111').val() / area1);
    $('#td15').val(($('#cartweight1').val() - $('#cartweight2').val()) / $('#testweight111').val());
    $('#td16').val(($('#cartweight1').val() - $('#cartweight2').val()) / $('#testweight111').val() / area2 * 43560);

    $('#td14').text("BASE");
    $('#td15').text((($('#cartweight1').val() - $('#cartweight2').val()) / $('#testweight111').val()).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bushels lost");
    $('#td16').text((($('#cartweight1').val() - $('#cartweight2').val()) / $('#testweight111').val() / area2 * 43560).toLocaleString(undefined, {maximumFractionDigits: 2}) + " bu/ac");
    };


    //Grain loss savings
    if($('#scale1').is(':checked')) {
        $('#td18').val($('#td15').val() * $('#cropprice').val());
        $('#td19').val($('#td16').val() * $('#cropprice').val() * $('#totalacres').val());

        $('#td17').text('BASE');
        $('#td18').text("$ " + ($('#td15').val() * $('#cropprice').val()).toLocaleString(undefined, {maximumFractionDigits: 2}) + " lost");
        $('#td19').text("$ " + ($('#td16').val() * $('#cropprice').val() * $('#totalacres').val()).toLocaleString(undefined, {maximumFractionDigits: 2}));
    };


    if($('#spread1').is(':checked')) {
    $('#td17').val($('#td14').val() * $('#cropprice').val() * $('#totalacres').val());
    $('#td18').val($('#td15').val() * $('#cropprice').val() * $('#totalacres').val());
    $('#td19').val($('#td18').val() - $('#td17').val());

    $('#td17').text("$ " + ($('#td14').val() * $('#cropprice').val() * $('#totalacres').val()).toLocaleString(undefined, {maximumFractionDigits: 2}));
    $('#td18').text("$ " + ($('#td15').val() * $('#cropprice').val() * $('#totalacres').val()).toLocaleString(undefined, {maximumFractionDigits: 2}));
    $('#td19').text("$ " + ($('#td18').val() - $('#td17').val()).toLocaleString(undefined, {maximumFractionDigits: 2}));
    };
    if($('#windrow1').is(':checked')) {
    $('#td17').val($('#td14').val() * $('#cropprice').val() * $('#totalacres').val());
    $('#td18').val($('#td15').val() * $('#cropprice').val() * $('#totalacres').val());
    $('#td19').val($('#td18').val() - $('#td17').val());

    $('#td17').text("$ " + ($('#td14').val() * $('#cropprice').val() * $('#totalacres').val()).toLocaleString(undefined, {maximumFractionDigits: 2}));
    $('#td18').text("$ " + ($('#td15').val() * $('#cropprice').val() * $('#totalacres').val()).toLocaleString(undefined, {maximumFractionDigits: 2}));
    $('#td19').text("$ " + ($('#td18').val() - $('#td17').val()).toLocaleString(undefined, {maximumFractionDigits: 2}));
    };

    //Totals
    $('#td20').val(+$('#td10').val() + +$('#td13').val() + +$('#td19').val());
    $('#td20').text("$ " + (+$('#td10').val() + +$('#td13').val() + +$('#td19').val()).toLocaleString(undefined, {maximumFractionDigits: 2}) + " savings");

    $('#td21').text("$ " + ($('#td20').val() / ($('#totalacres').val() * $('#bpaaverage').val())).toLocaleString(undefined, {maximumFractionDigits: 2}) + "/bu savings");
    $('#td25').text("$ " + ($('#td20').val() / $('#totalacres').val()).toLocaleString(undefined, {maximumFractionDigits: 2}) + "/ac savings");

    });
});
