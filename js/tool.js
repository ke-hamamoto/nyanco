var TOOL_KADAI = function () {};

TOOL_KADAI.prototype.INCLUDE = function (path, dom) {

    var def = new $.Deferred();

    $.when(
            $.ajax({
                type: 'GET',
                url: path
            }) //HTML読み込み
        )
        .then(
            function (mod1) {

                //console.log(mod1);
                $(dom).append(mod1);

                def.resolve('end=' + path);

            }, //true
            function () {
                def.reject();
            } //false
        );

    return def.promise();

};



TOOL_KADAI.prototype.SMOOTH_SCROLL = function () {

    $(document).on('click', '[data-smooth-scroll]', function (e) {

        /*
        $('[data-gnav]').removeClass('n-active');
        $(this).closest('[data-gnav]').addClass('n-active');
        $('[data-gnav]').addClass('n-hover');
        $(this).closest('[data-gnav]').removeClass('n-hover');
        */

        const target = e.target;
        e.preventDefault();
        const targetId = target.hash;
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

};

TOOL_KADAI.prototype.SCROLL_CHANGE_ACTIVE_n_scroll = function (){

    var p_top = {};

        p_top.top = $('#top').offset().top;
        p_top.sodate = $('#sodate').offset().top;
        p_top.form = $('#form').offset().top;
        console.log(p_top);

        if ($(window).scrollTop() + this.v_height > p_top.form) {

            $('[data-gnav]').removeClass('n-active');
            $('[data-gnav="form"]').addClass('n-active');
            $('[data-gnav]').addClass('n-hover');
            $('[data-gnav="form"]').removeClass('n-hover');

        } else if ($(window).scrollTop() + this.v_height > p_top.sodate) {

            $('[data-gnav]').removeClass('n-active');
            $('[data-gnav="sodate"]').addClass('n-active');
            $('[data-gnav]').addClass('n-hover');
            $('[data-gnav="sodate"]').removeClass('n-hover');

        } else if ($(window).scrollTop() + this.v_height > p_top.top) {

            $('[data-gnav]').removeClass('n-active');
            $('[data-gnav="top"]').addClass('n-active');
            $('[data-gnav]').addClass('n-hover');
            $('[data-gnav="top"]').removeClass('n-hover');

        }

};

TOOL_KADAI.prototype.GNAVI_FIXED_n_scroll = function () {

		console.log($(window).scrollTop());
        console.log($('#n-gnavi').offset().top);
        console.log($('#n-gnavi').height());
        console.log('aaa' + this.v_offsetTop);

        this.v_height = $('#n-gnavi').height();

        var v_top = 0;
        if ($('#header').css('position') == 'fixed') {
            v_top = 38;
        }

        console.log('___' + v_top);

        if ($(window).scrollTop() - (this.v_offsetTop - v_top) >= 0) {
            $('#n-gnavi').css({
                'position': 'fixed',
                'top': v_top + 'px',
                'z-index': 2
            });
            $('#n-gnavi-ul > li').css({
                'width': 'calc(100% / 3)'
            });
            $('#n-pickup').css({
                'padding-top': this.v_height + 'px'
            });
        } else {
            $('#n-gnavi').css({
                'position': 'relative',
                'top': 0
            });
            $('#n-gnavi-ul > li').attr({
                'style': ''
            });
            $('#n-pickup').css({
                'padding-top': 0
            });
        }

};
TOOL_KADAI.prototype.GNAVI_FIXED_n_resize = function (){

        this.v_height = $('#n-gnavi').height();

        if ($('#n-gnavi').css('position') == 'fixed') {
            this.v_offsetTop = $('#n-pickup').offset().top;
        } else {
            this.v_offsetTop = $('#n-gnavi').offset().top;
        }

};
TOOL_KADAI.prototype.GNAVI_FIXED = function () {
console.log($('#n-gnavi').length);
    this.v_offsetTop = $('#n-gnavi').offset().top;

};


TOOL_KADAI.prototype.PICKUP_LOAD = function () {

    $.when(
            $.ajax({
                url: './xml/pickup.xml'
            }) //xml読み込み
        )
        .then(
            function (data) {

                $(data).find('item').each(function () {
                    $('#n-pickup').append('<article class="n-pickup-content"><h2 class="n-midashi2 n-midashi-skin-pickup n-stamp1">Pick up</h2><p class="n-img n-pickup-img"><img src="' + $(this).find('imgurl').text() + '" alt="ぶさねこ"></p><div class="n-pickup-info"><h3 class="n-midashi3 n-w-middle-c">' + $(this).find('title').text() + '</h3><p class=" n-w-middle-c"><span class="n-date">' + $(this).find('date').text() + '</span></p><p class="n-text n-w-middle-c">' + $(this).find('text').text() + '</p></div></article>');
                });

            }, //true
            function () {

            } //false
        );



};


TOOL_KADAI.prototype.NYANCOS_LOAD = function () {

    $.when(
            $.ajax({
                url: './xml/nyancos.xml'
            }) //xml読み込み
        )
        .then(
            function (data) {

                $(data).find('item').each(function () {
                    $('#n-nyancos-ul').append(
                        '<li class = "n-li-yoko n-anim-tag n-hover-opacity" data-tag=' +
                        $(this).find('tag').text() +
                        '><a href="" class="a-nyancos"><p class="n-img"><img src="' +
                        $(this).find('imgurl').text() +
                        '"alt="画像"></p><h3 class="n-midashi3">' +
                        $(this).find('title').text() +
                        '</h3><span class="n-date">' +
                        $(this).find('date').text() +
                        '</span></a></li>');
                });

            }, //true
            function () {

            } //false
        );

};


TOOL_KADAI.prototype.NYANCOS_TAG = function () {

    //    this.selected_tag = 'all';

    $(document).on('click', '[data-tag-nav]', function () {

        /*        console.log(this.selected_tag);

                if (this.selected_tag == $(this).attr('data-tag-nav')) {
                    return true;
                }

                this.selected_tag = $(this).attr('data-tag-nav');*/

        $('[data-tag-nav]').removeClass('n-active');
        $(this).addClass('n-active');
        $('[data-tag-nav]').addClass('n-hover');
        $(this).removeClass('n-hover');

        $('[data-tag]').removeClass('n-anim-tag');

        if ($(this).attr('data-tag-nav') == 'all') {
            $('[data-tag]').css({
                'display': 'block'
            }).addClass('n-anim-tag');
        } else if ($(this).attr('data-tag-nav') == 'koneko') {
            $('[data-tag]').css({
                'display': 'none'
            });
            $('[data-tag="こねこ"]').css({
                'display': 'block'
            }).addClass('n-anim-tag');
        } else if ($(this).attr('data-tag-nav') == 'omoshiro') {
            $('[data-tag]').css({
                'display': 'none'
            });
            $('[data-tag="おもしろ"]').css({
                'display': 'block'
            }).addClass('n-anim-tag');
        }

        //$('[data-tag]').addClass('n-anim-tag');

    });

};
