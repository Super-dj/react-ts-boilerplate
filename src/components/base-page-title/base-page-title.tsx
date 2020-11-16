/**
 * create by dengjie
 * desc:
 * create date 2020/11/12
 *
 *
 *                       _oo0oo_
 *                      o8888888o
 *                      88" . "88
 *                      (| -_- |)
 *                      0\  =  /0
 *                    ___/`---'\___
 *                  .' \\|     |// '.
 *                 / \\|||  :  |||// \
 *                / _||||| -:- |||||- \
 *               |   | \\\  -  /// |   |
 *               | \_|  ''\---/''  |_/ |
 *               \  .-\__  '-'  ___/-. /
 *             ___'. .'  /--.--\  `. .'___
 *          ."" '<  `.___\_<|>_/___.' >' "".
 *         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *         \  \ `_.   \_ __\ /__ _/   .-` /  /
 *     =====`-.____`.___ \_____/___.-`___.-'=====
 *                       `=---='
 *
 *
 *     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *           佛祖保佑    永无BUG    永不修改
 *
 *
 */

import React from 'react'
import './base-page-title.less'
import Logo from 'ACBAssets/logo-dark.png'

interface BasePageTitleProps {}

interface BasePageTitleStates {}

export class BasePageTitle extends React.Component<BasePageTitleProps, BasePageTitleStates> {
  render() {
    return (
      <div className="banner-content">
        <div className="logo">
          <img src={Logo} alt={''} />
        </div>
        <div className={'name'}>客户管理系统</div>
      </div>
    )
  }
}
