import Icon from './UI/Icon'

const Footer = () => {
  return (
    <footer className="bt bb flex w-full flex-col justify-between sm:flex-row sm:px-3">
      <div className="br sm:br-none order-2 flex items-center justify-center gap-2 p-5 sm:order-none">
        <p className="text-center text-sm font-semibold">
          © 2013 - 2024 Riangle - All rights reserved.{' '}
        </p>
      </div>

      <div className="order-1 flex flex-grow items-center justify-center py-3 sm:order-none sm:py-0">
        <Icon />
      </div>

      <ul className="bt order-3 flex justify-around gap-2">
        <li className="bl sm:bl-none w-full px-5 py-7 text-center">
          <a href="link" className="uppercase">
            instagram
          </a>
        </li>

        <li className="bl w-full px-5 py-7 text-center">
          <a href="link" className="uppercase">
            dribble
          </a>
        </li>

        <li className="bl w-full px-5 py-7 text-center">
          <a href="link" className="uppercase">
            tiktok
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
