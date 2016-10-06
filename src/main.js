var db2spine = {
    convert:function(srcJSON){
        return new _db2spineImpl._convertor().convert(srcJSON);
    }
};
