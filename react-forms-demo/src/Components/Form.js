import React from 'react';

export default function Form(){

    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "",
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    );

    const handleChange = (event) => {

        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // submitToApi(formData);
        console.log(formData);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='First Name'
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input 
                    type='text'
                    placeholder='Last Name'
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />

                <input 
                    type='email'
                    placeholder='Email'
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <textarea 
                    placeholder='Comments'
                    onChange={handleChange}
                    name='comments'
                    value={formData.comments} 
                />
                <input 
                    type='checkbox'
                    id='isFriendly'
                    checked={formData.isFriendly}
                    onChange={handleChange}
                    value={formData.isFriendly}
                    name='isFriendly'
                />
                <label htmlFor='isFriendly'>Are you friendly?</label>

                <fieldset>
                    <legend>Current employment status</legend>

                    <input 
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        onChange={handleChange}
                        checked={formData.employment === "unemployed"}
                    />
                    <label htmlFor='unemployed'>Unemployed</label>
                    <br />

                    <input 
                        type="radio"
                        id="parttime"
                        name="employment"
                        value="parttime"
                        onChange={handleChange}
                        checked={formData.employment === "parttime"}
                    />
                    <label htmlFor='parttime'>Part-Time</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="fulltime"
                        name="employment"
                        value="fulltime"
                        onChange={handleChange}
                        checked={formData.employment === "fulltime"}
                    />
                    <label htmlFor='fulltime'>Full-Time</label>
                    <br />
                </fieldset>

                <select 
                    id='favColor'
                    value={formData.favColor}
                    onChange={handleChange}
                    name='favColor'
                >
                    <option value=''>-- Choose a Value --</option>
                    <option value='red'>Red</option>
                    <option value='orange'>Orange</option>
                    <option value='yellow'>Yellow</option>
                </select>

                <button>Submit</button>
            </form>
        </>
    )
}