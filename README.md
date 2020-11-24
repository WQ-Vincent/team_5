# CovidMonitor    
### 新冠疫情数据APP     
### HTML移动应用开发课程第五组      
      
### npm运行
```
npm install
```
```
npm run serve
```
### 技术栈
vue2 + uni-app + HTML5plus + python + webpack 
       
### 项目目录结构             
├─covidmonitor           &nbsp;//项目文件     
│  │  .gitignore    
│  │  babel.config.js    
│  │  package-lock.json     
│  │  package.json     
│  │  postcss.config.js     
│  │  tsconfig.json     
│  │  yarn.lock    
│  │       
│  ├─public    
│  │      index.html    
│  │    
│  └─src		&nbsp;//项目资源文件     
│      │  App.vue       
│      │  main.js    
│      │  manifest.json    
│      │  pages.json    
│      │    
│      ├─components	&nbsp;&nbsp;//uni-app相关组件    
│      ├─static	&nbsp;&nbsp;&nbsp;//静态数据文件    
│      │  │  covid_china.csv	&nbsp;//国内疫情数据    
│      │  │  covid_global.csv	&nbsp;//全球疫情数据    
│      │  │  covid_sum.csv	&nbsp;&nbsp;//疫情数据总览    
│      │  │  uni.ttf    
│      │  │      
│      │  ├─app    
│      │  │      icon.png	&nbsp;//App图标     
│      │  │   
│      │  ├─icon	&nbsp;&nbsp;//App内图标    
│      │  │      back.png           
│      │  │      rank.png      
│      │  │      search.png     
│      │  │      setup.png     
│      │  │    
│      │  └─tabbar	&nbsp;//导航栏图标       
│      │          china.png    
│      │          chinaed.png    
│      │          global.png    
│      │          globaled.png    
│      │          info.png    
│      │          infoed.png    
│      │     
│      └─views	&nbsp;//页面文件      
│          ├─china		&nbsp;//国内     
│          │      country.vue   
│          │      countryData.vue    
│          │      data.vue	&nbsp;//数据列表    
│          │      index.vue	&nbsp;//主页    
│          │      littleblock.vue       
│          │      search.vue	&nbsp;//搜索页面   
│          │    
│          ├─global		&nbsp;&nbsp;//全球      
│          │      data.vue       
│          │      globalblock.vue       
│          │      index.vue         
│          │    
│          └─news	&nbsp;//动态           
│                  index.vue     
│                  web.vue	&nbsp;//外链     
│    
├─DOC		&nbsp;&nbsp;//需求、设计文档      
└─screenshots	&nbsp;//界面截图      
