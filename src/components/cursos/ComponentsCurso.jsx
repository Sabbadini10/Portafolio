import React from "react";
import "./Cursos.css";
import CardCursos from "./CardCursos";

import titulo1 from "../../imagenes/titulos/full-stack.jpg";
import titulo2 from "../../imagenes/titulos/scrum.jpg";
import titulo3 from "../../imagenes/titulos/react.png";
import titulo4 from "../../imagenes/titulos/htmlycss.jpg";
import titulo5 from "../../imagenes/titulos/Javascript.jpg";
import titulo6 from "../../imagenes/titulos/Introducción-al-mundo-web.jpeg";
import titulo7 from "../../imagenes/titulos/introduccion-a-la-programacion.jpeg";
import titulo8 from "../../imagenes/titulos/protocolo-https.jpg";
import titulo9 from "../../imagenes/titulos/introduccion-al-front-end.jpg";

function Cursos() {
  return (
    <div className="Cursos">
      <h1 className="main-titulo d-flex justify-content-center">Cursos</h1>
      <div className="contenedor-curso my-3">
        <div className="curso-contenedor-row">
            
        <CardCursos
          src={titulo1}
          link="https://www.linkedin.com/posts/matias-sabbadini-desarrollador_frustacion-mas-esfuerzo-activity-7022001937780719616-rh7h?utm_source=share&utm_medium=member_desktop"
        />

        <CardCursos
          src={titulo2}
          link="https://www.linkedin.com/in/matias-sabbadini-desarrollador/details/featured/1635500325402/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY"
        />
        </div>
       
<div className="curso-contenedor-row">
<CardCursos
          src={titulo3}
          link="https://www.linkedin.com/feed/update/urn:li:activity:7036755683270139904/"
        />

        <CardCursos
          src={titulo4}
          link="https://www.linkedin.com/in/matias-sabbadini-desarrollador/details/featured/1635465748664/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY"
        />
</div>
       
<div className="curso-contenedor-row">
<CardCursos
          src={titulo5}
          link="https://www.linkedin.com/in/matias-sabbadini-desarrollador/details/featured/1635465750398/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY"
        />

        <CardCursos
          src={titulo6}
          link="https://www.linkedin.com/in/matias-sabbadini-desarrollador/details/featured/1635508994823/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY"
        />
</div>
       
<div className="curso-contenedor-row">
<CardCursos
          src={titulo7}
          link="https://www.linkedin.com/in/matias-sabbadini-desarrollador/overlay/1635509000103/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY"
        />

        <CardCursos
          src={titulo8}
          link="https://www.linkedin.com/in/matias-sabbadini-desarrollador/details/featured/1635475195975/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY"
        />
</div>
       
<div className="curso-contenedor-row">
<CardCursos
          src={titulo9}
          link="https://www.linkedin.com/feed/update/urn:li:activity:7035347597519167488/"
        />
</div>
        
      </div>
      <div className="contenedor-curso-2 my-3">
        <div className="curso-contenedor-row">
            
        <CardCursos
          src={titulo1}
          link="https://www.linkedin.com/posts/matias-sabbadini-desarrollador_frustacion-mas-esfuerzo-activity-7022001937780719616-rh7h?utm_source=share&utm_medium=member_desktop"
        />

        <CardCursos
          src={titulo2}
          link="https://www.linkedin.com/in/matias-sabbadini-desarrollador/details/featured/1635500325402/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY"
        />
<CardCursos
          src={titulo3}
          link="https://www.linkedin.com/feed/update/urn:li:activity:7036755683270139904/"
        />
</div>
       
<div className="curso-contenedor-row">
    
<CardCursos
          src={titulo4}
          link="https://www.linkedin.com/in/matias-sabbadini-desarrollador/details/featured/1635465748664/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY"
        />
<CardCursos
          src={titulo5}
          link="https://www.linkedin.com/in/matias-sabbadini-desarrollador/details/featured/1635465750398/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY"
        />

        <CardCursos
          src={titulo6}
          link="https://www.linkedin.com/in/matias-sabbadini-desarrollador/details/featured/1635508994823/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY"
        />
</div>
       
<div className="curso-contenedor-row">
<CardCursos
          src={titulo7}
          link="https://www.linkedin.com/in/matias-sabbadini-desarrollador/overlay/1635509000103/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY"
        />

        <CardCursos
          src={titulo8}
          link="https://www.linkedin.com/in/matias-sabbadini-desarrollador/details/featured/1635475195975/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY"
        />

<CardCursos
          src={titulo9}
          link="https://www.linkedin.com/feed/update/urn:li:activity:7035347597519167488/"
        />
</div>
        
      </div>
    </div>
  );
}

export default Cursos;
