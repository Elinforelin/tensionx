import { ReactComponent as AtoZIcon } from '../assets/img/a-z.svg';

export const columns = [
  {
    field: "name", headerName: "Name", width: 300, textAlign: 'center',
    renderHeader: () => (
      <div>
        <span>Name</span>
        <span>
          <AtoZIcon />
        </span>

      </div>
    )
  },
  { field: "id", headerName: "ID", width: 150, sortable: false, editable: false },
  { field: "class", headerName: "Class", width: 150 },
  { field: "score", headerName: "Av.score, %", width: 150 },
  { field: "speed", headerName: "Av.speed", width: 150 },
  {
    field: "parents", headerName: "Parents", width: 300, sortable: false,
  },
  { fiels: 'actions', headerName: 'Actions', width: 100, sortable: false, }
];