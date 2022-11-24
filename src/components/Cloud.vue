<template>
    <div>
      <input type="text" name="" v-model="city2" placeholder="请输入城市" />
      <button @click="pushItem">搜索</button>
      <h1>{{ city }}</h1>
      <table>
        <tr>
          <th>日期</th>
          <th>天气</th>
          <th>温度</th>
        </tr>
  
        <tr v-for="(data, idx) in resData" :key="idx">
          <td>{{ data.date }}</td>
          <td>{{ data.wed }}</td>
          <td>{{ data.tem }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  import { reactive, ref } from "vue";
  export default {
    setup() {
      const city = ref("广州");
      const city2 = ref('');
      let tmpData = reactive([]);
      let resData = reactive([
        {
          date: 133,
          wed: "多云",
          tem: 11,
        },
      ]);
      let url =
        "https://v0.yiketianqi.com/api?unescape=1&version=v62&appid=91299298&appsecret=Lx3vX35d";
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          resData.shift();
          city.value = res.city;
          resData.push({
              date: res.date,
              wed: res.wea,
              tem: res.tem,
          });
          for(let i = 0; i < 100; i ++)
          {
            tmpData.push({
              date: res.date,
              wed: res.wea,
              tem: res.tem,
            });
          }
        });
  
        const pushItem = () => {
          let str = JSON.stringify(tmpData);
          console.log(str);
  
        }
      return { city, resData ,city2, pushItem};
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  