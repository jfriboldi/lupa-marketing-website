import { useRouter } from 'next/router'

export default function Translation() {
  const router = useRouter()
  return (
    <>
      <div onClick={() => {
        router.push(router.pathname, router.pathname, { locale: 'pt-BR' })
    }}>pt-BR</div>
    <div onClick={() => {
        router.push(router.pathname, router.pathname, { locale: 'en-US' })
      }}>en-US</div>
    </>
  )
}