/** @suppress{duplicate} */
var _db2spineImpl = _db2spineImpl || {};
/** @suppress{duplicate} */
_db2spineImpl.dataFormat = _db2spineImpl.dataFormat || {};

_db2spineImpl.dataFormat = (function(nm){
    nm.checkFormat = function(dbSkeletonObj) {
        if(!dbSkeletonObj||dbSkeletonObj.hasOwnProperty('armature')||dbSkeletonObj.armature.length <=0)
        {
            throw new _db2spineImpl.exceptions.UnsupportedFormatExcepition();
        }
        
        /*if(dbSkeletonObj.armature.length>1)
        {
            
        }*/
        return true;
    };
    return nm;
}(_db2spineImpl.dataFormat));