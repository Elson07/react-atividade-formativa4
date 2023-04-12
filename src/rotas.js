import {BrowserRouter, Route, Routes} from "react-router-dom";

import Cadastro from "./paginas/Cadastro";
import Dados from "./paginas/Dados";

const Rotas = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Cadastro/>}/>
                <Route exact={true} path="/dados" element={<Dados/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;