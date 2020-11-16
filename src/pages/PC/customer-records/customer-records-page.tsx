/**
 * create by dengjie
 * desc:
 * create date 2020/11/16
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
import { Button } from 'antd'
import { FiltersPanel } from '@/pages/PC/customer-records/components/filters-panel'

export class CustomerRecordsPage extends React.Component<any, any> {
  render() {
    return (
      <div>
        <FiltersPanel />
        <Button type="primary">Button</Button>
      </div>
    )
  }
}
