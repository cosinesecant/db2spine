var db2spine = {
    convert:function(srcJSON){
        return new _db2spineImpl.Convertor().convert(srcJSON);
    },
    
    exceptions:{
        UnsupportedFormatExcepition:_db2spineImpl.exceptions.UnsupportedFormatExcepition
    }
};
