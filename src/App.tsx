import ActiveNote from "./pages/ActiveNote";
import ArchivedNote from "./pages/ArchivedNote";
import Modal from "./pages/Modal";

import style from "./App.module.css";

function App() {
  return (
    <main className={style.App}>
      <ActiveNote />
      <ArchivedNote />
      <Modal />
    </main>
  );
}

export default App;
