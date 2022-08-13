import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import { signIn, signOut, useSession } from 'next-auth/client'

import Styles from './styles.module.scss'

export function SignInButton() {
  const [session] = useSession()

  return session ? (
    <button 
    type="button" 
    className={Styles.signInButton}
  >
    <FaGithub color="#04d361" />
    João Alves
    <FiX 
      color="#737380" 
      className={Styles.closeIcon} 
      onClick={() => signOut()}
    />
  </button>
  ) : (
    <button 
      type="button" 
      className={Styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}