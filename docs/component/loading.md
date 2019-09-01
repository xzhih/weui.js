<a name="loading"></a>

## loading(content, [options])
loading

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | loading的文字 |
| [options] | <code>object</code> | 配置项 |
| [options.className] | <code>string</code> | 自定义类名 |
| [options.onShow] | <code>function</code> | 在loading显示的时候回调 |

**Example**  
```js
var loading = weui.loading('loading', {
  className: 'custom-classname',
    onShow: () => console.log('show')
});
setTimeout(function () {
  loading.hide(function() {
    console.log('`loading` has been hidden');
  });
}, 3000);
```
