<!--
  ~ Copyright (C) 2018-2019
  ~ All rights reserved, Designed By www.dingyangmall.com
  ~ 注意：
  ~ 本软件为www.dingyangmall.com开发研制，项目使用请保留此说明
  -->
<template>
  <div class="execution">
    <basic-container>
      <avue-crud ref="crud"
                 :page="page"
                 :data="tableData"
                 :permission="permissionList"
                 :table-loading="tableLoading"
                 :option="tableOption"
                 @on-load="getList"
                 @refresh-change="refreshChange"
                 @row-update="rowUpdate"
                 @row-save="rowSave"
                 @row-del="rowDel"
                 @search-change="searchChange">
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
  import {getPage, getObj, addObj, putObj, delObj} from '@/api/mall/integralRule'
  import {tableOption} from '@/const/crud/mall/integralRule'
  import {mapGetters} from 'vuex'

  export default {
    name: 'integralRule',
    data() {
      return {
        tableData: [],
        page: {
          total: 0, // 总页数
          currentPage: 1, // 当前页数
          pageSize: 20 // 每页显示多少条
        },
        tableLoading: false,
        tableOption: tableOption
      }
    },
    computed: {
      ...mapGetters(['permissions']),
      permissionList() {
        return {
          addBtn: this.permissions['mall:integralrule:add'] ? true : false,
          delBtn: this.permissions['mall:integralrule:del'] ? true : false,
          editBtn: this.permissions['mall:integralrule:edit'] ? true : false
        };
      }
    },
    methods: {
      getList(page, params) {
        this.tableLoading = true
        getPage(Object.assign({
          current: page.currentPage,
          size: page.pageSize
        }, params)).then(response => {
          this.tableData = response.data.data.records
          this.page.total = response.data.data.total
          this.tableLoading = false
        }).catch(() => {
          this.tableLoading = false
        })
      },
      rowDel: function (row, index) {
        var _this = this
        this.$confirm('是否确认删除ID为' + row.id, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          return delObj(row.id)
        }).then(data => {
          _this.$message({
            showClose: true,
            message: '删除成功',
            type: 'success'
          })
          this.refreshChange()
        })
      },
      rowUpdate: function (row, index, done, loading) {
        putObj(row).then(data => {
          this.$message({
            showClose: true,
            message: '修改成功',
            type: 'success'
          })
          done()
          this.refreshChange()
        }).catch(() => {
          loading()
        })
      },
      rowSave: function (row, done, loading) {
        addObj(row).then(data => {
          this.$message({
            showClose: true,
            message: '添加成功',
            type: 'success'
          })
          done()
          this.refreshChange()
        }).catch(() => {
          loading()
        })
      },
      searchChange(params, done) {
        this.page.currentPage = 1
        this.getList(this.page, params)
        done()
      },
      refreshChange() {
        this.getList(this.page)
      }
    }
  }
</script>
