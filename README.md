## Pagium2

页面乐高积木系统

最新尝鲜版本:v1.0.3

### 特性
> 配套命令行工具，快速进行页面组件式开发
> 项目系统构建基于webpack.js 打造
> 组件开发完立即查看页面，并且可生成静态页

### 安装

#### node 版本要求
 v8.x.x 及以上
 
#### 从npm安装

``` bash
$ npm install -g pagium2
```

如果安装失败，提示没有权限，你可能需要在命令前面加上 sudo 。
>推荐安装 cnpm，然后用 cnpm install 代替 npm install



### 快速上手

##### 查看帮助命令
``` bash
$ pagium2 -h

 Usage: pagium2 [options]

  Options:

    -V, --version  output the version number
    -i, --init     init pagium development environment 
    -h, --help     output usage information
```

##### 查看版本命令
``` bash
$ pagium2 -V

|ˉˉˉˉˉˉˉˉˉ\ˉ\      /\ˉ\       /ˉˉˉˉˉˉ\ˉ\  |ˉˉˉˉˉˉˉˉˉˉ|ˉ||ˉ|ˉ|    |ˉ|ˉ||ˉˉˉˉˉˉˉˉˉˉˉ|ˉ| /ˉˉˉˉˉˉˉˉ\ˉ\ 
| |ˉ|ˉˉˉˉ\ \ \    /  \ \     / /ˉ/ˉˉ\ | |  ˉˉˉ|  |ˉ|ˉ ˉ | | |    | | || |ˉ|| |ˉ|| | |/ /ˉ/ˉˉˉˉ\ \ \
| | |    | | |   / /\ \ \   | | |    ˉˉˉ      |  | |    | | |    | | || | || | || | |ˉˉˉˉ     / /ˉ/
| ˉˉˉˉˉˉˉ  / /  / / /\ \ \  | | ||ˉˉˉˉˉ|ˉ|    |  | |    | | |    | | || | || | || | ||ˉˉˉˉˉˉˉˉ / / 
| |ˉ|ˉˉˉˉˉˉˉˉ  /  ˉˉˉˉ  \ \  \ \ \ˉ| |ˉ|ˉ     |  | |     \ \ \  / / / | | || | || | || |ˉ|ˉˉˉˉˉˉˉ  
| | |         / /ˉ/ˉˉˉˉ\ \ \  \ ˉˉˉ / /   |ˉˉˉ    ˉˉˉ|ˉ|  \ ˉˉˉˉ / /  | | || | || | ||  ˉˉˉˉˉˉˉˉ|ˉ|
ˉˉˉˉˉ         ˉˉˉˉ      ˉˉˉˉ   ˉˉˉˉˉˉˉ    ˉˉˉˉˉˉˉˉˉˉˉˉˉˉ   ˉˉˉˉˉˉˉˉ   ˉˉˉˉ ˉˉˉˉ ˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉ

 v1.0.3

```

##### 进行初始化项目

``` bash
$ pagium2 -i

Your project Name? default(pagium-dev) pagium-demo
Your project Version? default(v1.0.0)  

```
##### 进入项目

``` bash
$ cd pagium-demo
$ npm i
$ npm run dev

```

### 查看结果

访问 http://localhost:5000

![demo 页面](http://ougi244fy.bkt.clouddn.com/pagium2/demo%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-05-15%20%E4%B8%8B%E5%8D%889.13.01.png)




 
 


