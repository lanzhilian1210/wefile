<template>
   <div>
       <div>
           <div class="userTitle">主页</div>
           <div class="vipTable">
               <div class="vipTableTitle">
                   <div>时间</div>
                   <div>任务号</div>
                   <div>操作</div>
                   <div>次数</div>
                   <div>剩余次数</div>
                   <div>状态</div>
               </div>
               <ul class="vipTableLis">
                   <li>
                       <div style="line-height:20px;">2018-12-20 13:01:00</div>
                       <div>20181220130110</div>
                       <div>PDF转Word</div>
                       <div>2次</div>
                       <div>18次</div>
                       <div>已完成</div>
                   </li>
               </ul>
           </div>
       </div>
    </div> 
</template>
<style lang="">
    .userTitle{
        margin-top: 30px;
        font-size: 24px;
        margin-left: 40px;
        font-weight: bold;
    }
    .vipTable{
        margin-top: 40px;
    }
    .vipTableTitle{
        height: 40px;
        border-bottom: 1px solid #999;
    }
    .vipTableLis li{
        height: 40px;
        border-bottom: 1px solid #999;
    }
    .vipTableTitle div{
        float: left;
        width: 16.2%;
        font: 16px/40px "微软雅黑";
        text-align: center;
    }
    .vipTableLis  li div{
        float: left;
        width: 16.2%;
        font: 16px/40px "微软雅黑";
        text-align: center;
        word-wrap: break-word;
    }
</style>