class NegociacaoView extends View {
    constructor(elemento){
        super(elemento);
    }
    _template(model) {
        return `<table class="table table-hover table-bordered">
                    <thead>
                            <tr>
                                <th>DATA</th>
                                <th>QUANTIDADE</th>
                                <th>VALOR</th>
                                <th>VOLUME</th>
                            </tr>
                        </thead>
                
                        <tbody>
                        ${model.negociacoes.map(n => `

                            <tr>
                                <td>${DateHelper.dataParaTexto(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>R$ ${n.valor}</td>
                                <td>R$ ${n.obtemVolume}</td>
                            </tr>

                            `).join('')}
                        </tbody>
                
                        <tfoot>
                        <td colspan="3"></td>
                        <td>R$ ${model.volumeTotal}
                        
                        </td>
                        </tfoot>
                    </table>`;
    }
}