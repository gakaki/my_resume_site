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

### TODO
1 chrome在桌面平台下直接拖动没有改变css
2 ssl化下回用阿里和腾讯的吗免费ssl吧 lets encrypt的也要弄一次renew的呢
