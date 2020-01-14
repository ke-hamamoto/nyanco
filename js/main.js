var toolKadai = new TOOL_KADAI();

$(function () {

	$.when(module1,module2,module3,module4,module5)
		.then(
			function(){
        toolKadai.SMOOTH_SCROLL();
        toolKadai.GNAVI_FIXED();
        toolKadai.PICKUP_LOAD();
        toolKadai.NYANCOS_LOAD();
        toolKadai.NYANCOS_TAG();
},
			function(){alert();}
);


    window.onscroll = function () {

        toolKadai.GNAVI_FIXED_n_scroll();
        toolKadai.SCROLL_CHANGE_ACTIVE_n_scroll();

    };


    var timer = 0;
    window.onresize = function () {
        if (timer > 0) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {

            toolKadai.GNAVI_FIXED_n_resize();

        }, 200);
    };

});
