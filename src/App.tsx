import useLocalStorage from "./hooks/useLocalStorage";
import './assets/index.scss'
import FormCreateCard from "./components/FormCreateCard/FormCreateCard";
import CardList from "./components/CardList/CardList";

export default function App() {
  const [cards, setCards] = useLocalStorage<{ id: number; text: string; image: string }[]>('cards', []);

  const handleSave = (text: string, image: File | null) => {
    const newCard = {
      id: Date.now(),
      text,
      image: image ? URL.createObjectURL(image) : '',
    };
    setCards([...cards, newCard]);
  };

  const handleDelete = (id: number) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <div className="container">
      <FormCreateCard onSave={handleSave} />
      <CardList cards={cards} onDelete={handleDelete} />
    </div>
  );
}

