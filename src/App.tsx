import React from 'react';
import Modal from './components/common/modal/Modal';
import ModalTemplate from './components/common/modal/modalTemplate/ModalTemplate';
import AddImgForm from './components/common/modal/modalContent/addImgForm/AddImgForm';
import useModal from './hooks/useModal';

const App: React.FC = () => {
  const { isShowing, modalInfo, setModalVisible } = useModal();

  return (
    <>
    <button onClick={setModalVisible}>show modal</button>
    <Modal isShowing={isShowing} hide={setModalVisible}>
      <ModalTemplate>
      <AddImgForm />
    </ModalTemplate>
    </Modal>
    </>
  );
};

export default App;
