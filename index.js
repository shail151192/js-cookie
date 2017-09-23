var cookie = (function(){
    /* method to set the cookie */
    var c = {};
    c.setCookie = function(params){
        var _cname;
        var _cexpire = params.expire
        var _cvalue=params.value

        if (params.name){
            _cname = params.name
        }else{
            console.error('cookie name must be provided')
        }
        document.cookie = _cname + '='+_cvalue;
    };


    return c;

})();