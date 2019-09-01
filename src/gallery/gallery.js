/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

import $ from '../util/util'
import tpl from './gallery.html'

let sington

/**
 * gallery 带删除按钮的图片预览，主要是配合图片上传使用
 * @param {string} url gallery显示的图片的url
 * @param {object=} options 配置项
 * @param {string=} options.className 自定义类名
 * @param {function=} options.onDelete 点击删除图片时的回调
 *
 * @example
 * var gallery = weui.gallery(url, {
 *   className: 'custom-classname',
 *   onDelete: function() {
 *     if (confirm('确定删除该图片？')){ console.log('删除'); }
 *       gallery.hide(function() {
 *         console.log('`gallery` has been hidden');
 *       });
 *     }
 * });
 */
function gallery(url, options = {}) {
  if (sington) return sington

  options = $.extend({
    url,
    className: '',
    showDel: false,
    onDelete: $.noop
  }, options)

  // const $gallery = $($.render(tpl, $.extend({
  //     url: url
  // }, options)));

  const $gallery = $($.render(tpl, options))

  function nHide(callback) {
    // eslint-disable-next-line no-func-assign
    nHide = $.noop // 防止二次调用导致报错

    $gallery
      .addClass('weui-animate-fade-out')
      .on('animationend webkitAnimationEnd', () => {
        $gallery.remove()
        sington = false
        if (callback) callback()
      })
  }
  function hide(callback) { nHide(callback) }

  $('body').append($gallery)
  $gallery.find('.weui-gallery__img').on('click', () => { hide() })
  $gallery.find('.weui-gallery__del').on('click', (e) => {
    let self = e.target
    options.onDelete.call(self, url)
  })

  $gallery.show().addClass('weui-animate-fade-in')

  sington = $gallery[0]
  sington.hide = hide
  return sington
}
export default gallery
