<template>
    <div class="inputBox">
        <div class="uploadBox"> 
            <file-upload
                class="upload"
                post-action="http://localhost:3000/users/bar"
                :multiple="true"
                :drop="true"
                :drop-directory="true"
                v-model="fileList" 
                @input-file="inputFile" 
                @input-filter="inputFilter"
                ref="upload" style="width:100%;height:100%;">
                <div class="txtDis">将PDF与Office文件互相转换</div>
                <div class="txtDis2">选择文件</div>
            </file-upload>                
        </div>
        <ul class="uploadList" >
            <li v-for="(lis,index) in fileList" :key="index">
                <span class="lisName">{{lis.name}}</span>
                <span v-show="lis.transforReady">{{lis.size | formatSize(lis.size)}}</span>
                <span class="statusBtn" v-show="lis.transforReady">就绪</span>
                <span class="statusTransfor" v-show="lis.transforOver" style="color:#5CB85C;">转换完成</span>
                <span class="statusTransfor" v-show="lis.transforAgain" style="color:#D9534F;">转换失败</span>
                <span class="statusTransfor" v-show="lis.transforIng">正在转换</span>
                <span class="cancel" v-show="lis.transforIng" @click=cancelTransfor(lis) >取消</span> 
                <span class="cancel" v-show="lis.transforAgain" style="background:#0275D8;">重试</span>
                <span class="cancel" v-show="lis.transforOver" style="background:#5CB85C;" e-else>下载</span>
                <img src="../../static/img/delete.png" alt="" class="deleteLis" @click="delteLis(index)">
                <!-- <div class="progress" ref="progress"></div> -->
                <el-progress :percentage="progress" ></el-progress>
            </li>
            <div class="addFdf">
                <file-upload
                    class="btn btn-primary"
                    post-action="http://localhost:3000/users/bar"
                    :multiple="true"
                    :drop="true"
                    :drop-directory="true"
                    v-model="fileList"
                    @input-filter="inputFilter"
                    @input-file="inputFile"
                    ref="upload">
                    选择文件
                </file-upload>

            </div>
        </ul>
        <div class="chooseFileBox">
            <div class="fileTile">选择需要的文件</div>
            <div class="fileName">
                <div @click="chooseFile(1)" :class="{'acClass1': chooseIndex == 1}">
                    <span class="iconFile">
                        <svg class="icon" width="48px" height="48.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M766.1 57.2c-0.8-0.8-1.6-1.4-2.4-2.2l-50-50c-2.8-2.8-8.2-5-12.1-5H286c-58.1 0-105.4 47.2-105.4 105.1v465.5h82.5V105.1c0-12.4 10.5-22.9 22.9-22.9h364.4v152c0 58 47.3 105.1 105.4 105.1h152.4v579.5c0 12.4-10.5 22.9-22.9 22.9H286c-12.4 0-22.9-10.5-22.9-22.9v-57.9h-82.5v57.9c0 58 47.3 105.1 105.4 105.1h599.2c58.1 0 105.4-47.2 105.4-105.1V288.4c0-3.9-2.2-9.3-5-12l-50.2-50c-0.8-0.8-1.5-1.6-2.3-2.4l-167-166.8z m-33.2 177V129.1c0-3.9 2.2-4.8 5-2.1l125.3 125c2.8 2.8 1.8 5-2.1 5H755.8c-12.4 0.1-22.9-10.4-22.9-22.8z" fill="#515151" /><path d="M448.7 124h174.9v40H448.7zM292.1 124H413v113.6H292.1zM448.7 197.6h174.9v40H448.7zM292.1 271.2h331.5v40H292.1zM292.1 344.8h331.5v40H292.1zM292.1 418.4h331.4v40H292.1zM292.1 492h331.4v40H292.1zM874.3 380.8L833.9 532h-35.8l-25.8-98.6c-1.4-5.3-2.2-10.9-2.4-16.7h-0.4c-0.7 6.8-1.6 12.3-2.7 16.7L740.4 532h-37.2l-40.3-151.3h35.4l22.5 102.5c1 4.5 1.7 10.2 2.1 17h0.7c0.3-5.3 1.3-11.2 3-17.5l28.1-102.1H789l25.6 103.3c1 4.1 1.9 9.4 2.4 16h0.5c0.3-5.7 1-11.2 2.2-16.6l22-102.7h32.6zM316.4 665.7c-12.6 0-22.6 4.7-29.8 14.1-7.3 9.4-10.9 21.5-10.9 36.4 0 14.7 3.5 26.7 10.6 36.1 7.1 9.3 16.8 14 29.2 14 12.6 0 22.5-4.5 29.5-13.4 7-9 10.5-21 10.5-36.1 0-15.8-3.4-28.2-10.3-37.4-6.7-9.1-16.3-13.7-28.8-13.7zM178.2 679.3c-9.1-8.4-21-12.6-35.5-12.6h-17.5v98.5h17.6c15.3 0 27.3-4.6 36-13.7s13.1-21.5 13.1-37c0-15-4.5-26.7-13.7-35.2z" fill="#515151" /><path d="M679.7 598.5H68c-15.1 0-27.5 12.3-27.5 27.4v180.6c0 15.1 12.4 27.4 27.5 27.4h611.7c15.1 0 27.5-12.3 27.5-27.4V626c0-15.1-12.4-27.5-27.5-27.5zM203.2 770.3c-15 14.2-34.4 21.2-58.2 21.2H93V640.3h52.2c53.7 0 80.6 24.6 80.6 73.7 0 23.4-7.5 42.2-22.6 56.3z m165.6 1.9c-13.7 14.7-31.7 22-53.9 22-21.7 0-39.3-7.1-52.8-21.3-13.5-14.2-20.3-32.5-20.3-54.9 0-23.7 6.9-43 20.8-57.9 13.8-14.9 32.1-22.3 54.8-22.3 21.6 0 39 7.2 52.2 21.6 13.2 14.4 19.8 32.9 19.8 55.5 0 23.5-6.9 42.6-20.6 57.3z m154.1 13.9c-11 5.4-25.4 8.1-43.1 8.1-22.8 0-40.9-6.8-54.2-20.5-13.4-13.6-20.1-31.8-20.1-54.5 0-23.9 7.5-43.4 22.4-58.6 14.9-15.2 34.2-22.8 57.9-22.8 14.8 0 27.1 1.9 37.1 5.8v31.2c-10.2-6-21.8-9-34.8-9-14.8 0-26.6 4.7-35.4 14.2-8.9 9.4-13.3 21.8-13.3 37 0 14.8 4.2 26.8 12.6 35.8 8.4 9 19.8 13.6 34.1 13.6 13.5 0 25.7-3.3 36.8-9.8v29.5z m109.9 5.5l-27.1-50.2c-1-1.8-2-5.1-3-9.9h-0.4c-0.5 2.3-1.7 5.7-3.5 10.2l-27.2 49.9H533l48.5-75.7-44.3-75.6h39.3l22.6 46.3c1.8 3.8 3.4 7.9 4.7 12.5h0.4c1.4-4.1 3-8.4 5-13l24.9-45.8h36l-45.7 75 46.9 76.3h-38.5z" fill="#515151" /></svg>
                    </span>
                    <span class="iconTxt">
                        Word    
                    </span>    
                </div>
                <div @click="chooseFile(2)" :class="{'acClass2': chooseIndex == 2}">
                   <span class="iconFile">
                        <svg class="icon" width="48px" height="48.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M766.1 57.2c-0.8-0.8-1.6-1.4-2.4-2.2l-50-50c-2.8-2.8-8.2-5-12.1-5H286c-58.1 0-105.4 47.2-105.4 105.1v465.5h82.5V105.1c0-12.4 10.5-22.9 22.9-22.9h364.4v152c0 58 47.3 105.1 105.4 105.1h152.4v579.5c0 12.4-10.5 22.9-22.9 22.9H286c-12.4 0-22.9-10.5-22.9-22.9v-57.9h-82.5v57.9c0 58 47.3 105.1 105.4 105.1h599.2c58.1 0 105.4-47.2 105.4-105.1V288.4c0-3.9-2.2-9.3-5-12l-50.2-50c-0.8-0.8-1.5-1.6-2.3-2.4l-167-166.8z m-33.2 177V129.1c0-3.9 2.2-4.8 5-2.1l125.3 125c2.8 2.8 1.8 5-2.1 5H755.8c-12.4 0.1-22.9-10.4-22.9-22.8z" fill="#515151" /><path d="M835.9 532h-38.3l-27.1-50.2c-1-1.8-2-5.1-3-9.9h-0.4c-0.5 2.3-1.7 5.7-3.5 10.2L736.3 532h-38.6l48.5-75.7-44.2-75.5h39.3l22.6 46.3c1.8 3.8 3.4 7.9 4.7 12.5h0.4c1.4-4.1 3-8.4 5-13l24.9-45.8h36l-45.7 75 46.7 76.2zM538 319v213h-39.9V319zM602.9 228v304H563V228zM474.4 155v377h-39.9V155zM410.7 434v98h-39.9v-98zM347.1 280v252h-39.9V280zM679.7 598.5H68c-15.1 0-27.5 12.3-27.5 27.4v180.6c0 15.1 12.4 27.4 27.5 27.4h611.7c15.1 0 27.5-12.3 27.5-27.4V626c0-15.1-12.4-27.5-27.5-27.5zM219.6 791.6l-27.1-50.2c-1-1.8-2-5.1-3-9.9h-0.4c-0.5 2.3-1.7 5.7-3.5 10.2l-27.2 49.9h-38.6l48.5-75.7-44.3-75.6h39.3l22.6 46.3c1.8 3.8 3.4 7.9 4.7 12.5h0.4c1.4-4.1 3-8.4 5-13l24.9-45.8h36l-45.7 75 46.9 76.3h-38.5z m145.7 0h-88.8V640.3h32.2v124.9h56.5v26.4z m100.1-8.8c-10.3 7.6-24.9 11.4-43.8 11.4-17.3 0-31.5-2.8-42.6-8.4v-32.3c12.2 10.1 26 15.1 41.5 15.1 8.8 0 15.4-1.5 19.8-4.5s6.6-6.9 6.6-11.7c0-4.1-1.8-8-5.3-11.6-3.5-3.6-12.8-8.6-27.8-14.8-23.6-10-35.4-24.6-35.4-43.8 0-14.1 5.4-25 16.1-32.8 10.7-7.8 24.9-11.7 42.5-11.7 14.8 0 27.2 1.9 37.2 5.8v30.3c-10.2-6.9-22-10.4-35.6-10.4-7.9 0-14.3 1.4-19 4.3-4.8 2.9-7.1 6.8-7.1 11.7 0 3.9 1.6 7.5 4.9 10.8 3.3 3.3 11.3 7.7 24.1 13.3 15 6.4 25.4 13.2 31 20.4 5.6 7.2 8.4 15.7 8.4 25.6-0.1 14.6-5.3 25.7-15.5 33.3z m124 8.8l-27.1-50.2c-1-1.8-2-5.1-3-9.9h-0.4c-0.5 2.3-1.7 5.7-3.5 10.2L528 791.6h-38.6l48.5-75.7-44.3-75.6h39.3l22.6 46.3c1.8 3.8 3.4 7.9 4.7 12.5h0.4c1.4-4.1 3-8.4 5-13l24.9-45.8h36l-45.7 75 46.9 76.3h-38.3z" fill="#515151" /></svg>
                    </span>
                    <span class="iconTxt">
                        Excel    
                    </span>
                </div>
                <div @click="chooseFile(3)" :class="{'acClass3': chooseIndex == 3}">
                    <span class="iconFile">
                        <svg class="icon" width="48px" height="48.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M766.1 57.2c-0.8-0.8-1.6-1.4-2.4-2.2l-50-50c-2.8-2.8-8.2-5-12.1-5H286c-58.1 0-105.4 47.2-105.4 105.1v465.5h82.5V105.1c0-12.4 10.5-22.9 22.9-22.9h364.4v152c0 58 47.3 105.1 105.4 105.1h152.4v579.5c0 12.4-10.5 22.9-22.9 22.9H286c-12.4 0-22.9-10.5-22.9-22.9v-57.9h-82.5v57.9c0 58 47.3 105.1 105.4 105.1h599.2c58.1 0 105.4-47.2 105.4-105.1V288.4c0-3.9-2.2-9.3-5-12l-50.2-50c-0.8-0.8-1.5-1.6-2.3-2.4l-167-166.8z m-33.2 177V129.1c0-3.9 2.2-4.8 5-2.1l125.3 125c2.8 2.8 1.8 5-2.1 5H755.8c-12.4 0.1-22.9-10.4-22.9-22.8z" fill="#515151" /><path d="M448.7 124h174.9v40H448.7zM292.1 124H413v113.6H292.1zM448.7 197.6h174.9v40H448.7zM292.1 271.2h331.5v40H292.1zM292.1 344.8h331.5v40H292.1zM292.1 418.4h331.4v40H292.1zM292.1 492h331.4v40H292.1zM874.3 380.8L833.9 532h-35.8l-25.8-98.6c-1.4-5.3-2.2-10.9-2.4-16.7h-0.4c-0.7 6.8-1.6 12.3-2.7 16.7L740.4 532h-37.2l-40.3-151.3h35.4l22.5 102.5c1 4.5 1.7 10.2 2.1 17h0.7c0.3-5.3 1.3-11.2 3-17.5l28.1-102.1H789l25.6 103.3c1 4.1 1.9 9.4 2.4 16h0.5c0.3-5.7 1-11.2 2.2-16.6l22-102.7h32.6zM316.4 665.7c-12.6 0-22.6 4.7-29.8 14.1-7.3 9.4-10.9 21.5-10.9 36.4 0 14.7 3.5 26.7 10.6 36.1 7.1 9.3 16.8 14 29.2 14 12.6 0 22.5-4.5 29.5-13.4 7-9 10.5-21 10.5-36.1 0-15.8-3.4-28.2-10.3-37.4-6.7-9.1-16.3-13.7-28.8-13.7zM178.2 679.3c-9.1-8.4-21-12.6-35.5-12.6h-17.5v98.5h17.6c15.3 0 27.3-4.6 36-13.7s13.1-21.5 13.1-37c0-15-4.5-26.7-13.7-35.2z" fill="#515151" /><path d="M679.7 598.5H68c-15.1 0-27.5 12.3-27.5 27.4v180.6c0 15.1 12.4 27.4 27.5 27.4h611.7c15.1 0 27.5-12.3 27.5-27.4V626c0-15.1-12.4-27.5-27.5-27.5zM203.2 770.3c-15 14.2-34.4 21.2-58.2 21.2H93V640.3h52.2c53.7 0 80.6 24.6 80.6 73.7 0 23.4-7.5 42.2-22.6 56.3z m165.6 1.9c-13.7 14.7-31.7 22-53.9 22-21.7 0-39.3-7.1-52.8-21.3-13.5-14.2-20.3-32.5-20.3-54.9 0-23.7 6.9-43 20.8-57.9 13.8-14.9 32.1-22.3 54.8-22.3 21.6 0 39 7.2 52.2 21.6 13.2 14.4 19.8 32.9 19.8 55.5 0 23.5-6.9 42.6-20.6 57.3z m154.1 13.9c-11 5.4-25.4 8.1-43.1 8.1-22.8 0-40.9-6.8-54.2-20.5-13.4-13.6-20.1-31.8-20.1-54.5 0-23.9 7.5-43.4 22.4-58.6 14.9-15.2 34.2-22.8 57.9-22.8 14.8 0 27.1 1.9 37.1 5.8v31.2c-10.2-6-21.8-9-34.8-9-14.8 0-26.6 4.7-35.4 14.2-8.9 9.4-13.3 21.8-13.3 37 0 14.8 4.2 26.8 12.6 35.8 8.4 9 19.8 13.6 34.1 13.6 13.5 0 25.7-3.3 36.8-9.8v29.5z m109.9 5.5l-27.1-50.2c-1-1.8-2-5.1-3-9.9h-0.4c-0.5 2.3-1.7 5.7-3.5 10.2l-27.2 49.9H533l48.5-75.7-44.3-75.6h39.3l22.6 46.3c1.8 3.8 3.4 7.9 4.7 12.5h0.4c1.4-4.1 3-8.4 5-13l24.9-45.8h36l-45.7 75 46.9 76.3h-38.5z" fill="#515151" /></svg>
                    </span>
                    <span class="iconTxt">
                       PPT    
                    </span>
                </div>
                <div @click="chooseFile(4)" :class="{'acClass4': chooseIndex == 4}">
                    <span class="iconFile">
                        <svg class="icon" width="48px" height="48.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M766.1 57.2c-0.8-0.8-1.6-1.4-2.4-2.2l-50-50c-2.8-2.8-8.2-5-12.1-5H286c-58.1 0-105.4 47.2-105.4 105.1v465.5h82.5V105.1c0-12.4 10.5-22.9 22.9-22.9h364.4v152c0 58 47.3 105.1 105.4 105.1h152.4v579.5c0 12.4-10.5 22.9-22.9 22.9H286c-12.4 0-22.9-10.5-22.9-22.9v-57.9h-82.5v57.9c0 58 47.3 105.1 105.4 105.1h599.2c58.1 0 105.4-47.2 105.4-105.1V288.4c0-3.9-2.2-9.3-5-12l-50.2-50c-0.8-0.8-1.5-1.6-2.3-2.4l-167-166.8z m-33.2 177V129.1c0-3.9 2.2-4.8 5-2.1l125.3 125c2.8 2.8 1.8 5-2.1 5H755.8c-12.4 0.1-22.9-10.4-22.9-22.8z" fill="#515151" /><path d="M448.7 124h174.9v40H448.7zM292.1 124H413v113.6H292.1zM448.7 197.6h174.9v40H448.7zM292.1 271.2h331.5v40H292.1zM292.1 344.8h331.5v40H292.1zM292.1 418.4h331.4v40H292.1zM292.1 492h331.4v40H292.1zM874.3 380.8L833.9 532h-35.8l-25.8-98.6c-1.4-5.3-2.2-10.9-2.4-16.7h-0.4c-0.7 6.8-1.6 12.3-2.7 16.7L740.4 532h-37.2l-40.3-151.3h35.4l22.5 102.5c1 4.5 1.7 10.2 2.1 17h0.7c0.3-5.3 1.3-11.2 3-17.5l28.1-102.1H789l25.6 103.3c1 4.1 1.9 9.4 2.4 16h0.5c0.3-5.7 1-11.2 2.2-16.6l22-102.7h32.6zM316.4 665.7c-12.6 0-22.6 4.7-29.8 14.1-7.3 9.4-10.9 21.5-10.9 36.4 0 14.7 3.5 26.7 10.6 36.1 7.1 9.3 16.8 14 29.2 14 12.6 0 22.5-4.5 29.5-13.4 7-9 10.5-21 10.5-36.1 0-15.8-3.4-28.2-10.3-37.4-6.7-9.1-16.3-13.7-28.8-13.7zM178.2 679.3c-9.1-8.4-21-12.6-35.5-12.6h-17.5v98.5h17.6c15.3 0 27.3-4.6 36-13.7s13.1-21.5 13.1-37c0-15-4.5-26.7-13.7-35.2z" fill="#515151" /><path d="M679.7 598.5H68c-15.1 0-27.5 12.3-27.5 27.4v180.6c0 15.1 12.4 27.4 27.5 27.4h611.7c15.1 0 27.5-12.3 27.5-27.4V626c0-15.1-12.4-27.5-27.5-27.5zM203.2 770.3c-15 14.2-34.4 21.2-58.2 21.2H93V640.3h52.2c53.7 0 80.6 24.6 80.6 73.7 0 23.4-7.5 42.2-22.6 56.3z m165.6 1.9c-13.7 14.7-31.7 22-53.9 22-21.7 0-39.3-7.1-52.8-21.3-13.5-14.2-20.3-32.5-20.3-54.9 0-23.7 6.9-43 20.8-57.9 13.8-14.9 32.1-22.3 54.8-22.3 21.6 0 39 7.2 52.2 21.6 13.2 14.4 19.8 32.9 19.8 55.5 0 23.5-6.9 42.6-20.6 57.3z m154.1 13.9c-11 5.4-25.4 8.1-43.1 8.1-22.8 0-40.9-6.8-54.2-20.5-13.4-13.6-20.1-31.8-20.1-54.5 0-23.9 7.5-43.4 22.4-58.6 14.9-15.2 34.2-22.8 57.9-22.8 14.8 0 27.1 1.9 37.1 5.8v31.2c-10.2-6-21.8-9-34.8-9-14.8 0-26.6 4.7-35.4 14.2-8.9 9.4-13.3 21.8-13.3 37 0 14.8 4.2 26.8 12.6 35.8 8.4 9 19.8 13.6 34.1 13.6 13.5 0 25.7-3.3 36.8-9.8v29.5z m109.9 5.5l-27.1-50.2c-1-1.8-2-5.1-3-9.9h-0.4c-0.5 2.3-1.7 5.7-3.5 10.2l-27.2 49.9H533l48.5-75.7-44.3-75.6h39.3l22.6 46.3c1.8 3.8 3.4 7.9 4.7 12.5h0.4c1.4-4.1 3-8.4 5-13l24.9-45.8h36l-45.7 75 46.9 76.3h-38.5z" fill="#515151" /></svg>
                    </span>
                    <span class="iconTxt">
                        HTML    
                    </span>
                </div>
            </div>
            <div class="xFileBtn">开始转换</div>
        </div>
        <ul class="uploadList" v-show="otherFileList.length" style="margin-bottom:145px;">
            <div class="listTitle">当前并不支持以下格式转换</div>
            <li v-for="(lis,index) in otherFileList" :key="index">
                <span class="lisName">{{lis.name}}</span>
                <span class="statusBtn" style="background:#D9534F;">错误</span>
                <img src="../../static/img/delete.png" alt="" class="deleteLis" @click="delteOtherLis(index)">
            </li>
        </ul>
    </div>
</template>
<script>
    import FileUpload from 'vue-upload-component';
    export default{
        components: {
            FileUpload,
        },
        data() {
            return {
                fileList:[], // 存储pdf类型
                otherFileList:[], //存储非pdf类型文件
                size:0,
                multiple: true, // 多选
                fileName: '',
                current:-1,
                currentShow:-1,
                progress: 0,
                chooseIndex: 0,
            }
        },
        methods:{
            // 选择文件类型
            chooseFile(index){
                this.chooseIndex = index;
            },
            // 删除当前li
            delteLis(index) {
                this.fileList.splice(index,1);
                if(this.fileList.length==0&&this.otherFileList.length==0) {
                    this.$emit('getMsg',true); // 子组件给父组件传递状态
                }
            },
            delteOtherLis(index) {
                 this.otherFileList.splice(index,1);
                 if(this.fileList.length==0&&this.otherFileList.length==0) {
                    this.$emit('getMsg',true); // 子组件给父组件传递状态
                }
            },
            // 文件过滤
            inputFilter(newFile, oldFile, prevent) {
                if (newFile && !oldFile) {
                // 添加文件
                // 过滤非图片文件
                // 不会添加到 files 去
                    if (/\.(jpeg|jpe|jpg|png|webp|html)$/i.test(newFile.name)) {
                        this.otherFileList.push(newFile);
                        return prevent();
                    }
                    newFile.transforReady = true;
                    newFile.transforIng = false; // 上传过程
                    newFile.transforOver = false; //转换完成
                    newFile.transforAgain = false; //重试
                }
            },
            // input-file 事件
            // 上传文件
            inputFile(newFile, oldFile) {
                if (newFile && oldFile) {
                    
                    // update
                    if (newFile.active && !oldFile.active) {
                    // beforeSend
                    // min size
                        if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize) {
                            this.$refs.upload.update(newFile, { error: 'size' })
                        }
                    }
                    if (newFile.progress !== oldFile.progress) {
                    // progress
                    // console.log('progress', newFile.progress, newFile);
                        this.progress = Number(newFile.progress);
                        this.fileList.forEach((e,i)=>{
                            e.transforAgain = false; //重试
                            e.transforReady = false;
                            e.transforIng = true; // 上传过程
                        })
                        console.log(this.fileList);
                    }
                    if (newFile.error && !oldFile.error) {
                        console.log('error');
                        console.log(this.fileList);
                    }
                    if (newFile.success && !oldFile.success) {
                        console.log('success');
                        this.fileList.forEach((e,i)=>{
                            e.transforAgain = false; //重试
                            e.transforReady = false;
                            e.transforIng = false; // 上传过程
                             newFile.transforOver = true; //转换完成
                        })
                    }
                }
                if (!newFile && oldFile) {
                    // remove
                    if (oldFile.success && oldFile.response.id) {
                    // $.ajax({
                    //   type: 'DELETE',
                    //   url: '/upload/delete?id=' + oldFile.response.id,
                    // })
                    }
                }
            },
            // 上传
            submitUpload() { 
                this.$refs.upload.active = true;
            },
            // 取消上传
            cancelTransfor(lis) {
                lis.transforIng = false; // 上传过程
                lis.transforAgain = true; //重试
            },
        },
        filters:{
            formatSize(size) {
            if (size > 1024 * 1024 * 1024 * 1024) {
                return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' TB'
            } else if (size > 1024 * 1024 * 1024) {
                return (size / 1024 / 1024 / 1024).toFixed(2) + ' GB'
            } else if (size > 1024 * 1024) {
                return (size / 1024 / 1024).toFixed(2) + ' MB'
            } else if (size > 1024) {
                return (size / 1024).toFixed(2) + ' KB'
            }
            return size.toString() + ' B'
            }
        }
    }
</script>
<style>
.inputBox{
    height: 300px;
    margin:160px 40px 0;
    border: 1px solid red;
}
.uploadBox{
    width: 100% !important;
    height:300px;
    /* background: #007AEF; */
}
.text-center h4{
    height: 40px;
    font:28px/40px "微软雅黑";
    color: #000;
    margin-top: 10px;
}
.uploadList{
    margin: 30px 0;   
}
.uploadList li{
    width: 100%;
    height: 98px;
    border: 1px solid #e0e0e0;
    font: 18px/98px "微软雅黑";
    color: #333;
    border-radius: 5px;
    position: relative;
    margin-top: -1px;
}
.uploadList li:nth-of-type(1){
    margin-top: 0;
}
.deleteLis{
    height: 25px;
    width: 25px;
}
.uploadList li span:nth-of-type(1){
    margin-left: 5%;
}
.uploadList li span:nth-of-type(2){
        position: absolute;
        right: 28%;
}
.uploadList li img{
    position: absolute;
    top:36px;
    right: 4%;
}
.statusBtn{
    position: absolute;
    right: 54%;
    top: 34px;
}
.statusBtn{
    height: 31px;
    padding: 0 10px;
    background: #0275D8;
    color: #fff;
    border-radius: 3px;
    font: 14px/31px "微软雅黑";
    cursor: pointer;
}
.progress{
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -1px;
    background: red;
}
/* 进度条 */
.el-progress{
    height: 3px;
    position: absolute !important;
    left: 0;
    bottom: 0;
    width: 100%;
    display: block;
    z-index: 9;
}
.el-progress-bar{
    position: absolute !important;
    padding-right: 0 !important;
    left: 0;
}
.el-progress__text{
    display: none !important;
}
.disBox{
    display: block;
}
.el-progress-bar__outer{
    background: transparent !important;
}
.pdf{
    width: 64px;
    height: 64px;
    margin:20px auto;
}
.el-upload__text{
    height: 28px;
    font: 24px/28px "微软雅黑" !important;
    color: #333;
}
.seleTxt{
    margin-top: 30px;
}
.listTitle{
    height: 28px/30px "微软雅黑";
    color: #333;
    text-align: center;
    font-weight: 600;
    margin:20px 0;
}
.lisName{
    overflow: hidden;
}
.fileTransfor{
    width: 200px;
    height: 52px;
    background: #0275D8;
    font:20px/52px "微软雅黑";
    color: #fff;
    text-align: center;
    display: inline-block;
    border-radius: 5px;
    margin-right: 35px;
    cursor: pointer;
    display: inline-block;
    border-radius: 5px;
    float: right;
    margin: 36px;
}
/* .file-uploads{
    position: fixed !important;
    left: 100px;
    bottom: 22px;
    z-index: 11;
    width: 200px;
    height: 52px;
    background: #0275D8;
    font:20px/52px "微软雅黑";
    color: #fff;
    text-align: center;
    display: inline-block;
    border-radius: 5px;
    cursor: pointer;
} */
.clickBtn{
   width: 200px;
    height: 52px;
    background: #fff;
    font:20px/52px "微软雅黑";
    color: #606266;
    text-align: center;
    position: fixed;
    display: inline-block;
    border-radius: 5px;
    left: 256px;
    bottom: 22px;
    z-index: 11;
    border: 1px solid #DCDFE6;
    margin-right: 35px;
}
.el-button--primary span{
    float: left;
    margin-top: -9px;
    margin-left: 40px;
}
.statusTransfor{
    position: absolute;
    right: 50%;
}
.cancel{
    position: absolute;
    right: 20%;
    width: 65px;
    height: 32px;
    background: #FF2968;
    font: 18px/32px "微软雅黑";
    color: #fff;
    text-align: center;
    top: 34px;
    cursor: pointer;
    border-radius: 5px;
}
.isShow{
    display: none;
}
.txtDis{
    font-size: 24px;
    color: #fff;
    text-align: center;
    margin: 120px auto 0;
}
.txtDis2{
    font-size: 24px;
    color: #fff;
    text-align: center;
    margin: 20px auto 0;
    text-decoration: #000;
}
.addFdf{
    width: 100%;
    height: 98px;
    border: 1px solid #e0e0e0;
    font: 18px/98px "微软雅黑";
    color: #333;
    border-radius: 5px;
    position: relative; 
}
.chooseFileBox{
    width: 100%;
    margin: 20px auto 0;
}
.fileTile{
    height: 24px;
    font-size: 24px;
    color: #000;
    text-align: center;
}
.fileName{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;

}
.fileName img{
    height: 100%;
}
.fileName div{
    width: 81px;
    height: 103px;
    margin: 0 20px;
    border: 2px solid #999;
}

.fileName div:nth-of-type(1):hover{
    border: 2px solid #355F9F;
}
.fileName div:nth-of-type(2):hover{
    border: 2px solid #2A784D;
}
.fileName div:nth-of-type(3):hover{
    border: 2px solid #D34C2C;
}
.fileName div:nth-of-type(4):hover{
    border: 2px solid #EF652A;
}
.acClass1{
 border: 2px solid #355F9F !important;   
}
.acClass2{
 border: 2px solid #2A784D !important; 
}
.acClass3{
border: 2px solid #D34C2C !important; 
}
.acClass4{
 border: 2px solid #EF652A !important;
}
.xFileBtn{
    height: 50px;
    width: 200px;
    font: 20px/50px "微软雅黑";
    color: #fff;
    text-align: center;
    margin: 0 auto;
    background: #007AEF;
    margin-bottom: 20px;
}
.iconFile{
    display:block;
    margin:10px auto 0;
    width:48px;
}
.iconTxt{
    width: 100%;
    display: block;
    margin: 20px auto 0;
    text-align: center;
}
</style>
