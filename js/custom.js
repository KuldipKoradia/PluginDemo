// js pre loader start
$(window).on('load',function() {
    $('#loader-wrapper').fadeOut('slow', function(){
        $('body').removeAttr('style');
    });
});
// js pre loader end


// js sticky footer strip start
$(document).ready(function(){
    // setTimeout(function(){
    //     $(window).trigger('resize');
    // }, 150);
    var windowHeight = $(window).height();
    var footerOffset = $('footer').offset().top;
    var windowScroll = $(document).scrollTop();
    var totalWindowTop = windowScroll + windowHeight;
    if(footerOffset < totalWindowTop){
        $('.footer-sticky-strip').hide();
    }else{
        $('.footer-sticky-strip').fadeIn();
    }
    $(document).scroll(function(){
        var windowHeight = $(window).height();
        var footerOffset = $('footer').offset().top;
        var windowScroll = $(document).scrollTop();
        var totalWindowTop = windowScroll + windowHeight;
        if(footerOffset < totalWindowTop){
            $('.footer-sticky-strip').hide();
        }else{
            $('.footer-sticky-strip').fadeIn();
        }
    });

    $(window).on("load resize scroll", function(){
        var linePath = $(".scroll_path").height();
        var windowSize = $(window).height();
        var windowTop = $(window).scrollTop();
        var documentHeight = $(document).innerHeight();
        var calculation = ((windowTop * linePath) / (documentHeight - windowSize));

        if(windowTop == 0){
            $(".scroller_button").css({"top": "0px"});
        }else if(windowTop > 0 && windowTop < (documentHeight - windowSize)){
            $(".scroller_button").css({"top": calculation});
        }
    });
});
// js sticky footer strip end

//js fix sidebar for perticular section start
$(window).on('load resize', function(){
    setTimeout(function () {
        var hraderHeight = $('nav.navbar').outerHeight();
        var content_height = $('.image_gallery .grid').outerHeight();
        var sidebar_wapper_width = $('.sidebar_wapper').width();
        var fixedSideBarHeight = $('.fixed_side_bar').outerHeight();
        $('.sidebar_wapper .fixed_side_bar').css({'width': sidebar_wapper_width});
        $('.image_gallery .sidebar_wapper').css({'height': content_height});
        if(content_height >= fixedSideBarHeight){
            $(document).scroll(function(){
                var sideOffset = $('.image_gallery .sidebar_wapper').offset().top;
                var documentScrollTop = $(document).scrollTop();
                if(documentScrollTop >= (sideOffset - hraderHeight - 10) && (documentScrollTop - sideOffset + hraderHeight + 10) <= (content_height - fixedSideBarHeight)){
                    $('.sidebar_wapper .fixed_side_bar').css({'position': 'fixed', 'top': (hraderHeight + 10)});
                }
                else if((documentScrollTop - sideOffset + hraderHeight) >= (content_height - fixedSideBarHeight - 10)){
                    $('.sidebar_wapper .fixed_side_bar').css({'position': 'absolute', 'top': content_height - fixedSideBarHeight});
                }
                else{
                    $('.sidebar_wapper .fixed_side_bar').css({'position': 'relative', 'top': 0});
                }
            });
        }else if(content_height < fixedSideBarHeight){
            $('.sidebar_wapper .fixed_side_bar').css({'position': 'relative'});
        }
    });
});
//js fix sidebar for perticular section end

$(document).ready(function() {
    // JS scroll spy start
    var lastId,
    topMenu = $("header ul.navbar-nav"),
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1200);
        e.preventDefault();
    });
    $(document).scroll(function () {
        var fromTop = $(this).scrollTop() + 1;
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });
    $('.filter_btns li a').click(function(){
        $('.navbar-nav li a[href="#masonryFilter"]').trigger('click');
    });
    // JS scroll spy end

    // js isotope for filter start
    $('.grid').isotope({
        itemSelector : '.grid-item',
    });
    $('.filter_btns li a.btn').on('click', function () {
        $('.filter_btns li a.btn').removeClass('active_filter');
        $(this).addClass('active_filter');
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({filter: filterValue});
        //js fix sidebar for perticular section on filter start
        setTimeout(function () {
            var hraderHeight = $('nav.navbar').outerHeight();
            var content_height = $('.image_gallery .grid').outerHeight();
            var sidebar_wapper_width = $('.sidebar_wapper').width();
            var fixedSideBarHeight = $('.fixed_side_bar').outerHeight();
            $('.sidebar_wapper .fixed_side_bar').css({'width': sidebar_wapper_width});
            $('.image_gallery .sidebar_wapper').css({'height': content_height});
            if(content_height >= fixedSideBarHeight){
                $(document).scroll(function(){
                    var sideOffset = $('.image_gallery .sidebar_wapper').offset().top;
                    var documentScrollTop = $(document).scrollTop();
                    if(documentScrollTop >= (sideOffset - hraderHeight - 10) && (documentScrollTop - sideOffset + hraderHeight + 10) <= (content_height - fixedSideBarHeight)){
                        $('.sidebar_wapper .fixed_side_bar').css({'position': 'fixed', 'top': (hraderHeight + 10)});
                    }
                    else if((documentScrollTop - sideOffset + hraderHeight) >= (content_height - fixedSideBarHeight - 10)){
                        $('.sidebar_wapper .fixed_side_bar').css({'position': 'absolute', 'top': content_height - fixedSideBarHeight});
                    }
                    else{
                        $('.sidebar_wapper .fixed_side_bar').css({'position': 'relative', 'top': 0});
                    }
                });
            }else if(content_height < fixedSideBarHeight){
                $('.sidebar_wapper .fixed_side_bar').css({'position': 'relative'});
            }
        }, 1000);
        //js fix sidebar for perticular section on filter end
    });
    // js isotope for filter end


    // js image open in popup start
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
    // js image open in popup end

    // js slider start
    // $('.product_detail_slider').slick({
 //        slidesToShow: 1,
 //        slidesToScroll: 1,
 //        arrows: true,
 //        nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fa fa-3x fa-angle-right" aria-hidden="true"></i></button>',
 //        prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fa fa-3x fa-angle-left" aria-hidden="true"></i></button>',
 //        asNavFor: '.product_detail_slider_nav'
 //    });
 //    $('.product_detail_slider_nav').slick({
 //        slidesToShow: 4,
 //        slidesToScroll: 1,
 //        dots: false,
 //        arrows: true,
 //        focusOnSelect: true,
 //        nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fa fa-2x fa-angle-right" aria-hidden="true"></i></button>',
 //        prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fa fa-2x fa-angle-left" aria-hidden="true"></i></button>',
 //        asNavFor: '.product_detail_slider'
 //    });
    // js slider end

    //js accordion start
    $( ".day_wise_itinerary_accordion" ).accordion({
        collapsible: true,
        heightStyle: "content"
    });
    //js accordion end

    //js step next previous start
    $("#register_steps_tab").accordion({
        heightStyle: "content"
    });
    $('#register_steps_tab .next_step').click(function () {
        $('#register_steps_tab.ui-accordion .ui-accordion-header-active').next('.step_content').next('h3').trigger('click');
        $('#register_steps_tab.ui-accordion .ui-accordion-header-active').prev('.step_content').prev('h3').addClass('step_done');
    });
    $('#register_steps_tab .prev_step').click(function () {
        $('#register_steps_tab.ui-accordion .ui-accordion-header-active').prev('.step_content').prev('h3').trigger('click');
        $('#register_steps_tab.ui-accordion .ui-accordion-header-active').removeClass('step_done');
    });
    //js step next previous end

    // js scrolling tabs start
    $('.nav-tabs').scrollingTabs({
        enableSwiping: true  
    });
    $('.nav-tabs a').click(function(){
        $(".tab-content").animate({ scrollTop: 0 }, 600);
    });
    // js scrolling tabs end

    // js datepicker start
    $(function() {
        $("#datepicker").datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: 'dd/mm/yy'
        });
    });
    // js datepicker end

    // js responsiveTabsStepper start
    $(function () {
        $('#responsive_tab').responsiveTabs({
            startCollapsed: 'accordion',
            setHash: false,
            duration: 500,
            animation: 'slide'
        });
    });
    setTimeout(function(){
        $('.admission_inquiry .responsive_tab_content.active_tab_on_load .r-tabs-anchor').trigger('click');
    },100);
    $('#responsive_tab .next_step').click(function () {
        $('.admission_inquiry .r-tabs-state-active').next('.r-tabs-state-default').children('.r-tabs-anchor').trigger('click');
    });
    $('#responsive_tab .prev_step').click(function () {
        $('.admission_inquiry .r-tabs-state-active').prev('.r-tabs-state-default').children('.r-tabs-anchor').trigger('click');
    });
    // js responsiveTabsStepper end

    // js fancybox start
    // $(".leader").fancybox({
    //     prevEffect: 'none',
    //     nextEffect: 'none',
    //     openMethod: 'stickyup',
    //     padding: 0,
    //     showNavArrows: true,
    //     helpers: {
    //         title: {
    //             type: 'outside'
    //         },
    //         thumbs: {
    //             width: 50,
    //             height: 50
    //         },
    //         overlay: {
    //             css: {
    //                 'background': 'rgba(0, 0, 0, 0.6)'
    //             }
    //         }
    //     }
    // });
    // js fancybox end
});

// js custom scrollbar start
(function($){
    $(window).on("load", function(){
        $(".scrolling_content").mCustomScrollbar({
            theme: "dark-3"
        });
    });
})(jQuery);
// js custom scrollbar end