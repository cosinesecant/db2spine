/** @suppress{duplicate} */
var _db2spineImpl = _db2spineImpl || {};

_db2spineImpl = (function(nm){
    _db2spineImpl.exceptions = {
            UnsupportedFormatExcepition:function(){
                this.message = "unsupported dragonbones data format.";
            }
    };
    return nm;
}(_db2spineImpl));