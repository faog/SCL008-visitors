//Falta aplicar css
export const templateVisitorRegistration = () =>{
    
    document.getElementById('containervisitors').innerHTML=    
    `
    <div class="templatevisitors">
        <article id="visitorinfo">   
            <label>Nombre y Apellido:</label>                     
            <input type="name" id="visitorname" placeholder="Ingresa tu nombre y apellido"/>
            <p id="nameerror"></p>
            <label>Email:</label>  
            <input type="email" id= "visitoremail" placeholder="Ingresa tu email"/>
            <p id ="emailerror"></p>
            <label for="inputState">Empresa que visita:</label>
            <select id="inputState" class="form-control">
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

