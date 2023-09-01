import { React, useState } from "react";

export default () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = Array.from(e.target.elements)
            .filter((input) => input.name)
            .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});

        console.log(data);

        let cantidad = data.cantidad;
        let descuento = 0;
        console.log("cantidad de cursos: " + cantidad);

        if (parseInt(cantidad) === 1) {
            console.log("descuento: " + 0);
            descuento = 0;
        }
        else if (cantidad === "2" || cantidad === "3") {
            console.log("descuento: " + 10);
            descuento = 10;
        }
        else if (parseInt(cantidad) === 4 || parseInt(cantidad) === 5) {
            console.log("descuento: " + 20);
            descuento = 20;
        } else if (parseInt(cantidad) === 6 || parseInt(cantidad) === 7) {
            console.log("descuento: " + 27);
            descuento = 27;
        }
        else if (parseInt(cantidad) === 8 || parseInt(cantidad) === 9) {
            console.log("descuento: " + 37);
            descuento = 37;
        }
        else if (parseInt(cantidad) >= 10) {
            console.log("descuento: " + 53);
            descuento = 53;
        }


        //descuento aplicado
        console.log(descuento);
        //total a pagar  cantidad * precio 
        let compra = 25 * cantidad;
        let desc = compra * (descuento / 100);
        let pagar = compra - desc;
        let total = pagar;

        //asignar descuento
        document.getElementById("descuento").innerHTML = `descuento aplicado: ${descuento} %`;
        document.getElementById("total").innerHTML = `total a pagar: $ ${total} `;
        document.getElementById("porcentaje").innerHTML = `porcentaje de descuento aplicado: $ ${desc} `;


    }

    return (
        <div className="container mx-auto w-50">
            <h1>Bienvenido al sistema de cursos online</h1>
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Ingrese sus nombres</label>
                    <input type="text" className="form-control" name="nombre" id="nombre" required />
                </div>
                <div className="form-group">
                    <label htmlFor="">Ingrese sus apellidos</label>
                    <input type="text" className="form-control" name="apellido" id="apellido" required />
                </div>
                <div className="form-group">
                    <label htmlFor="">Seleccione el tipo de curso a cursar</label>
                    <select name="curso" id="curso" className="form-control" required>
                        <option value="INGLES">INGLES</option>
                        <option value="FRANCES">FRANCES</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Cantidad de meses a comprar</label>
                    <input type="number" name="cantidad" id="cantidad" className="form-control" required />
                </div>
                <br />
                <button type="submit" className="btn btn-primary text-center mx-auto">Comprar</button>
                <br />
                <br />
                <div className="form-group">
                    <div class="card">
                        <div class="card-header">
                            Resultados
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                            <label htmlFor="" id="descuento">Descuento aplicado</label>
                    <br />
                    <label htmlFor="" id="porcentaje">Porcentaje de descuento :</label>
                    <br />
                    <label htmlFor="" id="total">Total a pagar: </label>                               
                                 </blockquote>
                        </div>
                    </div>
                    
                </div>
            </form>
        </div>
    );
}
