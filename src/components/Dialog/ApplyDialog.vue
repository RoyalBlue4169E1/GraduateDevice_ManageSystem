<template>
  <div>
    <md-dialog :md-active.sync="apply.showDialog">                                              <!--将弹出对话窗写成通用组件 且传进申请信息并显示-->
      <md-dialog-title>{{apply.applytype}}</md-dialog-title>
      
      

        <md-tab>
          <apply-form></apply-form>

          <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog = false">取消</md-button>              <!--窗口消失速度过快，写成组件用组件过渡动画-->
            <md-button class="md-primary" @click="showDialog = false">通过申请</md-button>          <!--通过后要向后端提交结果 然后进行下一步操作（研究生提交申请->导师审核->实验室管理员审核）-->
          </md-dialog-actions>

        </md-tab>

      </md-dialog>

  </div>
</template>

<script>
import ApplyForm from "../Form/ApplyForm.vue"
  export default {
    components: {
      ApplyForm
    },
    name: 'ApplyDialog',
    data: () => ({
      showDialog: false
    }),
    propos:['apply']

  }
</script>

<style lang="scss" scoped>
  .md-dialog {
    max-width: 768px;
  }
</style>