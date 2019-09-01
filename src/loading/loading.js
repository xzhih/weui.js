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
import tpl from './loading.html'

let sington

/**
 * loading
 * @param {string} content loading的文字
 * @param {object=} options 配置项
 * @param {string=} options.className 自定义类名
 * @param {function=} [options.onShow] 在loading显示的时候回调
 *
 * @example
 * var loading = weui.loading('loading', {
 *   className: 'custom-classname',
 *     onShow: () => console.log('show')
 * });
 * setTimeout(function () {
 *   loading.hide(function() {
 *     console.log('`loading` has been hidden');
 *   });
 * }, 3000);
 */
function loading(content = '', options = {}) {
  if (sington) return sington

  options = $.extend({
    content,
    className: '',
    onShow: $.noop
  }, options)

  const $loadingWrap = $($.render(tpl, options))
  const $loading = $loadingWrap.find('.weui-toast')
  const $mask = $loadingWrap.find('.weui-mask')

  function nHide(callback) {
    // eslint-disable-next-line no-func-assign
    nHide = $.noop // 防止二次调用导致报错

    $mask.addClass('weui-animate-fade-out')
    $loading
      .addClass('weui-animate-fade-out')
      .on('animationend webkitAnimationEnd', () => {
        $loadingWrap.remove()
        sington = false
        if (callback) callback()
      })
  }
  function hide(callback) { nHide(callback) }

  $('body').append($loadingWrap)
  $loading
    .addClass('weui-animate-fade-in')
    .on('animationend webkitAnimationEnd', () => {
      options.onShow()
    })
  $mask.addClass('weui-animate-fade-in')

  sington = $loadingWrap[0]
  sington.hide = hide
  return sington
}

export default loading
