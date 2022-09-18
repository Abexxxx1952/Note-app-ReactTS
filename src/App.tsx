import Tables from "./pages/Tables/Tables";

import Modal from "./pages/Modal/Modal";

import { getModalFlag } from "./redux/selectors/modalSelectors";

import style from "./App.module.css";

function App() {
  let modalFlag = getModalFlag();

  return (
    <main className={style.App}>
      <Tables />

      {modalFlag && <Modal />}
    </main>
  );
}

export default App;
