import React  from "react";
import Cartwidget from "../CartWwidget/Cartwidget";
import Logo from "../../Resources/Icons/logo.png"

function NavBar() {

  return (

    <nav class="navbar navbar-light navbar-expand-md bg-light justify-content-md-center justify-content-start">
    <a class="navbar-brand d-md-none d-inline" href="">Brand</a>
    <button class="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
        <ul class="navbar-nav mx-auto text-md-center text-left">
            <li class="nav-item">
                <a class="nav-link" href="./">Productos</a> 
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./">Servicios</a>
            </li>
            <li class="nav-item my-auto">
                <a class="nav-link navbar-brand mx-0 d-none d-md-inline" href=""><img src={ Logo } alt="Logo" width="60" heigh="24" class="d-inline-block align-text-top" /></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./">Contacto</a> 
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./">Ubicacion</a> 
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <Cartwidget></Cartwidget>
        </ul>
    </div>
</nav>

    // <nav class="navbar navbar-expand-lg bg-body-tertiary">
    //   <div class="container-fluid d-flex justify-content-between">
    //     <div>
    //     <a href='./' class='navbar-brand'>
    //       <img src={ Logo } alt="Logo" width="60" heigh="24" class="d-inline-block align-text-top" />
    //       </a>
    //     </div>
    //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNav">
    //       <ul class="navbar-nav">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="./">Incio</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="./">Productos</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="./">Servicios</a>
    //         </li> 
    //         <li class="nav-item">
    //           <a class="nav-link" href="./">Contacto</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="./">Galeria</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="./">Ubicanos</a>
    //         </li>
    //       </ul>
    //       <Cartwidget></Cartwidget>
    //     </div>
    //   </div>
    // </nav>
    
  )
}


export default NavBar;