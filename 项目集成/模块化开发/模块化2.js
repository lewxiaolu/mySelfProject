    //闭包可以实现模块化开发,但是没法实现各个模块之间的互相调用 但是只要调用var utils=(function(){})()
    (function(){
        function fn(){
            sel();//这样是不可以的
        }
        function fn1(){

        }
    })();

    ;(function(){
        function sel(){

        }
        function set(){
        }
    })();
   var utils=(function(){
        
    })()
    