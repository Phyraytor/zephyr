<template>
  <div id="app">
    <header></header>
    <main>
      <vue-popover placement = "left" :innerWidth = "200">
        <tbody slot = "content"><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">Jack</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">New York City</div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell">2016-05-04</div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">Jack</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">New York City</div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell">2016-05-01</div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">Jack</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">New York City</div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell">2016-05-03</div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">Jack</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">New York City</div></td></tr><!----></tbody>
        <button slot="button" class = "el-button">Open table</button>
      </vue-popover>
      <vue-popover placement = "bottom" :offset = "50">
        <div slot = "content">
          <input type="text"><button>Submit</button>
        </div>
        <button slot="button" class = "el-button">Open form</button>
      </vue-popover> 
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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
.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #111;
  color: #fff;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  margin-left: 0px;
  transition: .1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  background-color: #111;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
}
.el-button:hover {
  color: #000;
  background-color: #fff;
}
</style>
