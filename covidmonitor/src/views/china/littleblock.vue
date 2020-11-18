<template>
  <div class="icbar">
    <div class="add">较上日<span :style="{color:textcolor}">{{addnumber}}</span></div>
    <div class="number" :style="{color:textcolor}">{{totalnumber}}</div>
    <div class="text">{{attribute}}</div>
  </div>
</template>

<script>
export default {
  props: ['addnumber','totalnumber','attribute','textcolor'],
  methods:{

  }
}
</script>

<style scoped>
  .icbar{
    border-radius: 2.0vw 0 0 0;
    width: 29.6vw;
    margin: 0 .533vw .533vw 0;
    padding: 1.6vw 0 3.2vw;
    position: relative;
    text-align: center;
  }

  .icbar .add{
    padding-top: 1.6vw;
    color: #7c7c7c;
    font-size: 2.667vw;
    line-height: 2.667vw;
    height: 2.667vw;
    font-weight: 500;
  }

  .icbar .add em,
  .icbar .add span,
  .icbar .number {
    
  }

  .icbar .number {
    font-size: 5.867vw;
    line-height: 5.867vw;
    height: 5.867vw;
    font-weight: 600;
    padding-top: 1.6vw;
    color: #be7761;
  }

  .icbar .text {
    font-size: 3.2vw;
    height: 3.2vw;
    line-height: 3.2vw;
    color: #222;
    font-weight: 500;
    margin-top: 1.6vw;
  }
</style>