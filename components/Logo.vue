<template>
  <div class="wrap">

    <div class="top_bar" >
      <!--个人信息 联系方式-->
      <div class="wrap_top_bar">
        <ul class="nav">
          
          <!-- <li>
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=82506111&site=qq&menu=yes" class="btn"><img  alt="点击这里给我发消息" title="点击这里给我发消息" src="qqonline.gif" border="0" /></a>
          </li> -->

          <li>
            <a class="btn btn-print" href="JAVAscript:window.print()" target="_blank" >
              <i class="iconfont">&#xe606;</i>
            </a>
          </li>

         
          <li>
            <a class="btn" :href="'mailto:' + email" target="_blank" >
              <i class="iconfont">&#xe6ab;</i>
            </a>
          </li>

          <li>
            <a class="btn" :href="github" target="_blank" >
              <i class="iconfont">&#xeaf6;</i>
            </a>
          </li>

          <li>
            <a class="btn" :href="'tel:' + phone" target="_blank" >
              <i class="iconfont">&#xe631;</i>
            </a>
          </li>

          <li>
            <a class="btn btn-blog" :href="blog" target="_blank" >
              BLOG
            </a>
          </li>

          <li>
            <a class="btn btn-pdf" href="贺贤明的个人简历.pdf" target="_blank" download="贺贤明的个人简历.pdf">
              PDF
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
          <li  class="qrcode"> <a target="_blank" href='//qr.api.cli.im/qr?data=http%3A%2F%2Fu.wechat.com%2FEPKJXYozfIZw87OHLX5H5EQ&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=80601a83362325ef295aa2eeb796e1e8' title='在线二维码生成器'><img class="wechat_logo" src='my_wechat_logo.png' alt='我的微信二维码' /></a> </li>
          <li> {{phone}} </li>
          <li> {{mail}} </li>
        </ul>
      </div>


      <div class="clearfix"></div>
    </div>

    <div class="bottom_part">
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
        <div class="block_title">项目App(AppStore上还在的)</div>
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
    </div>
    
    <!--footer copyright-->
    <div class="copyright">
      © {{currentYear}} gakaki, powered by <a v-for="(val, key, index) in poweredBy" target="_blank" :href="val">{{key}}</a>
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

      let salary = `32~33k 税前/月`
      let currentYear = new Date().getFullYear()
      return {
        currentYear: currentYear,
        positionStatus: '在职寻找更好机会',
        hope: `期望薪资 ${salary}  正常交金 正常情况下周六日不加班 如果是猎头请周六日和晚上安排面试吧 白天事情多..没法请假 ,要是每个都请假那现在也没法上班了...或者能否对方公司技术能先电话面试下。。在去实地面试，以节省双方时间`,
        name: '贺贤明',
        email: 'gakaki@qq.com',
        qq: '82506111',
        portrait: 'avatar.jpg',
        blog: 'https://blog.gakaki.com',
        github: `https://github.com/gakaki?tab=repositories`,
        job_title: '全栈工程师',
        year: `84年 天蝎座`,
        college_degree: `大专`,//这里的一整块都是假的注释而已
        college_school: `上海托普信息技术学院`,
        college_end_time: `06年7月`,
        work_experience_year: `10年`,
        phone: `13621822254`,
        mail: '82506111@qq.com',
        wechat: 'gakaki',
        address: '上海普陀',
        desc: '有丰富的开发经验 IOS(OC4年,Swift2年),PHP 4年,移动网页开发(H5,小程序)2年,Node.js后端半年,2年的JAVA后端(SSM),大数据.对微服务,微信开发以及前端模块化有较深入的理解,能够在项目中酌情选择编程语言更好的完成工作.能很好的使用技术驱动业务,并把控进度和风险.崇尚开放,自由分享的理念.拥有良好的技术视野和前瞻力.',
        skills: {
          'Swift': '15年始',
          'Go': '16年始',
          'JAVA': '16年始',
          'Kotlin': '17年始',
          'SpringCloud': '17年始',
          'Spark': '17年始',
          'Node.js': '14年始',
          'TypeScript ES7': '16年始',
          '微信小程序':'17年始',
          'Python': '10年始',
          'Vue.js': '16年始',
          'React': '16年始',
          'Objective C': '11年始',
          'PHP': '08年始',
          'HTML JS CSS': '07年始',
          'GitHub': '09年始',
          'C#': '07年始'
        },
        target: {
          '期望工作': '技术负责人,iOS,Node全栈,前端负责人,大数据,自然语言处理',
          '期望公司': '同样注重前端与UX的公司',
          '期望薪资': `${salary}`,
          // '其他': '周六日双休'
        },
        poweredBy: {
          'Vue.js': 'https://vuejs.org',
          'Nuxt.js': 'https://zh.nuxtjs.org',
          'Hexo-theme-apollo': 'https://github.com/pinggod/hexo-theme-apollo',
          'Stylus': 'https://stylus-lang.com',
          'Puppeteer': 'https://github.com/GoogleChrome/puppeteer',
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
            company_name: '上海豆子网络科技有限公司 ',
            link: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzUwOTI4NjMyNA==&scene=124#wechat_redirect',
            time_start: '18.03.26',
            time_end: '至今',
            job_title: '后端负责人',
            job_desc: [
              // `后端部分`,
              `主要工作为后端小程序研发.开发了事件系统,问答系统,新手引导等.负责服务器部署运维,持续集成,高并发处理.`,
              `共7人团队共同研发"点亮足迹","暑期去哪儿"微信小程序(后端2人,前端h5 2人,策划2人美术1人 每周迭代发布`,
              `后端架构为Node10 egg.js框架 es6 async,数据库环境pika(redis持久缓存)+redis(红包秒杀等)+mongodb2.6~mongodb4.0rc(阿里云)`,
              `服务器运行环境腾讯云采用k8s+docker+nginx+mongodb2.6~4.0rc搭建负载均衡`,
              `使用Let's Encrypt部署通配符ssl,nginx部署http2和负载均衡,使用imagemin Guetzli和渐进式优化jpg图像(iOS),Android启用webp优化图片和webm优化视频并部署cdn`,
              'gitlab-runner 配合小程序api 搭建持续集成,分为测试版开发板体验版',
              `使用swagger配合 golang armyant 和 python locust 对服务器进行压力测试,使用clusmy,Fiddler,Charles,Facebook ATC对小程序进行弱网络模拟测试.`,
              `使用网易airtest编写自动化脚本测试常用流程,如新手流程,每周领取礼包`,
              `使用后端Go语言Iris框架和TIDB数据库,前端MpVue编写了豆子游戏盒子微信小程序`,
              `编写测试平台方便测试员进行特定条件下的测试,使用react+antd搭建`
            ]
          },
          {
            company_name: '上海尖叫互动文化传媒有限公司',
            link: 'http://www.wowdsgn.com',
            time_start: '16.01.18',
            time_end: '18.02.09',
            job_title: '技术负责人后端+前端+iOS高级研发',
            job_desc: [
              // `后端部分`,
              `组建4人团队(我,后端,h5,Android)并成功在一个月内上线尖叫设计iOS版`,
              `使用Node.js Async(Thinkjs框架)编写App Api`,
              '尖叫设计PC站(wowdsgn.com)从PHP重写为JAVA SSM架构Spring Boot MyBatis Druid',
              '重构移动端api为Spring Boot(SSM) Api(移动端Api首页,活动商品,商品列表,商品详情,es商品搜索,后台管理的商品列表,详情,订单流程等)',
              '阿里云部署和Docker化 Nginx Redis Node.js MySQL Mongodb,SSL化,Nexus jar库管理,Jenkins一键部署Gradle项目',
              '迁移整站为https,图片迁移至七牛cdn转为Webp',
              `商品搜索改造为Elasticsearch + IK分词方案`,
              '遭遇恶意短信攻击, 并使用Redis和Openresty的LuaWaf模块防御。使用Spark对Nginx日志分析重组和排序,找出攻击ip并封锁',
              'SSM架构升级重构Spring Cloud(拆分为商品,用户,订单,评价服务),Spring Cloud Gateway',

              // `iOS部分`,
              'Swift2编写了App代码,TalkingData和友盟的数据埋点和Universal Link的部署,极光推送的集成.技术上用到的有SnapKit,Moya,Rxswift,Objectmapper,Kinfisher,SDWebImage,UMeng,Talkingdata,MJRefresh,DZNEmptyDataSet,EZSwiftExtensions,HidingNavigationBar,YYImage,Pingpp(支付),AVOSCloud,RongCloudIMKit.',
              'AppStore企业账号申请,审核,发布,fir.im持续集成。和产品,设计的工作协调',
              '和同事经历Swift2到Swift4的变迁,主导了Swift3的大重构,组件化和二进制化架构的调整,加入RxSwift,部分页面用了Weex(活动页,我的界面部分).黑苹果提升打包速度',

              // `前端部分`,
              'H5微信活动页面编写,Vue.js ElementUI 实现管理功能.与原声交互功能开发,跳转App等',
              `用wepy编写微信小程序(尖叫设计)`,
              `重构后台管理页面架构,采用了React+AntDesign方案. 与h5同事重构了PC端网站和h5移动版为React全家桶方案React+Router+Redux`,
              
              // `其他部分`,
              '构建Spark实时流商品推荐模块（用于app内)技术方案为 Spark Streaming +Mlib+Kafka+TIDB。 用python NLTK ，结巴分词jieba 和 Keras + LSTM 和 Synonyms（近义词中文包）对商品进行舆情分析。前端使用Echarts + D3展现（桑吉图展示用户访问路径,词云展示用户画像属性，雷达图百分比展示等）。部署采用了Kubernetes + Docker + Harboar的容器方案',
              `(爬虫题) APP内'海外购'商品数据同步.分别用了1 Python Scrapy+-redis+ip代理库 2 Golang crountine + channel + goquery 爬虫 3 Node.js Pupuetter`
            ]
          },
          {
            company_name: '上海腾牛电子商务有限公司',
            link: 'http://www.niuhome.com',
            job_title: 'iOS主程',
            time_start: '2014.06',
            time_end: '2016.1',
            job_desc: [
              `研发和维护 '牛家帮'(用户端) 和 '小牛快跑' (保洁师端),经历2.0到3.0 2个版本的迭代`,
              '管理iOS团队(下属2人)，并一起处理技术难题',
              '管理AppStore的上架,发布,fir.im持续集成',
              '使用Coding.net + Gitflow 的方式管理项目源码。',
              '学习新技术JSPatch和React Native来处理 项目的热更新问题',
              '重构部分代码至Swift,现有项目中有40%由Swift编写,用到的类库有Alamofire SwiftUserDefaults JSONJoy-Swift Kingfisher Snap等.集成了微信，高德地图，友盟，支付宝支付，自定义环信聊天界面环信和极光推送,使用Cocospod导出二进制库供小牛快跑和牛家帮2个App一起使用。',
              '持续集成项目发布 Jenkins gitlab 到蒲公英',
              '环信系统的集成,自定义环信UI,环信与webview的交互',
              'JAVA的服务器端SpringMVC+MyBatis移动端接口API的编写(商品列表,订单列表,下单列表,保洁员端的下单,任务管理)'
            ]
          },
          {
            company_name: '上海优伊网络科技有限公司',
            link: 'http://www.utang.cn',
            job_title: 'iOS软件工程师',
            time_start: '2013.04',
            time_end: '2014.05',
            job_desc: [
              `研发和维护'U糖健康','U糖医师'经历2.0到4.0的迭代`,
              '3.0 U糖盒子(openwrt命令与lua命令调用) 蓝牙模块与硬件设备的交互（血压仪，手环，尿检仪）,网页交互（处理html JAVAscript与iphone交互）。制作的模块有尿检分析，日常，专家讲坛，活动专区优易品，服务中心等。使用到的库有:AFNetworking,SDWebImage，Mantle，JSONKIT。封装了一些基础库待下划线的Textfield，自定义的Segement控件等。',
              '4.0 U糖盒子(openwrt命令与lua命令调用) 个人中心模块功能。（公告栏，关注亲友，切换账号，设置，收藏，引导页等功能）。4.0项目使用的库有： Masonry FLAnimatedImage ReactiveCocoa FMDB Reachability NMSSH JPushSDK'
            ]
          },
          {
            company_name: '上海益盟软件技术有限公司',
            job_title: 'iOS中级开发工程师',
            link: 'http://www.emoney.cn',
            time_start: '2012.02',
            time_end: '2013.03',
            job_desc: [
              '研发和维护 益盟操盘手（宏源天游） iPad 版 这是一款股票类软件，涉及自定义ui，与后台数据库交互 和 自定义socket封包 方式 （ASIHTTPREQUEST+二进制流）。基本的图形Chart，线，饼图的绘制。',
              '该软件主要使用的特性有新闻查看，用户登入,Tableview下拉刷新，文章图片内容的缓存,Controller控制多UiView.主要负责IPAD版本的维护和小功能添加。包括了新闻多级菜单，新闻列表，滚动跑马灯信息，聊天微信功能，我的自选功能，iOS版本适配等。'
            ]
          },
          {
            company_name: '上海商派SHOPEX网络科技',
            link: 'http://www.shopex.cn',
            job_title: 'PHP研发工程 + iOS开发工程师',
            time_start: '2008.02',
            time_end: '2012.02',
            job_desc: [
              '研发和维护 Shopex B2B B2C 产品,开发和Bug修复.新版本的ECOS的压力测试（libmemcached，tsung，多台Archlinux，mysql5.55beta）。使用Python 2.6 编写多线程的B2B平台与淘宝API的数据同步，用到了MySQL Q4M 消息队列 . 维护网店的B2C的功能 , 当时使用的技术架构 python 2.6 php 5.2 + mysql + q4m + sphinx +tokey tryant + mootools',
              '研发和维护 （名鞋库S.cn)的 iOS App 软件编写 11年中旬，并与后端系统进行数据交互。前端包括用户注册，登入，订单详情，首页幻灯，产品分类，购物车，收藏夹，帮助等功能。项目使用了 ASIHTTPREQUEST，AFNETWORKING,PullToRefresh，SDWebImage，JSONKIT ,Fmdb购物车，友盟等库，这里开始使用ARC方式进行 编程.2 编写移动端API (后端也是个人完成) 相关的php json api接口，使用linux php nginx mysql redis的开发环境,对现有管易B2C系统的数据编写 API JSON接口 ，涉及到短信注册，商品数据列表，用户登入注册，收藏夹，购物车等功能。',
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

