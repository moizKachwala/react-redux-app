import React, {Component} from 'react';

class Table extends Component {
    
    constructor() {
        super();
    }

    render(){
        const {data, fields} = this.props;

        const headerRows = fields.map((field) => {
            return (
                <th scope="col" key={field}>
                    {field}
                </th>
            );
        });

        const rows = data.map((row) => {
            return (
                <tr key={`row-${row.id}`}>
                    <td>{row.title}</td>
                    <td>{row.pages}</td>
                </tr>
            );
        });
        return (
            <table className="table table-hover">
                 <thead>
                    <tr>
                        {headerRows}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default Table;