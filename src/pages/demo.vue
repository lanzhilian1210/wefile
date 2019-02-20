<template>
    <div class="inputBox">
        <div class="uploadBox" :class="{'upload_active':isPdf==true}"> 
            <el-upload
                class="upload-demo"
                drag
                ref="upload"
                :auto-upload="true"
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
                :on-error="handleError"
                :file-list="fileNewList"
                :on-success="handleSuccess"
                :on-change="handleChange"
                :on-progress="handleProgress"
                :on-remove="handleRemove"
                :action="host"
                :data="ossParams"
                :multiple="multiple"
                >
        <!-- multiple -->
                <div class="tips" v-show="isPdf">
                    <span><svg class="icon" width="48px" height="48.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M513.550821 60.225663c-248.290923 0-449.579345 201.299679-449.579345 449.625394 0 248.296039 201.288422 449.594695 449.579345 449.594695 248.285806 0 449.640744-201.299679 449.640744-449.594695C963.192587 261.525342 761.836627 60.225663 513.550821 60.225663zM513.671571 917.673369c-225.166249 0-407.696446-182.53736-407.696446-407.706679S288.505321 102.254895 513.671571 102.254895c225.173412 0 407.703609 182.541453 407.703609 407.710772S738.844983 917.673369 513.671571 917.673369z" fill="#FFCC00" /><path d="M366.566188 453.597869c0 7.726985-9.204639 13.995759-20.559245 13.995759l0 0c-11.347442 0-20.551058-6.268774-20.551058-13.995759L325.455885 336.364841c0-7.726985 9.204639-13.995759 20.551058-13.995759l0 0c11.354606 0 20.559245 6.268774 20.559245 13.995759L366.566188 453.597869z" fill="#FFCC00" /><path d="M701.708178 453.597869c0 7.726985-9.203616 13.995759-20.560268 13.995759l0 0c-11.346419 0-20.550035-6.268774-20.550035-13.995759L660.597875 336.364841c0-7.726985 9.203616-13.995759 20.550035-13.995759l0 0c11.356652 0 20.560268 6.268774 20.560268 13.995759L701.708178 453.597869z" fill="#FFCC00" /><path d="M786.034748 516.844332c-8.266267 146.885372-126.999462 265.030166-272.453229 265.030166-145.459906 0-264.189008-118.144794-272.455275-265.030166l-46.750767 0c5.372358 171.733293 146.171104 309.314765 319.206042 309.314765 173.028798 0 313.831638-137.580448 319.203996-309.314765L786.034748 516.844332z" fill="#FFCC00" /></svg></span>
                    <div style="margin-left:20px;">
                      <p style="font-size:20px;color:#222;">所选文件不是PDF、Office常用格式</p>
                      <p style="margin:10px 0;color:#222;">当前只支持以上格式相互转换</p>
                      <P style="color:#007aef">重新选择</p>
                    </div>
                </div>
                <div class="tips" v-show="istoken">
                    <span><svg class="icon" width="48px" height="48.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M513.550821 60.225663c-248.290923 0-449.579345 201.299679-449.579345 449.625394 0 248.296039 201.288422 449.594695 449.579345 449.594695 248.285806 0 449.640744-201.299679 449.640744-449.594695C963.192587 261.525342 761.836627 60.225663 513.550821 60.225663zM513.671571 917.673369c-225.166249 0-407.696446-182.53736-407.696446-407.706679S288.505321 102.254895 513.671571 102.254895c225.173412 0 407.703609 182.541453 407.703609 407.710772S738.844983 917.673369 513.671571 917.673369z" fill="#FFCC00" /><path d="M366.566188 453.597869c0 7.726985-9.204639 13.995759-20.559245 13.995759l0 0c-11.347442 0-20.551058-6.268774-20.551058-13.995759L325.455885 336.364841c0-7.726985 9.204639-13.995759 20.551058-13.995759l0 0c11.354606 0 20.559245 6.268774 20.559245 13.995759L366.566188 453.597869z" fill="#FFCC00" /><path d="M701.708178 453.597869c0 7.726985-9.203616 13.995759-20.560268 13.995759l0 0c-11.346419 0-20.550035-6.268774-20.550035-13.995759L660.597875 336.364841c0-7.726985 9.203616-13.995759 20.550035-13.995759l0 0c11.356652 0 20.560268 6.268774 20.560268 13.995759L701.708178 453.597869z" fill="#FFCC00" /><path d="M786.034748 516.844332c-8.266267 146.885372-126.999462 265.030166-272.453229 265.030166-145.459906 0-264.189008-118.144794-272.455275-265.030166l-46.750767 0c5.372358 171.733293 146.171104 309.314765 319.206042 309.314765 173.028798 0 313.831638-137.580448 319.203996-309.314765L786.034748 516.844332z" fill="#FFCC00" /></svg></span>
                    <div style="margin-left:20px;">
                      <p style="font-size:20px;color:#222;">同时上传多个文件仅限专业版用户</p>
                      <p style="margin:10px 0;color:#222;">注册即送专业版次数</p>
                      <P style="color:#007aef" @click="reLogin($event)">登录/注册</p>
                    </div>
                </div>
                <div class="tips" v-show="isSize">
                    <span><svg class="icon" width="48px" height="48.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M513.550821 60.225663c-248.290923 0-449.579345 201.299679-449.579345 449.625394 0 248.296039 201.288422 449.594695 449.579345 449.594695 248.285806 0 449.640744-201.299679 449.640744-449.594695C963.192587 261.525342 761.836627 60.225663 513.550821 60.225663zM513.671571 917.673369c-225.166249 0-407.696446-182.53736-407.696446-407.706679S288.505321 102.254895 513.671571 102.254895c225.173412 0 407.703609 182.541453 407.703609 407.710772S738.844983 917.673369 513.671571 917.673369z" fill="#FFCC00" /><path d="M366.566188 453.597869c0 7.726985-9.204639 13.995759-20.559245 13.995759l0 0c-11.347442 0-20.551058-6.268774-20.551058-13.995759L325.455885 336.364841c0-7.726985 9.204639-13.995759 20.551058-13.995759l0 0c11.354606 0 20.559245 6.268774 20.559245 13.995759L366.566188 453.597869z" fill="#FFCC00" /><path d="M701.708178 453.597869c0 7.726985-9.203616 13.995759-20.560268 13.995759l0 0c-11.346419 0-20.550035-6.268774-20.550035-13.995759L660.597875 336.364841c0-7.726985 9.203616-13.995759 20.550035-13.995759l0 0c11.356652 0 20.560268 6.268774 20.560268 13.995759L701.708178 453.597869z" fill="#FFCC00" /><path d="M786.034748 516.844332c-8.266267 146.885372-126.999462 265.030166-272.453229 265.030166-145.459906 0-264.189008-118.144794-272.455275-265.030166l-46.750767 0c5.372358 171.733293 146.171104 309.314765 319.206042 309.314765 173.028798 0 313.831638-137.580448 319.203996-309.314765L786.034748 516.844332z" fill="#FFCC00" /></svg></span>
                    <div style="margin-left:20px;">
                      <p style="font-size:20px;color:#222;">转换10M以上文件为专业版功能</p>
                      <p style="margin:10px 0;color:#222;">注册即送专业版次数</p>
                      <P style="color:#007aef" @click="reLogin($event)">登录/注册</p>
                    </div>
                </div>
                <div class="text_file1" v-show="!isPdf">将PDF文件和Office文件相互转换</div>
                <div class="text_file2" v-show="!isPdf">选择文件</div>
            </el-upload>               
        </div>
        <ul class="fileList">
            <li v-for="(item,index) in fileNewList" :key="index" @mouseenter="handleEnter(index)" @mouseleave="handleLeave(index)">
                <div class="progress" :style="{'width':progress+'%'}"></div>
                <img src="../../static/img/word.png" alt="">
                <span v-show="!fileSuccess">{{item.name}}</span>
                <span v-show="fileSuccess">{{newFileName}}</span>
                <img src="../../static/img/delete.png" class="delete"  v-show="!isTransforSuccess" @click="deleteLis(index)" :class="{'deleteActive': isDisplayDel === index}">
                <a v-show="isTransforSuccess" class="fileTransTxt" ref="transfor" :href="newFile" :download="newFileName">文件转换中...</a>
                <!-- <a v-show="!isTransforSuccess" class="fileTransTxt" :href="newFile" download="文件.docx">转换完成</a> -->
            </li>
        </ul>
        <!-- 选择转换目标文件 -->
        <div class="chooseFileBox" v-show="fileNewList.length">
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
            <div class="xFileBtn" @click="handleTransfor">开始转换</div>
        </div>
        <!-- <div @click="submitUpload">上传至服务器</div> -->
    </div>
</template>
<script>
import $ from "jquery";
    export default{
        data() {
            return {
                fileNewList:[],// 存储pdf类型
                otherFileList:[], //存储非pdf类型文件
                isDisplayDel:-1,
                progress: 0,
                chooseIndex: 0,
                hasChooseFileBox:false,
                host:'', // oss 地址
                dir: '',
                expire:'',
                ossParams:{
                    'success_action_status': '200', // 默认200
                    'signature': '',
                    'policy':'',
                    'OssAccessKeyId': '',
                    'key':'',
                    'callback':'',
                },
                istoken:false,
                isPdf:false, //是pdf类型文件
                isSize:false, //文件大小
                fileType:'word', // 需转换的文件类型
                fileName:'', // 文件名称
                named:'', //文件类型
                isTransforSuccess:false, //文件转换中
                jobId:'', 
                timer:null,
                newFile:'', // 新文件路径
                newFileName:'',
                fileSuccess:false, //文件名称未改变前
                multiple:true,
                transforFileName:[]
            }
        },
        updated() {
            // console.log(this.$refs.transfor,1);
        },
        mounted() {  
            this.getOssSign(); // 获取后端给的签名
            this.token = sessionStorage.getItem('token');
            if(!this.fileNewList.length){
                this.$emit('getMsg',true); // 子组件给父组件传递状态
            }
            // $('.el-upload-dragger').css('background','red');
            
        },
        methods:{
            reLogin(ev) {
                ev.stopPropagation();
                this.$router.push('./login');
            },
                        // 选择文件类型
            chooseFile(index){
                this.chooseIndex = index;
                if(index == 1) {
                    this.fileType = 'docx';
                }
                if(index == 2) {
                    this.fileType = 'xlsx';
                }
                if(index == 3) {
                    this.fileType = 'pptx';
                }
                if(index == 4) {
                    this.fileType = 'html';
                }
            },
            handleEnter(index){
                this.isDisplayDel = index;
            },
            handleLeave(index){
                this.isDisplayDel = -1;
            },
            // 删除
            deleteLis(index) {
                this.fileNewList.splice(index,1);
                if(this.fileNewList.length == 0&&this.otherFileList.length == 0) {
                  this.$emit('getMsg',true); 
                }
            },
            deleteOtherLis(index) {
                this.otherFileList.splice(index,1);
                if(this.otherFileList.length == 0&&this.fileNewList.length == 0) {
                  this.$emit('getMsg',true); 
                }
            },
            // 获取oss签名
            getOssSign() {
                this.axios.get('/upload/sign').then(res=>{
                    this.host = 'http://' + res.data.data.host;
                    this.ossParams.OssAccessKeyId = res.data.data.accessid;
                    this.dir = res.data.data.dir;
                    this.ossParams.signature = res.data.data.signature;
                    this.ossParams.callback = res.data.data.callback;
                    this.ossParams.policy = res.data.data.policy;
                    this.expire = res.data.data.expire;
                }).catch(err=>{
                    console.log(err)
                })
            },
            handleProgress(event, file, fileList){
                fileList.forEach((e,i)=>{
                    // console.log(e.percentage);
                    this.progress = e.percentage;
                })
            },
            beforeAvatarUpload(file) {
                this.getOssSign(); // 上传之前获取后端给的签名 
                let index = file.name.lastIndexOf("\.");
                this.named = file.name.substring(index+1,file.name.length); 
                // 非pdf类型文件不能上传
                if(this.named != 'pdf') {
                    this.$message({
                        type: 'warning',
                        message: '请上传pdf类型的文件'
                        });
                    return false;
                }
                this.ossParams.key = this.dir + file.name;   
            },
            // 文件上传change事件
            handleChange(file, fileList){
                this.progress = 0;
                // console.log('change');
                let token = sessionStorage.getItem('token');  // token验证
                let size = file.size/1024/1024;
                // 超过10M的文件处理
                // if( size> 10 ) {
                //     this.isSize = true;
                //     $('.uploadBox').css('background','#fff');
                //     $('.el-upload-dragger').css('background','#fff');
                //     return false;
                // }
                fileList.forEach((e,i)=>{
                    let index = e.name.lastIndexOf("\.");
                    this.named = e.name.substring(index+1,e.name.length);
                    
                    
                    if(this.named == 'pdf') {
                      this.fileName = e.name; 
                      this.isPdf = false;
                      $('.el-upload-dragger').css('background','#007aef');
                      this.$emit('getMsg',false); // 子组件给父组件传递状态 //下面内容消失
                        if(this.fileNewList.indexOf(e) == -1) {
                            this.fileNewList.push(e);
                            this.transforFileName.push({
                                countName:e.name.substring(0,index),
                                fileName:e.name
                            });
                        }
                    } else {
                      this.isPdf = true;
                      $('.el-upload-dragger').css('background','#fff');
                    }
                    
                });
                if(this.fileNewList.length>1) {
                    if(token == null) {
                        this.istoken = true;
                        $('.uploadBox').css('background','#fff');
                        $('.el-upload-dragger').css('background','#fff');
                        this.fileNewList = [];
                        this.$emit('getMsg',true); // 子组件给父组件传递状态 
                        return false;
                    } else {
                        this.$emit('getMsg',false); // 子组件给父组件传递状态 //下面内容消失
                    } 
                }   
                //  console.log(this.fileNewList,'pdf');
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handleSuccess(response, file, fileList){
                // console.log(file,'file');
                 fileList.forEach((e,i)=>{
                    this.progress = e.percentage;
                })
               this.$message.success('上传成功');
            },
            getFileStatus() {
                // this.axios.get('').then().catch();
            },
            // 上传失败
            handleError(err, file, fileList){
                console.log('err',file );
                this.$message.warning('上传功能出了点问题，请重试');
            },
            // 上传文件至服务器
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleTransfor(){
                let fileData = [];
                this.transforFileName.forEach((e,i)=>{
                    fileData.push({
                        source_url:'https://converter-input.oss-cn-beijing.aliyuncs.com/files/'+e.fileName,
                        to:e.countName +'.'+ this.fileType,
                        form:e.fileName
                    })
                })
                let data = {
                    source_type:this.named,
                    dest_type:this.fileType,
                    files:[
                    ]
                };
                data.files = fileData;
                console.log(data)
                this.axios.post('/user/jobcreate',data).then(res=>{
                    console.log(res.data);
                    if(res.data.code == 200) {
                        this.isTransforSuccess = true;
                        this.jobId = res.data.data.Id;
                        this.timer = setInterval(()=>{
                            this.getTransforStatus();
                        },5000)
                    }
                }).catch(err=>{
                    console.log(err);
                });
            },
            getTransforStatus() {
                this.axios.get(`/user/jobprocess?id=${this.jobId}`).then(res=>{
                    if(res.data.code == 200) {
                        console.log(res.data.data);
                        if(res.data.data.job_status == 3) {
                            this.newFile = res.data.data.dest_url;
                            // console.log(this.newFile,'完成');
                            this.isTransforSuccess = true;
                            this.fileSuccess = true;
                            this.$nextTick(()=>{
                                // console.log($('.fileTransTxt'))
                                $('.fileTransTxt').html('请下载');
                                
                            });
                            this.newFileName = res.data.data.to+'.'+ res.data.data.dest_type;
                            console.log(this.newFileName);
                            clearInterval(this.timer);
                        }
                        if(res.data.data.job_status == 2) {
                            console.log('文件转换中');
                        }
                    }
                }).catch(err=>{
                    console.log(err);
                })
            }
        },
    }
</script>
<style>
.progress{
    height: 1px;
    width: 100%;
    background:#007AEF;
    position: absolute;
    left: 0;
    top: 0;
}
.inputBox{
    margin:160px 40px 0;
}
.uploadBox{
    width: 100% !important;
    height:300px;
    border: 1px solid #ccc;
    background: #007aef;
}
.upload_active{
  background:#fff;
  border: 1px solid #007aef;
}
.text-center h4{
    height: 40px;
    font:28px/40px "微软雅黑";
    color: #000;
    margin-top: 10px;
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
.fileList{
    width: 100%;
    background: #f3f3f3;
    margin-top: 30px;
}
.fileList li{
    height: 80px;
    width: 100%;
    position: relative;
    margin-bottom: 10px;
}
.fileList li img:nth-of-type(1){
    width: 30px;
    margin-top: 20px;
    margin-left: 30px;
     float: left;
}
.fileList li span:nth-of-type(1){
    font-size: 18px;
    line-height: 80px;
    margin-left: 20px;
    color: #222;
    float: left;
}
.fileList li span:nth-of-type(2){
    font-size: 18px;
    line-height: 80px;
    margin-left: 20px;
    color: #222;
    float: left;
}
.delete{
    height: 24px;
    float: right;
    margin-top: 28px;
    margin-right: 30px;
    display: none;
}
.deleteActive{
    display: block;
}
.upload-demo{
  height: 280px;
    margin: 10px;
    border: 1px dashed #ccc;
    position:relative;
}
.tips{
  margin:100px auto 0;
  display:flex;
  justify-content:center;
  align-items:center;
}
.el-upload,.el-upload-dragger{
  height: 100%;
  width: 100%;
}
.el-upload-dragger{
  background:#007aef;
}
.el-upload-dragger-active{
  background:#007aef;
}
.el-upload-list__item{
  height: 60px;
  line-height: 60px;
  font-size: 16px;
}
.el-icon-close{
  font-size: 20px;
  top: 20px !important;
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
.text_file1{
    font-size: 24px;
    margin: 120px auto 0;
    text-align: center;
    color: #fff;
}
.text_file2{
    font-size: 24px;
    margin: 20px auto 0;
    text-align: center;
    color: #fff;
}
.fileTransTxt{
    float: right;
    line-height: 80px;
    font-size: 18px;
    margin-right: 20px;
    color: #222;
}
.delteActive{
    opacity: 0;
}
</style>
