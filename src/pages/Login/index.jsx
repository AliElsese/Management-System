import { useRef } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const emailInput = useRef();
    const passInput = useRef();
    const rememberMe = useRef();

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        const values = {
            email: emailInput.current.value,
            password: passInput.current.value
        }
        // console.log(values)
        axios.post('https://tasksapp.integration25.com/api/auth/login', values).then((res) => {
            if(res.data.status) {
                localStorage.setItem('token', res.data.data.token);
                Swal.fire({
                    icon: "success",
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/home');
            }
            // console.log(res.data.data.token)
        }).catch((err) => {
            Swal.fire({
                icon: "error",
                title: err.response.data.message,
                showConfirmButton: true,
            });
            // console.log(err.response.data.status)
        })
    }

    return (
        <div className='login container'>
            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                            <div className="card mb-3">

                                <div className="card-body">

                                    <div className="pt-4 pb-2">
                                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                        <p className="text-center small">Enter your username & password to login</p>
                                    </div>

                                    <form onSubmit={login} className="d-flex flex-wrap gap-3">

                                        <div className="col-12">
                                            <label htmlFor="yourUsername" className="form-label">Email</label>
                                            <div className="input-group">
                                                <span className="input-group-text">@</span>
                                                <input type="email" ref={emailInput} className="form-control" required />
                                                {/* <div className="invalid-feedback">Please enter your username.</div> */}
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="yourPassword" className="form-label">Password</label>
                                            <input type="password" ref={passInput} className="form-control" required />
                                            {/* <div className="invalid-feedback">Please enter your password!</div> */}
                                        </div>

                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" ref={rememberMe} />
                                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100" type="submit">Login</button>
                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
