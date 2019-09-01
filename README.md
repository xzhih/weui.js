weui.js 魔改
=====

### 概述

[WeUI](https://github.com/Tencent/weui.git) 的轻量级 js 封装。
[weui.js](https://github.com/Tencent/weui.js) 的魔改版

### 手机预览

![https://weui.io](https://cloud.githubusercontent.com/assets/2395166/20742697/96705822-b70c-11e6-9486-c03a5939a1d6.png)

[https://weui.io/weui.js/](https://weui.io/weui.js/)

### 开发

安装

```bash
git clone https://github.com/xzhih/weui.js.magic.git
cd weui.js.magic
yarn 
```

预览

```bash
yarn start
```

图片上传服务器

```bash
yarn server
```

编译

```bash
yarn build
```

### 使用

#### global 

```html
<link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/2.0.1/weui.min.css">
<script type="text/javascript" src="weui.min.js"></script>
<script type="text/javascript">
    weui.alert('alert');
</script>
```

#### import as module

```bash
yarn add weui
yarn add https://github.com/xzhih/weui.js.magic
```

```javascript
import 'weui';
import weui from 'weui.js.magic';

weui.alert('alert');
```

### 文档

[Documents](https://github.com/xzhih/weui.js.magic/blob/magic/docs/README.md)

### 贡献

如果你有好的意见或建议，欢迎给我们提issue或pull request。

### License
The MIT License(http://opensource.org/licenses/MIT)

请自由地享受和参与开源
