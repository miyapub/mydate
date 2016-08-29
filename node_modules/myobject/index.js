var _obj;
function _is(type){
    return Object.prototype.toString.call(_obj) === '[object '+type+']';
}
module.exports={
    setObj:function(obj){
        _obj=obj;
        return this;
    },
    isArray:function(){
        return _is('Array');
    },
    isNumber:function(){
        return _is('Number');
    },
    isString:function(){
        return _is('String');
    },
    isObject:function(){
        return _is('Object');
    },
    isDate:function(){
        return _is('Date');
    },
    isNull:function(){
        return _is('Null');
    },
    isUndefined:function(){
        return _is('Undefined');
    }
}