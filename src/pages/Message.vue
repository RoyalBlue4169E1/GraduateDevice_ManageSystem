<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">待审核申请</h4>
            <p class="category"></p>
          </md-card-header>
          <md-card-content>
            <div>
              <md-table v-model="uncheckedApply" :table-header-color="tableHeaderColor">
                <md-table-row slot="md-table-row" slot-scope="{ item }" @click="aaa(item)">

                  <md-table-cell md-label="申请类型">{{ item.applytype }}</md-table-cell>
                  <md-table-cell md-label="申请人">{{ item.name }}</md-table-cell>
                  <md-table-cell md-label="申请人所属实验室">{{ item.lab }}</md-table-cell>
                  <md-table-cell md-label="导师">{{ item.tutor }}</md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </md-card-content>
        </md-card>

        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">已审核申请</h4>
            <p class="category"></p>
          </md-card-header>
          <md-card-content>
            <div>
              <md-table v-model="checkedApply" :table-header-color="tableHeaderColor">
                <md-table-row slot="md-table-row" slot-scope="{ item }" @click="aaa(item)">

                  <md-table-cell md-label="申请类型">{{ item.applytype }}</md-table-cell>
                  <md-table-cell md-label="申请人">{{ item.name }}</md-table-cell>
                  <md-table-cell md-label="申请人所属实验室">{{ item.lab }}</md-table-cell>
                  <md-table-cell md-label="导师">{{ item.tutor }}</md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </md-card-content>
        </md-card>

      </div>
      <div id="dialog">
        <md-dialog :md-active.sync="showDialog">
          <!--将弹出对话窗写成通用组件 且传进申请信息并显示-->

          <md-tab>
            <apply-form :apply="showApply"></apply-form>

            <md-dialog-actions>
              <md-button class="md-primary" @click="showDialog = false">取消</md-button>
              <!--窗口消失速度过快，写成组件用组件过渡动画-->
              <md-button class="md-primary" @click="showDialog = false">通过申请</md-button>
              <!--通过后要向后端提交结果 然后进行下一步操作（研究生提交申请->导师审核->实验室管理员审核）-->
            </md-dialog-actions>

          </md-tab>

        </md-dialog>
      </div>

    </div>
  </div>

</template>


<!--############     待完成功能        ###########-->
<!--   1.-->


<script>
import ApplyForm from '../components/Form/ApplyForm';

export default {
  components:{
    ApplyForm
  },

  data () {
    return {
      showDialog: false,
      showApply: null,
      selected: [],
      uncheckedApply: [
        {
          applytype: "借用",
          name: "李小华",
          lab: "网安实验室",
          tutor: "小明",
          showDialog: true
        },
        {
          applytype: "归还",
          name: "李小华",
          lab: "网安实验室",
          tutor: "小明"
        },
        {
          applytype: "借用",
          name: "李小华",
          lab: "网安实验室",
          tutor: "小明"
        },
        {
          applytype: "借用",
          name: "李小华",
          lab: "网安实验室",
          tutor: "小明"
        },
        {
          applytype: "借用",
          name: "李小华",
          lab: "网安实验室",
          tutor: "小明"
        },
        {
          applytype: "借用",
          name: "李小华",
          lab: "网安实验室",
          tutor: "小明"
        }
      ],
      checkedApply:[
        {
          applytype: "借用",
          name: "大华",
          lab: "网安实验室",
          tutor: "小明"
        },
        {
          applytype: "借用",
          name: "李小华",
          lab: "网安实验室",
          tutor: "小明"
        },
        {
          applytype: "借用",
          name: "李小华",
          lab: "网安实验室",
          tutor: "小明"
        },
        {
          applytype: "借用",
          name: "李小华",
          lab: "网安实验室",
          tutor: "小明"
        },
      ]

    };
  },
  methods: {
    aaa: function (item) {
      this.showDialog = true
      this.showApply = item
    }
  }

};

</script>
<style lang="scss" scoped>
.md-dialog {
	max-width: 700px;
}
</style>