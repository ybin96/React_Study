import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
} from '@material-ui/core';
import axios from 'axios';
import React from 'react';

const useStyles = makeStyles({
  table: { width: '80%', margin: 'auto' },
});

export type TableDataType = {
  id: number;
  name: string;
  username: number;
  city: number;
  email: number;
  company: number;
}[];

export default function ApiTable() {
  // 테이블 css 적용
  const classes = useStyles();

  // React 컴포넌트에서 데이터를 저장하고 관리
  // 상태 변수 tableData를 사용하여 컴포넌트에서 데이터를 저장하고 관리
  const [tableData, setTableData] = React.useState<TableDataType>([]);

  // API 데이터 가져오기
  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const data = response.data;

      // 데이터 변환 작업
      const TableData: TableDataType = data.map((item: any) => {
        return {
          name: item.name,
          username: item.username,
          city: item.address.city,
          email: item.email,
          company: item.company.name,
          id: item.id,
        };
      });

      console.log(TableData); // 변환된 데이터 출력
      setTableData(TableData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // id값을 가져와 새로운 창 열기
  const handleClick = (id: number) => {
    window.open(`https://jsonplaceholder.typicode.com/users/${id}`);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>City</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>InfoLink</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.username}</TableCell>
              <TableCell>{data.city}</TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.company}</TableCell>
              <TableCell>
                <button onClick={() => handleClick(data.id)}>link</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
