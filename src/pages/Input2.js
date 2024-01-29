import React, { useState } from 'react' ;

const Input2 = () => {

    const [inputs, setInputs] = useState({
         userName: ""
        ,email: ""
        ,tel: ""
    }) ;

    const onChange = (e) => {
        const value = e.target.value ;
        const id = e.target.id ;

        setInputs({
            ...inputs,
            [id]: value,
            
        })

        console.log(inputs) ;
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="userName" value={inputs.userName} onChange={onChange}></input>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={inputs.email} onChange={onChange}></input>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={inputs.tel} onChange={onChange}></input>
            </div>

        </div>
    )
}

export default Input2 ;