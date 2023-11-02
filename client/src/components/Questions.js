import React from 'react'

export default function Main() {
    const [checked, setChecked] = useState(undefined)

    function onSelect(){
        console.log("Radio button change")
    }

    return (
        <div className='questions'>
            <h2 className='text-light'>Simple Question 1</h2>
            <ul>
                <li>
                    <input type="radio" value={checked} name="options" id="q1-option" onChange={onSelect}/>
                    <label className='text-primary' htmlFor="q1-option">option</label>
                </li>
            </ul>
        </div>
    )
}