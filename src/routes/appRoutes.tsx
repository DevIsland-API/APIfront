import HomePage from "../pages/Home/HomePage";
import { RouteType } from "./config";
import FactCheckIcon from '@mui/icons-material/FactCheck';
import HomeIcon from '@mui/icons-material/Home';
import ListarChamados from "../pages/chamados/ListarChamados";
import CriarChamado from "../pages/chamados/CriarChamado";
import ListarStatus from "../pages/chamados/ListarStatus";
import ChamadosLayout from "../pages/chamados/ChamadosLayout";

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage/>,
        state: "home"
    },
    {
        path: "/",
        element: <HomePage />,
        state: "home",
        sidebarProps: {
            displayText: "Home",
            icon: <HomeIcon/>
        }
    },
    {
        path: "/chamados",
        element: <ChamadosLayout/>,
        state: "chamados",
        sidebarProps: {
            displayText: "Chamados",
            icon: <FactCheckIcon/>
        },
        child: [
             {
                index: true,
                element: <ChamadosLayout/>,
                state: "chamados",
            },
            {
                path: "/chamados/novo",
                element: <CriarChamado isOpen={true} onClose={() => {}} />,
                state: "chamados.novo",
                sidebarProps: {
                    displayText: "Novo Chamado"
                }
            },
            

            {
                path: "/chamados/all",
                element: <ListarChamados />,
                state: "chamados.listar",
                sidebarProps: {
                    displayText: "Listar Chamados"
                }
            },
            {
                path: "/chamados/status",
                element: <ListarStatus />,
                state: "chamados.status",
                sidebarProps: {
                    displayText: "Andamento"
                }
            }
        ]
    }
];

export default appRoutes;