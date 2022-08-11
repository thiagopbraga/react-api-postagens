import { ChangeEvent, useState } from "react";

type Props = {
    onAdd: (title: string, body: string) => void;
};

export const PostForm = ({onAdd}: Props) => {
    const [addTitleText, setAddTitleText] = useState("");
    const [addBodyText, setAddBodyText] = useState("");

    const handleAddTitleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value);
    }

    const handleAddBodyTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value);
    }

    const handleAddClick = () => {
        if(addTitleText && addBodyText) {
            onAdd(addTitleText, addBodyText);
            setAddTitleText("");
            setAddBodyText("");
        }else{
            alert("Preencha todos os campos!");
        }
    }
    
  
    return (
        <fieldset className="border-2 mb-3 p-3">
        <legend>Adicionar Novo Post</legend>

        <input 
          value={addTitleText}
          onChange={handleAddTitleTextChange}
          className="border block" 
          type="text" 
          placeholder="Digite um título" 
          />
        <textarea 
          className="border block" 
          value={addBodyText}
          onChange={handleAddBodyTextChange}
          >

          </textarea>
        <button className="border block" onClick={handleAddClick}>Adicionar</button>

      </fieldset>
    );
}