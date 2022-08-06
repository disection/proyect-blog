import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import moment from 'moment'


//tags = tags.split(',')

const NewPost = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  const date = moment().format('DD/MM/YYYY hh:mm:ss')
  console.log(date)

  return (
    <div className="row">
      <div className="col-12">


        <form onSubmit={handleSubmit(onSubmit)}>
          <label>URL de Imagen</label>
          <input
            type='url'
            className='form-control'
            name='picture'
            placeholder='URL'
            {...register("ImagenfirstName", { required: true })}
          />
          {errors.firstName?.type === 'required' && "First name is required"}

          <label>Titulo</label>
          <input
            type='text'
            className='form-control'
            name='title'
            placeholder='Titulo de Post'
            {...register("ImagenfirstName", { required: true })}
          />
          {errors.lastName && <p>Last name is required</p>}

          <label>Contenido</label>
          <input
            type='text'
            className='form-control'
            name='content'
            placeholder='contenido de tu post'
            {...register("ImagenfirstName", { required: true })}
          />
          {errors.lastName &&
            <div class="alert alert-warning" role="alert">
              A simple warning alert—check it out!
            </div>}

          <label>Tags separadas por coma</label>
          <input
            type='text'
            className='form-control'
            name='tags'
            placeholder='javascrip, html, desarrollo web, css'
            {...register("ImagenfirstName", { required: true })}
          />
          {errors.lastName && <p>Last name is required</p>}

          <input type="submit" />
        </form>

      </div>
    </div>
  )
}

export default NewPost