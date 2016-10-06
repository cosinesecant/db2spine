/** @suppress{duplicate} */
var _db2spineImpl = _db2spineImpl || {};

db2spine = (function(nm){
    /**
     * @constructor
     */
    nm._convertor = function() {
        this.convert = function(srcJSON) {
            var obj = JSON.parse(srcJSON);
            return srcJSON;
        };
    };
    
    return nm;
}(_db2spineImpl));