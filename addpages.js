// 页脚的函数
define(function(require,exports,module){
       function addpages(current,total,show){
          this.current=current;
          this.total=total;
          this.show=show;
          var mid=Math.floor(this.show/2);
          var begin=begin<1?1:this.current-mid;
          var end=this.current+mid;
          if(end>total){
                end=this.total;
                begin=end-this.show;
                begin=begin<1?1:begin;
          }
          this.begin=begin;
          this.end=end;
     }
     // parent：要传页码元素的父级不能直接传类名id等；
     addpages.prototype.addliElement=function(parentul){
              var pre=document.createElement("li");
              pre.innerHTML='<a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>';
              if(this.current==1){
                    pre.classList.add("disabled");
              }
              pages.appendChild(pre);
              for(var i=this.begin;i<this.end+1;i++){
                        var newli=document.createElement("li");
                        newli.innerHTML='<a href="#">' + i + '</a>';
                        pages.appendChild(newli);
                        if(i==this.current){
                            newli.classList.add('active');
                        }
              }
              var final=document.createElement("li");
              final.innerHTML='<a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>';
              pages.appendChild(final);
              if(this.current==this.total){
                    final.classList.add("disabled");
              }
     }
     module.exports=addpages;
})

  
     