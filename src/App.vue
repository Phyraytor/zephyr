<template>
  <div id="app">
    <header>
      
    </header>
    <main>
      <popover placement = "right" innerWidth = "200px">
        <tbody slot = "content"><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">Jack</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">New York City</div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell">2016-05-04</div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">Jack</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">New York City</div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell">2016-05-01</div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">Jack</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">New York City</div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell">2016-05-03</div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">Jack</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">New York City</div></td></tr><!----></tbody>
        <button slot="button">Нажми</button>
      </popover>
      <popover placement = "bottom">
        <div slot = "content">
          <input type="text"><button>Submit</button>
        </div>
        <button slot="button">Нажми</button>
      </popover> 
    </main>
  </div>
</template>

<script>
import Popover from './components/Popover.vue';

export default {
  name: 'App',
  components: {
    Popover
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
header {
  width: 100%;
  background-color: #111;
  height: 70px;
}
main {
  width: 1040px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
}
</style>
