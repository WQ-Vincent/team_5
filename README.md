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
│          
├─covidmonitor           //项目文件     
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
│  └─src		//项目资源文件     
│      │  App.vue       
│      │  main.js    
│      │  manifest.json    
│      │  pages.json    
│      │    
│      ├─components	//uni-app相关组件    
│      ├─static		//静态数据文件    
│      │  │  covid_china.csv	//国内疫情数据    
│      │  │  covid_global.csv	//全球疫情数据    
│      │  │  covid_sum.csv	//疫情数据总览    
│      │  │  uni.ttf    
│      │  │      
│      │  ├─app    
│      │  │      icon.png	//App图标     
│      │  │   
│      │  ├─icon	//App内图标    
│      │  │      back.png           
│      │  │      rank.png      
│      │  │      search.png     
│      │  │      setup.png     
│      │  │    
│      │  └─tabbar	//导航栏图标       
│      │          china.png    
│      │          chinaed.png    
│      │          global.png    
│      │          globaled.png    
│      │          info.png    
│      │          infoed.png    
│      │     
│      └─views	//页面文件      
│          ├─china		//国内     
│          │      country.vue   
│          │      countryData.vue    
│          │      data.vue	//数据列表    
│          │      index.vue	//主页    
│          │      littleblock.vue       
│          │      search.vue	//搜索页面   
│          │    
│          ├─global		//全球      
│          │      data.vue       
│          │      globalblock.vue       
│          │      index.vue         
│          │    
│          └─news		//动态           
│                  index.vue     
│                  web.vue	//外链     
│    
├─DOC		//需求、设计文档      
└─screenshots	//界面截图      
