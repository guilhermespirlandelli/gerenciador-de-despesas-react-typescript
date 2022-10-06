import { useState, useEffect } from "react";
import * as C from "./app.styles";
import { Item } from "./types/Item";
import { Category } from "./types/category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth, formatCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/infoArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [currentMonth, list]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Área de informações */}
        <InfoArea 
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
         />
        {/* Área de inserção */}

        {/* Tabela de itens */}
        <TableArea list={filteredList} />
        

        
      </C.Body>
    </C.Container>
  );
};

export default App;

/* PAREI NO 01:26:00 */
