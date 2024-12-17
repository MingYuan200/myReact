$(function () {
    var mdBtn = $('.modalBtn'),
        overlayOpacity = 0.9,
        fadeTime = 500;

    

    mdBtn.on('click', function (e) {
        e.preventDefault();

        var setMdw = $(this),
            setHref = setMdw.attr('href'),
            wdHeight = $(window).height();


        $('body').append('<div id="mdOverlay"></div><div id="mdWindow"><div class="mdClose">x</div><div id="contWrap"></div></div>')

        // 取得外部檔案
        $('#contWrap').load(setHref);
        
        $('#mdOverlay,#mdWindow').css({ display: 'block', opacity: '0' });

        $('#mdOverlay').css({ height: wdHeight }).stop().animate({ opacity: overlayOpacity }, fadeTime);

        $('#mdWindow').stop().animate({ opacity: overlayOpacity }, fadeTime);


        $(window).on('resize', function () {
            var adjHeight = $(window).height();
            $('#mdOverlay').css({ height: adjHeight });
        });

        $('#mdOverlay,.mdClose').on('click', function () {

            $('#mdOverlay,#mdWindow').stop().animate({ opacity: '0' }, fadeTime, function () {
                $('#mdOverlay,#mdWindow').remove();
            })
        });
    })

    // mdBtn2.on('click', function (e) {
    //     e.preventDefault();

    //     var setMdw = $(this),
    //         setHref = setMdw.attr('href'),
    //         setSource = $(setHref).html(),
    //         wdHeight = $(window).height();

    //         $('body').append('<div id="mdOverlay"></div><div id="mdWindow"><div class="mdClose">x</div><div id="contWrap"></div></div>')

    //         // 取得外部檔案
    //         $('#contWrap').load(setHref);

    //         $('#mdOverlay,#mdWindow').css({display:'block',opacity:'0'});

    //         $('#mdOverlay').css({height:wdHeight}).stop().animate({opacity:overlayOpacity},fadeTime);

    //         $('#mdWindow').stop().animate({opacity:overlayOpacity},fadeTime);


    //         $(window).on('resize',function(){
    //             var adjHeight = $(window).height();
    //             $('#mdOverlay').css({height:adjHeight});
    //         });

    //         $('#mdOverlay,.mdClose').on('click',function(){

    //             $('#mdOverlay,#mdWindow').stop().animate({opacity:'0'},fadeTime,function (){
    //                 $('#mdOverlay,#mdWindow').remove();
    //             })
    //         });
    // })

});