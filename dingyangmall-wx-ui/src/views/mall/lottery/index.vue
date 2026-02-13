<template>
  <div class="execution">
    <basic-container>
      <el-tabs v-model="activeName">
        <el-tab-pane label="抽奖配置" name="config">
          <el-form ref="configForm" :model="configForm" label-width="120px" :rules="configRules">
            <el-divider content-position="left">基础设置</el-divider>
            <el-row>
              <el-col :span="12">
                <el-form-item label="开启状态" prop="status">
                  <el-switch v-model="configForm.status" active-value="1" inactive-value="0"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="未中奖概率(%)" prop="noPrizeProbability">
                  <el-input-number v-model="configForm.noPrizeProbability" :precision="2" :step="0.1" :min="0" :max="100"></el-input-number>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="单次消耗积分" prop="costPoints">
                  <el-input-number v-model="configForm.costPoints" :min="0" :step="1"></el-input-number>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="每日抽奖上限" prop="dailyLimit">
                  <el-input-number v-model="configForm.dailyLimit" :min="0" :step="1"></el-input-number>
                </el-form-item>
              </el-col>
            </el-row>

            <el-divider content-position="left">奖品设置 (概率总和 + 未中奖概率 应为 100%)</el-divider>
            <el-button type="primary" icon="el-icon-plus" size="small" @click="handleAddPrize" style="margin-bottom: 10px;">添加奖品</el-button>
            
            <el-table :data="configForm.prizeList" border style="width: 100%">
              <el-table-column label="排序" width="80">
                <template slot-scope="scope">
                  <el-input-number v-model="scope.row.sortOrder" size="small" :min="0" controls-position="right"></el-input-number>
                </template>
              </el-table-column>
              <el-table-column label="奖品类型" width="120">
                <template slot-scope="scope">
                  <el-select v-model="scope.row.prizeType" size="small" @change="handleTypeChange(scope.row)">
                    <el-option label="实物/商品" value="0"></el-option>
                    <el-option label="积分" value="1"></el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column label="奖品内容" min-width="200">
                <template slot-scope="scope">
                  <div v-if="scope.row.prizeType === '1'">
                    <el-input-number v-model="scope.row.pointAmount" size="small" :min="1" placeholder="积分数量"></el-input-number> 积分
                  </div>
                  <div v-else>
                    <el-select
                      v-model="scope.row.goodsId"
                      filterable
                      remote
                      reserve-keyword
                      placeholder="请输入商品名称搜索"
                      :remote-method="queryGoods"
                      :loading="loadingGoods"
                      size="small"
                      @change="(val) => handleGoodsChange(val, scope.row)">
                      <el-option
                        v-for="item in goodsOptions"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                      </el-option>
                    </el-select>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="展示名称" width="150">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.prizeName" size="small" placeholder="展示名称"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="中奖概率(%)" width="120">
                <template slot-scope="scope">
                  <el-input-number v-model="scope.row.probability" size="small" :precision="2" :step="0.1" :min="0" :max="100"></el-input-number>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="80" align="center">
                <template slot-scope="scope">
                  <el-button type="text" icon="el-icon-delete" class="red-btn" @click="handleRemovePrize(scope.$index)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>

            <div style="margin-top: 20px; text-align: center;">
              <el-button type="primary" @click="submitConfig" :loading="configLoading">保存配置</el-button>
            </div>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="抽奖记录" name="record">
          <avue-crud ref="crud"
                     :page.sync="page"
                     :data="tableData"
                     :table-loading="tableLoading"
                     :option="tableOption"
                     @on-load="getList"
                     @search-change="searchChange"
                     @refresh-change="refreshChange">
          </avue-crud>
        </el-tab-pane>
      </el-tabs>
    </basic-container>
  </div>
</template>

<script>
import { getConfig, saveConfig, getRecordPage } from '@/api/mall/lottery'
import { getPage as getGoodsPage } from '@/api/mall/goodsspu'

export default {
  name: 'Lottery',
  data() {
    return {
      activeName: 'config',
      // Config
      configLoading: false,
      configForm: {
        id: null,
        status: '0',
        costPoints: 10,
        dailyLimit: 3,
        noPrizeProbability: 50,
        prizeList: []
      },
      configRules: {
        costPoints: [{ required: true, message: '请输入单次消耗积分', trigger: 'blur' }],
        dailyLimit: [{ required: true, message: '请输入每日抽奖上限', trigger: 'blur' }]
      },
      loadingGoods: false,
      goodsOptions: [],
      
      // Record
      page: {
        total: 0,
        currentPage: 1,
        pageSize: 10
      },
      tableLoading: false,
      tableData: [],
      tableOption: {
        border: true,
        index: true,
        indexLabel: '序号',
        stripe: true,
        menuAlign: 'center',
        align: 'center',
        addBtn: false,
        editBtn: false,
        delBtn: false,
        column: [
          {
            label: '用户ID',
            prop: 'userId',
            search: true
          },
          {
            label: '中奖状态',
            prop: 'isWin',
            type: 'select',
            dicData: [
              { label: '未中奖', value: '0' },
              { label: '已中奖', value: '1' }
            ],
            search: true
          },
          {
            label: '奖品名称',
            prop: 'prizeName'
          },
          {
            label: '奖品类型',
            prop: 'prizeType',
            type: 'select',
            dicData: [
              { label: '商品', value: '0' },
              { label: '积分', value: '1' }
            ]
          },
          {
            label: '消耗积分',
            prop: 'costPoints'
          },
          {
            label: '发放状态',
            prop: 'grantStatus',
            type: 'select',
            dicData: [
              { label: '待发放', value: '0' },
              { label: '已发放', value: '1' }
            ]
          },
          {
            label: '抽奖时间',
            prop: 'createTime',
            width: 160
          }
        ]
      }
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      getConfig().then(response => {
        if (response.data.data) {
          this.configForm = response.data.data
          // Ensure prizeList exists
          if (!this.configForm.prizeList) {
            this.configForm.prizeList = []
          }
          // Pre-load goods info if needed (for display)
          // Actually el-select might need options to display label correctly if it's ID
          // We can push existing goods to goodsOptions
          this.configForm.prizeList.forEach(prize => {
            if (prize.prizeType === '0' && prize.goodsId) {
              this.goodsOptions.push({
                id: prize.goodsId,
                name: prize.prizeName // Use prizeName as temp goods name or fetch real name?
                // Better to fetch or just trust prizeName if set
              })
            }
          })
        }
      })
    },
    // Config Methods
    handleAddPrize() {
      this.configForm.prizeList.push({
        sortOrder: 0,
        prizeType: '0', // Default goods
        goodsId: '',
        pointAmount: 0,
        prizeName: '',
        probability: 0
      })
    },
    handleRemovePrize(index) {
      this.configForm.prizeList.splice(index, 1)
    },
    handleTypeChange(row) {
      row.goodsId = ''
      row.pointAmount = 0
      row.prizeName = ''
    },
    queryGoods(query) {
      if (query !== '') {
        this.loadingGoods = true
        getPage({
          current: 1,
          size: 20,
          name: query,
          shelf: '1' // Only shelved goods
        }).then(response => {
          this.loadingGoods = false
          this.goodsOptions = response.data.data.records
        })
      } else {
        this.goodsOptions = []
      }
    },
    handleGoodsChange(val, row) {
      const goods = this.goodsOptions.find(item => item.id === val)
      if (goods) {
        row.prizeName = goods.name
        row.prizePic = goods.picUrls ? goods.picUrls[0] : ''
      }
    },
    submitConfig() {
      // Validate probability sum
      let totalProb = parseFloat(this.configForm.noPrizeProbability)
      this.configForm.prizeList.forEach(p => {
        totalProb += parseFloat(p.probability || 0)
      })
      
      if (Math.abs(totalProb - 100) > 0.01) {
        this.$message.warning(`当前概率总和为 ${totalProb.toFixed(2)}%，请调整至 100%`)
        return
      }

      this.configLoading = true
      saveConfig(this.configForm).then(response => {
        this.configLoading = false
        this.$message.success('保存成功')
        this.initData()
      }).catch(() => {
        this.configLoading = false
      })
    },
    
    // Record Methods
    getList(page, params) {
      this.tableLoading = true
      getRecordPage(Object.assign({
        current: page.currentPage,
        size: page.pageSize
      }, params)).then(response => {
        this.tableData = response.data.data.records
        this.page.total = response.data.data.total
        this.tableLoading = false
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

<style scoped>
.red-btn {
  color: #f56c6c;
}
</style>
