import React from 'react'
import { AtividadeItemProps } from '../../model/atividadesProps';
import { Prioridade } from '../../model/atividade';

const AtividadeItem: React.FC<AtividadeItemProps> = ({ 
    ativ,
    pegarAtividade,
    handleConfirmModal
    } : AtividadeItemProps) => {

      
  function prioridadeLabel(param: string) {
    switch (param) {
        case Prioridade.Baixa:
        case Prioridade.Normal:
        case Prioridade.Alta:
          return param;
        default:
          return 'Não definido';
    }
  }

  function prioridadeStyleIcon(param: string, icone:boolean) {
    switch (param) {
        case Prioridade. Baixa:
          return icone ? 'smile': 'success';
        case Prioridade. Normal:
          return icone ? 'meh' : 'dark';
        case Prioridade. Alta:
          return icone ? 'frown' : 'warning';
        default:
          return 'Não definido';
    }
  }


  return ( 
  <div className={"card mb-2 shadow border-" + prioridadeStyleIcon(ativ.prioridade, false)}  >
    <div className="card-body">
      <div className='d-flex justify-content-between'>
        <h5 className='card-title'>
        <span className="badge bg-primary me-2">{ativ.id}</span>
          - {ativ.titulo}
        </h5>
        <h6>
              Prioridade:
              <span className={'ms-1 text-'+ prioridadeStyleIcon(ativ.prioridade, false)}>
                <i className={'me-1 far fa-' + prioridadeStyleIcon(ativ.prioridade, true)}></i> 
                {prioridadeLabel(ativ.prioridade)}
              </span>
        </h6>
      </div>
      <p className='card-text'> {ativ.descricao}</p>
      <div className='d-flex justify-content-end pt-2 m-0 border-top'>
            
        <button 
          className='btn btn-outline-primary me-2 btn-sm'
          onClick={() => pegarAtividade(ativ.id)}>
          <i className='fas fa-pen me-2'></i>
          Editar
        </button>
        <button 
            className='btn btn-outline-danger btn-sm' 
            onClick={() => handleConfirmModal(ativ.id)}>
            <i className='fas fa-trash me-2'></i>
          Deletar
        </button>
      </div>
    </div>
  </div>
  )
}

export default  AtividadeItem;