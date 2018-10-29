import React from 'react'

const Table = props => {
  const { headers, rows } = props
  return (
    <table className='table is-striped is-fullwidth'>
      <thead>
        <tr>
          <Headers headers={headers} />
        </tr>
      </thead>
      <tbody>
        <Rows rows={rows} />
      </tbody>
    </table>
  )
}

const Headers = props => {
  const { headers } = props
  return headers.map(data => <th key={data}>{data}</th>)
}

const Rows = props => {
  if (!props.rows.length) {
    return <tr><td colSpan='100%'>Nenhum registro</td></tr>
  }
  const rows = props.rows.map((item, index) => {
    return {data: item, id: index}
  })
  return rows.map(row => <tr key={row.id}><RowData row={row.data} /></tr>)
}

const RowData = props => {
  const row = props.row.map((item, index) => {
    return {data: item, id: index}
  })
  return row.map(data => <td key={data.id}>{data.data}</td>)
}

export default Table
