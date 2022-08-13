import { SignInButton } from '../SignInButton'

import Styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={Styles.headerContainer} >
      <div className={Styles.headerContent} >
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={Styles.active} href="" >Home</a>
          <a href="">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}