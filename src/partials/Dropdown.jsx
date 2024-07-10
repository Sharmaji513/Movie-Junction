import React from 'react'

const Dropdown = ({title, options ,func}) => {
  return (
    <div className=' bg-transparent select mt-5'>
        <select  onChange={func}>
            <option value='0' disabled>{title}</option>
          {options.map((o,i) => (
            <option key={i} value={o}> {o.toUpperCase()}  </option>
          ))}

        </select>
    </div>
  )
}

export default Dropdown