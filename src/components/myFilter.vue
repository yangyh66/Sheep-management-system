<template>
  <div class="filter">
    <div class="block">
      <el-date-picker
        v-model="dateValue"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions">
      </el-date-picker>
      <el-button type="primary" icon="el-icon-search">查询</el-button>
    </div>
    <el-checkbox-group v-model="checkList" @change="checkChange">
      <el-checkbox label="EssentialInfo">基本信息</el-checkbox>
      <el-checkbox label="PersonalInfo">个人信息</el-checkbox>
      <el-checkbox label="WorkInfo">工作信息</el-checkbox>
      <el-checkbox label="ContactInfo">联系人信息</el-checkbox>
      <el-checkbox label="OtherInfo">其他信息</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
  export default {
    name: "myFilter",
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        dateValue: '',
        checkList: ['EssentialInfo','PersonalInfo','WorkInfo','ContactInfo','OtherInfo']
      };
    },
    created(){
//      调用初始化的日期
      this.dateValue=this.InitializationDate()
    },
    methods:{
      checkChange(){
        console.log(this.checkList)
      },

      InitializationDate(){
        //      初始化日期
        let nowDate = new Date()
        let lastDate = new Date(nowDate.getFullYear()+'-'+nowDate.getMonth()+'-'+nowDate.getDate());
        return [lastDate,nowDate]
      }
    }

  }
</script>
<style lang="scss">
  .filter {
    float: left;
    min-height: 100px;
    width: 90%;
    background: white;
    position: relative;
  }
  .block{
    display: inline-block;
    position: absolute;
    top: 30px;
    left: 60px;
  }
  .el-checkbox-group{
    position: absolute;
    top: 40px;
    left: 540px;
    display: inline-block;
  }
</style>
