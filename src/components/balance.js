import { useAccount, useBalance } from '@web3modal/react'

export default function UseBalance() {
  const { account } = useAccount()
  const { data, error, isLoading, refetch } = useBalance({
    addressOrName: account.address
  })

  return (
    <section>
      <ul>
        <li>
          <span>{isLoading ? 'Loading...' : JSON.stringify(data? data['formatted'].substring(0,5) : data, null, 2)?.substring(1,6) + " ETH"}</span>
        </li>
      </ul>
      <button onClick={async () => refetch()}></button>
    </section>
  )
}
