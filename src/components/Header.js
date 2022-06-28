import { ReactComponent as Palette } from '../svg/palette.svg'

const Header = () => {
  return (
    <>
      <header className='header'>
        <Palette />
        <a href={process.env.PUBLIC_URL} className='header__a'>Color palette generator</a>
      </header>
    </>
  )
}

export default Header
