<template>
  <div class="example-drag">
    <div class="upload">
      <ul v-if="files.length">
        <li v-for="(file) in files" :key="file.id">
          <span>{{file.name}}</span> -
          <span>{{file.size | formatSize(file.size)}}</span> -
          <el-progress :percentage="progress"></el-progress>
          <span v-if="file.error">{{file.error}}</span>
          <span v-else-if="file.success">success</span>
          <span v-else-if="file.active">active</span>
          <span v-else-if="file.active">active</span>
          <span v-else></span>
        </li>
      </ul>
      <ul  style="width:1200px;height:400px;margin:30px auto 0;border:1px solid red;">
          <div class="text-center p-5">
            <h4>拖拽文件<br/>or</h4><label for="file" >选择文件</label>
          </div>
      </ul>
      <div class="example-btn">
        <file-upload
          class="upload"
          post-action="http://localhost:3001/string"
          :multiple="true"
          :drop="true"
          :drop-directory="true"
          v-model="files"
          @input-file="inputFile"
          ref="upload">
          <i class="fa fa-plus"></i>
          Select files
        </file-upload>
        <button type="button" class="btn btn-success" @click.prevent="uploadFile">
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
          Start Upload
        </button>
        <button type="button" class="btn btn-danger" @click.prevent="$refs.upload.active = false">
          <i class="fa fa-stop" aria-hidden="true"></i>
          Stop Upload
        </button>
      </div>
    </div>

  </div>
</template>
<script>
import FileUpload from 'vue-upload-component'
export default {
  components: {
    FileUpload,
  },
  data() {
    return {
      files: [],
      progress: 0,
      minSize: 0,
    }
  },
  mounted() {
    this.getData();
  },
  methods:{
    getData() {
      this.axios.get('http://localhost:3000/json').then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err)
      });
    },
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
        }
        if (newFile.error && !oldFile.error) {
          console.log('error');
          console.log(this.files);
        }
        if (newFile.success && !oldFile.success) {
          console.log('success');
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
    uploadFile() {
      this.$refs.upload.active = true;
    }
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
</style>


