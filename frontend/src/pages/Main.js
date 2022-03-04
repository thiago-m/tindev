import { useParams } from "react-router-dom";
import './Main.css'

import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

export default function Main() {
  const params = useParams()

  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img src="https://avatars.githubusercontent.com/u/16545335?v=4" alt="avatar" />
          <footer>
            <strong>Filipe Deschamps</strong>
            <p> Programador e cantor sertanejo nos tempos livres. </p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={like} alt="Like" />
            </button>
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars.githubusercontent.com/u/16545335?v=4" alt="avatar" />
          <footer>
            <strong>Filipe Deschamps</strong>
            <p> Programador e cantor sertanejo nos tempos livres. </p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={like} alt="Like" />
            </button>
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars.githubusercontent.com/u/16545335?v=4" alt="avatar" />
          <footer>
            <strong>Filipe Deschamps</strong>
            <p> Programador e cantor sertanejo nos tempos livres. </p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={like} alt="Like" />
            </button>
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars.githubusercontent.com/u/16545335?v=4" alt="avatar" />
          <footer>
            <strong>Filipe Deschamps</strong>
            <p> Programador e cantor sertanejo nos tempos livres. </p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={like} alt="Like" />
            </button>
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}
