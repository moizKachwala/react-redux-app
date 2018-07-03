import React, {Component} from 'react';
import { Field } from 'redux-form';

class CreateBook extends Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    submit(props) {
        const {bookName, pages} = props;
        const {actions: {pushHistory, bookActions}} = this.props;

        bookActions.bookCreate({id:5, title: bookName, pages});
        alert(`Book ${bookName} saved successfully`);

        pushHistory('/books');
    }

    handleCancel() {
        const {actions: {pushHistory}} = this.props;
        pushHistory('/books');
    }

    render() {
        const {pristine, handleSubmit, submitting} = this.props;
        return (
            <form onSubmit={handleSubmit(props => this.submit(props))}>
                <h1>Add new Book</h1>
                <div className="col-md-6">
                    <div className="form-group">
                       <label>Book Name:</label>
                       <Field type="text" className="form-control" component="input" name="bookName" placeholder="Book Name"/>
                     </div>
                     <div className="form-group">
                        <label>Page Count:</label>
                        <Field type="text" className="form-control" component="input" name="pages" placeholder="Page Count"/>
                      </div>

                      <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
                      <button className="btn btn-default" onClick={this.handleCancel}>Cancel</button>
                </div>
            </form>
        );
    }
}

export default CreateBook;
