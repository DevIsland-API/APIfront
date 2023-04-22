import React, { useState, useRef } from 'react';
import './fileInput.css';
import iconFile from '../../../images/icon-file.svg'
import iconRemove from '../../../images/icon-remove-black.svg'

function FileInput() {
    const [files, setFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        setFiles([...files, ...Array.from(event.target.files)]);
    };

    const handleRemoveFile = (fileName) => {
        setFiles(files.filter(file => file.name !== fileName));
    }

    return (
        <div>
            <h3 className='title-anexos'>Anexos</h3>
            <div className="file-input-wrapper">
                <div className="file-input-header">
                    <input
                        type="file"
                        className="file-input"
                        ref={fileInputRef}
                        multiple
                        onChange={handleFileChange}
                        accept="image/png,image/tiff,image/jpeg"
                    />
                </div>
                <ul className="file-list" style={{ display: files.length ? 'block' : 'none' }}>
                    {files.map((file) => (
                        <li className="file-item" key={file.name}>
                            <img src={iconFile} alt="icon-file" />
                            <p className="file-name">{file.name}</p>
                            <img
                                src={iconRemove}
                                alt="icon-remove"
                                onClick={() => handleRemoveFile(file.name)}
                            />
                        </li>
                    ))}
                </ul>

                {files.length === 0 ? (
                    <p className='text'>Não há arquivos anexados</p>
                ) : null}
                <button onClick={handleButtonClick} className="file-input-button">
                    Adicionar Arquivos
                </button>
            </div>

        </div>
    );
}

export default FileInput;
