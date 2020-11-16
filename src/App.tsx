import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { routes } from '@/router/router'
import { RenderRoutes } from '@/router/RenderRoutes'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import '@/App.less'
import { BasePageTitle } from '@/components/base-page-title/base-page-title'

// 是否具有权限，从状态管理或context中获取
const authed = false
const authPath = '/login'

const App: React.FC = () => {
  return (
    <Router>
      <ConfigProvider locale={zhCN}>
        <div style={{ flex: 1, margin: '8px 0' }}>
          <BasePageTitle />
          {RenderRoutes(routes, authed, authPath)}
        </div>
      </ConfigProvider>
    </Router>
  )
}

export default App
