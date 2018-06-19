var title_href = 'header-'+location.href.split('3001/').pop();
$('.'+title_href).addClass('active');
Vue.component('counter',{
    template:'<div class="cartControl f-cb">\n' +
    '                                    <div class="iconfont icon-jianhao" @click="updataCount(false)"></div>\n' +
    '                                    <div class="cart-count" >{{ goodCount }}</div>\n' +
    '                                    <div class="iconfont icon-jiahao" @click="updataCount(true)"></div>\n' +
    '                                </div>',
    data :function () {
        return{
            goodCount : 0,
        }
    },
    methods:{
        updataCount:function (e) {
            if(e==true){
                this.goodCount++;
            }else{
                if(this.goodCount>0) {
                    this.goodCount--;
                }
            }
        }
    }
})
new Vue({
    el:'#app',
})