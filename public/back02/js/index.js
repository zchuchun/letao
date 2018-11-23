
$(function(){
    var c_left = echarts.init(document.getElementById('c_left'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '2018年注册人数'
        },
        tooltip: {},
        legend: {
            data:['人数','销量']
        },
        xAxis: {
            data: ["1月","2月","3月","4月","5月","6月"]
        },
        yAxis: {},
        series: [{
            name: '人数',
            type: 'bar',
            data: [450, 340, 870, 954, 467, 879]
        },{
            name:'销量',
            type:'bar',
            data:[1002,980,345,1034,908,789]
        }
    ]
    };

    // 使用刚指定的配置项和数据显示图表。
    c_left.setOption(option);

    var c_right = echarts.init(document.getElementById('c_right'));
    var option = {
        title : {
            text: '热门品牌销售',
            subtext: '2018年11月',
            x:'center',
            textStyle:{
                color:"red",
                fontSize:25,
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['阿迪','耐克','特步','安踏','阿迪王']
        },
        series : [
            {
                name: '热门品牌',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:425, name:'阿迪'},
                    {value:675, name:'耐克'},
                    {value:754, name:'特步'},
                    {value:890, name:'安踏'},
                    {value:1254, name:'阿迪王'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    
    c_right.setOption(option);

    
})