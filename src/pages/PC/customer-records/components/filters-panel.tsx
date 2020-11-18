/**
 * create by dengjie
 * desc:
 * create date 2020/11/16
 */
import React from 'react'
import { DatePicker, Space } from 'antd'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import { observer } from 'mobx-react'
import { CustomerRecordsPageStore } from '@/pages/PC/customer-records/customer-records-page-store'

const { RangePicker } = DatePicker

interface FiltersPanelProps {}
interface FiltersPanelState {
  size: SizeType
}

@observer
export class FiltersPanel extends React.Component<FiltersPanelProps, FiltersPanelState> {
  static contextType = CustomerRecordsPageStore.Context
  constructor(props: FiltersPanelProps) {
    super(props)
    this.state = {
      size: 'small',
    }
  }

  render() {
    const { size } = this.state
    const store = CustomerRecordsPageStore.fromContext(this.context)
    return (
      <Space direction="vertical" size={12}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>跟进日期</div>
          <RangePicker
            size={size}
            onChange={(date, dateString) => {
              store.onModifyFollowingTime(dateString)
            }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>注册日期</div>
          <RangePicker size={size} />
        </div>
      </Space>
    )
  }
}
