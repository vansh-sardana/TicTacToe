import { useState } from "react";




function FormComp(){
    const [ntitle, setTitle]= useState('');
    const [ndate, setDate]= useState('');
    function titleHandler(e){
        setTitle(e.target.value);
        // console.log(title);
    }
    function dateHandler(e){
        setDate(e.target.value);
        // console.log(date);
    }
    function submitHandler(e){
        e.preventDefault();
        const productData= {
            title: ntitle,
            date: ndate
        }
        console.log(productData);

        setDate('');
        setTitle('');
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>ItemName</label>
                    <input type="text" value={ntitle} onChange={titleHandler}></input>
                </div>
                <div>
                    <label>MFG</label>
                    <input type="date" value={ndate} onChange={dateHandler}></input>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    ); 
}

export default FormComp;