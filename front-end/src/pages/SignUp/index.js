import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/actions';

function SignUp() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        gender:'',
        country:''
    });
    const [countries, setCountries] = useState([
        {
            'id':1,
            'text':'India'
        },
        {
            'id':2,
            'text':'Australia'
        },
        {
            'id':3,
            'text':'Canada'
        },
        {
            'id':4,
            'text':'USA'
        }
    ]);
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        console.log(user)
        if (user.username && user.password && user.email && user.firstName && user.lastName && user.gender && user.country) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <div className="px-3 pb-3 mt-1 bg-light">
                    <form name="form" onSubmit={handleSubmit}>
             <h2 className="py-3">Signup</h2>
             <div className="row justify-content-md-center">
                <div className="form-group col-md-6 col-sm-12">
                    <label>Username</label>
                    <input type="text" name="username" value={user.username} onChange={handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
                    {submitted && !user.username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group col-md-6 col-sm-12">
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                    {submitted && !user.password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                </div> <div className="row justify-content-md-center">
                <div className="form-group col-md-6 col-sm-12">
                    <label>Email</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange} className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
                    {submitted && !user.email &&
                        <div className="invalid-feedback">Email is required</div>
                    }
                </div>
                <div className="form-group col-md-6 col-sm-12">
                    <label>First Name</label>
                    <input type="text" name="firstName" value={user.firstName} onChange={handleChange} className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} />
                    {submitted && !user.firstName &&
                        <div className="invalid-feedback">First Name is required</div>
                    }
                </div>
                </div> <div className="row justify-content-md-center">
                <div className="form-group col-md-6 col-sm-12">
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={user.lastName} onChange={handleChange} className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} />
                    {submitted && !user.lastName &&
                        <div className="invalid-feedback">Last Name is required</div>
                    }
                </div>
                <div className="form-group col-md-6 col-sm-12">
                    <label>Gender</label>
                    <div className={'' + (submitted && !user.gender ? 'form-control is-invalid' : 'form-control')}>
                    <span className="mr-2">
                     <input type="radio" id="male" name="gender" value='1' onChange={handleChange} />
                    <label className="ml-1" htmlFor="male">Male</label>
                    </span>
                    <span className="mr-2">
                     <input type="radio" id="female" name="gender" value='2' onChange={handleChange} />
                    <label className="ml-1" htmlFor="female">Female</label>
                    </span>
                    <span className="mr-2">
                    <input type="radio" id="other" name="gender" value='3' onChange={handleChange} />
                    <label className="ml-1" htmlFor="other">Others</label>
                    </span>
                    </div>
                    {submitted  && !user.lastName &&
                        <div className="invalid-feedback">Gender is required</div>
                    }
                </div>
                </div> <div className="row">
                <div className="form-group col-md-6 col-sm-12">
                    <label>Country</label>
                    <div className={'' + (submitted && !user.country ? 'form-control is-invalid' : 'form-control')}>
                    <select name="country" onChange={handleChange} className="form-select w-100" value={user.country}>
                        <option>Select Country</option>
                    {
                    countries.map(country => 
                        <option value={country.id} key={country.id}>{country.text}</option>
                    )
                    }
                    </select>
                    </div>
                    {submitted && !user.country &&
                        <div className="invalid-feedback">Country is required</div>
                    }
                </div>
                </div>
                <div className="row">
                <div className="col-md-12 col-sm-12 d-flex justify-content-md-end">
                    <button className="btn btn-primary">
                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
                    </button>
                </div>
                </div>
            </form>
            </div>
)}

export { SignUp };