import toolSelector from '../store/tools/selector'
import { useSelector } from 'react-redux'

export const filteredItems = (tools: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isOnlyTag = useSelector(toolSelector.isOnlyTag)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const search = useSelector(toolSelector.search)
  return tools.filter(
    (tool: any) =>
      isOnlyTag
        ? tool.name.toLowerCase().includes(search.toLowerCase())
        : tool.description.toLowerCase().includes(search.toLowerCase()) //funciona
    // : tool.tag[tool.tag.length - 1].map(
    //     (item: Tag) =>
    //       item.label.toLowerCase().includes(search.toLowerCase())
    //     //console.log(item.label)
  )
}
