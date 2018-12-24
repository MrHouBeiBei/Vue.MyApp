<template>
    <div>
        <p>canvas</p>
        <canvas ref="canvas1" width="400" height="300" class="canvas1"></canvas>
        <canvas ref="canvas2" width="400" height="300" class="canvas1"></canvas>
        <p>svg</p>
        <!-- SVG 文件可通过以下标签嵌入 HTML 文档：<img> 、<embed>、<object> 或者 <iframe>。 -->
        <!-- xmlns 命名空间 -->
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300" class="canvas1">
            <line x1="0" y1="0" x2="500" y2="500" style="stroke:rgb(0,0,255);stroke-width:3" />
            <ellipse cx="160" cy="80" rx="50" ry="50" style="fill:pink;stroke:dodgerblue;stroke-width:5" />
        </svg>

        <p>WebGL 游戏开发</p>
        <!-- 游戏开发 -->
    </div>
</template>

<script>
export default {
    mounted() {
        this.draw()
        this.draw2()
    },
    methods: {
        draw() {
             //获得画布元素
            var canvas1 = this.$refs.canvas1
            //获得2维绘图的上下文
            var ctx = canvas1.getContext("2d");

            //设置线宽
            ctx.lineWidth = 10;
            //设置线的颜色
            ctx.strokeStyle = "blue";

            /**(1) */
            //将画笔移动到00点
            ctx.moveTo(0,0);
            //画线到800，600的坐标
            ctx.lineTo(400,300);
            
            //执行画线
            ctx.stroke();
            
            /**(2) */
            // canvas1.onmousedown=function(e){
            //     //划线到当前客户端的x与y座标
            //     ctx.lineTo(e.clientX, e.clientY);
            //     //执行画线
            //     ctx.stroke();
            // }
        },
        draw2() {
            //获得画布元素
            var canvas1 = this.$refs.canvas2
            //获得2维绘图的上下文
            var ctx = canvas1.getContext("2d");
            //设置线宽
            ctx.lineWidth = 1;
            //设置线的颜色
            ctx.strokeStyle = "dodgerblue";
            ctx.moveTo(0,0);
            ctx.strokeRect(0,0,600,600);

            //绘制文字
            //描边
            ctx.font="50px microsoft yahei";
            ctx.strokeText("Hello",20,100);
            //填充
            ctx.fillStyle=
            ctx.fillText("Hello",20,200);
        }
    },
}
</script>

<style lang="less" scoped>
.canvas1{
    border: 1px solid #000;
}
</style>

