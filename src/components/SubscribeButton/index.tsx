import { signIn, useSession } from 'next-auth/client'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripejs'
import Styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({priceId}: SubscribeButtonProps) {
  const [session] = useSession()

  async function handleSubscribe() {
    if(!session) {
      signIn('github')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch(err) {
      alert(err?.mensage)
    }
  }

  return (
    <button
      type="button"
      className={Styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}