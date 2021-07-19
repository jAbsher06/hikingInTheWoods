import { useMemo } from 'react';

export default function useColumns () {
  const columns = useMemo(
    () => [
      {
        Header: 'Item',
        accessor: 'Item',
      },
      {
        Header: 'Priority',
        accessor: 'Priority',
      },
      {
        Header: 'Description',
        accessor: 'Description',
      },
      {
        Header: 'Example',
        accessor: 'Example',
      },
      {
        id: 'Bringing',
        Header: 'Bringing',
        accessor: d => d.Bringing === false ? 'No' : 'Yes'
      },
      {
        id: 'Inhand',
        Header: 'In-Hand',
        accessor: d => d.Inhand === false ? 'No' : 'Yes',
      },
      {
        id: 'Packed',
        Header: 'Packed',
        accessor: d => d.Packed === false ? 'No' : 'Yes',
      }
    ], []
  )
  return columns;
}