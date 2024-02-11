import React from 'react'
import { GridComponent, Toolbar, Search, ColumnDirective, ColumnsDirective, Resize, Sort, ContextMenu, Filter, Page,ExcelExport, PdfExport, Edit, Inject, Grid } from '@syncfusion/ej2-react-grids'
import { employeesData,  contextMenuItems,employeesGrid } from '../data/dummy'
import { Header } from '../components'

const Employees = () => {
  return (
    <div className='m-5 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title='Employees' category="Page" />
    <GridComponent
    dataSource={employeesData}
    allowPaging={true}
    pageSettings={{pageSize: 10}}
    allowSorting={true}
    allowResizing={true}
    toolbar={['Search']}
    width="auto"
    >
      <ColumnsDirective>

      {employeesGrid.map((item,index) => (
        <ColumnDirective key={index} {...item} />

      ) )}
      </ColumnsDirective>
      <Inject services={[Resize, Sort, ContextMenu, Page, Toolbar]} />
    </GridComponent>

    </div>
  )
}

export default Employees