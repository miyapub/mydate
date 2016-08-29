var _time;
var _timestamp;
var myObject=require('myobject');
module.exports={
    setTime:function(t){
        var strT=t+'';
        if(strT.length===10){
            if(myObject.setObj(parseInt(t)).isNumber()){
                _timestamp=t;
            }
        }
        return this;
    },
    getTimestamp:function(){
        return Math.round(new Date().getTime()/1000);
    },
    getTime:function(){
        var time = new Date(parseInt(_timestamp)*1000);
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