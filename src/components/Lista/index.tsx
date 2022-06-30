import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss';

interface Props{
    tarefas: ITarefa[],
    selectionaTarefa: (tarefaSelecionada: ITarefa) => void
}


function Lista({ tarefas,selectionaTarefa}: Props) {   
    return (
        <aside className={style.listaTarefas}>

            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item => (
                    <Item 
                    selectionaTarefa={selectionaTarefa}
                    key={item.id}
                    {...item} />

                )))}

            </ul>
        </aside>

    )


}

export default Lista;