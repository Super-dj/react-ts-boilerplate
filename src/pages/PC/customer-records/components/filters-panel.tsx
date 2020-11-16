/**
 * create by dengjie
 * desc:
 * create date 2020/11/16
 */
import React from 'react'
import { DatePicker, Space } from 'antd'
import { SizeType } from 'antd/lib/config-provider/SizeContext'

const { RangePicker } = DatePicker

interface FiltersPanelProps {}
interface FiltersPanelState {
  size: SizeType
}

export class FiltersPanel extends React.Component<FiltersPanelProps, FiltersPanelState> {
  constructor(props: FiltersPanelProps) {
    super(props)
    this.state = {
      size: 'small',
    }
  }

  render() {
    const { size } = this.state
    return (
      <Space direction="vertical" size={12}>
        <RangePicker size={size} />
      </Space>
    )
  }
}
