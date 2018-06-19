var title_href = 'header-'+location.href.split('3001/').pop();
$('.'+title_href).addClass('active');
$('.news-list').on('click',function () {
    window.location.href = '/news';
})
new Vue({
    el:'#app',
    data:{
        motion_1_class:'active',
        motion_2_class:'',
        motion_3_class:'',
        motion_4_class:'',
        show_1:true,
        show_2:false,
        show_3:false,
        show_4:false,
        title_news: 'active',
        title_channel :title_href
    },
    methods:{
        change : function (e) {
            switch (e){
                case 1:
                    this.motion_1_class = 'active';
                    this.motion_2_class = '';
                    this.motion_3_class = '';
                    this.motion_4_class = '';
                    this.show_1=true;
                    this.show_2=false;
                    this.show_3=false;
                    this.show_4=false;
                    break;
                case 2:
                    this.motion_1_class = '';
                    this.motion_2_class = 'active';
                    this.motion_3_class = '';
                    this.motion_4_class = '';
                    this.show_2=true;
                    this.show_1=false;
                    this.show_3=false;
                    this.show_4=false;
                    break;
                case 3:
                    this.motion_1_class = '';
                    this.motion_2_class = '';
                    this.motion_3_class = 'active';
                    this.motion_4_class = '';
                    this.show_3=true;
                    this.show_2=false;
                    this.show_1=false;
                    this.show_4=false;
                    break;
                case 4:
                    this.motion_1_class = '';
                    this.motion_2_class = '';
                    this.motion_3_class = '';
                    this.motion_4_class = 'active';
                    this.show_4=true;
                    this.show_2=false;
                    this.show_3=false;
                    this.show_1=false;
                    break;
            }
        }
    }
})