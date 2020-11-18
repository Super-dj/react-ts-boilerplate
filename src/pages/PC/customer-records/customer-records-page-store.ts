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
import { action, makeObservable, observable } from 'mobx'
import React from 'react'

export class CustomerRecordsPageStore {
  constructor() {
    makeObservable(this)
  }
  static Context = React.createContext<CustomerRecordsPageStore | undefined>(undefined)
  static fromContext(context: CustomerRecordsPageStore): CustomerRecordsPageStore {
    return context
  }

  id = Math.random()
  @observable beginTime?: string = undefined
  @observable endTime?: string = undefined

  @action
  onModifyFollowingTime(dateString: [string, string]) {
    this.beginTime = dateString[0]
    this.endTime = dateString[1]
  }
}
