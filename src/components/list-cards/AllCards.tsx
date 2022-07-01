import Card from '../card/Card'

const AllCards = (tools: any) => {
  return tools.map(({ tool, i }: any) => <Card item={tool} key={i} />)
}

export default AllCards
