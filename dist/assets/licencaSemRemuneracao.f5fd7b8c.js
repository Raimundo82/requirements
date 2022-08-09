window.html=String.raw;console.log("licen\xE7a sem remunera\xE7\xE3o");const o=()=>{document.getElementById("app").appendChild(document.createRange().createContextualFragment(e()))};function e(){return html`
    <div class="container-form">
        <div class="container-light space-around">
            <div class="content-row row">
                <form id="form" type="submit">                   
                    <div>
                    <label for="periodo">Período de:</label><br>                           
                    <select id="periodo" name="periodo">                                        
                        <option value="seisMeses">6 meses</option>
                        <option value="ano">1 ano</option>
                        <option value="doisAnos">2 anos</option>                                        
                    </select>
                    </div>
                    <div>
                        <label for="servico">Data de início:</label><br>
                        <input type="date" id="servico" name="servico" value="" placeholder="Prestar serviço na(o)" required><br>
                    </div>
                    <div>
                        <label for="motivo">Motivo:</label>
                        <textarea id="motivo" name="motivo" rows="4" cols="50" required></textarea>
                    </div>
                    <button type="submit" id="buttonCollaps" class="collapsible">
                        SUBMETER
                    </button>
                </form>
            </div>
        </div>
    </div>
    `}export{o as default};
