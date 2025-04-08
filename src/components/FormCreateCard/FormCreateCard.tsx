import React, { useRef, useState } from "react";
import "./FormCreateCard.scss";
interface FormProps {
  onSave: (text: string, image: File | null) => void;
}
const FormCreateCard: React.FC<FormProps> = ({ onSave }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null); 

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    onSave(text, image);
    setText('');
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const isButtonActive = text.trim() !== '' || image;
  return (
    <div className="form-container">
      <form>
        <h1>Создание карточки</h1>
        <input type="text" placeholder="Введите текст карточки" value={text} onChange={handleTextChange} required />
        <input type="file" placeholder="Выберите изображение" ref={fileInputRef}  onChange={handleImageChange} required />
        <button onClick={handleSubmit} disabled={!isButtonActive}>Сохранить</button>
      </form>
    </div>
  );
};

export default FormCreateCard;
