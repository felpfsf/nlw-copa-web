interface IHomeProps {
  count: number
}

export default function Home({ count }: IHomeProps) {
  return (
    <div>
      <h1>Hello Next</h1>
      <p>
        Contagem de Pools: <span>{count}</span>
      </p>
      <a href='/test_route/'>Test</a>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3333/pools/count')
  const data = await res.json()

  console.log(data)

  return {
    props: {
      count: data.poolsCount
    }
  }
}
