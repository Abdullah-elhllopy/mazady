import React from 'react'
import Select from 'react-select'

const style = {
    control: base => ({
        ...base,
        border: '1px solid hsl(0, 0%, 80%)',
        boxShadow: 'none'
    }),
    label: {
        fontSize: '1rem',
        fontWeight: '500',
        marginBottom: '0.1rem',
    },
    star: {
        color: 'red'
    }
};



const Dropdown = ({ label, options, onChange, placeholder, name, value, isRequired , error = false }) => {
    const selectClassName = error ? 'select-error' : '';
    return (
        <div className='flex flex-col gap-1'>
            <label style={style.label} id="aria-label" htmlFor="aria-example-input">
                {label} {isRequired ? <span style={style.star}>*</span> : null}
            </label>
            <Select className={selectClassName} options={options} styles={style} value={value} placeholder={placeholder} onChange={(e) => onChange(e)} name={name} />
        </div>
    )
}

export default Dropdown