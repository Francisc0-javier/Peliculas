
import "../App.css";
import Pelicula from "./pelicula";
import PageWrapper from "./pageWapper";

/*import PeliculaJson from "./peliculas.json";*/
import Paginacion from "./Paginacion";
import { useEffect, useState } from "react/cjs/react.development";

function ListadoPelculas() {

	const [paginaActual, setpaginaActual] = useState( 1);

	const [peliculas, setPeliculas] = useState([]);
	const TOTAL_POR_PAGINA = 7;

	/*let peliculas = PeliculaJson;*/
	useEffect(() => {
		buscandoPeliculas();
	}, [peliculas]);

	const buscandoPeliculas = async  () => {
		try {
			const response = await fetch(URL= 'https://lucasmoy.dev/data/react/peliculas.json');
			console.log(response.status);
			setPeliculas(await response.json());
		  } catch (error) {
			console.log(error);
		  }
		};
	  

	
	
	 const getTotalDePaginas = () => {
		 let cantidadTotalDePeliculas = Pelicula.length;
		return  Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
	 }

	 
		let peliculasPorPagina = peliculas.slice(
			(paginaActual - 1 ) * TOTAL_POR_PAGINA,
		 paginaActual * TOTAL_POR_PAGINA);
	

	   return (
	  <PageWrapper>
		  {peliculasPorPagina.map(pelicula => 
			  <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
			  director={pelicula.director} actores={pelicula.actores} 
			  fecha={pelicula.fecha} duracio={pelicula.duracio} img={pelicula.img }> 
			  {pelicula.descripcion}
			  </Pelicula>
		  )}
		  
		<Paginacion Pagina={paginaActual} total={getTotalDePaginas()} onChange={(pagina) => {
			setpaginaActual(pagina);
		}}></Paginacion>

	  </PageWrapper>
  )
}

export default ListadoPelculas;
