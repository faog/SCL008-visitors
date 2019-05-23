export const templateVisitor = () =>{
    
    document.getElementById('containervisitors').innerHTML=    
    `
    <div class="templatevisitors">
        <article id="visitorinfo">   
            <label>Nombre:</label>                     
            <input type="text" id="visitorfirstname" placeholder="Ingresa tu nombre"/>
            <p id="firstnameerror"></p>
            <label>Apellido:</label>                     
            <input type="text" id="visitorlastname" placeholder="Ingresa tu apellido"/>
            <p id=lastnameerror"></p>
            <label>Email:</label>  
            <input type="email" id= "visitoremail" placeholder="Ingresa tu email"/>
            <p id ="emailerror"></p>
            <label>N° Celular:</label>  
            <input type="text" id="visitorphone" placeholder="Ingresa tu n° celular"/>
            <p id ="phoneerror"></p>
            <label for="inputstate">Empresa que visita:</label>
            <select id="inputstate" class="form-control">            
            <option selected>Selecciona...</option>
            <option>...</option>
            </select>
            <label for="inputState">Persona que visita:</label>
            <select id="inputState" class="form-control">
            <option selected>Selecciona...</option>
            <option>...</option>
            </select>
            <button id="registration">Registrarse</button>        
        </article>            
    </div>
    `;      
}