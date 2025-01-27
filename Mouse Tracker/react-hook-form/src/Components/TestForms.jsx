import React from 'react'
import { useForm } from 'react-hook-form'


const TestForms = () => {

    const{register, handleSubmit} = useForm() ;

    const onSubmit = (data) => console.log(data)


  return (
    <div>

        <form onSubmit={handleSubmit(onSubmit)}>

            
            <label>Name : 
                <input {...register('name')} />
            </label> <br />

            <label>Name : </label>
            <button type='submit' >Submit</button>
        </form>
        
    </div>
  )
}

export default TestForms