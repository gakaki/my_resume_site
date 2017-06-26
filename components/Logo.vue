<template>
  <div class="wrap">

    <div class="top_bar" >
      <!--个人信息 联系方式-->
      <div class="wrap_top_bar">
        <ul class="nav">
          <li>
            <a class="btn" :href="'tel:' + phone" target="_blank" >
              <i class="iconfont">&#x3490;</i>
            </a>
          </li>
          <li>
            <a class="btn" :href="'mailto:' + email" target="_blank" >
              <i class="iconfont">&#xe665;</i>
            </a>
          </li>

          <li>
            <a :href="'tencent://message/?uin='  + qq " class="btn"><img :src="'http://wpa.qq.com/pa?p=1:' + qq + ':2'" border=”0″></a>
          </li>

          <li>
            <a class="btn btn-blog" :href="blog" target="_blank" >
              <i class="iconfont">&#xe60d;</i>
            </a>
          </li>

          <li>
            <a class="btn" :href="github" target="_blank" >
              <i class="iconfont">&#xe735;</i>
            </a>
          </li>

          <li>
            <a class="btn btn-pdf" href="贺贤明的个人简历.pdf" target="_blank" download="贺贤明的个人简历.pdf">
              Word
            </a>
          </li>

          <li>
            <a class="btn btn-pdf" href="贺贤明的个人简历.pdf" target="_blank" download="贺贤明的个人简历.pdf">
              PDF
            </a>
          </li>

          <li>
            <a class="btn btn-print" href="javascript:window.print()" target="_blank" >
              <i class="iconfont">&#xe652;</i>
            </a>
          </li>

        </ul>
      </div>
    </div>

    <div class="header_bar">
      <!--头像和名字-->
      <div class="avatar">
        <img :src="portrait" alt="贺贤明的头像" />
        <h2>{{name}}</h2>
        <p>{{positionStatus}}</p>
        <p>{{year}}</p>
        <p>{{job_title}}</p>
        <p>{{address}}</p>
      </div>

      <!--个人描述-->
      <div class="desc">
        <div class="block_title">个人描述</div>
        {{desc}}
      </div>

      <!--联系方式-->
      <div class="contact">
        <ul>
          <li  class="qrcode"> <a target="_blank" href='//qr.api.cli.im/qr?data=http%3A%2F%2Fu.wechat.com%2FEPKJXYozfIZw87OHLX5H5EQ&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=80601a83362325ef295aa2eeb796e1e8' title='在线二维码生成器'><img src='http://oltk95zvf.bkt.clouddn.com/qrcode.png' alt='' /></a> </li>
          <li> {{phone}} </li>
          <li> {{mail}} </li>
        </ul>
      </div>


      <div class="clearfix"></div>
    </div>

    <!--工作经历-->
    <div class="work_historys">
      <div class="block_title">工作经历</div>
      <div class="history" v-for="(value, key, index) in job_history">
        <div class="company_time">
          <span class="time">{{ value.time_start}} ~ {{value.time_end}}</span>
          <a class="company_name" :href="value.link" target="_blank">{{ value.company_name }}</a>
          <span class="job_title">{{ value.job_title }}</span>
          <span class="clearfix"></span>
        </div>
        <ul>
          <li v-for="(value, key, index) in value.job_desc">
            <span v-if="is51job()">{{key + 1}} .</span>  {{value}}
          </li>
        </ul>
      </div>
    </div>

    <!--项目经历-->
    <div class="app_links">
      <div class="block_title">项目App</div>
      <ul>
        <li v-for="(val, key, index) in app_links">
          <a target="_blank" :href="val.link">{{val.name}}</a>
          <label>{{ val.desc }}</label>
        </li>
      </ul>
    </div>

    <!--技术栈-->
    <div class="skill">
      <div class="block_title">技术栈</div>
      <ul>
        <li v-for="(value, key, index) in skills">
          <label>{{ key }}</label>
          <label>{{ value }}</label>
        </li>
      </ul>
    </div>

    <!--教育经历-->
    <div class="edu">
      <div class="block_title">教育经历</div>
      <span>{{college_degree}} ~ 毕业于{{college_end_time}} ~ {{college_school}}</span>
    </div>
    <div ></div>

    <!--期望工作-->
    <div class="target">
      <div class="block_title">期望工作</div>
      <ul>
        <li v-for="(val, key) in target">
          <label>{{ key }}</label>
          <label>{{ val }}</label>
        </li>
      </ul>
    </div>

    <!--footer copyright-->
    <div class="copyright">
      © 2017 gakaki, powered by <a v-for="(val, key, index) in poweredBy" target="_blank" :href="val">{{key}}</a>
    </div>

  </div>
</template>

<script>

  export default {
    methods: {
      is51job: function () {
        var res = this.$route.query['is51job']
        if (res === 'true') return true
        else return false
      }
    },
    created: function () {
      var is51job = this.is51job()
      console.log('是否来自51job', is51job)
    },

    data: () => {
      return {
        positionStatus: '离职正在找工作',
        hope: '期望薪资 25k 税后 正常交金 正常情况下周六日不加班 如果是猎头请周六日和晚上安排面试吧 白天事情多..没法请假 ,要是每个都请假那现在也没法上班了...或者能否对方公司技术能先电话面试下。。在去实地面试，以节省双方时间',
        name: '贺贤明',
        email: 'gakaki@qq.com',
        qq: '82506111',
        portrait: 'https://avatars1.githubusercontent.com/u/5296?v=3&s=460',
        blog: 'http://blog.gakaki.com',
        github: `https://github.com/gakaki?tab=repositories`,
        job_title: '伪全栈工程师',
        year: `84年 天蝎座`,
        college_degree: `大专`,
        college_school: `上海托普信息技术学院`,
        college_end_time: `06年7月`,
        work_experience_year: `10年`,
        phone: `13621822254`,
        mail: '82506111@qq.com',
        wechat: 'http://baidu.com',
        address: '上海普陀',
        avatar: 'http://baidu.com/1.img',
        desc: '有丰富的IOS开发经验6年,PHP后端开发经验4年,移动网页开发经验,对SPA,微信小程序,微信公众号开发以及前端模块化有深刻的理解,能够在项目中酌情选择编程语言更好的完成工作.能很好的使用技术驱动业务,并把控进度和风险.崇尚开放,自由分享的理念.拥有良好的技术视野和前瞻力.',
        skills: {
          'Swift': '15年始',
          'Node.js': '14年始',
          'TypeScript ES7': '16年始',
          'Python': '10年始',
          'Vue.js': '16年始',
          'React': '16年始',
          'Objective C': '11年始',
          'PHP': '08年始',
          'HTML JS CSS': '07年始',
          'GitHub': '09年始',
          'JAVA Kotlin': '16年始',
          'C#': '07年始'
        },
        target: {
          '期望工作': '技术负责人,IOS,Node全栈,前端负责人',
          '期望公司': '同样注重前端与UX的公司',
          '期望薪资': '税前27k~34k/月'
//          '其他': '周六日双休'
        },
        poweredBy: {
          'Vue.js': 'https://vuejs.org',
          'Nuxt.js': 'https://zh.nuxtjs.org',
          'Hexo-theme-apollo': 'https://github.com/pinggod/hexo-theme-apollo',
          'Stylus': 'http://stylus-lang.com'
        },
        app_links: [
          {
            name: `尖叫设计`,
            type: '家居电商',
            img: '',
            link: `https://itunes.apple.com/cn/app/jian-jiao-she-ji/id1110300308?mt=8`,
            desc: '一款设计清新,有社区拍图的 家居电商 App'
          },
          {
            name: `牛家帮-家政保洁,一键生活牛家帮！`,
            type: 'O2O到家服务',
            img: '',
            link: 'https://itunes.apple.com/cn/app/niu-jia-bang-yi-jian-sheng/id887124712?mt=',
            desc: 'O2O 到家服务保洁'
          },
          {
            name: 'U糖健康—慢病管理远程托管平台',
            type: '智能硬件',
            img: '',
            link: 'https://itunes.apple.com/cn/app/u%E7%B3%96%E5%81%A5%E5%BA%B7-%E6%85%A2%E7%97%85%E7%AE%A1%E7%90%86%E8%BF%9C%E7%A8%8B%E6%89%98%E7%AE%A1%E5%B9%B3%E5%8F%B0/id848886877?mt=8',
            desc: '智能糖尿病管理 + ARM智能医疗硬件'

          },
          {
            name: 'U糖服务端-协助医护服务糖友的好帮手',
            type: '智能硬件',
            img: '',
            link: 'https://itunes.apple.com/cn/app/u-tang-yi-shi-xie-zhu-yi-shi/id919512425?mt=8',
            desc: '医生用版本'
          },
          {
            name: '申万宏源天游旗舰版',
            type: '金融股票',
            img: '',
            link: 'https://itunes.apple.com/cn/app/shen-wan-hong-yuan-tian-you/id950920171?mt=8',
            desc: '股票交易所方出品App'
          }
        ],
        job_history: [
          {
            company_name: '上海尖叫互动文化传媒有限公司',
            link: 'http://www.wowdsgn.com',
            time_start: '16.01.18',
            time_end: '17.06.15',
            job_title: '前技术负责人+IOS高级研发',
            job_desc: [
              `组建四人团队(后端,前端H5,IOS)并成功在一个月内赶工完成,第一版'尖叫设计'App`,
              'PC网站端 http://www.wowdsgn.com (PHP Magento)UI模板的修改以及后续维护',
              'IOS客户端的代码 (Swift2.2编写),App相关第三方功能购买和整合.技术上用到的库有SnapKit,Moya,Rxswift,Objectmapper,Kinfisher,SDWebImage,UMeng,Talkingdata,MJRefresh,DZNEmptyDataSet,EZSwiftExtensions,HidingNavigationBar,YYImage,Pingpp,AVOSCloud,RongCloudIMKit.',
              'IOS App 服务器端 API编写.阿里云服务器的运维部署.包括Nginx php Nodejs ,SSL Lets Encrypt.技术上采用支持async的thinkjs框架,并使用redis缓存数据,mongodb作为数据库',
              '管理AppStore的上架,审核,发布,企业账号的申请发布,fir.im持续集成.产品,设计和COO的协调工作',
              '来了CTO之后',
              '提成和使用整站https和webp方案,PC网和移动端的图片的七牛迁移工作,编写脚本,HTTPS的申请,最终图片启用Webp格式(不支持的h5浏览器优雅降级jpg),优化网络传输.',
              'Docker搭建Nexus库管理系统.编写Gradle 插件 SSH 脚本一键部署SpringBoot项目到服务器端.',
              '原网站PHP过渡到JAVA的数据迁移',
              '参与新版IOS App(下属2人),经历Swift2.2到Swift4的语言变迁,并主导了Swift3的大重构,参与新版IOS App(下属2人),现有项目Swift4 RxSwift响应式 组件二进制化进行中.',
              '曾遭遇服务器恶意短信攻击, 并成功使用Redis和Openresty的Lua Waf模块来防御.使用了Spark2.0 和 Python 来对nginx日志分析进行了重组和排序,找出对应的攻击ip并封锁.',
              'IOS App 客户端 TalkingData和友盟的数据埋点 和 Universal Link的客户端服务器端部署与微信的交互',
              'H5微信与IOS App交互功能开发,跳转下载,下载页面编写.活动页面与原生app交互.',
              'H5微信活动页面编写和功能实现,管理页面Vue.js 2.0 ElementUI 实现.',
              'App 海外购商品的抓取,三个网站分别使用GO csp并发,Python3.4 AsyncIO 与 PHP Swoole编写.',
              '有赞平台的 可视化数据抓取 (Selenium Nodejs WebIO 抓取). 有赞平台API抓取违禁词商品的查询与数据导出 (Nodejs 7 async youzan SDK )',
              '为提升Swift编译速度成功将公司I7台式机改造为黑苹果,提升编译打包速度30秒到1分钟不等',
              'IOS App 组件化架构的调整与Cocoapods Cathrage Swift二进制化',
              '提议并执行了后端商品搜索的改造方案,采用Elasticsearch分词',
              '微信小程序的编写',
              '与后端协商新网站后台管理页面架构,协商并采用React+AntDesign方案.PC端网站和h5版本重构架构为 Vue全家桶方案 vue-router vuex ssr axios egg.js'
            ]
          },
          {
            company_name: '上海腾牛电子商务有限公司',
            link: 'http://www.niuhome.com',
            job_title: 'IOS主程',
            time_start: '2014.06',
            time_end: '2016.1',
            job_desc: [
              `研发和维护 '牛家帮'(用户端) 和 '小牛快跑' (骑手端),经历2.0到3.0 2个版本的迭代`,
              '管理ios团队(下属2人)，并一起处理技术难题',
              '管理AppStore的上架,发布,fir.im持续集成',
              '使用Coding.net + Gitflow 的方式管理项目源码。',
              '学习新技术JSPatch和React Native来处理 项目的热更新问题',
              '重构部分代码至Swift,现有项目中有40%由Swift编写,用到的类库有Alamofire SwiftUserDefaults JSONJoy-Swift Kingfisher Snap等.集成了微信，高德地图，友盟，支付宝支付，自定义环信聊天界面环信和极光推送,使用Cocospod导出二进制库供小牛快跑和牛家帮2个App一起使用。',
              '持续集成项目发布 Jenkins gitlab 到蒲公英',
              '环信系统的集成,自定义环信UI,环信与webview的交互',
              '学习了JAVA的服务器端SpringMVC+MyBatis,并编写API接口3个月'
            ]
          },
          {
            company_name: '上海优伊网络科技有限公司',
            link: 'http://www.utang.cn',
            job_title: 'IOS软件工程师',
            time_start: '2013.04',
            time_end: '2014.05',
            job_desc: [
              `研发和维护'U糖健康','U糖医师'经历2.0到4.0的迭代`,
              '3.0 U糖盒子蓝牙模块与硬件设备的交互（血压仪，手环，尿检仪）,网页交互（处理html javascript与iphone交互）。制作的模块有尿检分析，日常，专家讲坛，活动专区优易品，服务中心等。使用到的库有:AFNetworking,SDWebImage，Mantle，JSONKIT。封装了一些基础库待下划线的Textfield，自定义的Segement控件等。',
              '4.0 U糖盒子(openwrt命令与lua命令调用)，个人中心模块功能。（公告栏，关注亲友，切换账号，设置，收藏，引导页等功能）。4.0项目使用的库有： Masonry FLAnimatedImage ReactiveCocoa FMDB Reachability NMSSH JPushSDK'
            ]
          },
          {
            company_name: '上海益盟软件技术有限公司',
            job_title: 'IOS中级开发工程师',
            link: 'http://www.emoney.cn',
            time_start: '2012.02',
            time_end: '2013.03',
            job_desc: [
              '研发和维护 益盟操盘手（宏源天游） iPad 版 这是一款股票类软件，涉及自定义ui，与后台数据库交互 和 自定义socket封包 方式 （ASIHTTPREQUEST+二进制流）。基本的图形Chart，线，饼图的绘制。',
              '该软件主要使用的特性有新闻查看，用户登入,Tableview下拉刷新，文章图片内容的缓存,Controller控制多UiView.主要负责IPAD版本的维护和小功能添加。包括了新闻多级菜单，新闻列表，滚动跑马灯信息，聊天微信功能，我的自选功能，IOS版本适配等。'
            ]
          },
          {
            company_name: '上海商派SHOPEX网络科技',
            link: 'http://www.shopex.cn',
            job_title: 'PHP研发工程 + IOS开发工程师',
            time_start: '2008.02',
            time_end: '2012.02',
            job_desc: [
              '研发和维护 Shopex B2B B2C 产品,开发和Bug修复.新版本的ECOS的压力测试（libmemcached，tsung，多台Archlinux，mysql5.55beta）。使用Python 2.6 编写多线程的B2B平台与淘宝API的数据同步，用到了MySQL Q4M 消息队列 . 维护网店的B2C的功能 , 当时使用的技术架构 python 2.6 php 5.2 + mysql + q4m + sphinx +tokey tryant + mootools',
              '研发和维护 （名鞋库S.cn)的 IOS App 软件编写 11年中旬，并与后端系统进行数据交互。前端包括用户注册，登入，订单详情，首页幻灯，产品分类，购物车，收藏夹，帮助等功能。项目使用了 ASIHTTPREQUEST，AFNETWORKING,PullToRefresh，SDWebImage，JSONKIT ,Fmdb购物车，友盟等库，这里开始使用ARC方式进行 编程.2 编写移动端API (后端也是个人完成) 相关的php json api接口，使用linux php nginx mysql redis的开发环境,对现有管易B2C系统的数据编写 API JSON接口 ，涉及到短信注册，商品数据列表，用户登入注册，收藏夹，购物车等功能。',
              `'私货' APP sihuo.com 参与制作研发二手物品交易平台。职责为：用户注册登入，拍照，好友交互关注 ，个人中心模块，和聊天界面，商品评论，商品列表展示的功能。聊天使用环信API.`
            ]
          },
          {
            company_name: '上海锐动文化Himovie.net',
            link: 'http://www.shopex.cn',
            job_title: 'C#和ASP.NET工程师',
            time_start: '2006.12',
            time_end: '2008.02',
            job_desc: [
              '研发和维护公司电影投票网站HiMovie.net，包括票据管理，用户信息系统，订票系统，前端html展现。接触并使用jQuery,使用ASP.NET 2.0 开发前端网站系统',
              '维护公司的电影售票机(购物终端机)内程序 使用C# Winform 进行开发 Devexpress控件和 Terlerik组件'
            ]
          }
        ]

      }
    }
  }
</script>

