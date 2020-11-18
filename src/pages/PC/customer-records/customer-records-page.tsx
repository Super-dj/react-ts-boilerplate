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
import { CustomerRecordsPageStore } from '@/pages/PC/customer-records/customer-records-page-store'
import { observer } from 'mobx-react'

const Provider = CustomerRecordsPageStore.Context.Provider

interface CustomerRecordsPageProps {}

interface CustomerRecordsPageState {}

@observer
export class CustomerRecordsPage extends React.Component<
  CustomerRecordsPageProps,
  CustomerRecordsPageState
> {
  private store: CustomerRecordsPageStore

  constructor(props: CustomerRecordsPageProps) {
    super(props)
    this.store = new CustomerRecordsPageStore()
  }
  render(): JSX.Element {
    return (
      <Provider value={this.store}>
        <div>
          <FiltersPanel />
          <div>{this.store.beginTime}</div>
          <div>{this.store.endTime}</div>
          <Button type="primary">Button</Button>
        </div>
      </Provider>
    )
  }
}
