import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: text => <a href="#">{text}</a>
  },
  {
    title: "Age",
    dataIndex: "age"
  },
  {
    title: "Address",
    dataIndex: "address"
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park"
  }
];

class App extends React.Component {
  state = {
    rowId: "",
    selectRow: ""
  };
  setTableRowClassName = record => {
    return record.key === this.state.rowId ? "clickRowSty1" : "";
  };
  onClickTableRow = record => {
    console.log(record);
    return {
      onClick: () => {
        this.setState({
          rowId: record.key,
          selectRow: record
        });
      }
    };
  };

  render() {
    return (
      <Table
        columns={columns}
        dataSource={data}
        rowClassName={this.setTableRowClassName}
        // 对点击的列表行添加背景色
        onRow={this.onClickTableRow}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
