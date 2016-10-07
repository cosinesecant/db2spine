/** @suppress{duplicate} */
var _db2spineImpl = _db2spineImpl || {};

_db2spineImpl = (function(nm){
    /**
     * @constructor
     */
    nm.Convertor = function() {
        this.convert = function(srcJSON) {
            var dbObj = JSON.parse(srcJSON);
            nm.dataFormat.checkFormat(dbObj);
            
            return srcJSON;
        };
    };
    
    return nm;
}(_db2spineImpl));