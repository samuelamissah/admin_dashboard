import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'


const change = (args) => {
  document.getElementById('preview').
  style.backgroundColor = args.currentValue.hex;
}

const ColorPicker = () => {
  return (
<div className='m-2  md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header title='Color Picker' category="App" />
    <div className='text-center'>
        <div id='preview'/>
        <div className='flex flex-col md:flex-row justify-center items-center md:gap-20 md:flex-wrap'>
            <div className='mb-4 md:mb-0'>
                <p className='text-2xl font-semibold mt-2 mb-4'>Palette</p>
                <ColorPickerComponent
                    id='color-picker-palette'
                    mode='Palette'
                    modeSwitcher={false}
                    showButtons={false}
                    inline={true}
                    change={change}
                />
            </div>
            <div>
                <p className='text-2xl font-semibold mt-2 mb-4'>Picker</p>
                <ColorPickerComponent
                    id='color-picker-picker'
                    mode='Picker'
                    modeSwitcher={false}
                    showButtons={false}
                    inline={true}
                    change={change}
                />
            </div>
        </div>
    </div>
</div>


  )
}

export default ColorPicker