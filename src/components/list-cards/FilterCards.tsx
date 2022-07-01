import { ToolState } from '../../store/tools/duck'
import Card from '../card/Card'

const FilterCards = (toolsFiltered: any) => {
  return (
    <>
      {toolsFiltered.map(({ tool, i }: any) => (
        <Card item={tool} key={i} id={tool.id} />
      ))}
    </>
  )
}

export default FilterCards
