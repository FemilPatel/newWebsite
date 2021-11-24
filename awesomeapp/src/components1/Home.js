import React, {Component} from 'react';
//import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
//import {Redirect} from 'react-router-dom';

class Home extends Component {
  constructor (props) {
    super (props);
    this.state = {
      title: 'React Simple CRUD Application',
      act: 0,
      index: '',
      datas: [],
      duplicateList: [],
    };
  }

  componentDidMount () {
    const user = JSON.parse (localStorage.getItem ('users'));
    if (user && Array.isArray (user)) {
      this.setState ({
        datas: user,
        duplicateList: user,
      });
    }
  }

  functionSubmit = () => {
    const {company, employeeSize, contect, address, datas} = this.state;
    if (this.state.act === 0) {
      //new
      const data = {
        company,
        employeeSize,
        contect,
        address,
      };
      datas.push (data);
    } else {
      //update
      let index = this.state.index;
      datas[index].company = company;
      datas[index].employeeSize = employeeSize;
      datas[index].contect = contect;
      datas[index].address = address;
    }

    this.setState ({
      datas: datas,
      act: 0,
    });
    localStorage.setItem ('users', JSON.stringify (this.state.datas));
  };

  functionRemove = i => {
    let datas = this.state.datas;
    datas.splice (i, 1);
    this.setState ({
      datas: datas,
    });
    localStorage.setItem ('users', JSON.stringify (this.state.datas));
  };

  functionEdit = i => {
    let {company, employeeSize, contect, address, datas} = this.state;

    company = datas[i].company;
    employeeSize = datas[i].employeeSize;
    contect = datas[i].contect;
    address = datas[i].address;
    this.setState ({
      company,
      employeeSize,
      contect,
      address,
      act: 1,
      index: i,
    });
  };
  searchSpace = event => {
    let keyword = event.target.value;
    //console.log (this.state.datas);
    if (keyword === '') {
      this.setState ({datas: this.state.duplicateList});
    } else {
      const filter = this.state.duplicateList.filter (v => v.name === keyword);
      console.log (filter);

      this.setState ({datas: filter});
    }
  };
  onChange = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };
  /*onRadioChanged = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
    //console.log (event.target.value);
  };*/
  render () {
    const {datas, title, company, employeeSize, contect, address} = this.state;

    return (
      <div className="App">
        <h2>{title}</h2>

        <div className="myForm">

          <input
            type="text"
            name="company"
            placeholder="your company"
            className="formField"
            value={company}
            onChange={this.onChange}
          />

          <input
            type="number"
            name="employeeSize"
            placeholder="your employeeSize"
            className="formField"
            value={employeeSize}
            onChange={this.onChange}
          />

          <input
            type="number"
            name="contect"
            placeholder="your contect"
            className="formField"
            value={contect}
            onChange={this.onChange}
          />

          <input
            type="text"
            name="address"
            placeholder="your address"
            className="formField"
            value={address}
            onChange={this.onChange}
          />

          <button onClick={this.functionSubmit} className="myButton">
            Submit
          </button>

        </div>

        <input
          label="Search Name"
          className="formField"
          onChange={this.searchSpace}
        />
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Company</th>
              <th scope="col">EmployeeSize</th>
              <th scope="col">Contact</th>
              <th scope="col">Address</th>
            </tr>
          </thead>

          <tbody id="tbody">
            {datas.map ((data, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{data.company}</td>
                <td> {data.employeeSize}</td>
                <td>{data.contect}</td>
                <td>{data.address}</td>
                <td>

                  <Button
                    onClick={() => this.functionEdit (i)}
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                  >
                    Edit
                  </Button>
                  &nbsp;
                  <Button
                    onClick={() => this.functionRemove (i)}
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    );
  }
}
/*
<label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={this.onRadioChanged}
            />
            Male
          </label>
          &nbsp;
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={this.onRadioChanged}
            />
            Female
          </label>
*/
export default Home;
