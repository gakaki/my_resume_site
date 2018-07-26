## Resume Nuxt.js project

$ npm run generate
$ pm2 startOrReload pm2.json

### 修改流程
记得用ncu-a 升级你的package.json里的库
Logo.vue 是具体的简历内容
.styl文件为css文件 mq.styl是media query的文件 注意修改
修改完毕之后 npm run generate 生成pdf 和 图片, 注意localhost(npm run dev) 要先启动
之后dist的文件夹注意不要删除 git add 提交
服务器上直接nginx dist文件夹部署
阿里的iconfont在aliiconfont目录里注意用的是font unicode方法,四个字体icon文件复制到stylus的font文件及里就好

## 部署流程
使用npm run generate;之后会生成到dist文件夹 服务器上直接nginx root dist文件夹就好

### TODO
1 chrome在桌面平台下直接拖动没有改变css
