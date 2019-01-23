
$(document).ready(function() {

    // ANIMATION
    new WOW().init();

   /* // Menu Scroll
    var nav_container = $(".header");
    var nav = $(".header-second");

    var top_spacing = 0;
    var waypoint_offset = -75;

    nav_container.waypoint({
        handler: function(event, direction) {

            if (direction == 'down') {

                nav_container.css({ 'height':nav.outerHeight() });
                nav.stop().addClass("headerScroll").css("top",-nav.outerHeight()).animate({"top":top_spacing});

            } else {

                nav_container.css({ 'height':'auto' });
                nav.stop().removeClass("headerScroll").css("top",nav.outerHeight()+waypoint_offset).animate({"top":""});

            }

        },
        offset: -1
    });*/

// SHOW MAIN MENU
	$('.button-menu').click(function(e) {
			$(this).toggleClass('active');
			$('.box-main-menu').toggleClass('open');
			e.stopPropagation();
			e.preventDefault();
		});
		
	
		$('.close-menu').click(function() {
			$('.button-menu').removeClass('active');
			$('.box-main-menu').removeClass('open');
		});
	
		$('body').click(function(e){
			e.stopPropagation();
			$('.button-menu').removeClass('active');
			$('.box-main-menu').removeClass('open');
		});

    /*// ANCOR
    $(".main-menu > li > a[href*='#'], .link-prev, .fixed-icons__link--contact").bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 80}, 1000);
        e.preventDefault();
        return false;
    });*/

    // SHOW BLOCK POPULAR
    $('.config-list--hide').hide();
    $a = $('.button-show--popular');
    $a.on('click', function(event) {
        event.preventDefault();
        $a.not(this).parent().next().slideUp();
        $(this).parent().next().slideToggle();
        $(this).toggleClass('active');
    });

    // SELECT
    $('.f-select').selectbox();

    // CALCULATOR

    // CALCULATOR SLIDER 1
        $("#amountRam").attr('price', 2*410);
        var valRam = [0.5,1,2,4,6,8,12,16,24,32,48,64,96,128,];
        $("#sliderRam").slider({
            range: "min",
            min: 0,
            max: valRam.length - 1,
            value: 8,
            slide: function(event, ui) {
                $("#amountRam").val(valRam[ui.value]*1000);
                $("#amountRam").attr('price', valRam[ui.value]*410);
                $("#amountRam").attr('count', valRam[ui.value]);
                $("#amountRam").change();
                $('#sliderRam .ui-slider-handle').text(valRam[ui.value]);
            }
        }).each(function() {
            var opt = $(this).data().uiSlider.options;
            var vals = opt.max - opt.min;
            for (var i = 0; i <= vals; i++) {
                var el = $('<label id="'+parseInt(i+1)+'">' + (valRam[i]) + '</label>').css('left', (i/vals*100) + '%');
                $("#sliderRam").append(el);
            }
        });
        $('#sliderRam .ui-slider-handle').text(24);

    // CALCULATOR SLIDER 2
        var valCpu = [179,177,180,182,183,184,195,244,245,246,247,];

        var valCpuPrice = [112.9,225.8,451.6,903.2,1354.8,1806.4,2712,3616,5424,7232,14464,];
        var valCpuLabel = [0.5 ,1,2,4,6,8,12,16,24,32,64,];

        $("#sliderCpu").slider({
            range: "min",
            min: 0,
            max: valCpu.length - 1,
            value: 4,
            slide: function(event, ui) {
                $("#amountCpu").val(valCpu[ui.value]);
                $("#amountCpu").attr('price', valCpuPrice[ui.value]);
                $("#amountCpu").attr('count', valCpuLabel[ui.value]);
                $("#amountCpu").change();
                $('#sliderCpu .ui-slider-handle').text(valCpuLabel[ui.value]);
            }
        }).each(function() {
            var opt = $(this).data().uiSlider.options;
            var vals = opt.max - opt.min;
            for (var i = 0; i <= vals; i++) {
                var el = $('<label id="'+parseInt(i+1)+'">' + (valCpuLabel[i]) + '</label>').css('left', (i/vals*100) + '%');
                $("#sliderCpu").append(el);
            }
        });
        $('#sliderCpu .ui-slider-handle').text(6);

    // CALCULATOR SLIDER 3
        $("#amountSSD").attr('price', 20*18.06);
        var valSSD = [5,10 ,20,30,40,60,80,120,240,350,500,800,1000,];
        $("#sliderSsd").slider({
            range: "min",
            min: 0,
            max: valSSD.length - 1,
            value: 6,
            slide: function(event, ui) {
                /*if ($('.calc_change-os:visible .current').html().includes('2016R2')){
                 if(ui.value < 3){
                 return false;
                 }
                 }else if($('.calc_change-os:visible .current').html().includes('2008R2') || $('.calc_change-os:visible .current').html().includes('2012R2')){
                 if(ui.value < 2){
                 return false;
                 }
                 }*/
                $("#amountSSD").val(valSSD[ui.value]);
                $("#amountSSD").attr('price', valSSD[ui.value]*18.06);
                $("#amountSSD").change();
                $('#sliderSsd .ui-slider-handle').text(valSSD[ui.value]);

            }
        }).each(function() {
            var opt = $(this).data().uiSlider.options;
            var vals = opt.max - opt.min;
            for (var i = 0; i <= vals; i++) {
                var el = $('<label id="'+parseInt(i+1)+'">' + (valSSD[i]) + '</label>').css('left', (i/vals*100) + '%');
                $("#sliderSsd").append(el);
            }
        });
        $('#sliderSsd .ui-slider-handle').text(80);


    /*$('#calculator-iaas-people_count_20').click(function () {
        $('#sliderRam').slider('value', 3);
        $('#sliderCpu').slider('value', 1);
        $('#sliderSsd').slider('value', 2);
    });
    $('#calculator-iaas-people_count_50').click(function () {
        $('#sliderRam').slider('value', 4);
        $('#sliderCpu').slider('value', 2);
        $('#sliderSsd').slider('value', 3);
    });
    $('#calculator-iaas-people_count_100').click(function () {
        $('#sliderRam').slider('value', 5);
        $('#sliderCpu').slider('value', 3);
        $('#sliderSsd').slider('value', 4);
    });
    $('#calculator-iaas-people_count_200').click(function () {
        $('#sliderRam').slider('value', 6);
        $('#sliderCpu').slider('value', 4);
        $('#sliderSsd').slider('value', 5);
    });*/

    calc_init();
    color_init();
    //$('select').niceSelect();
function calc_init() {
    $('#calculator_wrapper').on("calc", function(e){
        if(!(memory = $(e.delegateTarget).find(".memory:visible .value-input").attr("price"))){ console.error("ОШИБКА цена за память не установлена");
        }else if(!(core = $(e.delegateTarget).find(".core:visible .value-input").attr("price"))){ console.error("ОШИБКА цена за ядро не установлена");
        }else if(!(ssd = $(e.delegateTarget).find(".ssd:visible .value-input").attr("price"))){ console.error("ОШИБКА цена жесткие диски не установлена");
        }else if(!(os = $(e.delegateTarget).find(".os-select:visible select>option:checked").attr("price"))){console.error("Windows");
        }else if(!(dc = $(e.delegateTarget).find(".dc select>option:checked").attr("price"))){ console.error("ОШИБКА цена за резевную копию не установла");
        }else if(!(backup = $(e.delegateTarget).find(".backup select>option:checked").attr("price"))){ console.error("ОШИБКА цена за резевную копию не установла");
        }else if(!(support = $(e.delegateTarget).find(".support input[type=radio]:checked").attr("price"))){ console.error("ОШИБКА цена за поддержку не установлена");
        }else if(!(month = $(e.delegateTarget).find(".buy input[type=radio]:checked").attr("month"))){ console.error("ОШИБКА цена за срок не установлена");
        }else if(!(discount = $(e.delegateTarget).find(".buy input[type=radio]:checked").attr("price"))){ console.error("ОШИБКА цена за скидку не установлена");
        }else{

            if($(".core input").attr("count") <= 1 && $(".memory input").val() <= 1000 && $(".ssd input").val() <= 10 && $('.calc_change-os:visible .current').html().includes('итрикс')){
                discount = 0.5;
                $('#discount').attr('name', 'promocode');
                $('#discount').val('PROMO_BITRIX50');
            }

            var cost = Math.ceil((Math.ceil(memory)+ parseFloat(core)+ parseInt(ssd)+ parseFloat(os)+ parseFloat(dc)+ parseFloat(backup)+ parseFloat(support) + parseFloat(80))*parseFloat(discount) );

            console.log("ip:", 80, "memory:", memory, "core:", core, "ssd:", ssd, "os:", os, "dc:", dc, "backup:", backup, "support:", support, "month:", month, "discount:", discount, "cost:", cost);


            $(e.delegateTarget).parents(".calculator").find(".config__amount .amount__price span").text(parseInt(cost));

            $(e.delegateTarget).parents(".calculator").find(".amount__sale-percent span").text(100-100*discount);

        }// alert("calc");
    }).on("change", "input", function(e){
        $(e.delegateTarget).trigger("calc");
    }).on("change", "select", function(e){
        $(e.delegateTarget).trigger("calc");
    }).one("init", function(e){
        $(document).on("click", ".change-system .nav-item", function(e){
            var OsValue = $('.os-select:visible .calc_change-os').attr('name');
            // Событие отображения списка операционной системы
            if(!(index = $(e.currentTarget).index())){ console.error("ОШИБКА Индекс ОС не установлен");
            }else{// console.info("Нажата кнопка", index);
                var div = $(".calculator").find(".os [data-index]").hide().filter(function(nn, div){
                    return index == $(div).attr("data-index");
                }).show();
                $('.calc_change-os').attr('name', '');
                $('.os-select').each(function () {
                    if($(this).is(':visible')){
                        $(this).children('select').attr('name', OsValue);
                    }
                });
                $('.calc_change-os').change();
            }
        });
        $(".change-system").find("a.active").parents(".nav-item").trigger("click"); // Первоначальное отображение списка ОС
        $(e.delegateTarget).trigger("calc");
    }).ready(function(e){ $('.calculator').trigger("init"); });
};

/*$('#datacenter').change(function () {
    $('#page-input').val(0);
    $('#counter-input').val(1);
    var dc = $("#datacenter").val();
    var os = $('.os-select:visible').attr('data-index');
    $.ajax({
        async: true,
        type: 'GET',
        url: '/include/calc.php?datacenter_id='+dc+'&os='+os,
        success: function (data) {
            $('#calculator').html(data);
            calc_init();
        },
        error: function (xhr, str) {
            alert('Возникла ошибка: ' + xhr.responseCode);
            $('#counter-input').val(null);
        }
    });
});*/



});


function color_init() {
    setTimeout(function () {


        $('.ssd label').each(function () {
            if (parseInt($(this).attr('id')) <= $("#sliderSsd").slider('value') ){
                $(this).css('color', '#fff');
            }else {
                $(this).css('color', '#000');
            }
        });
        $('.memory label').each(function () {
            if (parseInt($(this).attr('id')) <= $("#sliderRam").slider('value') ){
                $(this).css('color', '#fff');
            }else {
                $(this).css('color', '#000');
            }
        });
        $('.core label').each(function () {
            if (parseInt($(this).attr('id')) <= $("#sliderCpu").slider('value') ){
                $(this).css('color', '#fff');
            }else {
                $(this).css('color', '#000');
            }
        });
    }, 10); // время в мс
};


/*$('.amount__btn').click(function () {
    $('#value_os').html($('.os-select:visible select>option:checked').html());
    $('#value_ram').html($('#amountRam').attr('count')+' Гб');
    $('#value_core').html($('#amountCpu').attr('count'));
    $('#value_hdd').html($('#amountSSD').val()+' Гб');
    $('#value_dc').html($('select#datacenter>option:selected').html());
    $('#value_sup').html($('.support input[type=radio]:checked').attr('subname'));
    $('#value_back').html($('.backup select>option:selected').html());
    $('#value_time').html($('.buy input[type=radio]:checked').attr('subname'));
});
$('.tooltip').hide();
$('[data-toggle="tooltip"]').tooltip();*/



