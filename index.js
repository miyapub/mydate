var _time;
var _timestamp;
var myObject=require('myobject');
module.exports={
    setTime:function(t){
        var strT=t+'';
        if(strT.length===10){
            if(myObject.setObj(t).isNumber()){
                _timestamp=t;
            }
        }
        return this;
    },
    getTime:function(){
        var time = new Date(parseInt(_timestamp));
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        //time = time.split(' ')[0];
        if (m < 10) {
            m = '0' + m;
        }
        if (d < 10) {
            d = '0' + d;
        }
        var StringTime = y + '-' + m + '-' + d;
        _time=StringTime;
        return _time;
    }
}