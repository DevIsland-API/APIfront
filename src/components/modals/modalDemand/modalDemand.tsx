import React, { useState } from 'react';
import Input from '../../inputs/input/input';
import InputRadius from '../../inputs/inputRadius/inputRadius';
import Select from '../../select/select';
import TextArea from '../../textArea/textArea';
import FileInput from '../../inputs/fileInput/fileInput';
import ButtonSave from '../../button/buttonSave/buttonSave';

import './modalDemand.css';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose }: Props) => {
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleSave = () => {
    // Your save logic here
  };

  if (!isOpen) {
    return null;
  }

  document.title = 'Novo Chamado';

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>Gerar Nova Demanda</h3>
        </div>
        <div className="form-group-radius">
          <InputRadius />
        </div>
        <div className="modal-body" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div>
              <Input id="input-1" name="input-name" title="Título" placeholder="Insira título" type="text" />
            </div>
            <div className="description-container" style={{ position: 'sticky', top: 0 }}>
              <TextArea value={description} onChange={handleDescriptionChange} title="Descrição" />
            </div>
          </div>
          <div>
            <div className="description">
              <FileInput />
              <div>
                <Select
                  title="Interessados"
                  className="my-select"
                  id="my-select"
                  showOptionsOrder={true}
                  options={[
                    { value: 'Usuario-A', label: 'Usuário A' },
                    { value: 'Usuario-B', label: 'Usuário B' },
                    { value: 'Usuario-C', label: 'Usuário C' },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="button-save">
          <ButtonSave onClick={handleSave} onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
