// const root = document.getElementById('root')
// const e = React.createElement

// const App = () => {
//     return e('main', null, [e(Title), e(Search), e(Cards), e(Cards), e(Cards), e(Cards)])
// }

// const Title = () => {
//     return e('h2', null, 'Texto')
// }

// const Search = () => {
//     return e('input', null)
// }

// const Cards = () => {
//     return e('article', null, [e(Imagen), e(InfoCards)])
// }

// const Imagen = () => {
//     return e('img', null)
// }

// const InfoCards = () => {
//     return e('div', null, [e(TituloCard), e(InfoComplementaria), e(InfoComplementaria), e(InfoComplementaria)])
// }

// const TituloCard = () => {
//     return e('p', null, 'Texto')
// }

// const InfoComplementaria = () => {
//     return e('div', null, [e(Icono), e(Numero)])
// }
// const Icono = () => {
//     return e('i')
// }

// const Numero = () => {
//     return e('p', null, '150')
// }



const root = document.getElementById('root')
const e = React.createElement

const App = () => {
    return e('main', null, [e(Titulo)], e(Icono), e(Icono), e(Botones), e(Cards))
}

const Titulo = () => {
    return e('h2', null, 'Titulo')
}

const Icono = () => {
    return e('i')
}

const Botones = () => {
    return e('div', null, [e(Boton), e(Boton)])
}

const Boton = () => {
    return e('button', null)
}

const Cards = () => {7
    return e('div', null, [e(Card), e(Card), e(Card), e(Card), e(Card)])
}

const Card = () => {
    return e('div', null, [e(Imagen), e(Descripcion), e(Precio)])
}

const Imagen = () => {
    return e('img')
}

const Descripcion = () => {
    return e('p', null, 'Descripcion')
}

const Precio = () => {
    return e('p', null, 'Precio')
}


ReactDOM.render(e(App), root)
