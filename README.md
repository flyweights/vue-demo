# 安装与使用Vue
## 1.创建本地Vue项目
```
$ cd ~/Desktop
$ mkdir vue-demo
$ cd vue-demo
$ curl -O https://vuejs.org/js/vue.js
$ touch index.html
$ touch index.js
```

### ```index.html```内容
```
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue</title>
    <script src="./vue.js" charset="UTF-8"></script>
</head>
<body>

<script src="./index.js" charset="UTF-8"></script>
</body>
</html>
```
### ```index.js```内容
```
暂无内容
```

## 2.安装browser-sync
```
$ npm install -g browser-sync
```
### 运行browser-sync
```
$ browser-sync start --server --no-notify --files='index.html, index.js'
```

## 3.渲染带```id```属性的```div```标签
### ```index.html```内容
```
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue</title>
    <script src="./vue.js" charset="UTF-8"></script>
</head>
<body>
    <div id="app">
        {{ message }}
    </div>
    <script src="./index.js" charset="UTF-8"></script>
</body>
</html>
```
### ```index.js```内容
```
var app = new Vue({
    el: '#app',
    data: {
        message: 'hello'
    }
})
```

## 4.绑定标签的属性
### ```index.html```内容
```
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue</title>
    <script src="./vue.js" charset="UTF-8"></script>
</head>
<body>
    <div id="app">
        <div v-bind:title="title">
            {{ message }}
        </div>
    </div>
    <script src="./index.js" charset="UTF-8"></script>
</body>
</html>
```
### ```index.js```内容
```
var app = new Vue({
    el: '#app',
    data: {
        message: 'hello',
        title: 'hola'
    }
})
```
### tips
```
<div v-bind:title="title">
    {{ message }}
</div>
```
简写：
```
<div :title="title">
    {{ message }}
</div>
```
简单概括：在标签上的属性添加```:```,就是```v-bind：```就只是绑定了属性

## 5.条件判断
### ```index.html```内容
```
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue</title>
    <script src="./vue.js" charset="UTF-8"></script>
</head>
<body>
<div id="app">
    <div v-if="welcome" :title="title">
        {{ message }}
    </div>
</div>
<script src="./index.js" charset="UTF-8"></script>
</body>
</html>
```
### ```index.js```内容
```
var app = new Vue({
    el: '#app',
    data: {
        message: 'hello',
        title: 'hola',
        welcome: false
    }
})
```
简单概括：可以使用```v-show```代替```v-if```，两者的区别在于，前者是使用CSS隐藏标签，后者是不输出标签

## 6.用户输入
### ```index.html```内容
```
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue</title>
    <script src="./vue.js" charset="UTF-8"></script>
</head>
<body>
<div id="app">
    <div v-if="welcome" :title="title">
        {{ message }}
    </div>
    <div>
        <button v-on:click="logMessage">按钮</button>
    </div>
    <div>
        <input v-model="message">
    </div>
</div>
<script src="./index.js" charset="UTF-8"></script>
</body>
</html>
```
### ```index.js```内容
```
var app = new Vue({
    el: '#app',
    data: {
        message: 'hello',
        title: 'hola',
        welcome: true
    },
    methods: {
        logMessage () {
            console.log(this.message)
        }
    }
})
```

### tips
```
<div>
    <button v-on:click="logMessage">按钮</button>
</div>
```
简写：
```
<div>
    <button @click="logMessage">按钮</button>
</div>
```

简单概括：```v-on:click```就是一个点解方法，会触发```Vue```中```methods```；```v-model```是双向绑定，界面的输入框和```Vue```中的```data```中的数据相互响应。```v-model```常用于表单操作。

## 7.循环输出列表
### ```index.html```内容
```
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue</title>
    <script src="./vue.js" charset="UTF-8"></script>
</head>
<body>
<div id="app">
    <div v-if="welcome" :title="title">
        {{ message }}
    </div>
    <div>
        <button v-on:click="logMessage">按钮</button>
    </div>
    <div>
        <input v-model="message">
    </div>

    <ol>
        <li v-for="comment in comments">
            {{ comment.content }}
        </li>
    </ol>

</div>
<script src="./index.js" charset="UTF-8"></script>
</body>
</html>
```

### ```index.js```内容
```
var app = new Vue({
    el: '#app',
    data: {
        message: 'hello',
        title: 'hola',
        welcome: true,
        comments: [
            {content: 'nice~'},
            {content: 'great~'},
            {content: 'awesome~'},
            {content: 'good~'}
        ]
    },
    methods: {
        logMessage () {
            console.log(this.message)
        }
    }
})
```
简单概括：```for...in...```的循环输出

## 8.自定义组件
### ```index.html```内容
```
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue</title>
    <script src="./vue.js" charset="UTF-8"></script>
</head>
<body>
<div id="app">
    <div v-if="welcome" :title="title">
        {{ message }}
    </div>
    <div>
        <button v-on:click="logMessage">按钮</button>
    </div>
    <div>
        <input v-model="message">
    </div>

    <ol>
        <li v-for="comment in comments">
            {{ comment.content }}
        </li>
    </ol>

    <ol>
        <mycomment
                v-for="com in comments"
                :comment="com">
        </mycomment>
    </ol>
</div>
<script src="./index.js" charset="UTF-8"></script>
</body>
</html>
```
### ```index.js```内容
```
Vue.component(
    'mycomment',{
        props: ['comment'],
        template: '<li>{{ comment.content }}</li>>'
    }
)

var app = new Vue({
    el: '#app',
    data: {
        message: 'hello',
        title: 'hola',
        welcome: true,
        comments: [
            {content: 'nice~'},
            {content: 'great~'},
            {content: 'awesome~'},
            {content: 'good~'}
        ]
    },
    methods: {
        logMessage () {
            console.log(this.message)
        }
    }
})
```
简单概括：自定义组件声明在```new Vue```之前，否则无法使用。
