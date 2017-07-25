'use strict';

module.exports = function countSameElements(collection) {
    var result = [];
    var ch_list = [];
    var ch_num = 1;
    var index;
    collection.forEach(item =>{ 
        var item_ch = item;
        var item_num = 1;
        
        /** 是否bao包含特殊字符 **/
        var index_0 = item.indexOf('-');
        if(index_0 >=0){
            var ch = item.split('-');
            item_ch = ch[0];
            item_num = Number(ch[1]);
        }
        
        /** 是否是已经存在的字符 **/ 
        index = ch_list.indexOf(item_ch);
        if(index < 0){
            var list = {};
            
            ch_list.push(item_ch);          
            list.key = item_ch;
            list.count = item_num;
            result.push(list);
        }
        
        else
            result[index].count += item_num;
//        console.log(result[index])   ;
    })
//    console.log(result);
  return result;
}
