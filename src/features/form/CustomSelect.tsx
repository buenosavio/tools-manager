import Select from 'react-select'

const CustomSelect = ({ onChange, options, value }: any) => {
  
  const defaultValue = (options: any, value: any): any => {
    return options ? options.find((option: any) => option.value === value) : ''
  }

  return (
    <Select
      isMulti={true}
      value={defaultValue(options, value)}
      onChange={value => {
        onChange(value)
      }}
      options={options}
    />
  )
}

export default CustomSelect
