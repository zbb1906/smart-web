# smart-web

> Smart-GOVX 前端工程

推荐使用VSCODE或者ATOM来进行开发， 请安装相关插件

| 必须插件       | 说明                |
| ---------- | :---------------- |
| ESLint     | javascript 严格模式插件 |
| EditConfig | 一致代码风格插件          |

``` bash
#  使用源本代理库
npm config set registry http://nexus.ybveg.com/repository/npm-public/

#  使用taobao镜像安装ChromeDriver 到 global
npm install -g chromedriver --chromedriver_cdnurl=https://npm.taobao.org/mirrors/chromedriver

#  使用taobao镜像安装phantomjs 到 global
npm install -g phantomjs --phantomjs_cdnurl=http://npm.taobao.org/mirrors/phantomjs

#  使用taobao镜像安装Selenium 到 global
npm install -g selenium --selenium_cdnurl=http://npm.taobao.org/mirrors/selenium
# 以上步骤进行过的话 可以跳过

#  安装其他依赖
npm install

# 运行工程 localhost:80
npm run dev
```

