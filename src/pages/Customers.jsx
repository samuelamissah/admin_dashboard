import React from 'react'
import { GridComponent, Resize,ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className='m-3 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title='Customers' category="Page" />
    <GridComponent
    dataSource={customersData}
    allowPaging={true}
    pageSettings={{pageSize: 10}}
    allowSorting={true}
    allowResizing={true}
    toolbar={['Delete']}
    width="auto"
    editSettings={{allowDeleting: true, allowEditing: true}}
    >
      <ColumnsDirective>

      {customersGrid.map((item,index) => (
        <ColumnDirective key={index} {...item} />

      ) )}
      </ColumnsDirective>
      <Inject services={[ Resize,Page, Toolbar, Selection, Sort, Filter, Edit]} />
    </GridComponent>

    </div>
  )
}

export default Customers